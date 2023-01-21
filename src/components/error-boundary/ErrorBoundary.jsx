import PropTypes from 'prop-types'
import React from 'react'
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary'

/**
 * @name ErrorBoundary
 * @description MAF preconfigured react-error-boundary
 * @package https://github.com/bvaughn/react-error-boundary#readme
 * @param {*} { fallbackComponent = () => {}, children, onReset = () => {} }
 */
export const ErrorBoundary = ({
                                  children = null,
                                  onReset = () => console.info('Error Boundary Reset'),
                              }) => (
    <ReactErrorBoundary
        onReset={() => {
            // reset the state of your app so the error doesn't happen again
            onReset()
        }}
    >
        {children}
    </ReactErrorBoundary>
)

ErrorBoundary.propTypes = {
    children: PropTypes.node,
    fallbackComponent: PropTypes.node,
    onReset: PropTypes.func,
}

export default ErrorBoundary
