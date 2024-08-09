import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  YAxis
} from "recharts";

const data = [
  { name: "Jan", modelsScanned: 200 },
  { name: "Feb", modelsScanned: 100 },
  { name: "Mar", modelsScanned: 300 },
  { name: "Apr", modelsScanned: 200 },
  { name: "May", modelsScanned: 400 },
  { name: "Jun", modelsScanned: 500 },
  { name: "Jul", modelsScanned: 700 },
  { name: "Aug", modelsScanned: 600 },
  { name: "Sep", modelsScanned: 900 },
  { name: "Oct", modelsScanned: 1100 },
  { name: "Nov", modelsScanned: 800 },
  { name: "Dec", modelsScanned: 1300 },
];

const ModelsScanned: React.FC = () => {
  // Calculate average
  // const totalModelsScanned = data.reduce((acc, curr) => acc + curr.modelsScanned, 0);
  // const average = Math.round(totalModelsScanned / data.length);

  return (
    <Box
      className="bg-white"
      px={{ xs: 2, md: 3 }}
      py={{ xs: 2, md: 3 }}
      borderRadius={3.5}
      // border={1}
      // borderColor="secondary.light"
      // minHeight="calc(100vh - 275px)"
      // height="100%"
      // display="flex"
      // flexDirection="column"
    >
      <Stack direction="row" justifyContent="space-between">
        <Typography color="#597C9B" fontWeight={500} textTransform="uppercase">
          Models scanned
        </Typography>
        <Box>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_1_302"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="24"
              height="24"
            >
              <rect width="24" height="24" fill="#C7D1CF" />
            </mask>
            <g mask="url(#mask0_1_302)">
              <path
                d="M9 22C7.06667 22 5.41667 21.3167 4.05 19.95C2.68333 18.5833 2 16.9333 2 15C2 13.0667 2.68333 11.4167 4.05 10.05C5.41667 8.68333 7.06667 8 9 8C10.9333 8 12.5833 8.68333 13.95 10.05C15.3167 11.4167 16 13.0667 16 15C16 16.9333 15.3167 18.5833 13.95 19.95C12.5833 21.3167 10.9333 22 9 22ZM9 20C10.3833 20 11.5625 19.5125 12.5375 18.5375C13.5125 17.5625 14 16.3833 14 15C14 13.6167 13.5125 12.4375 12.5375 11.4625C11.5625 10.4875 10.3833 10 9 10C7.61667 10 6.4375 10.4875 5.4625 11.4625C4.4875 12.4375 4 13.6167 4 15C4 16.3833 4.4875 17.5625 5.4625 18.5375C6.4375 19.5125 7.61667 20 9 20ZM16.95 15.7C16.9833 15.6 17 15.4917 17 15.375V15C17 12.7833 16.2208 10.8958 14.6625 9.3375C13.1042 7.77917 11.2167 7 9 7H8.625C8.50833 7 8.4 7.01667 8.3 7.05C8.73333 5.58333 9.55417 4.375 10.7625 3.425C11.9708 2.475 13.3833 2 15 2C16.9333 2 18.5833 2.68333 19.95 4.05C21.3167 5.41667 22 7.06667 22 9C22 10.6167 21.525 12.0292 20.575 13.2375C19.625 14.4458 18.4167 15.2667 16.95 15.7Z"
                fill="#C7D1CF"
              />
            </g>
          </svg>
        </Box>
      </Stack>
      <Box mx={-3}>
      <ResponsiveContainer width="100%" height={200}>
        <AreaChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
        >
          <CartesianGrid vertical={false} stroke="#E8ECEB" />
          <XAxis
            dataKey="name"
            tick={{ fontSize: 12 }}
            tickFormatter={(value: string) => value.charAt(0)}
          />
           <YAxis
              tickLine={false}
              axisLine={false}
              ticks={[0, 300, 600, 900, 1200,]}
              tickFormatter={() => ""}
              width={5}
            ></YAxis>
          <Tooltip />
          <Area
            type="monotone"
            dataKey="modelsScanned"
            fill="#FFA500"
            stroke="#FFA500"
          />
          <ReferenceLine
            x="Nov"
            stroke="#7190AD"
            strokeWidth={2}
            strokeDasharray="3 3"
          />{" "}
          {/* Dotted line on November */}
        </AreaChart>
      </ResponsiveContainer>
      </Box>
    </Box>
  );
};

export default ModelsScanned;
