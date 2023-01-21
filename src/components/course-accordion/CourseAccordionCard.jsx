import styles from './accordion.module.scss'
import {CourseAccordion} from "../index";

const CourseAccordionData = () => {
    return (
        <div>
            <div className={styles.AccordionDetailsWrapper}>
                <div className="d-flex justify-content-between flex-column flex-md-row w-50">
                    <div className={styles.AccordionLabelSec} data-testid="personal-gender-review">
                        <label className={styles.AccordionSubHeader}>Gender:</label>
                        {/*<div className={styles.AccordionValue}>{gendermap[gender]}</div>*/}
                    </div>
                    <div className={`${styles.AccordionLabelSec} mb-2 mb-md-0`} data-testid="personal-dob-review">
                        <label className={styles.AccordionSubHeader}>Date of Birth:</label>
                        <div className={styles.AccordionValue}>
                            {/*{dateOfBirth ? new Date(dateOfBirth).toLocaleDateString('en-AU') : ''}*/}
                        </div>
                    </div>
                </div>
                {/*<Button*/}
                {/*    variant="outlined"*/}
                {/*    color="tertiary"*/}
                {/*    // onClick={onEdit('2')}*/}
                {/*    data-testid="personaldetails-edit-gender-review-button"*/}
                {/*>*/}
                {/*    Edit*/}
                {/*</Button>*/}
            </div>
            <div className={styles.AccordionDetailsWrapper}>
                <div className={styles.AccordionLabelSec} data-testid="personal-marital-review">
                    <label className={styles.AccordionSubHeader}>Marital Status: </label>
                    {/*<div className={`${styles.AccordionValue} text-capitalize`}>{maritalStatus}</div>*/}
                </div>
                {/*<Button*/}
                {/*    variant="outlined"*/}
                {/*    color="tertiary"*/}
                {/*    // onClick={onEdit('3')}*/}
                {/*    data-testid="personaldetails-edit-maritalstatus-review-button"*/}
                {/*>*/}
                {/*    Edit*/}
                {/*</Button>*/}
            </div>
            {/*{motherMaidenName && (*/}
            <div className={styles.AccordionDetailsWrapper}>
                <div className={styles.AccordionLabelSec} data-testid="personal-maiden-review">
                    <label className={styles.AccordionSubHeader}>Mother&apos;s Maiden Name:</label>
                    {/*<div className={`${styles.AccordionValue} text-capitalize`}>{motherMaidenName}</div>*/}
                </div>
                {/*<Button*/}
                {/*    variant="outlined"*/}
                {/*    color="tertiary"*/}
                {/*    // onClick={onEdit('4')}*/}
                {/*    data-testid="personaldetails-edit-maidenname-review-button"*/}
                {/*>*/}
                {/*    Edit*/}
                {/*</Button>*/}
            </div>
            {/*)}*/}
            <div className={styles.AccordionDetailsWrapper}>
                <div className="text-left w-75">
                    <div className={`${styles.AccordionSubHeader} mb-3`}>Contact details:</div>
                    <div className="d-flex justify-content-between flex-lg-row flex-column">
                        <div
                            className={`${styles.AccordionLabelSec} mb-2 mb-lg-0`}
                            data-testid="personal-mobile-review"
                        >
                            <label className={styles.AccordionSubHeader}>Mobile number</label>
                            {/*<div className={styles.AccordionValue}>{mobile}</div>*/}
                        </div>
                        <div className={`${styles.AccordionLabelSec} mb-2 mb-lg-0`} data-testid="personal-home-review">
                            <label className={styles.AccordionSubHeader}>Home number</label>
                            {/*<div className={styles.AccordionValue}>{homePhone || '-'}</div>*/}
                        </div>
                        <div className={`${styles.AccordionLabelSec} mb-2 mb-lg-0`} data-testid="personal-email-review">
                            <label className={styles.AccordionSubHeader}>Email Address</label>
                            {/*<div className={styles.AccordionValue}>{email}</div>*/}
                        </div>
                    </div>
                </div>
                {/*<Button*/}
                {/*    variant="outlined"*/}
                {/*    color="tertiary"*/}
                {/*    // onClick={onEdit('5')}*/}
                {/*    data-testid="personaldetails-edit-contactdetails-review-button"*/}
                {/*>*/}
                {/*    Edit*/}
                {/*</Button>*/}
            </div>
            <div className={`${styles.AccordionDetailsWrapper} border-0`}>
                <div className="flex-grow-1">
                    <div className={styles.AccordionLabelSec}>
                        <label
                            className={`${styles.AccordionSubHeader} mb-3`}
                            data-testid={`personal-dependant-count-review`}
                        >
                            {/*Dependants: {dependantList.length}*/}
                        </label>
                    </div>
                    {/*{dependantList &&*/}
                    {/*    dependantList.map((item, i) => (*/}
                    {/*        <div className="text-left w-50 mb-2 mt-2" key={i}>*/}
                    {/*            <div className={`${styles.AccordionSubHeader} mb-3`}>Dependant {i + 1}:</div>*/}
                    {/*            <div className="d-flex justify-content-between flex-column flex-md-row">*/}
                    {/*                <div*/}
                    {/*                    className={`${styles.AccordionLabelSec} mb-2 mb-md-0`}*/}
                    {/*                    data-testid={`personal-dependant-${i}-name-review`}*/}
                    {/*                >*/}
                    {/*                    <label className={styles.AccordionSubHeader}>Name</label>*/}
                    {/*                    <div className={styles.AccordionValue}>*/}
                    {/*                        /!*{item.firstName} {item.lastName}*!/*/}
                    {/*                    </div>*/}
                    {/*                </div>*/}
                    {/*                <div*/}
                    {/*                    className={styles.AccordionLabelSec}*/}
                    {/*                    data-testid={`personal-dependant-${i}-dob-review`}*/}
                    {/*                >*/}
                    {/*                    <label className={styles.AccordionSubHeader}>Date of Birth</label>*/}
                    {/*                    <div className={styles.AccordionValue}>*/}
                    {/*                        {item.dateOfBirth*/}
                    {/*                            ? new Date(item.dateOfBirth).toLocaleDateString('en-AU')*/}
                    {/*                            : ''}*/}
                    {/*                    </div>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    ))}*/}
                </div>

                {/*<Button*/}
                {/*    variant="outlined"*/}
                {/*    color="tertiary"*/}
                {/*    // onClick={onEdit('6')}*/}
                {/*    data-testid="personaldetails-edit-review-button"*/}
                {/*>*/}
                {/*    Edit*/}
                {/*</Button>*/}
            </div>
        </div>
    )
}

const CourseAccordionCard = () => {
    return (
        <div>
            <div className="form-container-xl">
                <div className="text-center mt-3">
                    <div className="mb-4 accordion-wrapper">
                        <CourseAccordion
                            value={`Personal Details - `}
                            defaultExpanded={true}
                            details={<CourseAccordionData/>}
                            data-testid="personal-accordion-button"
                        />
                    </div>
                    {/*<Button*/}
                    {/*    variant="contained"*/}
                    {/*    // onClick={nextStep}*/}
                    {/*    startIcon={true}*/}
                    {/*    data-testid="personal-complete-button"*/}
                    {/*>*/}
                    {/*    Complete*/}
                    {/*</Button>*/}
                </div>
            </div>
        </div>
    )
}

export default CourseAccordionCard
