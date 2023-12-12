import "./App.css";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import TodoList from "./components/TodoList";
import Accordion from "./components/Accordion";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DragDrop from "./components/DragDrop";
import List from "./components/List";
import Crypto from "./components/Crypto";
import Crypto2 from "./components/Cryoto2";
import Slider from "./components/Slider";
import Splide from "./components/Splide";
import Splide2 from "./components/Splide2";

function App() {
  return (
    <div>
      <Navbar />
      <Signup />
      <TodoList />
      <Accordion />
      <DndProvider backend={HTML5Backend}>
        <DragDrop />
      </DndProvider>
      <List />
      <Crypto />
      <Crypto2 />
      <Slider />
      <Splide />
      <Splide2 />
    </div>
  );
}

export default App;
