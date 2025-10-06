import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { ThemeProvider } from "./theme/ThemeContext";
import Layout from "./components/Layout";
import { AppRouter } from "./router/Router";

function App() {
  return (
    <Router>
      <ThemeProvider>
        <div className="root-container">
          <Layout>
            <AppRouter />
          </Layout>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
