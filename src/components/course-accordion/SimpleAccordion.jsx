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
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        retrieveCourseScores().then((response) => {
            if (response?.length === 0) {
                setIsLoading(false)
            } else {
                setCourseScores(response)
            }
        })
    }, [])
    return (
        isLoading ? <div><Variants/></div>
            : courseScores.length === 0
                ? <div>
                    No Records.
                </div>
                : <div>
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