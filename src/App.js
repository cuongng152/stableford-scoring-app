import './App.css';
import {ErrorBoundary} from "./components/error-boundary";
import {Route, Routes} from "react-router-dom";
import {InitializationRoute} from "./route";
import {ScoreDetails} from "./components";

function App() {
    return (
        <>
            <ErrorBoundary>
                <Routes basepath="/">
                    <Route path="/" element={<InitializationRoute />} />
                    <Route path="/scoredetails" element={<ScoreDetails />} />
                </Routes>
            </ErrorBoundary>
        </>
    );
}

export default App;
