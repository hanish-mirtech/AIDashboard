import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell, Label, } from "recharts";
var data = [
    { name: "Gibberish", value: 7819, color: "#B1D2D0" },
    { name: "Prompt injection", value: 6137, color: "#599B96" },
    { name: "Bias", value: 4722, color: "#E09E50" },
    { name: "Sensitive information", value: 5703, color: "#A4B8CB" },
    { name: "Toxic", value: 3388, color: "#8CBDB9" },
];
var BadQueries = function () {
    var _a = useState(0), totalWidth = _a[0], setTotalWidth = _a[1];
    useEffect(function () {
        var elm = document.querySelector("#BadQueries");
        if (!elm)
            return;
        var updateWidth = function () {
            var clientWidth = elm.getBoundingClientRect().width;
            setTotalWidth(clientWidth - 48); // Adjust based on your layout padding/margin
        };
        // Initialize the width
        updateWidth();
        // Set up ResizeObserver to watch for changes in the element's size
        var resizeObserver = new ResizeObserver(function () {
            updateWidth();
        });
        resizeObserver.observe(elm);
        // Clean up the observer on component unmount
        return function () {
            resizeObserver.unobserve(elm);
        };
    }, []);
    return (_jsxs(Box, { id: "BadQueries", className: "bg-white", px: { xs: 2, md: 3 }, py: { xs: 2, md: 3 }, borderRadius: 3.5, children: [_jsxs(Stack, { direction: "row", justifyContent: "space-between", mb: 2, children: [_jsx(Typography, { color: "#597C9B", fontWeight: 500, textTransform: "uppercase", children: "Bad Queries" }), _jsx(Box, { children: _jsxs("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [_jsx("mask", { id: "mask0_1_198", style: { maskType: "alpha" }, maskUnits: "userSpaceOnUse", x: "0", y: "0", width: "20", height: "20", children: _jsx("rect", { width: "20", height: "20", fill: "#D9D9D9" }) }), _jsx("g", { mask: "url(#mask0_1_198)", children: _jsx("path", { d: "M4.99999 11.6667H15V10H4.99999V11.6667ZM4.99999 9.16667H15V7.5H4.99999V9.16667ZM4.99999 6.66667H15V5H4.99999V6.66667ZM3.33332 15C2.87499 15 2.48263 14.8368 2.15624 14.5104C1.82985 14.184 1.66666 13.7917 1.66666 13.3333V3.33333C1.66666 2.875 1.82985 2.48264 2.15624 2.15625C2.48263 1.82986 2.87499 1.66667 3.33332 1.66667H16.6667C17.125 1.66667 17.5174 1.82986 17.8437 2.15625C18.1701 2.48264 18.3333 2.875 18.3333 3.33333V18.3333L15 15H3.33332Z", fill: "#C7D1CF" }) })] }) })] }), _jsx(Box, { children: _jsxs(BarChart, { width: totalWidth - 20, height: 130, data: data, children: [_jsx(CartesianGrid, { vertical: false, stroke: "#E8ECEB" }), _jsx(XAxis, { dataKey: "name", tick: false, axisLine: false }), _jsx(YAxis, { tickLine: false, axisLine: false, ticks: [0, 2000, 4000, 6000, 8000], tickFormatter: function () { return ""; }, width: 10, children: _jsx(Label, { value: "No of Queries", angle: -90, position: "insideRight", style: { textAnchor: "middle" }, fontSize: 10, fill: "#A4B8CB" }) }), _jsx(Tooltip, {}), _jsx(Bar, { dataKey: "value", radius: [20, 20, 20, 20], barSize: 8, children: data.map(function (entry, index) { return (_jsx(Cell, { fill: entry.color }, "cell-".concat(index).concat(entry.color))); }) })] }) }), _jsxs(Box, { display: "flex", justifyContent: "space-between", width: "100%", children: [_jsx(Box, { children: data.slice(0, 3).map(function (entry, index) { return (_jsxs(Box, { display: "flex", alignItems: "center", children: [_jsx("svg", { width: "6", height: "6", children: _jsx("circle", { cx: "3", cy: "3", r: "3", fill: entry.color }) }), _jsxs(Typography, { ml: 1, fontSize: 10, children: [entry.name, " : ", entry.value] })] }, "legend-".concat(index, " ").concat(entry.name))); }) }), _jsx(Box, { children: data.slice(3).map(function (entry, index) { return (_jsxs(Box, { display: "flex", alignItems: "center", children: [_jsx("svg", { width: "6", height: "6", children: _jsx("circle", { cx: "3", cy: "3", r: "3", fill: entry.color }) }), _jsxs(Typography, { ml: 1, fontSize: 10, children: [entry.name, " : ", entry.value] })] }, "legend-".concat(index).concat(entry.value))); }) })] })] }));
};
export default BadQueries;
