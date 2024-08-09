import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { Box, Stack, Typography } from "@mui/material";

interface DataItem {
  name: string;
  value: number;
  color: string;
}

const data: DataItem[] = [
  { name: "Stable", value: 78, color: "#599B96" },
  { name: "Vulnerable", value: 22, color: "#E09E50" },
];

const ScanStatus: React.FC = () => {
  return (
    <Box
      className="bg-white custom-shadow1"
      px={{ xs: 2, md: 3 }}
      py={{ xs: 2, md: 3 }}
      borderRadius={3.5}
      // border={1}
      // borderColor="secondary.light"
      // minHeight="calc(100vh - 275px)"
      // height="100%"
      // display="flex"
      // flexDirection="column"
      // alignItems="center"
      // justifyContent="center"
    >
      <Stack direction="row" justifyContent="space-between" mb={3}>
        <Typography color="#597C9B" fontWeight={500} textTransform="uppercase">
          SCAN STATUS
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
              id="mask0_1_120"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="24"
              height="24"
            >
              <rect width="24" height="24" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_1_120)">
              <path
                d="M9.20001 15.6L12 13.5L14.75 15.6L13.7 12.2L16.5 9.99999H13.1L12 6.59999L10.9 9.99999H7.50001L10.25 12.2L9.20001 15.6ZM12 22C9.68334 21.4167 7.77084 20.0875 6.26251 18.0125C4.75417 15.9375 4.00001 13.6333 4.00001 11.1V4.99999L12 1.99999L20 4.99999V11.1C20 13.6333 19.2458 15.9375 17.7375 18.0125C16.2292 20.0875 14.3167 21.4167 12 22Z"
                fill="#C7D1CF"
              />
            </g>
          </svg>
        </Box>
      </Stack>
      <Box
        position="relative"
        width="128px"
        height="128px"
        borderRadius="50%"
        bgcolor="#2D3E4E"
        // boxShadow="0px 0px 20px rgba(0, 0, 0, 0.3)"
        mx="auto"
      >
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius="80%"
              outerRadius="85%"
              fill="transparent"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}${entry.color}`}
                  fill="transparent"
                  stroke={entry.color}
                  strokeWidth={5}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </Box>
      {/* legends */}
      <Box mt={2} display="flex" justifyContent="space-between" width="100%">
        <Box>
          {data.map((entry, index) => (
            <Box key={`legend-${index}${entry.name}`} display="flex" alignItems="center">
              <svg width="20" height="20">
                <circle cx="10" cy="10" r="5" fill={entry.color} />
              </svg>
              <Typography ml={0.5} sx={{ fontSize: 10 }}>
                {entry.name} ({entry.value}%)
              </Typography>
            </Box>
          ))}
        </Box>
        <Box textAlign="right">
          <Typography>
            <Typography fontWeight={500} component="span" fontSize={14}>
              1486
            </Typography>
            <Typography component="span" color="#00D68F" fontSize={10} ml={0.2}>
              (+240){" "}
            </Typography>
          </Typography>
          <Typography sx={{ fontSize: 10 }}>Models scanned</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ScanStatus;
