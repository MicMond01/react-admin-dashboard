import React, { useState } from "react";
import styled from "@emotion/styled";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
import { tokens } from "../../theme";
import { todoHeaders } from "../../data";
// import AddNewContact from "./../../components/leadsCompo/AddNewContact";
import TaskCard from "./../../components/taskCompo/TaskCard";
import TaskForm from "../../components/control/TaskForm";
import StatsCard from "./../../components/headers/StatsCard";

const Container = styled.div`
  display: flex;
  margin-top: 40px;
  width: 90vw;
  overflow-x: scroll;
`;

const TaskList = styled.div`
  height: 80vh;
  display: grid;
  justify-content: center;
  ${"" /* align-items: center; */}
  background: #292929;
  width: 300px;
  border-radius: 5px;
  ${"" /* padding: 15px 15px; */}
  margin-right: 25px;
  overflow-y: scroll;
  overflow-x: hidden;
`;

const TaskColumnStyles = styled.div`
  margin: 8px;
  display: flex;
  min-height: 80vh;
  border-radius: 10px;
`;

// const Title = styled.span`
//   color: #10957d;
//   background: rgba(16, 149, 125, 0.15);
//   padding: 2px 10px;
//   border-radius: 10px;
//   align-self: flex-start;
// `;

const Tasks = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [columns, setColumns] = useState(todoHeaders);

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
  const [taskStatus, setTaskStatus] = useState("");

  const handleClickOpen = (direction) => {
    console.log(direction);
    setOpen(true);
    setSelectedBtn(direction);
    setTaskStatus(direction);
  };

  const handleFormSubmit = (result) => {
    const newData = result;

    // newData.registrarId = 565778;
    // newData.age = 48;
    newData.id = 76;
    // newData.zipCode = 76;

    // console.log(newData);
    setColumns((prev) => ({
      ...prev,
      [selectedBtn]: { items: [...prev[selectedBtn].items, newData] },
    }));

    if (
      newData.todo !== "" &&
      newData.project !== "" &&
      newData.piority !== "" &&
      newData.status !== "" &&
      newData.created !== "" &&
      newData.dueDate !== ""
    ) {
      setOpen(false);
    }
  };

  return (
    <>
      <Box
        justifyContent="space-between"
        gap="10px"
        mt="5rem"
        sx={{
          display: "flex",
          [theme.breakpoints.down("md")]: {
            display: "grid",
            gap: "10px",
            width: "100vw",
          },
        }}
      >
        {Object.entries(columns).map(([columnId, column]) => {
          return (
            <StatsCard
              key={columnId}
              top={column.title}
              span={column.items.length}
              hValue={"h5"}
              colorLine={column.color}
            />
          );
        })}
      </Box>

      <DragDropContext
        onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
      >
        <Container>
          <TaskColumnStyles>
            {Object.entries(columns).map(([columnId, column]) => {
              return (
                <Droppable key={columnId} droppableId={columnId}>
                  {(provided, snapshot) => (
                    <Box>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          width: "300px",
                          padding: "0 15px",
                          height: "60px",
                          borderRadius: "10px 10px 0 0",
                          borderTop: `${column.border}`,
                          bgcolor: colors.grey[800],
                        }}
                      >
                        <Box>
                          <Typography
                            sx={{
                              fontWeight: theme.typography.fontWeightMedium,
                              fontSize: theme.typography.h5,
                            }}
                          >
                            {column.title}
                          </Typography>
                        </Box>
                        <Box>
                          <IconButton
                            onClick={() =>
                              handleClickOpen(
                                column.title === "New"
                                  ? "New"
                                  : column.title === "In Progress"
                                  ? "In Progress"
                                  : column.title === "Testing"
                                  ? "Testing"
                                  : column.title === "Awaiting Feedback"
                                  ? "Awaiting Feedback"
                                  : "Completed"
                              )
                            }
                            sx={{
                              bgcolor: colors.redAccent[800],
                              height: "25px",
                              borderRadius: "5px",
                            }}
                          >
                            <Typography>Add New</Typography>
                          </IconButton>
                        </Box>
                        <Box open={open} position="absolute">
                          <TaskForm
                            open={open}
                            setOpen={setOpen}
                            taskStatus={taskStatus}
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
    </>
  );
};

export default Tasks;
