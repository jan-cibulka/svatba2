/* eslint-disable @typescript-eslint/ban-ts-comment */
import "./App.css";
import Content from "./components/Content";
import Navbar from "./components/Navbar";

//@ts-ignore
import "@fontsource/beau-rivage";
//@ts-ignore
import "@fontsource/rufina";

const colorText1 = "#2b2b2b";
const colorText2 = "#4a4a4a";

const arrowColor = "#000";
const dividerColor = "#aaa";

const backgroundColor1 = "#edece8";
const backgroundColor2 = "#d2cfcb";

const sizeText1 = "20px";
const sizeText2 = "16px";
const sizeText3 = "30px";

const sizeDivider = "2px";

const pageContentRatio = "60%";
export const desktopThreshold = 768;

const variablesStyle = `
--color-text-1: ${colorText1};
--color-text-2: ${colorText2};
--color-arrow: ${arrowColor};
--color-divider-1: ${dividerColor};
--color-background-1: ${backgroundColor1};
--color-background-2: ${backgroundColor2};
--size-text-1: ${sizeText1};
--size-text-2: ${sizeText2};
--size-text-3: ${sizeText3};
--size-divider: ${sizeDivider};
--page-content-ratio: ${pageContentRatio};
--breakpoint-desktop: ${desktopThreshold}px;
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
