import Picture from "./Picture";
import { useState } from "react";
import { useDrop } from "react-dnd";

const PictureList = [
  {
    id: 1,
    url: "https://images.pexels.com/photos/831475/pexels-photo-831475.jpeg?auto=compress&cs=tinysrgb&w=150",
  },
  {
    id: 2,
    url: "https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=150",
  },
  {
    id: 3,
    url: "https://images.pexels.com/photos/248687/pexels-photo-248687.jpeg?auto=compress&cs=tinysrgb&w=150",
  },
];

const DragDrop = () => {
  const [board, setBoard] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "image",
    drop: (item) => addImageToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addImageToBoard = (id) => {
    const pictureList = PictureList.filter((picture) => id === picture.id);
    setBoard((board) => [...board, pictureList[0]]);
    // setBoard([pictureList[0]])//replace image
  };

  return (
    <div className="flex flex-col w-full h-[90vh] items-center bg-green-200 py-[20px]">
      <div className="Pictures flex gap-3 flex-wrap ">
        {PictureList.map((picture) => {
          return <Picture url={picture.url} id={picture.id} />;
        })}
      </div>
      <div
        className="Board flex flex-wrap gap-2 border-[5px] border-black h-[300px] w-3/4"
        ref={drop}
      >
        {board.map((picture) => {
          return <Picture url={picture.url} id={picture.id} />;
        })}
      </div>
    </div>
  );
};

export default DragDrop;
