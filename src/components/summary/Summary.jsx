import * as React from 'react';
import {useEffect, useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Layout from "../../layout";
import styles from "../../layout/layout.module.scss";
import {getCourseScoreByHoleCode, getStablefordScoreByHoleCode, saveCourseScore} from "../../service/api-service";
import CourseScore from "../../Object/CourseScore";
import {
    calculateAvgTeeOff,
    calculateStablefordScore,
    calculateStroke,
    calculateTotalPar
} from "../../utils/global-utils";
import Button from "@mui/material/Button";
import {Alert} from "@mui/material";
import {useNavigate} from "react-router-dom";

function createData(
    length: string,
    holeIndex: number,
    par: number,
    stroke: number,
    score: number,
    teeOffLength: number,
    teeOfDirection: string,
    putt: number
) {
    return {length, holeIndex, par, stroke, score, teeOffLength, teeOfDirection, putt};
}

function calculateSummaryInfo(data) {
    const newScore = new CourseScore({
        stroke: calculateStroke(data),
        courseName: localStorage.getItem('course-name') || '',
        dateOfPlay: (new Date()),
        dailyHandicap: 21,
        avgDriverDistance: calculateAvgTeeOff(data),
        stablefordScore: calculateStablefordScore(data),
        holeCode: localStorage.getItem('hole-code') || ''
    })
    return newScore
}

export default function Summary() {
    const [rowsData, setRowsData] = useState([])
    const [summaryDetails, setSummaryDetails] = useState(new CourseScore({}))
    const matchData = localStorage.getItem('matchData') && JSON.parse(localStorage.getItem('matchData'))
    const [isSubmitted, setIsSubmitted] = React.useState(false);
    const navigate = useNavigate()
    useEffect(() => {
        let savedHoleCode = '';
        if (localStorage.getItem('data')) {
            setRowsData(JSON.parse(localStorage.getItem('data')))
        }
        let inFlightData = []
        let detailsRef = {}
        if (localStorage.getItem('hole-code')) {
            savedHoleCode = localStorage.getItem('hole-code').replaceAll('\n', '')
        }
        getStablefordScoreByHoleCode(savedHoleCode).then((response) => {
            response && response.map(data => {
                const {holeIndex, length, par, score, stroke, holeAnalysis} = data || {}
                const {putt, teeOffDirection, teeOffLength} = holeAnalysis || {}
                inFlightData.push(createData(length, holeIndex, par, stroke, score, teeOffLength, teeOffDirection, putt))
                return inFlightData
            })
            setRowsData(inFlightData)
            detailsRef = calculateSummaryInfo(response)
            setSummaryDetails(detailsRef)
        })

        getCourseScoreByHoleCode(savedHoleCode)
            .then((response) => {
                if (response.length > 0) {
                    setIsSubmitted(true)
                }
            })
            .catch(err => {
                throw new Error(err)
            })
    }, [])

    const submitScore = () => {
        saveCourseScore(summaryDetails)
            .then(r => {
                if (r) {
                    setIsSubmitted(true)
                    localStorage.setItem('final-data', '')
                    localStorage.setItem('hole-number', 1)
                    localStorage.setItem('matchData', '')
                    navigate('/')
                }
            })
            .catch(err => {
                throw new Error(err)
            })
    }
    return (
        <Layout>
            <div className={styles.contentWrapper}>
                <h4 className={`text-semi-bold font-black-1 text-center text-lg-start`}>
                    Here are summary of the match.
                </h4>
                <p className={'text-semi-bold font-black-1 text-center text-lg-start'}>
                    Average Driver Distance: {Math.round(summaryDetails?.avgDriverDistance)} yards<br/>
                    Stableford Score: {summaryDetails?.stablefordScore}<br/>
                    Stroke: {summaryDetails?.stroke} <b>[{summaryDetails?.stroke - calculateTotalPar(matchData)}]</b>
                </p>
                <Button variant="outlined" onClick={submitScore} disabled={isSubmitted}>
                    Submit Score?
                </Button>
                {isSubmitted &&
                    <Alert severity="success" color="info" style={{width: "80%", marginTop: "10px"}}>
                    Score submitted successfully.
                    </Alert>
                }
            </div>
            <TableContainer component={Paper} style={{marginLeft: "10px", marginRight: "25px"}}>
                <Table sx={{minWidth: 650}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell style={{fontWeight: "bold"}}>Hole</TableCell>
                            <TableCell align="right" style={{fontWeight: "bold"}}>Length (Yards)</TableCell>
                            <TableCell align="right" style={{fontWeight: "bold"}}>Index</TableCell>
                            <TableCell align="right" style={{fontWeight: "bold"}}>Par</TableCell>
                            <TableCell align="right" style={{fontWeight: "bold"}}>Stroke</TableCell>
                            <TableCell align="right" style={{fontWeight: "bold"}}>Score</TableCell>
                            <TableCell align="right" style={{fontWeight: "bold"}}>Tee Off Length</TableCell>
                            <TableCell align="right" style={{fontWeight: "bold"}}>Tee Off Direction</TableCell>
                            <TableCell align="right" style={{fontWeight: "bold"}}>Putt</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rowsData && rowsData.map((row, index) => (
                            <TableRow
                                key={index}
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                            >
                                <TableCell component="th" scope="row">{index + 1}</TableCell>
                                <TableCell style={{marginRight: "-20px"}}>
                                    {row.length}
                                </TableCell>
                                <TableCell align="right">{row.holeIndex}</TableCell>
                                <TableCell align="right">{row.par}</TableCell>
                                <TableCell align="right">{row.stroke}</TableCell>
                                <TableCell align="right">{row.score || 0}</TableCell>
                                <TableCell align="right">{row.teeOffLength}</TableCell>
                                <TableCell align="right">{row.teeOfDirection}</TableCell>
                                <TableCell align="right">{row.putt}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Layout>
    );
}