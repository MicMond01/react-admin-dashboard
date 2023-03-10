import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";
import { tokens } from "../../theme";
import { Box } from "@mui/material";
import { Typography } from "@mui/material/";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
import AddNewContact from "./AddNewContact";
// import CustomAvatar from '../TableComponents/CustomAvatar'
// import { ReactComponent as RedArrow } from '../../assets/icons/High.svg'
// import { ReactComponent as YellowArrow } from '../../assets/icons/Medium.svg'
// import { ReactComponent as BlueArrow } from '../../assets/icons/Low.svg'

const TaskInformation = styled.div`
  width: 250px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  border-radius: 10px;
  margin-top: 15px;

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
              // maxWidth="280px"
              // mb="10px"
              sx={{
                bgcolor: colors.redAccent[800],
                paddingTop: "5px",
                borderRadius: "10px 10px 0 0",
              }}
            >
              <Box
                sx={{
                  bgcolor: colors.grey[800],
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
                    variant="h4"
                    fontWeight={theme.typography.fontWeightBold}
                  >
                    {item.type}
                  </Typography>
                  <Box>
                    <IconButton>
                      <AddNewContact />
                    </IconButton>
                  </Box>
                </Box>

                <Box>
                  <Box
                    sx={{
                      bgcolor: colors.grey[700],
                      width: "150px",
                      borderRadius: "7px",
                      marginBottom: "10px",
                    }}
                  >
                    <Typography
                      sx={{ color: colors.grey[200], textAlign: "center" }}
                    >
                      {item.name}
                    </Typography>
                  </Box>
                  <Box display="flex" marginBottom="5px">
                    <Typography
                      sx={{ color: colors.grey[400], marginRight: "5px" }}
                    >
                      Telephone:
                    </Typography>
                    <Typography sx={{ color: colors.grey[200] }}>
                      {item.telephone}
                    </Typography>
                  </Box>
                  <Box display="flex" marginBottom="5px">
                    <Typography
                      sx={{ color: colors.grey[400], marginRight: "5px" }}
                    >
                      Email:
                    </Typography>
                    <Typography sx={{ color: colors.grey[200] }}>
                      {item.email}
                    </Typography>
                  </Box>
                  <Box display="flex" marginBottom="5px">
                    <Typography
                      sx={{ color: colors.grey[400], marginRight: "5px" }}
                    >
                      Address:
                    </Typography>
                    <Typography sx={{ color: colors.grey[200] }}>
                      {item.address}
                    </Typography>
                  </Box>
                  <Box display="flex" marginBottom="5px">
                    <Typography
                      sx={{ color: colors.grey[400], marginRight: "5px" }}
                    >
                      City:
                    </Typography>
                    <Typography sx={{ color: colors.grey[200] }}>
                      {item.city}
                    </Typography>
                  </Box>
                  <Box display="flex" marginBottom="5px">
                    <Typography
                      sx={{ color: colors.grey[400], marginRight: "5px" }}
                    >
                      Register Id:
                    </Typography>
                    <Typography sx={{ color: colors.grey[200] }}>
                      {item.id}
                    </Typography>
                  </Box>
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
