import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Layout from "../../layout";
import styles from "../../layout/layout.module.scss";
import {retrieveStablefordScore} from "../../service/api-service";
import {useEffect, useState} from 'react'

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
    return { length, holeIndex, par, stroke, score, teeOffLength, teeOfDirection, putt };
}

export default function ScoreDetails() {
    useEffect(() => {
        let inFlightData = []
        retrieveStablefordScore().then((response) => {
            response && response.map(data => {
                const { holeIndex, length, par, score, stroke, holeAnalysis } = data || {}
                const { putt, teeOffDirection, teeOffLength } = holeAnalysis || {}
                inFlightData.push(createData(length, holeIndex, par, stroke, score, teeOffLength, teeOffDirection, putt))
                return inFlightData
            })
            setRowsData(inFlightData)
        })
    }, [])
    const [rowsData, setRowsData] = useState([])
    return (
        <Layout>
            <div className={styles.contentWrapper}>
                <h4 className={`text-semi-bold font-black-1 text-center text-lg-start`}>
                    Course of Play: Heritage
                </h4>
                <p className={'text-semi-bold font-black-1 text-center text-lg-start'}>
                    Here are detail of the match.
                </p>
            </div>
            <TableContainer component={Paper} style={{marginLeft: "10px", marginRight: "25px"}}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
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
                        {rowsData.map((row, index) => (
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
                                <TableCell align="right">{row.score}</TableCell>
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