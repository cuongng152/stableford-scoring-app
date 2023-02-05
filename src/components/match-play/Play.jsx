import styles from "../../layout/layout.module.scss";
import Layout from "../../layout";
import {Grid, styled} from "@mui/material";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import FirstLayer from "./play-details/FirstLayer";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function Play() {
    const matchData = JSON.parse(localStorage.getItem('matchData')) || []

    return (
        <Layout>
            <div className={styles.contentWrapper}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid xs={12} md={8}>
                            <Item>
                                <FirstLayer matchData={matchData} />
                            </Item>
                        </Grid>
                        <Grid xs={9} md={4}>
                            <Item>Second layer-left</Item>
                        </Grid>
                        <Grid xs={3} md={4}>
                            <Item>Second layer - right</Item>
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