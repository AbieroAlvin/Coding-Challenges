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
    </div>
  );
}

export default App;
