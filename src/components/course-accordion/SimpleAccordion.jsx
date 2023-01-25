import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CourseAccordionData from "./CourseAccordionData";
import {retrieveCourseScores} from "../../service/api-service";
import {useEffect, useState} from 'react'
import {Variants} from "../index";

export default function SimpleAccordion() {
    const [courseScores, setCourseScores] = useState([])

    useEffect(() => {
        retrieveCourseScores().then((response) => {
            setCourseScores(response)
        })
    }, [])
    return (
        courseScores.length === 0 ? <div><Variants/></div> :
            <div>
                {courseScores && courseScores.map((courseScore, index) => {
                    return (
                        <Accordion style={{marginBottom: "10px", marginRight: "25px"}}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon/>}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography style={{fontWeight: "bold"}}>{courseScore?.courseName}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <CourseAccordionData courseScore={courseScore} index={index}/>
                            </AccordionDetails>
                        </Accordion>
                    )
                })}
            </div>
    );
}