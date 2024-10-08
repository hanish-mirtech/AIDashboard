import React from "react";
import { Box, Stack, Typography } from "@mui/material";

const GoodQueries: React.FC = () => {
  return (
    <Box
      px={{ xs: 2, md: 3 }}
      py={{ xs: 2, md: 3 }}
      borderRadius={3.5}
      sx={{
        background:
          "linear-gradient(180deg, rgba(190, 204, 218, 0.7) 0%, #BECCDA 100%)",
      }}
    >
      <Stack direction="row" justifyContent="space-between" mb={1}>
        <Typography color="#597C9B" fontWeight={500} textTransform="uppercase">
          Good Queries
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
              id="mask0_1_103"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="20"
              height="20"
            >
              <rect width="20" height="20" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_1_103)">
              <path
                d="M4.99999 11.6667H15V10H4.99999V11.6667ZM4.99999 9.16666H15V7.5H4.99999V9.16666ZM4.99999 6.66666H15V5H4.99999V6.66666ZM3.33332 15C2.87499 15 2.48263 14.8368 2.15624 14.5104C1.82985 14.184 1.66666 13.7917 1.66666 13.3333V3.33333C1.66666 2.875 1.82985 2.48264 2.15624 2.15625C2.48263 1.82986 2.87499 1.66666 3.33332 1.66666H16.6667C17.125 1.66666 17.5174 1.82986 17.8437 2.15625C18.1701 2.48264 18.3333 2.875 18.3333 3.33333V18.3333L15 15H3.33332Z"
                fill="#A4B8CB"
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
          lineHeight={0.5}
        >
          62.5<Typography component="span">%</Typography>
        </Typography>
        <Box>
          <svg
            width="38"
            height="16"
            viewBox="0 0 38 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M23.3202 14.9521C23.8668 15.52 24.6959 15.714 25.4377 15.4474L36.5681 11.4474C37.6076 11.0738 38.1474 9.92833 37.7739 8.88885C37.4003 7.84936 36.2548 7.30953 35.2153 7.68309L25.304 11.245L15.0719 0.613158C14.4587 -0.0240126 13.4998 -0.182828 12.7139 0.222609L1.08347 6.22261C0.101831 6.72902 -0.283414 7.93533 0.223002 8.91697C0.729418 9.89861 1.93573 10.2839 2.91737 9.77744L13.2233 4.46074L23.3202 14.9521Z"
              fill="url(#paint0_linear_1_95)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1_95"
                x1="-0.499588"
                y1="-0.434751"
                x2="41.5004"
                y2="-0.434753"
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
            7%
          </Typography>
        </Stack>
      </Stack>
      <Typography color="#3C5268" fontSize={12}>
        Pre mitigation
      </Typography>
    </Box>
  );
};

export default GoodQueries;
