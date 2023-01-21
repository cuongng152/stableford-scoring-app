import React from 'react'
import { Router } from 'react-router-dom'
import PropTypes from 'prop-types'

export const CustomRouter = ({ basename, children, history }) => {
    const [state, setState] = React.useState({
        action: history.action,
        location: history.location,
    })

    React.useLayoutEffect(() => history.listen(setState), [history])

    return (
        <Router basename={basename} location={state.location} navigationType={state.action} navigator={history}>
            {children}
        </Router>
    )
}

CustomRouter.propTypes = {
    basename: PropTypes.string,
    children: PropTypes.node,
    history: PropTypes.object,
}
