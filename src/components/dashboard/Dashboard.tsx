import {
  Box,
  Grid,
  Stack,
  Link,
  Input,
  IconButton,
  Badge,
  Typography,
} from "@mui/material";
import styrkDarkIcon from "../../../public/example-image.png";
import userImage from "../../../public/user.png";
import SearchIcon from "@mui/icons-material/Search";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import AppsRoundedIcon from "@mui/icons-material/AppsRounded";
import CloseIcon from "@mui/icons-material/Close";
import {
  ModelSecurityScore,
  ScanStatus,
  SecurityTrend,
} from "./modelSecurity";
import {
  ComplianceTrend,
  ModelScanned,
  TrustScore,
} from "./trust";
import {
  BadQueires,
  GoodQueries,
  ScoreTrend,
} from "./llmSecurity";
import {
  PrivacyScore,
  ScanStatusPrivacy,
  BadQueires as Policies,
} from "./privacy";
import { useState } from "react";



const tabsArray = [
  {
    id: 1,
    text: "Overview",
   
  },
  {
    id: 2,
    text: "Model Security",
   
  },
  {
    id: 3,
    text: "Trust",
  
  },
  {
    id: 4,
    text: "Privacy",
    
  },
  {
    id: 5,
    text: "LLM Security",
    
  },
];

const Dashboard = () => {
  const [selectedTabIndex, setSelectedTabIndex] = useState<number>(1);


  const onTabClick = (tabData: any) => {
    setSelectedTabIndex(tabData.id);
   console.log(tabData);
  };
  const [navOpen, setNavOpen] = useState<boolean>();
  return (
      <Box bgcolor="#F4F6F5">
        <Box py={4}>
          <Box maxWidth={1312} mx="auto" px={2}>
            <Grid container columnSpacing={2} alignItems="center">
              <Grid item xl="auto" className="logoWrapper">
                <Box component="img" src={styrkDarkIcon} alt="icon" />
              </Grid>
              <Grid item flex={1}>
                <Stack
                className={!navOpen ? "navigation" : "navigation topNavActive"}
                  flexWrap="nowrap"
                  direction="row"
                  spacing={2}
                >
                  {tabsArray.map((nav) => (
                    <Link
                      key={nav.id}
                      className="nav-item"
                      color={
                        nav.id === selectedTabIndex ? "primary.main" : "#597C9B"
                      }
                      textTransform="uppercase"
                      underline="none"
                      lineHeight={1}
                      fontWeight={nav.id === selectedTabIndex ? 700 : 400}
                      sx={{ cursor: "pointer" }}
                      onClick={() => onTabClick(nav)}
                    >
                      {nav.text}
                    </Link>
                  ))}
                </Stack>
              </Grid>
              <Grid item xl="auto" className="menuBox">
                <Stack direction="row" alignItems="center" spacing={2}>
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={1}
                    className="bg-white search-box"
                    px={1.5}
                    py={1}
                    borderRadius={3.5}
                  >
                    <SearchIcon sx={{ color: "#599B96" }} />
                    <Input
                      fullWidth
                      placeholder="Search"
                      disableUnderline
                      inputProps={{
                        sx: {
                          "&::placeholder": {
                            color: "#597C9B",
                            opacity: 1,
                          },
                        },
                      }}
                    />
                  </Stack>
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={1}
                    className="bg-white settings-bar"
                    px={1}
                    py={1}
                    borderRadius={3.5}
                  >
                    <IconButton
                      className="topNavToggle"
                      onClick={() => {
                        setNavOpen(!navOpen);
                      }}
                    >
                      {!navOpen ? <AppsRoundedIcon /> : <CloseIcon />}
                    </IconButton>
                    <IconButton sx={{ color: "#599B96" }} size="small">
                      <SettingsOutlinedIcon />
                    </IconButton>
                    
                    <IconButton sx={{ color: "#599B96" }} size="small">
                      <Badge
                        variant="dot"
                        sx={{
                          ".MuiBadge-dot": {
                            backgroundColor: "error.light",
                            top: 6,
                            right: 7,
                            border: 1,
                            borderColor: "#fff",
                          },
                        }}
                      >
                        <NotificationsOutlinedIcon />
                      </Badge>
                    </IconButton>
                  </Stack>
                  <Box
                    component="img"
                    src={userImage}
                    alt="ueser"
                    width={40}
                    height={40}
                    borderRadius={50}
                    className="userIcon"
                  />
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Box maxWidth={1312} mx="auto" px={2}>
          <Grid container columnSpacing={4} rowSpacing={4}>
            {/* Model Security */}
            <Grid item xs={12} sm={6} md={6} xl={3}>
              <Typography
                fontSize={14}
                color="#597C9B"
                textTransform="uppercase"
                mb={2}
              >
                Model Security
              </Typography>
              <Stack spacing={4}>
                <ModelSecurityScore />
                <ScanStatus />
                <SecurityTrend />
              </Stack>
            </Grid>
            {/* Model Security */}
            {/* TRUST */}
            <Grid item xs={12} sm={6} md={6} xl={3}>
              <Typography
                fontSize={14}
                color="#597C9B"
                textTransform="uppercase"
                mb={2}
              >
                Trust
              </Typography>
              <Stack spacing={4}>
                <TrustScore />
                <ComplianceTrend />
                <ModelScanned />
              </Stack>
            </Grid>
            {/* TRUST */}
            <Grid item xs={12} sm={6} md={6} xl={3}>
              <Typography
                fontSize={14}
                color="#597C9B"
                textTransform="uppercase"
                mb={2}
              >
                LLM Security
              </Typography>
              <Stack spacing={4}>
                <GoodQueries />
                <BadQueires />
                <ScoreTrend />
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6} md={6} xl={3}>
              <Typography
                fontSize={14}
                color="#597C9B"
                textTransform="uppercase"
                mb={2}
              >
                Privacy
              </Typography>
              <Stack spacing={4}>
                <PrivacyScore />
                <ScanStatusPrivacy />
                <Policies />
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Box>
  
  );
};

export default Dashboard;
