import * as React from "react";
import { Tooltip, Tab, Tabs, Typography, Box, Accordion, AccordionSummary, AccordionDetails, Paper} from "@mui/material";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import PersonIcon from "@mui/icons-material/Person";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const tabs: VerticalTab[] = [
  {
    name: "Blocks",
    icon: <ViewInArIcon />,
    content: [
      {
        title: "Blocks",
        content: [
          {
            title: "Loop",
          },
          {
            title: "If",
          },
          {
            title: "Motor",
          },
          {
            title: "Delay",
          },
        ],
      },
    ],
  },
  {
    name: "User",
    icon: <PersonIcon />,
    content: "this is user page",
  },
  {
    name: "Robot",
    icon: <PrecisionManufacturingIcon />,
    content: "this is a page for robot",
  },
];

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0, width: 400 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        width: "20%",
        height: "100%",
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{
          borderRight: 1,
          borderColor: "divider",
          width: 50,
          height: "100%",
        }}
      >
        {tabs.map((tab, index) => (
          <Tooltip key={index} title={tab.name} placement="right" arrow>
            <Tab
              icon={tab.icon}
              aria-label={tab.name}
              {...a11yProps(0)}
              sx={{ height: 50, width: 50 }}
            />
          </Tooltip>
        ))}
      </Tabs>
      <Box sx={{ width: 100 }}>
        {tabs.map((tab, index) => (
          <TabPanel key={index} value={value} index={index}>
            <Box sx={{ display: "flex", flexDirection: "column", padding: 0 }}>
              {typeof tab.content === "object" ? (
                <Box sx={{ display: 'flex', flexDirection: 'column'}}>
                  {tab.content.map((content, index) => (
                    <Accordion key={index}>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography>{content.title}</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        {typeof content.content === "object" && content.content.map((block, index2) => (
                          <Paper key={index2} sx={{width: 30, height: 30}}>
                            <Typography>{block.title}</Typography>
                          </Paper>
                        ))}
                      </AccordionDetails>
                    </Accordion>
                  ))}
                </Box>
              ) : (
                <Typography>{tab.content}</Typography>
              )}
            </Box>
          </TabPanel>
        ))}
      </Box>
    </Box>
  );
}

// import * as React from 'react';
// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import Typography from '@mui/material/Typography';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// export default function SimpleAccordion() {
//   return (
//     <div>
//       <Accordion>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel1a-content"
//           id="panel1a-header"
//         >
//           <Typography>Accordion 1</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//             malesuada lacus ex, sit amet blandit leo lobortis eget.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//       <Accordion>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel2a-content"
//           id="panel2a-header"
//         >
//           <Typography>Accordion 2</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//             malesuada lacus ex, sit amet blandit leo lobortis eget.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//       <Accordion disabled>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel3a-content"
//           id="panel3a-header"
//         >
//           <Typography>Disabled Accordion</Typography>
//         </AccordionSummary>
//       </Accordion>
//     </div>
//   );
// }
