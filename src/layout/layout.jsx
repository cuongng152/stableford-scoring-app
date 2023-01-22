import PropTypes from 'prop-types'
import styles from './layout.module.scss'
import ResponsiveAppBar from "./ResponsiveAppBar";
import {SimpleAccordion} from "../components";

const Layout = ({ children }) => {
    return (
        <div className={`${styles.mainWrapper} d-flex flex-column flex-wrap`}>
            <ResponsiveAppBar />
            <div className={styles.contentWrapper}>
                <h4 className={`text-semi-bold font-black-1 text-center text-lg-start`}>
                    Welcome back Charlie!
                </h4>
                <p className={'text-semi-bold font-black-1 text-center text-lg-start'}>
                    Here are all the courses you have played. Click to see the details.
                </p>
                {/*<CourseAccordionCard />*/}
                <SimpleAccordion />
            </div>
            <div className="flex-grow-1 d-flex w-100">{children}</div>
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.element.isRequired,
}

export default Layout
