import { Droppable, Draggable } from "react-beautiful-dnd";

const StoreList = ({ name, items, id }) => {
  return (
    <Droppable droppableId={id}>
      {(provided) => (
        <div {...provided.droppableProps} ref={provided.innerRef}>
          <div className="bg-cyan-400 text-center">
            <h3 className="font-bold text-black">{name}</h3>
          </div>
          <div>
            {items.map((item, index) => (
              <Draggable draggableId={item.id} index={index} key={item.id}>
                {(provided) => (
                  <div
                    className="border-y-cyan-300 border-y-[1px] mt-1"
                    {...provided.dragHandleProps}
                    {...provided.draggableProps}
                    ref={provided.innerRef}
                  >
                    <h4 className="font-medium text-gray-900">{item.name}</h4>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        </div>
      )}
    </Droppable>
  );
};

export default StoreList;
