import { useState } from "react";
import { Tabs, Tab, Container, Box } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import { useSelector, useDispatch } from "react-redux";
import { TabPanel } from "../components";
import VerticalTabs from "../components/VerticalTabs";
import FileEditor from "../components/FileEditor/FileEditor";

const HomePage = () => {
  const [value, setValue] = useState<number>(0);
  const files = useSelector<{ files: FileTab[] }, FileTab[]>(
    (state) => state.directory.files
  );

  const handleChange = (v: number) => {
    setValue(v);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "stretch",
        width: "100%",
        heigh: "100vh",
        background: "red",
      }}
    >
      <Box>
        <VerticalTabs />
      </Box>
      <Box
        sx={{
          background: "blue",
          width: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <TabPanel />
        <FileEditor />
      </Box>
    </Box>
    // {/* <Tabs
    //   value={value}
    //   onChange={(_, v) => handleChange(v)}
    //   variant="scrollable"
    //   scrollButtons={false}
    //   aria-label="scrollable prevent tabs example"
    // >
    //   {files.map((file) => (
    //     <Tab
    //       key={file.id}
    //       label={file.name}
    //       sx={{
    //         bgcolor: "background.default",
    //         color: "text.primary"
    //       }}
    //     />
    //   ))}
    // </Tabs>
    // {files.map((file) => (
    //   <TabPanel key={file.id} value={value} index={0}>
    //     Item One
    //   </TabPanel>
    // ))} */}
  );
};

export default HomePage;
