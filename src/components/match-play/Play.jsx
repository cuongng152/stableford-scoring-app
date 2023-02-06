import styles from "../../layout/layout.module.scss";
import Layout from "../../layout";
import {Grid, styled} from "@mui/material";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import FirstLayer from "./play-details/FirstLayer";
import {useState} from "react";
import SecondLayerLeft from "./play-details/SecondLayerLeft";
import {ScoreTracker} from "../index";

const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function Play() {
    const matchData = JSON.parse(localStorage.getItem('matchData')) || []
    const inMemoryHoleNumber = JSON.parse(localStorage.getItem('hole-number')) || 1
    const [holeNumber, setHoleNumber] = useState(inMemoryHoleNumber)
    const [score, setScore] = useState(0)
    const [stroke, setStroke] = useState(0)
    const [putt, setPutt] = useState(0)
    const [teeOffDirection, setTeeOffDirection] = useState("")
    const [teeOffLength, setTeeOfFLength] = useState(0)
    const inPlayMatchData = matchData[holeNumber - 1]
    return (
        <Layout>
            <div className={styles.contentWrapper}>
                <Box sx={{flexGrow: 1}}>
                    <Grid container spacing={2}>
                        <Grid xs={12} md={8}>
                            <Item>
                                <FirstLayer matchData={matchData} holeNumber={holeNumber}
                                            setHoleNumber={setHoleNumber} setTeeOffLength={setTeeOfFLength}/>
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
                                <SecondLayerLeft score={score} setScore={setScore}/>
                            </Item>
                        </Grid>
                        {/*<Grid xs={3} md={4}>*/}
                        {/*    <Item>*/}
                        {/*        <SecondLayerRight setScore={setScore} holeNumber={holeNumber} setHoleNumber={setHoleNumber} />*/}
                        {/*    </Item>*/}
                        {/*</Grid>*/}
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
                                              holeNumber={holeNumber} setHoleNumber={setHoleNumber}/>
                            </Item>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </Layout>
    )
}