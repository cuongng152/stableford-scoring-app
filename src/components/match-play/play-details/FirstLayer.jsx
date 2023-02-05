import Typography from "@mui/material/Typography";
import styles from './matchPlay.modules.scss'
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

export default function FirstLayer(props) {
    const {matchData} = props || {}
    return (
        <div>
            <Typography className={styles.firstLayer} style={{fontSize: "30px", fontWeight: 'bolder'}}>Hole
                1</Typography>
            <div className={styles.firstLayerDetails} style={{
                justifyContent: "center",
                display: "flex"
            }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        '& > :not(style)': {
                            m: 1,
                            width: 50,
                            height: "100%",
                        },
                    }}
                >
                    <Paper elevation={0}>Par<br/> {matchData[0].holePar}</Paper>
                    <Paper elevation={0}>Length {matchData[0].holeLength} (yards)</Paper>
                    <Paper elevation={0}>Index<br/> {matchData[0].holeIndex}</Paper>
                </Box>
            </div>
        </div>
    )
}