/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import { useDrag, useDrop } from "react-dnd";

const BoxItem = ({ id, text, index, moveBox }) => {
  const [{ isDragging }, drag] = useDrag({
    type: BOX,
    item: { id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [{ canDrop, isOver }, drop] = useDrop({
    accept: "box",
    drop: (item) => {
      moveBox(item.index, index);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  const opacity = isDragging ? 0.5 : 1;

  return (
    <Box
      ref={drop}
      bg="gray.200"
      p="4"
      m="4"
      opacity={opacity}
      cursor="move"
      boxShadow={isOver && canDrop ? "0 0 1rem green" : ""}
      transition="all 0.2s ease-in-out"
    >
      <Box ref={drag} opacity={opacity} cursor="move">
        {text}
      </Box>
    </Box>
  );
};

const DragAndDrop = () => {
  const [boxes, setBoxes] = useState([
    { id: "1", text: "Box 1" },
    { id: "2", text: "Box 2" },
    { id: "3", text: "Box 3" },
    { id: "4", text: "Box 4" },
  ]);

  const moveBox = (dragIndex, dropIndex) => {
    const dragBox = boxes[dragIndex];
    setBoxes(
      update(boxes, {
        $splice: [
          [dragIndex, 1],
          [dropIndex, 0, dragBox],
        ],
      })
    );
  };

  return (
    <Box display="flex">
      {boxes.map((box, index) => (
        <BoxItem
          key={box.id}
          id={box.id}
          text={box.text}
          index={index}
          moveBox={moveBox}
        />
      ))}
    </Box>
  );
};

export default DragAndDrop;
