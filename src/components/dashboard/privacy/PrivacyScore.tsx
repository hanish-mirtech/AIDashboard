import React from "react";
import { Box, Stack, Typography } from "@mui/material";

const PrivacyScore: React.FC = () => {
  return (
    <Box
      className="bg-white custom-shadow1"
      px={{ xs: 2, md: 3 }}
      py={{ xs: 2, md: 3 }}
      borderRadius={3.5}
    >
      <Stack direction="row" justifyContent="space-between" mb={1}>
        <Typography color="#597C9B" fontWeight={500} textTransform="uppercase">
          Score
        </Typography>
        <Box>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_1_77"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="20"
              height="20"
            >
              <rect width="20" height="20" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_1_77)">
              <path
                d="M16.4791 18.8542L14.5833 16.9583C13.9028 17.4028 13.1771 17.7431 12.4062 17.9792C11.6354 18.2153 10.8333 18.3333 9.99998 18.3333C8.8472 18.3333 7.76387 18.1146 6.74998 17.6771C5.73609 17.2396 4.85415 16.6458 4.10415 15.8958C3.35415 15.1458 2.7604 14.2639 2.3229 13.25C1.8854 12.2361 1.66665 11.1528 1.66665 10C1.66665 9.16666 1.7847 8.36458 2.02081 7.59375C2.25692 6.82291 2.5972 6.09722 3.04165 5.41666L1.14581 3.52083L2.33331 2.33333L17.6666 17.6667L16.4791 18.8542ZM16.9583 14.5833L5.41665 3.04166C6.0972 2.59722 6.8229 2.25694 7.59373 2.02083C8.36456 1.78472 9.16665 1.66666 9.99998 1.66666C11.1528 1.66666 12.2361 1.88541 13.25 2.32291C14.2639 2.76041 15.1458 3.35416 15.8958 4.10416C16.6458 4.85416 17.2396 5.73611 17.6771 6.75C18.1146 7.76389 18.3333 8.84722 18.3333 10C18.3333 10.8333 18.2153 11.6354 17.9791 12.4062C17.743 13.1771 17.4028 13.9028 16.9583 14.5833Z"
                fill="#C7D1CF"
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
          72
        </Typography>
        <Box>
          <svg
            width="37"
            height="18"
            viewBox="0 0 37 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M35 2.5L24 11L13 15.5L2 7"
              stroke="url(#paint0_linear_1_76)"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1_76"
                x1="36.5"
                y1="15.5"
                x2="1"
                y2="15.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#E09E50" stopOpacity="0.3" />
                <stop offset="0.485" stopColor="#E09E50" />
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
            <rect width="10" height="10" rx="4" fill="#00D68F" />
            <mask
              id="mask0_1_62"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="2"
              y="2"
              width="6"
              height="6"
            >
              <rect x="2" y="2" width="6" height="6" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_1_62)">
              <path
                d="M3.6 6.5L3.25 6.15L5.65 3.75H3.5V3.25H6.5V6.25H6V4.1L3.6 6.5Z"
                fill="white"
              />
            </g>
          </svg>
          <Typography fontSize={12} color="#3C5268">
            3
          </Typography>
        </Stack>
      </Stack>
      <Typography color="#3C5268" fontSize={12}>
        Pre masking: 51% | Post masking: 72%
      </Typography>
    </Box>
  );
};

export default PrivacyScore;
