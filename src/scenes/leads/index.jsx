// import { Box, List } from "@mui/material";
// import React, { useState } from "react";
// import { mockDataContacts } from "../../data/mockData";
// import ContactCard from "./../../components/ContactCard";
// import { Draggable } from "react-beautiful-dnd";
// import { DragDropContext, Droppable } from "react-beautiful-dnd";
// // import { Draggable } from "@fullcalendar/interaction";

// const reorder = (list, startIndex, endIndex) => {
//   const result = Array.from(list);
//   const [removed] = result.splice(startIndex, 1);
//   result.splice(endIndex, 0, removed);
//   return result;
// };

// const Leads = () => {
//   const [project, setProject] = useState(mockDataContacts);

//   // const onDragEnd = (result) => {
//   //   if (!result.destination) return;
//   //   if (result.destination.index === result.source.index) return;
//   //   const projects = reorder(
//   //     project, // project is state
//   //     result.source.index,
//   //     result.destination.index
//   //   );
//   //   //store reordered state.
//   //   setProject(projects);
//   // };

//   // onDragEnd={onDragEnd}

//   return (
//     <DragDropContext>
//       <Box
//         m="20px"
//         style={{
//           display: "grid",
//           gridTemplateColumns: "65% 33%",
//           overflow: "auto",
//           gap: "20px",
//           overflowX: "hidden",
//         }}
//       >
//         <Droppable droppableId="list">
//           <List
//             style={{
//               height: "90vh",
//               width: "100%",
//               display: "grid",
//               gap: "5px",
//               gridTemplateColumns: "50% 50%",
//               overflow: "auto",
//               overflowX: "hidden",
//             }}
//           >
//             {project.slice(0, 5).map((item, index) => (
//               <Draggable index={index} key={item.id}>
//                 <ContactCard
//                   type={item.type}
//                   name={item.name}
//                   address={item.address}
//                   telephone={item.phone}
//                   email={item.email}
//                   city={item.city}
//                   id={item.registrarId}
//                 />
//               </Draggable>
//             ))}
//           </List>
//         </Droppable>
//         {/* <List
//           style={{
//             maxHeight: "90vh",
//             width: "100%",
//             display: "grid",
//             gap: "5px",
//             gridTemplateColumns: "1fr",
//             overflow: "auto",
//           }}
//         >
//           {mockDataContacts.slice(5, 20).map((item) => (
//             <ContactCard
//               key={item.id}
//               type={item.type}
//               name={item.name}
//               address={item.address}
//               telephone={item.phone}
//               email={item.email}
//               city={item.city}
//               id={item.registrarId}
//             />
//           ))}
//         </List> */}
//       </Box>
//     </DragDropContext>
//   );
// };

// export default Leads;

// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import TreeView from "@material-ui/lab/TreeView";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import TreeItem from "@material-ui/lab/TreeItem";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { TreeItem } from "@mui/lab";
import { TreeView } from "@mui/lab";

const datas = [
  { id: 2, label: "aaa" },
  { id: 3, label: "bbb" },
  { id: 4, label: "ccc" },
];

// const useStyles = makeStyles({
//   root: {
//     height: 216,
//     flexGrow: 1,
//     maxWidth: 400,
//   },
// });

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? "lightgreen" : "grey",

  // styles we need to apply on draggables
  ...draggableStyle,
});

const getListStyle = (isDraggingOver) => ({
  background: isDraggingOver ? "lightblue" : "lightgrey",
  padding: grid,
  width: 250,
});

export default function Leads() {
  // const classes = useStyles();
  const [expanded, setExpanded] = React.useState([]);
  const [selected, setSelected] = React.useState([]);

  const handleToggle = (event, nodeIds) => {
    setExpanded(nodeIds);
  };

  const handleSelect = (event, nodeIds) => {
    setSelected(nodeIds);
  };

  const onDragEnd = () => {
    alert(1);
  };

  return (
    <DragDropContext>
      <Droppable droppableId="droppable">
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={getListStyle(snapshot.isDraggingOver)}
          >
            <TreeView
              sx={{ height: 216, flexGrow: 1, maxWidth: 400 }}
              defaultCollapseIcon={<ExpandMoreIcon />}
              defaultExpandIcon={<ChevronRightIcon />}
              expanded={expanded}
              selected={selected}
              onNodeToggle={handleToggle}
              onNodeSelect={handleSelect}
            >
              <TreeItem nodeId="1" label="Applications">
                {datas.map((data, index) => (
                  <Draggable draggableId={`${data.id}`} index={index}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getItemStyle(
                          snapshot.isDragging,
                          provided.draggableProps.style
                        )}
                      >
                        <TreeItem
                          key={data.id}
                          nodeId={data.id}
                          label={data.label}
                        />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </TreeItem>
            </TreeView>
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

// export default function DndTreeView() {
//   const classes = useStyles();
//   const [expanded, setExpanded] = React.useState([]);
//   const [selected, setSelected] = React.useState([]);

//   const handleToggle = (event, nodeIds) => {
//     setExpanded(nodeIds);
//   };

//   const handleSelect = (event, nodeIds) => {
//     setSelected(nodeIds);
//   };

//   const onDragEnd = () => {
//     alert(1);
//   };

//   return (

//   );
// }
