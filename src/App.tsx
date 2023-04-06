import "./App.css";
import AppList from "./AppList";
import Rating from "./Rating";

function App() {
  return (
    <div>
      <AppList
        options={["Free Fire", "Pubg", "CandyCrush", "Call Of Duty"]}
        showRatingsColumn
      />
    </div>
  );
}

// output
// Call of Duty: 0
// Free Fire: 5

export default App;

// `${JSON.stringify(ob)}`
