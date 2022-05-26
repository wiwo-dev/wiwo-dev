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

  const [clicked, setClicked] = useState(0);

  const addClick = () => {
    if (clicked === 3) {
      setClicked(0);
      return;
    }
    setClicked(clicked + 1);
  };

  //0 cześć
  //1 tu będzie strona...
  //2 już niedługo
  //3 obiecuję!

  return (
    <div className="flex items-center justify-center select-none //bg-green-300 h-screen-js">
      <WindowCard onClick={addClick}>
        {clicked === 0 ? (
          <Heading variant="huge">Cześć 🖐️</Heading>
        ) : clicked === 1 ? (
          <Heading>tu będzie strona</Heading>
        ) : clicked === 2 ? (
          <Heading>już niedługo</Heading>
        ) : (
          <Heading>obiecuję 🙈</Heading>
        )}
      </WindowCard>
    </div>
  );
}

export default App;
