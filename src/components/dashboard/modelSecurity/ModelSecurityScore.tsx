import React from "react";
import { Box, Stack, Typography } from "@mui/material";

const ModelSecurityScore: React.FC = () => {
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
      <Stack direction="row" spacing={1} alignItems="flex-end" mb={1}>
        <Typography
          fontSize={48}
          fontWeight={500}
          color="#2D3E4E"
          lineHeight={0.7}
        >
          89
        </Typography>
        <Box>
          <svg
            width="38"
            height="20"
            viewBox="0 0 38 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M36.5335 0.358191C37.4402 0.988971 37.6639 2.23538 37.0331 3.14213L25.9027 19.1421C25.5709 19.6191 25.0481 19.9282 24.4703 19.989C23.8926 20.0499 23.3169 19.8564 22.893 19.4591L12.8894 10.0807L3.06586 16.2676C2.13121 16.8562 0.896336 16.5757 0.307687 15.6411C-0.280961 14.7064 -0.000473201 13.4716 0.934175 12.8829L12.0646 5.87289C12.8345 5.38802 13.8346 5.48388 14.4983 6.10614L23.9406 14.9582L33.7495 0.857872C34.3803 -0.0488744 35.6267 -0.272589 36.5335 0.358191Z"
              fill="url(#paint0_linear_1_56)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1_56"
                x1="0"
                y1="20"
                x2="41"
                y2="20"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.490092" stopColor="#E09E50" />
                <stop offset="1" stopColor="#E09E50" stopOpacity="0.3" />
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
            7
          </Typography>
        </Stack>
      </Stack>
      <Typography color="#3C5268" fontSize={12}>
        Post attack: 66% | Post mitigation: 89%
      </Typography>
    </Box>
  );
};

export default ModelSecurityScore;
