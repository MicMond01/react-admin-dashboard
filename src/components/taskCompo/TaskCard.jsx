import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";
import { tokens } from "../../theme";
import { Box } from "@mui/material";
import { Typography } from "@mui/material/";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
// import AddNewContact from "./AddNewContact";
// import CustomAvatar from '../TableComponents/CustomAvatar'
// import { ReactComponent as RedArrow } from '../../assets/icons/High.svg'
// import { ReactComponent as YellowArrow } from '../../assets/icons/Medium.svg'
// import { ReactComponent as BlueArrow } from '../../assets/icons/Low.svg'

const TaskInformation = styled.div`
  width: 270px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  border-radius: 10px;
  margin-top: 10px;

  .secondary-details {
    display: flex;
    ${"" /* justify-content: space-between; */}
    align-items: center;
    ${"" /* width: 100%; */}
    font-size: 12px;
    font-weight: 400px;
    color: #7d7d7d;
  }
  /* .priority{ */
  /* margin-right: 12px; */
  /* align-self: center;
    svg{
      width: 12px !important;
      height: 12px !important;
      margin-right: import AddNewContact from './AddNewContact';
12px; */
  /* margin-top: 2px; */
  /* } */
  /* } */
`;

const TaskCard = ({ item, index }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Draggable draggableId={item.id.toString()} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <TaskInformation>
            <Box
              sx={{
                bgcolor: colors.grey[600],
                padding: "15px",
                borderRadius: "10px 10px 0 0",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "5px",
                }}
              >
                <Typography
                  variant="h7"
                  fontWeight={theme.typography.fontWeightBold}
                >
                  {item.todo}
                </Typography>
                <Box>
                  <IconButton>{/* <AddNewContact /> */}</IconButton>
                </Box>
              </Box>

              <Box>
                <Box display="flex" marginBottom="5px">
                  <Typography
                    sx={{
                      color:
                        item.priority === "Normal"
                          ? colors.blueAccent[500]
                          : colors.redAccent[500],
                      fontWeight: theme.typography.normal,
                      bgcolor: colors.grey[800],
                      padding: "3px",
                      borderRadius: "5px",
                    }}
                  >
                    {item.priority}
                  </Typography>
                </Box>
                <Box display="flex" marginBottom="5px">
                  <Typography
                    sx={{ color: colors.grey[400], marginRight: "5px" }}
                  >
                    Project:
                  </Typography>
                  <Typography sx={{ color: colors.grey[200] }}>
                    {item.project}
                  </Typography>
                </Box>
                <Box display="flex" marginBottom="5px">
                  <Typography
                    sx={{ color: colors.grey[400], marginRight: "5px" }}
                  >
                    Client:
                  </Typography>
                  <Typography sx={{ color: colors.grey[200] }}>
                    {item.email}
                  </Typography>
                </Box>
                <Box display="flex" marginBottom="5px">
                  <Typography
                    sx={{ color: colors.grey[400], marginRight: "5px" }}
                  >
                    Created:
                  </Typography>
                  <Typography sx={{ color: colors.grey[200] }}>
                    {item.created}
                  </Typography>
                </Box>
                <Box display="flex" marginBottom="5px">
                  <Typography
                    sx={{ color: colors.grey[400], marginRight: "5px" }}
                  >
                    Due:
                  </Typography>
                  <Typography sx={{ color: colors.grey[200] }}>
                    {item.dueDate}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </TaskInformation>
        </div>
      )}
    </Draggable>
  );
};

export default TaskCard;

// <span className="priority">
// {item.Priority === 'High' ? (<RedArrow />) : item.Priority === 'Medium' ? (<YellowArrow />) : (<BlueArrow />)}
// </span>
// <div><CustomAvatar name={item.Assignee} isTable={false} size={16} /></div>

// const DragItem = styled.div`
//   padding: 10px;
//   border-radius: 6px;
//   box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
//   background: white;
//   margin: 0 0 8px 0;
//   display: grid;
//   grid-gap: 20px;
//   flex-direction: column;
// `;
