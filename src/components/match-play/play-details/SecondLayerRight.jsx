import TaskAltIcon from '@mui/icons-material/TaskAlt';
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function SecondLayerRight(props) {
    const {setScore, holeNumber, setHoleNumber} = props || {}
    return (
        <div style={{display: "flex"}}>
            <Button onClick={() => {
                setScore()
                setHoleNumber(holeNumber + 1)
            }}>
                <TaskAltIcon />
                <Typography style={{marginLeft: "5px"}}>Enter</Typography>
            </Button>
        </div>
    )
}