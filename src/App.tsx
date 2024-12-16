import Head from "./components/custom/head";
import Selection from "./components/custom/selection";
import "./App.css";
import Inputs from "./components/custom/inputs";
import Grid from "./components/custom/grid";

function App() {
  return (
    <div className="w-screen h-full overflow-hidden">
      <Head />
      <Selection />
      <Inputs />
      <Grid />
    </div>
  );
}

export default App;
