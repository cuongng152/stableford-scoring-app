import {
    Accordion as MuiAccordion,
    AccordionDetails as MuiAccordionDetails,
    AccordionSummary as MuiAccordionSummary,
} from '@mui/material'
import PropTypes from 'prop-types'
import React from 'react'
import { ReactComponent as CaretDown } from '../../images/caret-down.svg'

const AccordionSummary = (props) => <MuiAccordionSummary {...props} />
const AccordionDetails = (props) => <MuiAccordionDetails {...props} />

const CourseAccordion = (props) => {
    const {
        actionButtons,
        value,
        summaryProps = {},
        detailsProps = {},
        accordionProps = {},
        testId,
        ...otherProps
    } = props || {}
    const { children: summaryChild, ...summaryRest } = summaryProps
    return (
        <MuiAccordion data-testid={`accordion-${testId}`} {...otherProps} {...accordionProps}>
            <AccordionSummary data-testid={`summary-${testId}`} expandIcon={<CaretDown />} {...summaryRest}>
                {summaryChild || (
                    <div
                        data-testid={`action-button-${testId}`}
                        className="d-flex justify-content-between w-100 align-items-center"
                    >
                        <div className="me-2" data-testid={`owned-asset-title-${testId}`}>
                            {value}
                        </div>
                        {actionButtons}
                    </div>
                )}
            </AccordionSummary>
            <AccordionDetails data-testid={`details-${testId}`} {...detailsProps}>
                {props.details}{' '}
            </AccordionDetails>
        </MuiAccordion>
    )
}

CourseAccordion.propTypes = {
    value: PropTypes.string,
    details: PropTypes.node,
    actionButtons: PropTypes.node,
    summaryProps: PropTypes.object,
    detailsProps: PropTypes.object,
    accordionProps: PropTypes.object,
    testId: PropTypes.string,
}

export default CourseAccordion
