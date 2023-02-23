import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import {TextField} from "@mui/material";
import {useState} from "react";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import SaveAsIcon from '@mui/icons-material/SaveAs';
import StablefordScore from "../../../Object/StablefordScore";
import {saveStablefordScoreByHole} from "../../../service/api-service";
import BoltIcon from '@mui/icons-material/Bolt';
import {useNavigate} from "react-router-dom";

export default function ScoreTracker(props) {
    const {
        stroke,
        putt,
        teeOffLength,
        teeOffDirection,
        setStroke,
        setPutt,
        setTeeOffLength,
        setTeeOffDirection,
        inPlayMatchData,
        holeNumber,
        setHoleNumber,
        stablefordObj,
    } = props || {}

    const teeOffDirectionArray = [
        {
            value: 'Hook',
            label: 'Hook',
        },
        {
            value: 'Draw',
            label: 'Draw',
        },
        {
            value: 'Slice',
            label: 'Slice',
        },
        {
            value: 'Fade',
            label: 'Fade',
        },
        {
            value: 'Hit',
            label: 'Hit',
        },
        {
            value: 'Miss Hit',
            label: 'Miss Hit',
        },
    ];
    const [teeOffLengthLeft, setTeeOffLengthLeft] = useState()
    const holeData = (localStorage.getItem('hole-data') && JSON.parse(localStorage.getItem('hole-data'))) || []
    const finalData = (localStorage.getItem('final-data') && JSON.parse(localStorage.getItem('final-data')))
    const finalDataArray = (finalData && Array.from(finalData)[holeNumber - 1]) || {}
    const onChangeHoleData = (event) => {
        const {id, innerText, value} = event.target || {}
        if (id === 'outlined-select-tee-off-direction') {
            setTeeOffDirection(innerText)
        }

        if (id === 'outlined-tee-off-length-left') {
            setTeeOffLengthLeft(value)
        }
    }
    const navigate = useNavigate()

    const onBlurTeeOffLength = (e) => {
        setTeeOffLength(inPlayMatchData.holeLength - teeOffLengthLeft)
    }

    const inputDetails = () => {
        let inFlightData = {
            "teeOffLength": teeOffLength,
            "teeOffDirection": teeOffDirection,
            "teeOffLengthLeft": teeOffLengthLeft
        }
        localStorage.setItem("hole-data", JSON.stringify(inFlightData))
        if (holeNumber < 18) {
            localStorage.setItem("hole-number", JSON.stringify(holeNumber))
        }
    }

    const calculateStablefordScore = (stablefordObj, stroke) => {
        let score = 0
        const {holePar} = stablefordObj || {}
        const diff = stroke - holePar
        if (diff <= -3) {
            score = 5
        } else if (diff === -2) {
            score = 4
        } else if (diff === -1) {
            score = 3
        } else if (diff === 0) {
            score = 2
        } else if (diff === 1) {
            score = 1
        }
        return score
    }

    const saveHole = () => {
        const storageData = localStorage.getItem('hole-data') && JSON.parse(localStorage.getItem('hole-data'))
        const inMemoryFinalData = localStorage.getItem('final-data') && JSON.parse(localStorage.getItem('final-data'))
        const savedHoleCode = localStorage.getItem('hole-code') || ''
        let preFinalData = inMemoryFinalData || []
        const stablefordScore = calculateStablefordScore(stablefordObj, stroke)
        const data = new StablefordScore({
            holeCode: savedHoleCode.replaceAll('\n', ''),
            length: inPlayMatchData?.holeLength || 0,
            par: inPlayMatchData?.holePar || 0,
            holeIndex: inPlayMatchData?.holeIndex || 0,
            stroke: stroke,
            score: stablefordScore,
            holeAnalysis: {
                putt: putt,
                teeOffLength: storageData.teeOffLength,
                teeOffDirection: storageData.teeOffDirection
            }
        })
        if (holeNumber > 0 && holeNumber < 19) {
            /** saving stableford score by hole*/
            saveStablefordScoreByHole(data)
                .then(response => {
                    /** clear storage and set hole number*/
                    if (holeNumber <= 18) {
                        setHoleNumber(holeNumber + 1)
                        if (holeNumber === 18) {
                            setHoleNumber(18)
                        }
                    }

                    localStorage.setItem("hole-data", JSON.stringify([]))
                    if (holeNumber < 18) {
                        localStorage.setItem("hole-number", JSON.stringify(holeNumber + 1))
                    }
                    /** clear states */
                    setStroke(0)
                    setPutt(0)
                    setTeeOffLengthLeft("")
                    setTeeOffLength(0)

                    /** set final data*/
                    preFinalData.push(data)
                    localStorage.setItem("final-data", JSON.stringify(preFinalData))
                    if (holeNumber === 18) {
                        navigate('/summary')
                    }
                })
                .catch(err => {
                    throw new Error("ERROR", err)
                })
        }


    }

    return (
        <>
            <div>
                <Typography style={{fontWeight: "bolder"}}>
                    Score tracker
                </Typography>
            </div>
            <div style={{display: "flex", marginTop: "20px", justifyContent: "center"}}>
                <Box
                    sx={{
                        display: 'flex',
                        '& > :not(style)': {
                            m: 1,
                            width: "100%",
                            height: "10%",
                        },
                    }}
                >
                    <Paper elevation={0}>
                        <Button onClick={() => {
                            if (stroke > 0) {
                                setStroke(stroke - 1)
                            }
                        }}>
                            <RemoveCircleOutlineIcon/>
                        </Button>
                    </Paper>
                    <Paper elevation={0}>Stroke<br/>
                        {finalDataArray?.data?.stroke ? finalDataArray?.data?.stroke : stroke > 0 ? stroke : holeData?.stroke}
                    </Paper>
                    <Paper elevation={0}>
                        <Button onClick={() => {
                            if (stroke >= 0) {
                                setStroke(stroke + 1)
                            }
                        }}>
                            <ControlPointIcon/>
                        </Button>
                    </Paper>
                </Box>
            </div>
            <div style={{display: "flex", justifyContent: "center"}}>
                <Box
                    sx={{
                        display: 'flex',
                        '& > :not(style)': {
                            m: 1,
                            width: "100%",
                            height: "10%",
                        },
                    }}
                >
                    <Paper elevation={0}>
                        <Button onClick={() => {
                            if (putt > 0) {
                                setPutt(putt - 1)
                            }
                        }}>
                            <RemoveCircleOutlineIcon/>
                        </Button>
                    </Paper>
                    <Paper elevation={0}>Putt<br/>
                        {finalDataArray?.data?.holeAnalysis?.putt ? finalDataArray?.data?.holeAnalysis?.putt : putt > 0 ? putt : holeData?.putt}
                    </Paper>
                    <Paper elevation={0}>
                        <Button onClick={() => {
                            if (putt >= 0) {
                                setPutt(putt + 1)
                            }
                        }}>
                            <ControlPointIcon/>
                        </Button>
                    </Paper>
                </Box>
            </div>
            <div style={{display: "flex", justifyContent: "center", marginTop: "10px"}}>
                <TextField
                    id="outlined-tee-off-direction"
                    select
                    label="Tee Off Direction"
                    helperText="Please select tee off direction"
                >
                    {teeOffDirectionArray.map((option) => (
                        <MenuItem
                            id="outlined-select-tee-off-direction"
                            onClick={onChangeHoleData}
                            key={holeData.teeOffDirection ? holeData.teeOffDirection : option.value}
                            value={finalDataArray?.data?.holeAnalysis?.teeOffDirection
                                ? finalDataArray?.data?.holeAnalysis?.teeOffDirection
                                : holeData.teeOffDirection ? holeData.teeOffDirection : option.value
                            }
                        >
                            {
                                finalDataArray?.data?.holeAnalysis?.teeOffDirection
                                    ? finalDataArray?.data?.holeAnalysis?.teeOffDirection
                                    : holeData.teeOffDirection ? holeData.teeOffDirection : option.label
                            }
                        </MenuItem>
                    ))}
                </TextField>
            </div>
            <div style={{display: "flex", justifyContent: "center", marginTop: "10px"}}>
                <TextField
                    id="outlined-tee-off-length-left"
                    variant="outlined"
                    onChange={onChangeHoleData}
                    itemID={`tee-off-length`}
                    value={holeData.teeOffLengthLeft > 0 ? holeData.teeOffLengthLeft : teeOffLengthLeft}
                    helperText="Please input length to the pin"
                    onBlur={onBlurTeeOffLength}
                />
                <TextField
                    id="outlined-tee-off-length"
                    variant="outlined"
                    disabled={true}
                    itemID={`tee-off-length`}
                    value={finalDataArray?.data?.holeAnalysis?.teeOffLength
                        ? finalDataArray?.data?.holeAnalysis?.teeOffLength
                        : holeData?.teeOffLength > 0 ? holeData?.teeOffLength : teeOffLength}
                    style={{fontWeight: "bolder"}}
                    helperText="Tee Off Length"
                />
            </div>
            <div style={{display: "flex", justifyContent: "center", marginTop: "10px"}}>
                <Button variant="contained" onClick={inputDetails} disabled={finalDataArray?.data}>
                    <TaskAltIcon/>
                    <Typography style={{marginLeft: "5px"}}>Save Length and Direction</Typography>
                </Button>
                <Button variant="contained" style={{marginLeft: "20px"}} onClick={saveHole}
                        disabled={finalDataArray?.data}>
                    <SaveAsIcon/>
                    <Typography style={{marginLeft: "5px"}}>Save</Typography>
                </Button>
                {(finalData && Array.from(finalData).length === 18) &&
                    <>
                        <Button variant="contained" style={{marginLeft: "10px"}} onClick={() => navigate('/summary')}>
                            <BoltIcon/>
                            <Typography style={{marginLeft: "5px"}}>Next</Typography>
                        </Button>
                    </>
                }
            </div>
        </>
    )
}