import "./App.css";
import Content from "./components/Content";
import Navbar from "./components/Navbar";

const colorText1 = "#2b2b2b";
const colorText2 = "#4a4a4a";

const arrowColor = "#000";
const dividerColor = "#ddd";

const backgroundColor1 = "#edece8";
const backgroundColor2 = "#d2cfcb";

const variablesStyle = `
--text-color-1: ${colorText1};
--text-color-2: ${colorText2};
--arrow-color: ${arrowColor};
--divider-color-1: ${dividerColor};
--background-color-1: ${backgroundColor1};
--background-color-2: ${backgroundColor2};

`;

const root = document.documentElement;
root.style.cssText = variablesStyle;
function App() {
  return (
    <div className="page-wrapper">
      <Navbar />
      <Content />
    </div>
  );
}

export default App;
