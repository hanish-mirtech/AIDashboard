import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Stack, Typography } from "@mui/material";
import { AreaChart, Area, XAxis, CartesianGrid, YAxis, Tooltip, ResponsiveContainer, ReferenceLine, } from "recharts";
var data = [
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
var ScoreTrend = function () {
    // Calculate average
    // const totalModelsScanned = data.reduce((acc, curr) => acc + curr.modelsScanned, 0);
    // const average = Math.round(totalModelsScanned / data.length);
    return (_jsxs(Box
    // className="bg-white"
    , { 
        // className="bg-white"
        px: { xs: 2, md: 3 }, py: { xs: 2, md: 3 }, borderRadius: 3.5, 
        //   border={1}
        //   borderColor="secondary.light"
        //   minHeight="calc(100vh - 275px)"
        //   height="100%"
        //   display="flex"
        //   flexDirection="column"
        sx: { backgroundColor: "#CBE1DF" }, children: [_jsxs(Stack, { direction: "row", justifyContent: "space-between", children: [_jsx(Typography, { color: "#597C9B", fontWeight: 500, textTransform: "uppercase", children: "Score Trend" }), _jsx(Box, { children: _jsxs("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [_jsx("mask", { id: "mask0_1_297", style: { maskType: "alpha" }, maskUnits: "userSpaceOnUse", x: "0", y: "0", width: "20", height: "20", children: _jsx("rect", { width: "20", height: "20", fill: "#8CBDB9" }) }), _jsx("g", { mask: "url(#mask0_1_297)", children: _jsx("path", { d: "M4.99999 11.6667H15V9.99999H4.99999V11.6667ZM4.99999 9.16666H15V7.49999H4.99999V9.16666ZM4.99999 6.66666H15V4.99999H4.99999V6.66666ZM3.33332 15C2.87499 15 2.48263 14.8368 2.15624 14.5104C1.82985 14.184 1.66666 13.7917 1.66666 13.3333V3.33332C1.66666 2.87499 1.82985 2.48263 2.15624 2.15624C2.48263 1.82985 2.87499 1.66666 3.33332 1.66666H16.6667C17.125 1.66666 17.5174 1.82985 17.8437 2.15624C18.1701 2.48263 18.3333 2.87499 18.3333 3.33332V18.3333L15 15H3.33332Z", fill: "#8CBDB9" }) })] }) })] }), _jsx(Box, { mx: -3, children: _jsx(ResponsiveContainer, { width: "100%", height: 180, children: _jsxs(AreaChart, { data: data, margin: { top: 20, right: 30, left: 20, bottom: 20 }, children: [_jsx(CartesianGrid, { vertical: false, stroke: "#F2F8F7" }), _jsx(XAxis, { dataKey: "name", tick: { fontSize: 12 }, tickFormatter: function (value) { return value.charAt(0); } }), _jsx(YAxis, { tickLine: false, axisLine: false, ticks: [0, 300, 600, 900, 1200,], tickFormatter: function () { return ""; }, width: 5 }), _jsx(Tooltip, {}), _jsx(Area, { type: "monotone", dataKey: "modelsScanned", fill: "#599B96", stroke: "#599B96" }), _jsx(ReferenceLine, { x: "Nov", stroke: "#7190AD", strokeWidth: 2, strokeDasharray: "3 3" }), " "] }) }) })] }));
};
export default ScoreTrend;
