import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { ThemeProvider } from "./theme/ThemeContext";
import Layout from "./components/Layout";
import { AppRouter } from "./router/Router";
import PostPopup from "./components/Popup";

function App() {
  return (
    <Router>
      <ThemeProvider>
        <div className="root-container">
          <Layout>
            <AppRouter />
            <PostPopup />
          </Layout>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
