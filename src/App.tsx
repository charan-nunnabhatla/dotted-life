import Head from "./components/custom/head";
import Selection from "./components/custom/selection";
import "./App.css";
import Labels from "./components/custom/labels";
import Inputs from "./components/custom/inputs";
import Grid from "./components/custom/grid";

function App() {
  return (
    <div className="w-screen h-full p-5">
      <Head />
      <Labels />
      <Selection />
      <Inputs />
      <Grid />
    </div>
  );
}

export default App;
