import { useState } from "react";
import { Tabs, Tab } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

const HomePage = () => {
  const [value, setValue] = useState<number>();
  const files = useSelector<{ files: FileTab[] }, FileTab[]>((state) => state.files);

  const handleChange = (v: number) => {
    setValue(v);
  };

  return (
    <>
      <Tabs
        value={value}
        onChange={(_, v) => handleChange(v)}
        variant="scrollable"
        scrollButtons={false}
        aria-label="scrollable prevent tabs example"
      >
        {files.map((file) => (
          <Tab label={file.name} />
        ))}
      </Tabs>
      {files.map((file) => (
        <div value={value} index={0}>
          Item One
        </div>
      ))}
    </>
  );
};

export default HomePage;
