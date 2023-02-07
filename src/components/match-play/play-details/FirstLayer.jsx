import Typography from "@mui/material/Typography";
import styles from './matchPlay.modules.scss'
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Button from "@mui/material/Button";

export default function FirstLayer(props) {
    const {matchData, holeNumber, setHoleNumber, setTeeOffLength} = props || {}
    const inPlayMatchData = matchData[holeNumber - 1]
    return (
        <div style={{borderStyle: "double", borderColor: "red", borderRadius: "5px", width: "95%"}}>
            <Typography className={styles.firstLayer} style={{fontSize: "30px", fontWeight: 'bolder'}}>
                <Button onClick={() => {
                    if (holeNumber > 1) {
                        setHoleNumber(holeNumber - 1)
                        setTeeOffLength(0)
                    }
                }}>
                    <ArrowBackIosIcon/>
                </Button>
                Hole {holeNumber}
                <Button onClick={() => {
                    if (holeNumber < 18) {
                        setHoleNumber(holeNumber + 1)
                        setTeeOffLength(0)
                    }
                }}>
                    <ArrowForwardIosIcon/>
                </Button>
            </Typography>
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
                            height: "10%",
                        },
                    }}
                >
                    <Paper elevation={0}>Par<br/>
                        <b>{inPlayMatchData.holePar}</b>
                    </Paper>
                    <Paper elevation={0}>Length<br/>
                        <b>{inPlayMatchData.holeLength} (yards)</b>
                    </Paper>
                    <Paper elevation={0}>Index<br/>
                        <b>{inPlayMatchData.holeIndex}</b>
                    </Paper>
                    <Paper elevation={0}>Stableford Score<br/>
                        <b>{3}</b>
                    </Paper>
                </Box>
            </div>
        </div>
    )
}