import PropTypes from 'prop-types'
import styles from './layout.module.scss'
import ResponsiveAppBar from "./ResponsiveAppBar";

const Layout = ({ children }) => {
    return (
        <div className={`${styles.mainWrapper} d-flex flex-column flex-wrap`}>
            <ResponsiveAppBar />
            <div className="flex-grow-1 d-flex w-100">{children}</div>
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.element.isRequired,
}

export default Layout
