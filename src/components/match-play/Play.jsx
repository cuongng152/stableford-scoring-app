import styles from "../../layout/layout.module.scss";
import Layout from "../../layout";
import {Grid, styled} from "@mui/material";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import FirstLayer from "./play-details/FirstLayer";
import {useState} from "react";
import {SecondLayerRight} from "../index";
import SecondLayerLeft from "./play-details/SecondLayerLeft";

const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function Play() {
    const matchData = JSON.parse(localStorage.getItem('matchData')) || []
    const [holeNumber, setHoleNumber] = useState(1)
    const [score, setScore] = useState(0)
    return (
        <Layout>
            <div className={styles.contentWrapper}>
                <Box sx={{flexGrow: 1}}>
                    <Grid container spacing={2}>
                        <Grid xs={12} md={8}>
                            <Item>
                                <FirstLayer matchData={matchData} holeNumber={holeNumber} setHoleNumber={setHoleNumber}/>
                            </Item>
                        </Grid>
                        <Grid xs={9} md={4}>
                            <Item>
                                <SecondLayerLeft score={score} setScore={setScore} />
                            </Item>
                        </Grid>
                        <Grid xs={3} md={4}>
                            <Item>
                                <SecondLayerRight setScore={setScore} holeNumber={holeNumber} setHoleNumber={setHoleNumber} />
                            </Item>
                        </Grid>
                        <Grid xs={6} md={8}>
                            <Item>Third layer - left</Item>
                        </Grid>
                        <Grid xs={6} md={8}>
                            <Item>Third layer - right</Item>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </Layout>
    )
}