import styles from "../../layout/layout.module.scss";
import Layout from "../../layout";
import {Grid, styled} from "@mui/material";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import FirstLayer from "./play-details/FirstLayer";
import {useState} from "react";
import SecondLayer from "./play-details/SecondLayer";
import {ScoreTracker} from "../index";

const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const prepareStableford = (matchData, dailyHandicap) => {
    const test = matchData.map((data) => {
        let diff = dailyHandicap - 18
        if (diff > 0) {
            if (Number(data.holeIndex) <= diff) {
                data.holePar = Number(data.holePar) + 2
            } else if (Number(data.holeIndex) > diff) {
                data.holePar = Number(data.holePar) + 1
            }
        }
        return data
    })
    return test
}

export default function Play() {
    const matchData = localStorage.getItem('matchData') && JSON.parse(localStorage.getItem('matchData'))
    const inMemoryHoleNumber = JSON.parse(localStorage.getItem('hole-number')) || 1
    const [holeNumber, setHoleNumber] = useState(inMemoryHoleNumber)
    const [score, setScore] = useState(0)
    const [stroke, setStroke] = useState(0)
    const [putt, setPutt] = useState(0)
    const [teeOffDirection, setTeeOffDirection] = useState("")
    const [teeOffLength, setTeeOfFLength] = useState(0)
    const inPlayMatchData = matchData && matchData[holeNumber - 1]
    const stableford = [
        {
            "holeIndex": 9,
            "holeLength": "445",
            "holePar": 6
        },
        {
            "holeIndex": 3,
            "holeLength": "325",
            "holePar": 6
        },
        {
            "holeIndex": 15,
            "holeLength": "132",
            "holePar": 4
        },
        {
            "holeIndex": 5,
            "holeLength": "464",
            "holePar": 6
        },
        {
            "holeIndex": 18,
            "holeLength": "138",
            "holePar": 4
        },
        {
            "holeIndex": 7,
            "holeLength": "340",
            "holePar": 5
        },
        {
            "holeIndex": 4,
            "holeLength": "345",
            "holePar": 5
        },
        {
            "holeIndex": 10,
            "holeLength": "314",
            "holePar": 5
        },
        {
            "holeIndex": 17,
            "holeLength": "130",
            "holePar": 4
        },
        {
            "holeIndex": 1,
            "holeLength": "220",
            "holePar": 5
        },
        {
            "holeIndex": 8,
            "holeLength": "320",
            "holePar": 5
        },
        {
            "holeIndex": 11,
            "holeLength": "141",
            "holePar": 4
        },
        {
            "holeIndex": 13,
            "holeLength": "275",
            "holePar": 5
        },
        {
            "holeIndex": 16,
            "holeLength": "128",
            "holePar": 4
        },
        {
            "holeIndex": 14,
            "holeLength": "425",
            "holePar": 6
        },
        {
            "holeIndex": 12,
            "holeLength": "120",
            "holePar": 4
        },
        {
            "holeIndex": 6,
            "holeLength": "320",
            "holePar": 5
        },
        {
            "holeIndex": 2,
            "holeLength": "171",
            "holePar": 5
        }
    ]
    return (
        <Layout>
            <div className={styles.contentWrapper}>
                <Box sx={{flexGrow: 1}}>
                    <Grid container spacing={2}>
                        <Grid xs={12} md={8}>
                            <Item>
                                <FirstLayer matchData={matchData} holeNumber={holeNumber}
                                            setHoleNumber={setHoleNumber} setTeeOffLength={setTeeOfFLength}
                                            />
                            </Item>
                        </Grid>
                        <Grid xs={12} md={12}>
                            <Item style={{
                                borderColor: "red",
                                borderRadius: "5px",
                                width: "89%",
                                height: "60%",
                                borderStyle: "double",
                                marginLeft: "7px"
                            }}>
                                <SecondLayer score={score} setScore={setScore}/>
                            </Item>
                        </Grid>
                        <Grid xs={12} md={12}>
                            <Item style={{
                                borderColor: "red",
                                borderRadius: "5px",
                                width: "89%",
                                height: "100%",
                                borderStyle: "double",
                                marginLeft: "7px",
                            }}>
                                <ScoreTracker stroke={stroke} putt={putt} teeOffDirection={teeOffDirection}
                                              teeOffLength={teeOffLength} setStroke={setStroke} setPutt={setPutt}
                                              setTeeOffDirection={setTeeOffDirection}
                                              setTeeOffLength={setTeeOfFLength} inPlayMatchData={inPlayMatchData}
                                              holeNumber={holeNumber} setHoleNumber={setHoleNumber}
                                              stablefordObj={stableford[holeNumber - 1]}
                                              // savedHoleData={savedHoleData}
                                />
                            </Item>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </Layout>
    )
}