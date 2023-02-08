import { useState } from "react";
import "./App.css";

function App() {
  const [colorOne, setColorOne] = useState("#3148db");
  const [colorTwo, setColorTwo] = useState("#ffff00");
  const [gradientText, setGradientText] = useState("");
  const [isHidden, setIsHidden] = useState(true);
  const [isCopied, setIsCopied] = useState(false);

  const changeColorOne = (e) => {
    setColorOne(e.target.value);
    changeGradient(e.target.value, colorTwo);
  };

  const changeColorTwo = (e) => {
    setColorTwo(e.target.value);
    changeGradient(colorOne, e.target.value);
  };

  const changeGradient = (colorOne, colorTwo) => {
    document.documentElement.style.setProperty("--beginGradient", colorOne);
    document.documentElement.style.setProperty("--endGradient", colorTwo);
    changeGradientText();
  };

  const changeGradientText = () => {
    const indexOfRepeat = getComputedStyle(document.body).background.indexOf(
      "repeat"
    );
    const transformedText = getComputedStyle(document.body).background.slice(
      17,
      indexOfRepeat
    );
    setGradientText(transformedText);
    setIsHidden(false);
  };

  const copyTextToClipboard = () => {
    navigator.clipboard.writeText(gradientText);
    setIsCopied(true);
  };

  return (
    <>
      <h1 className="main-title">Background Generator</h1>
      <input
        type="color"
        className="color1"
        value={colorOne}
        onChange={changeColorOne}
      />
      <input
        type="color"
        className="color2"
        value={colorTwo}
        onChange={changeColorTwo}
      />
      <h2>Current css background</h2>
      <div className="wrapper">
        <h3 className="gradient-text">{gradientText}</h3>
        <div className="tooltip">
          <span className="tooltiptext" id="myTooltip">
            {isCopied ? "Copied!" : "Copy to clipboard"}
          </span>
          {!isHidden && (
            <img
              src="/clone.png"
              alt="clone button"
              className="copy-btn"
              onClick={copyTextToClipboard}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
