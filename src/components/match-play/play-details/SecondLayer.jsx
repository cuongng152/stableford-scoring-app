import Typography from "@mui/material/Typography";
import {useEffect, useState} from "react";

export default function SecondLayer(props) {
    const finalData = localStorage.getItem('final-data') && JSON.parse(localStorage.getItem('final-data'))
    const [averageTeeOff, setAverageTeeOff] = useState(0)
    const [stroke, setStroke] = useState(0)
    const [score, setScore] = useState(0)
    useEffect(() => {
        /** calculate average tee off length*/
        const avgLength = calculateAvgTeeOff(finalData)
        setAverageTeeOff(avgLength)

        /** calculate stroke*/
        setStroke(calculateStroke(finalData))
        setScore(calculateScore(finalData))
    }, [finalData])

    return (
        <div style={{display: "flex", borderColor: "red", borderRadius: "5px", height: "100%", width: "100%"}}>
            {/*<Avatar {...stringAvatar('Charlie Nguyen')} style={{marginLeft: "5px", marginRight: "5px"}}/>*/}
            <Typography style={{alignSelf: "center", width: "100%"}}>
                <b>Charlie Nguyen</b> [21] -
                Stroke: {stroke}<b> [{score}]</b><br/>
                Avg Tee Off: <b>{Math.round(averageTeeOff, 0)} - </b>
                Stableford Score: <b>{15}</b>
            </Typography>
        </div>
    )
}

function calculateAvgTeeOff(finalData) {
    let avgTeeOff = 0
    let sumTeeOffLength = 0
    let i = 0
    if (finalData.length > 0) {
        finalData.map((stat) => {
            const {data} = stat || {}
            if (Number(data.par) > 3) {
                i+=1
                sumTeeOffLength+=data.teeOffLength
            }
            return sumTeeOffLength
        })
    }
    avgTeeOff = sumTeeOffLength/i
    return avgTeeOff
}

function calculateStroke(finalData) {
    let stroke = 0
    if (finalData.length > 0) {
        finalData.map(stat => {
            const {data} = stat || {}
            stroke += Number(data.stroke)
            return stroke
        })
    }
    return stroke
}

function calculateScore(finalData) {
    let score = 0
    if (finalData.length > 0) {
        finalData.map(stat => {
            const {data} = stat || {}
            score += Number(data.score)
            return score
        })
    }
    return score
}