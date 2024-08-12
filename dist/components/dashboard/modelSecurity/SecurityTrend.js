var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer, YAxis } from "recharts";
import { Box, Stack, Typography } from "@mui/material";
var data = [
    { month: "Jan", vulnerabilities: 20, effectiveDefenses: 40 },
    { month: "Feb", vulnerabilities: 60, effectiveDefenses: 30 },
    { month: "Mar", vulnerabilities: 15, effectiveDefenses: 80 },
    { month: "Apr", vulnerabilities: 35, effectiveDefenses: 10 },
    { month: "May", vulnerabilities: 10, effectiveDefenses: 25 },
    { month: "Jun", vulnerabilities: 45, effectiveDefenses: 35 },
    { month: "Jul", vulnerabilities: 20, effectiveDefenses: 5 },
    { month: "Aug", vulnerabilities: 55, effectiveDefenses: 40 },
    { month: "Sep", vulnerabilities: 5, effectiveDefenses: 25 },
    { month: "Oct", vulnerabilities: 65, effectiveDefenses: 50 },
    { month: "Nov", vulnerabilities: 35, effectiveDefenses: 60 },
    { month: "Dec", vulnerabilities: 75, effectiveDefenses: 60 },
];
var vulnerAbilityColor = "#599B96";
var effectiveDefenceColor = "#2D3E4E";
var SecurityTrend = function () {
    var _a = useState([]), hiddenItems = _a[0], setHiddenItems = _a[1];
    var handleLegendClick = function (entry) {
        if (hiddenItems.includes(entry)) {
            setHiddenItems(hiddenItems.filter(function (item) { return item !== entry; }));
        }
        else {
            setHiddenItems(__spreadArray(__spreadArray([], hiddenItems, true), [entry], false));
        }
    };
    return (_jsxs(Box, { className: "custom-shadow1", px: { xs: 2, md: 3 }, py: { xs: 2, md: 3 }, borderRadius: 3.5, 
        // border={1}
        // borderColor="secondary.light"
        // minHeight="calc(100vh - 275px)"
        // height="100%"
        // display="flex"
        // flexDirection="column"
        // alignItems="center"
        // justifyContent="center"
        sx: { backgroundColor: "#CBE1DF" }, children: [_jsxs(Stack, { direction: "row", justifyContent: "space-between", mb: 2, children: [_jsx(Typography, { color: "#597C9B", fontWeight: 500, textTransform: "uppercase", children: "SECURITY TREND" }), _jsx(Box, { children: _jsxs("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [_jsx("mask", { id: "mask0_1_221", style: { maskType: "alpha" }, maskUnits: "userSpaceOnUse", x: "0", y: "0", width: "24", height: "24", children: _jsx("rect", { width: "24", height: "24", fill: "#8CBDB9" }) }), _jsx("g", { mask: "url(#mask0_1_221)", children: _jsx("path", { d: "M9.20001 15.6L12 13.5L14.75 15.6L13.7 12.2L16.5 10H13.1L12 6.6L10.9 10H7.50001L10.25 12.2L9.20001 15.6ZM12 22C9.68334 21.4167 7.77084 20.0875 6.26251 18.0125C4.75417 15.9375 4.00001 13.6333 4.00001 11.1V5L12 2L20 5V11.1C20 13.6333 19.2458 15.9375 17.7375 18.0125C16.2292 20.0875 14.3167 21.4167 12 22Z", fill: "#8CBDB9" }) })] }) })] }), _jsx(Box, { mx: -2, children: _jsx(ResponsiveContainer, { width: "100%", height: 119, children: _jsxs(LineChart, { data: data, margin: { top: 20, right: 30, left: 20, bottom: 20 }, children: [_jsx(CartesianGrid, { vertical: false, stroke: "#E8ECEB" }), _jsx(XAxis, { dataKey: "month", interval: 0, tick: { fontSize: 12 }, tickFormatter: function (value) { return value.charAt(0); } }), _jsx(YAxis, { tickLine: false, axisLine: false, ticks: [0, 20, 40, 60, 80], tickFormatter: function () { return ""; }, width: 5 }), _jsx(Tooltip, {}), _jsx(Line, { type: "bump", dataKey: "vulnerabilities", name: "Vulnerabilities", stroke: vulnerAbilityColor, strokeWidth: 3, dot: false, isAnimationActive: false, connectNulls: true, hide: hiddenItems.includes("Vulnerabilities") }), _jsx(Line, { type: "bump", dataKey: "effectiveDefenses", name: "Effective Defenses", stroke: effectiveDefenceColor, strokeWidth: 3, dot: false, isAnimationActive: false, connectNulls: true, hide: hiddenItems.includes("Effective Defenses") })] }) }) }), _jsx(Box, { mt: 1.7, display: "flex", justifyContent: "space-between", width: "100%", children: _jsxs(Box, { children: [_jsxs(Box, { display: "flex", alignItems: "center", onClick: function () { return handleLegendClick("Vulnerabilities"); }, style: { cursor: "pointer" }, children: [_jsx("svg", { width: "6", height: "6", children: _jsx("circle", { cx: "3", cy: "3", r: "3", fill: vulnerAbilityColor }) }), _jsx(Typography, { variant: "body2", ml: 0.5, style: { fontSize: 10 }, children: "Vulnerabilities" })] }, "legend-vulnerabilities"), _jsxs(Box, { display: "flex", alignItems: "center", onClick: function () { return handleLegendClick("Effective Defenses"); }, style: { cursor: "pointer", marginTop: 5 }, children: [_jsx("svg", { width: "6", height: "6", children: _jsx("circle", { cx: "3", cy: "3", r: "3", fill: effectiveDefenceColor }) }), _jsx(Typography, { variant: "body2", ml: 0.5, style: { fontSize: 10 }, children: "Effective Defenses" })] }, "legend-Effective Defenses")] }) })] }));
};
export default SecurityTrend;
