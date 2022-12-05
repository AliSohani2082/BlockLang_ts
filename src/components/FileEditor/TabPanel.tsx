import * as React from "react";
import Stack from "@mui/material/Stack";
import {
  Typography,
  IconButton,
  Paper,
  Box,
  Modal,
  TextField,
  Button,
} from "@mui/material";
import { styled, ThemeProvider } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import { useSelector, useDispatch } from "react-redux";
import { closeTab, addFile } from "../../redux/features/directorySlice";
import { useNavigate } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.h5,
  cursor: "pointer",
  borderRadius: 0,
  height: "33px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  border: `1px solid ${theme.palette.divider}`,
  padding: `0 ${theme.spacing(1)}`,
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function TabPanel() {
  const navigate = useNavigate();
  const files = useSelector((state) => state.directory.files);
  const [openModal, setOpenModal] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const dispatch = useDispatch();

  const generateId = () => {
    const fileIds = files.map((file: FileTab) => file.id);
    console.log(fileIds);
    let id = 0;
    while (fileIds.includes(id)) id++;
    return id;
  };

  const fileGenerator: (title: string) => FileTab = (title) => ({
    id: generateId(),
    title: title,
    type: "function",
    content: "this is a new Tab",
    isSaved: false,
    isOpen: true,
  });

  const handleRename = (e: any) => {
    e.preventDefault();
  };

  const handleAddTab = (e: any) => {
    e.preventDefault();
    setOpenModal(true);
    setTitle("");
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setTitle("");
  };

  const handleSubmit = () => {
    if (title !== "") {
      dispatch(addFile(fileGenerator(title)));
      setOpenModal(false);
    }
  };

  return (
    <Box sx={{ width: "100%", height: "35px" }}>
      <Stack direction="row" alignItems="center">
        {files
          .filter((file: FileTab) => file.isOpen)
          .map((tab: FileTab) => (
            <Item
              onDoubleClick={(e) => handleRename(e)}
              onClick={(e) => navigate(`/${tab.title}`)}
              key={tab.id}
            >
              <Typography>{tab.title}</Typography>
              <IconButton
                size="small"
                onClick={(e: any) => dispatch(closeTab(tab.id))}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            </Item>
          ))}
        <IconButton
          size="small"
          onClick={(e) => handleAddTab(e)}
          sx={{ marginLeft: 1 }}
        >
          <AddIcon fontSize="inherit" />
        </IconButton>
        <Modal
          open={openModal}
          onClose={handleCloseModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Paper
            sx={{
              position: "absolute" as "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "start",
            }}
          >
            <Stack spacing={2}>
              <Typography>Enter the Title</Typography>
              <TextField
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                id="standard-basic"
                label="Name"
                variant="standard"
                required
              />
              <Button onClick={handleSubmit}>Add File</Button>
            </Stack>
          </Paper>
        </Modal>
      </Stack>
    </Box>
  );
}

// function TabPanel(props: TabPanelProps) {
//   const { children, value, index, ...other } = props;
//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

export default TabPanel;
