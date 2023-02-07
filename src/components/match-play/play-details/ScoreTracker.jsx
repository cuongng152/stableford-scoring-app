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
        setHoleNumber
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
    const holeData = JSON.parse(localStorage.getItem('hole-data')) || []
    const onChangeHoleData = (event) => {
        const {id, innerText, value} = event.target || {}
        if (id === 'outlined-select-tee-off-direction') {
            setTeeOffDirection(innerText)
        }

        if (id === 'outlined-tee-off-length-left') {
            setTeeOffLengthLeft(value)
        }
    }

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

    const saveHole = () => {
        const storageData = JSON.parse(localStorage.getItem('hole-data'))
        const inMemoryFinalData = JSON.parse(localStorage.getItem('final-data'))
        let preFinalData = inMemoryFinalData || []
        const data = {
            "stroke": stroke,
            "putt": putt,
            "teeOffLength": storageData?.teeOffLength,
            "teeOffDirection": storageData?.teeOffDirection,
            "par": inPlayMatchData.holePar,
            "score": stroke-inPlayMatchData.holePar
        }
        if (holeNumber > 0 && holeNumber < 18) {
            /** clear storage and set hole number*/
            setHoleNumber(holeNumber+1)
            localStorage.setItem("hole-data", JSON.stringify([]))
            if (holeNumber < 18) {
                localStorage.setItem("hole-number", JSON.stringify(holeNumber+1))
            }


            /** clear states */
            setStroke(0)
            setPutt(0)
            setTeeOffLengthLeft("")
            setTeeOffLength(0)

            /** set final data*/
            preFinalData.push({
                "hole": holeNumber,
                "data": data
            })
            localStorage.setItem("final-data", JSON.stringify(preFinalData))
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
                                setStroke(stroke-1)
                            }
                        }}>
                            <RemoveCircleOutlineIcon/>
                        </Button>
                    </Paper>
                    <Paper elevation={0}>Stroke<br/>
                        {stroke > 0 ? stroke :holeData?.stroke}
                    </Paper>
                    <Paper elevation={0}>
                        <Button onClick={() => {
                            if (stroke >= 0) {
                                setStroke(stroke+1)
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
                                setPutt(putt-1)
                            }
                        }}>
                            <RemoveCircleOutlineIcon/>
                        </Button>
                    </Paper>
                    <Paper elevation={0}>Putt<br/>
                        {putt > 0 ? putt : holeData?.putt}
                    </Paper>
                    <Paper elevation={0}>
                        <Button onClick={() => {
                            if (putt >= 0) {
                                setPutt(putt+1)
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
                            value={holeData.teeOffDirection ? holeData.teeOffDirection : option.value}
                        >
                            {holeData.teeOffDirection ? holeData.teeOffDirection : option.label}
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
                    value={holeData?.teeOffLength > 0 ? holeData?.teeOffLength : teeOffLength}
                    style={{fontWeight: "bolder"}}
                    helperText="Tee Off Length"
                />
            </div>
            <div style={{display: "flex", justifyContent: "center", marginTop: "10px"}}>
                <Button variant="contained" onClick={inputDetails}>
                    <TaskAltIcon />
                    <Typography style={{marginLeft: "5px"}}>Save Length and Direction</Typography>
                </Button>
                <Button variant="contained" style={{marginLeft: "20px"}} onClick={saveHole}>
                    <SaveAsIcon />
                    <Typography style={{marginLeft: "5px"}}>Save</Typography>
                </Button>
            </div>
        </>
    )
}