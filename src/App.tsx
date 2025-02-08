import "./App.css";
import Content from "./components/Content";
import Navbar from "./components/Navbar";

const colorText1 = "#2b2b2b";
const colorText2 = "#4a4a4a";

const arrowColor = "#000";
const dividerColor = "#bbb";

const backgroundColor1 = "#edece8";
const backgroundColor2 = "#d2cfcb";

const sizeText1 = "20px";
const sizeText2 = "16px";

const sizeDivider = "3px";

const variablesStyle = `
--color-text-1: ${colorText1};
--color-text-2: ${colorText2};
--color-arrow: ${arrowColor};
--color-divider-1: ${dividerColor};
--color-background-1: ${backgroundColor1};
--color-background-2: ${backgroundColor2};
--size-text-1: ${sizeText1};
--size-text-2: ${sizeText2};
--size-divider: ${sizeDivider};

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
