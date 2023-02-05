import './App.css';
import {ErrorBoundary} from "./components/error-boundary";
import {Route, Routes} from "react-router-dom";
import {InitializationRoute} from "./route";
import {PreMatch, ScoreDetails} from "./components";

function App() {
    return (
        <>
            <ErrorBoundary>
                <Routes basepath="/">
                    <Route path="/" element={<InitializationRoute />} />
                    <Route path="/scoredetails" element={<ScoreDetails />} />
                    <Route path="/preplay" element={<PreMatch />} />
                    {/*<Route path="/play" element={<Play />} />*/}
                </Routes>
            </ErrorBoundary>
        </>
    );
}

export default App;
