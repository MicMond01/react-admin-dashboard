import React, { useState } from "react";
import styled from "@emotion/styled";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
import { tokens } from "../../theme";
import TaskCard from "./../../components/leadsCompo/ContactCard";
import { columnsFromBackend } from "./../../components/leadsCompo/DroppableData";
import Form from "../../components/control/Form";
// import AddNewContact from "./../../components/leadsCompo/AddNewContact";

const Container = styled.div`
  display: flex;
  margin-top: 75px;
`;

const TaskList = styled.div`
  min-height: 100px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  background: #f3f3f3;
  width: 541px;
  border-radius: 5px;
  padding: 15px 15px;
  margin-right: 45px;
`;

const TaskColumnStyles = styled.div`
  margin: 8px;
  display: flex;
  min-height: 80vh;
`;

const Title = styled.span`
  color: #10957d;
  background: rgba(16, 149, 125, 0.15);
  padding: 2px 10px;
  border-radius: 5px;
  align-self: flex-start;
`;

const Leads = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [columns, setColumns] = useState(columnsFromBackend);

  // console.log();
  const onDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return;
    const { source, destination } = result;
    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      });
    }
  };

  const [open, setOpen] = React.useState(false);
  const [selectedBtn, setSelectedBtn] = useState("");

  const handleClickOpen = (direction) => {
    setOpen(true);
    setSelectedBtn(direction);
  };

  const handleFormSubmit = (result) => {
    const newData = result;

    newData.registrarId = 565778;
    newData.age = 48;
    newData.id = 76;
    newData.zipCode = 76;

    // console.log(newData);
    setColumns((prev) => ({
      ...prev,
      [selectedBtn]: { items: [...prev[selectedBtn].items, newData] },
    }));

    if (
      newData.type !== "" &&
      newData.city !== "" &&
      newData.email !== "" &&
      newData.name !== "" &&
      newData.phone !== ""
    ) {
      setOpen(false);
    }
  };

  return (
    <DragDropContext
      onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
    >
      <Container>
        <TaskColumnStyles>
          {Object.entries(columns).map(([columnId, column], index) => {
            return (
              <Droppable key={columnId} droppableId={columnId}>
                {(provided, snapshot) => (
                  <Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        width: "541px",
                        padding: "0 15px",
                        height: "40px",
                        bgcolor: colors.grey[800],
                      }}
                    >
                      <Box>
                        <Title>{column.title}</Title>
                      </Box>
                      <Box>
                        <IconButton
                          onClick={() =>
                            handleClickOpen(
                              column.title === "Staff" ? "left" : "right"
                            )
                          }
                          sx={{
                            bgcolor: colors.redAccent[800],
                            height: "25px",
                            borderRadius: "5px",
                          }}
                        >
                          <Typography>Add New Contact</Typography>
                        </IconButton>
                      </Box>
                      <Box open={open} position="absolute">
                        <Form
                          open={open}
                          setOpen={setOpen}
                          handleFormSubmit={handleFormSubmit}
                        />
                      </Box>
                    </Box>
                    <TaskList
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                    >
                      {column.items.map((item, index) => (
                        <TaskCard key={index} index={index} item={item} />
                      ))}
                      {provided.placeholder}
                    </TaskList>
                  </Box>
                )}
              </Droppable>
            );
          })}
        </TaskColumnStyles>
      </Container>
    </DragDropContext>
  );
};

export default Leads;
