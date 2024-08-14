import React from "react";
import {
  Box,
  Button,
  /*IconButton*/ Typography,
  useTheme,
} from "@mui/material";
import { tokens } from "../../theme";
// import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import AirportShuttleOutlinedIcon from "@mui/icons-material/AirportShuttleOutlined";
import AirportShuttleSharpIcon from "@mui/icons-material/AirportShuttleSharp";
import AirlineSeatReclineNormalIcon from "@mui/icons-material/AirlineSeatReclineNormal";
// import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
// import PersonAddIcon from "@mui/icons-material/PersonAdd";
// import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
// import LineChart from "../../components/LineChart";
// import GeographyChart from "../../components/GeographyChart";
// import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
// import ProgressCircle from "../../components/ProgressCircle";
import AmbulanceList from "../../components/AmbulanceList";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header
          title="AMBULANCE DASHBOARD"
          subtitle="Welcome to your dashboard"
        />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="minmax(140px, auto)"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="12"
            subtitle="Ambulances Live"
            progress="0.4"
            increase="+40%"
            icon={
              <AirportShuttleIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="18"
            subtitle="Ambulances Available"
            progress="0.60"
            increase="+60%"
            icon={
              <AirportShuttleOutlinedIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="30"
            subtitle="Total Number of Ambulances"
            progress="1.00"
            increase="+100%"
            icon={
              <AirportShuttleSharpIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="18"
            subtitle="Drivers Available"
            progress="0.6"
            increase="+60%"
            icon={
              <AirlineSeatReclineNormalIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        {/* ROW 2 */}
        <Box
          gridColumn="span 12"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            display="flex"
            justifyContent="center" // Center align the header
            alignItems="center"
            padding="30px" // Add padding for spacing
          >
            <Header title="AMBULANCE SERVICES" titleColor="rgb(76,206,172)" />
          </Box>
          <Box mb="0px">
            {" "}
            {/* Add margin-top for spacing between header and list */}
            <AmbulanceList />
          </Box>
        </Box>

        {/* ROW 3 */}
        {/* <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Revenue Generated
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                $59,342.32
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
          </Box>
        </Box> */}
        {/* <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={4px solid ${colors.primary[500]}}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Recent Transactions
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={${transaction.txId}-${i}}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={4px solid ${colors.primary[500]}}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {transaction.txId}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>{transaction.date}</Box>
              <Box
                backgroundColor={colors.greenAccent[500]}
                p="5px 10px"
                borderRadius="4px"
              >
                ${transaction.cost}
              </Box>
            </Box>
          ))}
        </Box> */}

        {/* ROW 4 */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
          display="flex"
          flexDirection="column"
          alignItems="center" // Centers content horizontally
          justifyContent="center" // Centers content vertically
        >
          <Typography variant="h3" fontWeight="700">
            Pink Ambulance
          </Typography>
          <Box
            component="img"
            src="/pink-ambu-1.png"
            alt="Pink Ambulance"
            sx={{
              width: "180px",
              height: "auto",
              mt: "20px",
            }}
          />
          <Typography
            variant="h4"
            color={colors.grey[100]}
            sx={{ mt: "15px", textAlign: "center" }}
          >
            Women driver for emergency women patient
          </Typography>
        </Box>

        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
          display="flex"
          flexDirection="column"
          alignItems="center" // Centers content horizontally
          justifyContent="center" // Centers content vertically
        >
          <Typography variant="h3" fontWeight="700">
            Bulk Ambulance
          </Typography>
          <Box
            component="img"
            src="/bulk-ambu.png"
            alt="Pink Ambulance"
            sx={{
              width: "180px",
              height: "auto",
              mt: "20px",
            }}
          />
          <Typography
            variant="h4"
            color={colors.grey[100]}
            sx={{ mt: "15px", textAlign: "center" }}
          >
            For Emergency Multiple Ambulance Needs
          </Typography>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
          display="flex"
          flexDirection="column"
          alignItems="center" // Centers content horizontally
          justifyContent="center" // Centers content vertically
        >
          <Typography variant="h3" fontWeight="700">
            Rent Ambulance
          </Typography>
          <Box
            component="img"
            src="/rent-ambu.png"
            alt="Pink Ambulance"
            sx={{
              width: "180px",
              height: "auto",
              mt: "20px",
            }}
          />
          <Typography
            variant="h4"
            color={colors.grey[100]}
            sx={{ mt: "15px", textAlign: "center" }}
          >
            For Events, travel, transfer & more
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
