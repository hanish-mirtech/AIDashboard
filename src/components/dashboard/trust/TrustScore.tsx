import React from "react";
import { Box, Stack, Typography } from "@mui/material";

const TrustScore: React.FC = () => {
  return (
    <Box
      px={{ xs: 2, md: 3 }}
      py={{ xs: 2, md: 3 }}
      borderRadius={3.5}
      sx={{
        background:
          "linear-gradient(180deg, rgba(177, 210, 208, 0.7) 0%, #B1D2D0 100%)",
      }}
    >
      <Stack direction="row" justifyContent="space-between" mb={1}>
        <Typography color="#597C9B" fontWeight={500} textTransform="uppercase">
          Score
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
              id="mask0_1_85"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="24"
              height="24"
            >
              <rect width="24" height="24" fill="#8CBDB9" />
            </mask>
            <g mask="url(#mask0_1_85)">
              <path
                d="M9 22C7.06667 22 5.41667 21.3167 4.05 19.95C2.68333 18.5833 2 16.9333 2 15C2 13.0667 2.68333 11.4167 4.05 10.05C5.41667 8.68333 7.06667 8 9 8C10.9333 8 12.5833 8.68333 13.95 10.05C15.3167 11.4167 16 13.0667 16 15C16 16.9333 15.3167 18.5833 13.95 19.95C12.5833 21.3167 10.9333 22 9 22ZM9 20C10.3833 20 11.5625 19.5125 12.5375 18.5375C13.5125 17.5625 14 16.3833 14 15C14 13.6167 13.5125 12.4375 12.5375 11.4625C11.5625 10.4875 10.3833 10 9 10C7.61667 10 6.4375 10.4875 5.4625 11.4625C4.4875 12.4375 4 13.6167 4 15C4 16.3833 4.4875 17.5625 5.4625 18.5375C6.4375 19.5125 7.61667 20 9 20ZM16.95 15.7C16.9833 15.6 17 15.4917 17 15.375V15C17 12.7833 16.2208 10.8958 14.6625 9.3375C13.1042 7.77917 11.2167 7 9 7H8.625C8.50833 7 8.4 7.01667 8.3 7.05C8.73333 5.58333 9.55417 4.375 10.7625 3.425C11.9708 2.475 13.3833 2 15 2C16.9333 2 18.5833 2.68333 19.95 4.05C21.3167 5.41667 22 7.06667 22 9C22 10.6167 21.525 12.0292 20.575 13.2375C19.625 14.4458 18.4167 15.2667 16.95 15.7Z"
                fill="#8CBDB9"
              />
            </g>
          </svg>
        </Box>
      </Stack>
      <Stack direction="row" spacing={1} alignItems="flex-end" mb={1}>
        <Typography
          fontSize={48}
          fontWeight={500}
          color="#2D3E4E"
          lineHeight={0.7}
        >
          66
        </Typography>
        <Box>
          <svg
            width="39"
            height="16"
            viewBox="0 0 39 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M23.8198 0.613137C24.3664 0.0452295 25.1955 -0.148711 25.9373 0.117854L37.0677 4.11785C38.1072 4.49142 38.647 5.63692 38.2735 6.6764C37.8999 7.71588 36.7544 8.25572 35.7149 7.88215L25.8036 4.32028L15.5715 14.9521C14.9583 15.5893 13.9994 15.7481 13.2135 15.3426L1.58306 9.34264C0.601419 8.83622 0.216174 7.62991 0.72259 6.64827C1.22901 5.66663 2.43531 5.28139 3.41695 5.78781L13.7229 11.1045L23.8198 0.613137Z"
              fill="url(#paint0_linear_1_82)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1_82"
                x1="-6.76391e-08"
                y1="16"
                x2="42"
                y2="16"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.48821" stopColor="#DA8D2F" />
                <stop offset="1" stopColor="#DA8D2F" stopOpacity="0.3" />
              </linearGradient>
            </defs>
          </svg>
        </Box>
        <Stack direction="row" alignItems="center" spacing={0.5}>
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="10" height="10" rx="4" fill="#FF3D71" />
            <mask
              id="mask0_1_88"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="2"
              y="2"
              width="6"
              height="6"
            >
              <rect x="2" y="2" width="6" height="6" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_1_88)">
              <path
                d="M3.25 6.75V4.25H3.75V5.9L6.65 3L7 3.35L4.1 6.25H5.75V6.75H3.25Z"
                fill="white"
              />
            </g>
          </svg>

          <Typography fontSize={12} color="#3C5268">
            4
          </Typography>
        </Stack>
      </Stack>
      <Typography color="#3C5268" fontSize={12}>
        Pre mitigation: 48% | Post mitigation: 66%
      </Typography>
    </Box>
  );
};

export default TrustScore;
