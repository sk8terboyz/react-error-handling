import './App.css';
import {ErrorBoundary, BuggyCounter} from "./components/errorHandling/errorHandling";

function App() {
  return (
    <div className="App">
      <div>
        <h2>This App is Used For Error Handling Demo</h2>
      </div>
      <hr />
      <ErrorBoundary>
        <h5>These counters are within the same boundary.</h5>
        <BuggyCounter />
        <BuggyCounter />
      </ErrorBoundary>
      <div>
        <h5>These counters are within their own boundaries.</h5>
        <ErrorBoundary>
          <BuggyCounter />
        </ErrorBoundary>
        <ErrorBoundary>
          <BuggyCounter />
        </ErrorBoundary>
      </div>
    </div>
  );
}

export default App;
