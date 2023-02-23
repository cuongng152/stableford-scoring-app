class ErrorException {
    constructor(error) {
        this.title = error.title || ''
        this.errorCode = error.errorCode || ''
        this.errorMessage = error.errorMessage || ''
        this.httpErrorCode = error.httpErrorCode || ''
    }
}

export default ErrorException;