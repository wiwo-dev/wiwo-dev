import "./App.css";
import { useEffect } from "react";
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

  return (
    <div
      className="flex items-center justify-center //bg-green-300 h-screen-js">
      <WindowCard>
        <Heading variant="huge">Cześć 🖐️</Heading>
      </WindowCard>
    </div>
  );
}

export default App;
