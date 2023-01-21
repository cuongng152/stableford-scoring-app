import './App.css';
import {ErrorBoundary} from "./components/error-boundary";
import {Route, Routes} from "react-router-dom";
import {InitializationRoute} from "./route";

function App() {
    return (
        <>
            <ErrorBoundary>
                <Routes basepath="/">
                    <Route path="/" element={<InitializationRoute />} />
                </Routes>
            </ErrorBoundary>
        </>
    );
}

export default App;
