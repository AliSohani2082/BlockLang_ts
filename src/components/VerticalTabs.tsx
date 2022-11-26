import * as React from "react";
import { Tooltip, Tab, Tabs, Typography, Box, Accordion, AccordionSummary, AccordionDetails, Paper} from "@mui/material";
import { styled } from '@mui/material/styles';
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import PersonIcon from "@mui/icons-material/Person";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SideBarSection from "./SideBarSection";

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
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

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

interface StyledTabsProps {
  children?: React.ReactNode;
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

const StyledTabs = styled((props: StyledTabsProps) => (
  <Tabs
    {...props}
    orientation= 'vertical'
    // TabIndicatorProps={{ children: <span cl  assName="MuiTabs-indicatorSpan" /> }}
  />
))(
  ({ theme }) => ({
    width: '50px',
    textTransform: 'none',
    minWidth: 0,
    [theme.breakpoints.up('sm')]: {
      minWidth: 0,
    },
    fontWeight: theme.typography.fontWeightRegular,
    color: 'rgba(0, 0, 0, 0.85)',
    '&:hover': {
      color: '#40a9ff',
      opacity: 1,
    },
    '&.Mui-selected': {
      color: '#1890ff',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&.Mui-focusVisible': {
      backgroundColor: '#d1eaff',
    },
  }),
);

interface StyledTabProps {
  label?: string;
}

const StyledTab = styled((props: StyledTabProps) => (
  <Tab disableRipple {...props} />
))(({ theme }) => ({
  width: '50px',
  textTransform: 'none',
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: theme.typography.pxToRem(15),
  marginRight: theme.spacing(1),
  color: 'rgba(255, 255, 255, 0.7)',
  '&.Mui-selected': {
    color: '#fff',
  },
  '&.Mui-focusVisible': {
    backgroundColor: 'rgba(100, 95, 228, 0.32)',
  },
}));


export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        display: "flex",
        width: "100%",
        height: "100%",
      }}
    >
      <StyledTabs
        value={value}
        onChange={handleChange}
      >
        {tabs.map((tab, index) => (
          <Tooltip key={index} title={tab.name} placement="right" arrow sx={{width: 50}}>
            <Tab
              icon={tab.icon}
              aria-label={tab.name}
              {...a11yProps(index)}
              sx={{ height: 50, width: 'inherit' }}
            />
          </Tooltip>
        ))}
      </StyledTabs>
      <Box sx={{ width: '200px'}}>
        {tabs.map((tab, index) => (
          <TabPanel key={index} value={value} index={index}>
            <Box sx={{ display: "flex", flexDirection: "column", padding: 0 }}>
              {typeof tab.content === "object" ? (
                <Box sx={{ display: 'flex', flexDirection: 'column', width: 'inherit'}}>
                  {tab.content.map((content, index) => (
                    // <SideBarSection title={content.title}>
                    //   <div>this is good</div>
                    // </SideBarSection>
                    <Box sx={{width: '100%', height: '40', border: '3px solid black', background: 'gray'}}>ddd</Box>
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
