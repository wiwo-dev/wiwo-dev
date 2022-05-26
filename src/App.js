import "./App.css";
import { useEffect, useState } from "react";
import WindowCard from "./components/WindowCard";
import { Heading } from "@chakra-ui/react";

function App() {
  const onResize = () => {
    document.querySelector(":root").style.setProperty("--vh", window.innerHeight / 100 + "px");
  };

  useEffect(() => {
    window.addEventListener("resize", onResize);
    onResize();

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const [clicked, setClicked] = useState(false);

  return (
    <div className="flex items-center justify-center select-none //bg-green-300 h-screen-js">
      <WindowCard onClick={() => setClicked(!clicked)}>
        {!clicked ? <Heading variant="huge">Cześć 🖐️</Heading> : <Heading>tu będzie strona</Heading>}
      </WindowCard>
    </div>
  );
}

export default App;
