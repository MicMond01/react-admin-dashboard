import { Box, useTheme } from "@mui/material";
import { Typography } from "@mui/material/";
import KnowledgebaseCard from "../../components/knowledgebaseCompo/KnowledgebaseCard";
import { tokens } from "./../../theme";
import TwitterIcon from "@mui/icons-material/Twitter";
import WorkIcon from "@mui/icons-material/Work";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import GitHubIcon from "@mui/icons-material/GitHub";

const Knowledgebase = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Box
        sx={{
          mt: "5rem",
          display: "grid",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography variant="h2" sx={{ color: colors.blueAccent[400] }}>
          Knowledgebase
        </Typography>
        <Typography variant="h4" mt={"10px"}>
          Get answers and help from our knowledgebase
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          marginRight: "-15px",
          marginLeft: "-15px",
        }}
      >
        <KnowledgebaseCard
          icon={<WorkIcon sx={{ fontSize: "30px" }} />}
          head={"Tech Job"}
          body={
            "How to land internships and full-time roles as a newbie in tech."
          }
          link={"https://twitter.com/DaveyHert/status/1645341882736693249?s=20"}
          linkBody={"open link"}
        />
        <KnowledgebaseCard
          icon={<PlayCircleOutlineIcon sx={{ fontSize: "30px" }} />}
          head={"Video Tutorial"}
          body={"Learn React JS with one video"}
          link={"https://youtu.be/bMknfKXIFA8"}
          linkBody={"open link"}
        />
        <KnowledgebaseCard
          icon={<GitHubIcon sx={{ fontSize: "30px" }} />}
          head={"Checkout my Github"}
          body={"The beauty of what I do all in my repositories "}
          link={"https://github.com/MicMond01"}
          linkBody={"open link"}
        />
        <KnowledgebaseCard
          icon={<TwitterIcon sx={{ fontSize: "30px" }} />}
          head={"Twitter"}
          body={"Got a job for me? Reach me on Twitter"}
          link={"https://twitter.com/CaptainNigeriaa"}
          linkBody={"open link"}
        />
      </Box>
    </Box>
  );
};

export default Knowledgebase;
