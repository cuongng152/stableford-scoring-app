import styles from "./accordion.module.scss";
import Button from "@mui/material/Button";
import SendIcon from '@mui/icons-material/Send';
import {useNavigate} from "react-router-dom";

const CourseAccordionData = (props) => {
    const { courseScore } = props || {}
    const { avgDriverDistance, dailyHandicap, dateOfPlay, stablefordScore, stroke } = courseScore
    const navigate = useNavigate()
    const goToScoreDetails = () => {
        navigate('/scoreDetails')
    }
    return (
        <div>
            <div className={styles.AccordionDetailsWrapper}>
                <div className="d-flex justify-content-between flex-column flex-md-row w-50">
                    <div className={styles.AccordionLabelSec} data-testid="daily-handicap">
                        <label className={styles.AccordionSubHeader}>Daily Handicap:</label>
                        <div className={styles.AccordionValue}>{dailyHandicap}</div>
                    </div>
                </div>
            </div>
            <div className={styles.AccordionDetailsWrapper}>
                <div className={styles.AccordionLabelSec} data-testid="date-of-play">
                    <label className={styles.AccordionSubHeader}>Date of play: </label>
                    <div className={`${styles.AccordionValue} text-capitalize`}>
                        {dateOfPlay ? new Date(dateOfPlay).toLocaleDateString('en-AU') : ''}
                    </div>
                </div>
            </div>
            <div className={styles.AccordionDetailsWrapper}>
                <div className={styles.AccordionLabelSec} data-testid="average-driver-distance">
                    <label className={styles.AccordionSubHeader}>Average Driver Distance: </label>
                    <div className={`${styles.AccordionValue} text-capitalize`}>{avgDriverDistance}</div>
                </div>
            </div>
            <div className={styles.AccordionDetailsWrapper}>
                <div className={styles.AccordionLabelSec} data-testid="stableford-score">
                    <label className={styles.AccordionSubHeader}>Stableford Score:</label>
                    <div className={`${styles.AccordionValue} text-capitalize`}>{stablefordScore}</div>
                </div>
            </div>
            <div className={styles.AccordionDetailsWrapper}>
                <div className={styles.AccordionLabelSec} data-testid="stroke">
                    <label className={styles.AccordionSubHeader}>Stroke:</label>
                    <div className={`${styles.AccordionValue} text-capitalize`}>{stroke}</div>
                </div>
                <Button
                    data-testid="detail-button"
                    variant="contained"
                    endIcon={<SendIcon />}
                    style={{marginTop: "5px"}}
                    onClick={goToScoreDetails}
                >
                    Details
                </Button>
            </div>
        </div>
    )
}

export default CourseAccordionData