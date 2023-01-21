import './App.css';
import {ErrorBoundary} from "./components/error-boundary";
import {ThemeProvider} from "@mui/material";
import {Route} from "react-router-dom";

function App() {
    return (
        <>
          <ErrorBoundary>
            <ThemeProvider theme={"white"}>
              <Route basepath="/">
                  <Route path="dashboard" element={<Dashboard />}/>
              </Route>
            </ThemeProvider>
          </ErrorBoundary>
        </>
    );
}

export default App;
