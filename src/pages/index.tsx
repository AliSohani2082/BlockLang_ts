import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Tabs, Tab, Container, Box } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import { useSelector, useDispatch } from "react-redux";
import { TabPanel } from "../components";
import VerticalTabs from "../components/VerticalTabs";
import FileEditor from "../components/FileEditor/FileEditor";

const HomePage = () => {
  const tabs = useSelector((state) =>
    state.directory.files.filter((file: FileTab) => file.isOpen)
  );
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
        height: "100% ",
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
        <Routes>
          {tabs.map((tab: FileTab, index: number) => (
            <Route
              path={tab.title}
              key={index}
              element={<FileEditor tab={tab} />}
            />
          ))}
        </Routes>
      </Box>
    </Box>
  );
};

export default HomePage;
