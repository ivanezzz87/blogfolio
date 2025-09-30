import "./App.css";
import "./components/Button";
import { ThemeSwitch } from "./theme/ThemeSwitch";
import { ThemeProvider } from "./theme/ThemeContext";
import SearchResultsPage from "./pages/SearchResults";

function App() {
  return (
    <ThemeProvider>
      <div className="root-container">
        <ThemeSwitch />
        <SearchResultsPage/>
      </div>
    </ThemeProvider>
  );
}

export default App;