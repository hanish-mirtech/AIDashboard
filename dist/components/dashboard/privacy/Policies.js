import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell, Label, } from "recharts";
var data = [
    { name: "PCI", value: 52, color: "#B1D2D0" },
    { name: "PII", value: 71, color: "#599B96" },
    { name: "Restricted", value: 37, color: "#E09E50" },
    { name: "Confidential", value: 45, color: "#A4B8CB" },
    { name: "Classified", value: 28, color: "#8CBDB9" },
];
var Policies = function () {
    var _a = useState(0), totalWidth = _a[0], setTotalWidth = _a[1];
    useEffect(function () {
        var elm = document.querySelector("#Policies");
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
    return (_jsxs(Box, { id: "Policies", className: "bg-white", px: { xs: 2, md: 3 }, py: { xs: 2, md: 3 }, borderRadius: 3.5, children: [_jsxs(Stack, { direction: "row", justifyContent: "space-between", mb: 2, children: [_jsx(Typography, { color: "#597C9B", fontWeight: 500, textTransform: "uppercase", children: "Policies" }), _jsx(Box, { children: _jsxs("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [_jsx("mask", { id: "mask0_1_151", style: { maskType: "alpha" }, maskUnits: "userSpaceOnUse", x: "0", y: "0", width: "20", height: "20", children: _jsx("rect", { width: "20", height: "20", fill: "#D9D9D9" }) }), _jsx("g", { mask: "url(#mask0_1_151)", children: _jsx("path", { d: "M16.4791 18.8542L14.5833 16.9583C13.9028 17.4028 13.1771 17.743 12.4062 17.9792C11.6354 18.2153 10.8333 18.3333 9.99998 18.3333C8.8472 18.3333 7.76387 18.1146 6.74998 17.6771C5.73609 17.2396 4.85415 16.6458 4.10415 15.8958C3.35415 15.1458 2.7604 14.2639 2.3229 13.25C1.8854 12.2361 1.66665 11.1528 1.66665 9.99999C1.66665 9.16666 1.7847 8.36457 2.02081 7.59374C2.25692 6.82291 2.5972 6.09721 3.04165 5.41666L1.14581 3.52082L2.33331 2.33332L17.6666 17.6667L16.4791 18.8542ZM16.9583 14.5833L5.41665 3.04166C6.0972 2.59721 6.8229 2.25693 7.59373 2.02082C8.36456 1.78471 9.16665 1.66666 9.99998 1.66666C11.1528 1.66666 12.2361 1.88541 13.25 2.32291C14.2639 2.76041 15.1458 3.35416 15.8958 4.10416C16.6458 4.85416 17.2396 5.7361 17.6771 6.74999C18.1146 7.76388 18.3333 8.84721 18.3333 9.99999C18.3333 10.8333 18.2153 11.6354 17.9791 12.4062C17.743 13.1771 17.4028 13.9028 16.9583 14.5833Z", fill: "#C7D1CF" }) })] }) })] }), _jsx(Box, { children: _jsxs(BarChart, { width: totalWidth - 20, height: 130, data: data, children: [_jsx(CartesianGrid, { vertical: false, stroke: "#E8ECEB" }), _jsx(XAxis, { dataKey: "name", tick: false, axisLine: false }), _jsx(YAxis, { tickLine: false, axisLine: false, ticks: [0, 20, 40, 60, 80], tickFormatter: function () { return ""; }, width: 10, children: _jsx(Label, { value: "% Compliance", angle: -90, position: "insideLeft", style: { textAnchor: "middle" }, fontSize: 10, fill: "#A4B8CB" }) }), _jsx(Tooltip, {}), _jsx(Bar, { dataKey: "value", radius: [20, 20, 20, 20], barSize: 8, children: data.map(function (entry, index) { return (_jsx(Cell, { fill: entry.color }, "cell-".concat(index).concat(entry.color))); }) })] }) }), _jsxs(Box, { display: "flex", justifyContent: "space-between", width: "100%", children: [_jsx(Box, { children: data.slice(0, 3).map(function (entry, index) { return (_jsxs(Box, { display: "flex", alignItems: "center", children: [_jsx("svg", { width: "6", height: "6", children: _jsx("circle", { cx: "3", cy: "3", r: "3", fill: entry.color }) }), _jsxs(Typography, { ml: 1, fontSize: 10, children: [entry.name, " : ", entry.value, "%"] })] }, "legend-".concat(index).concat(entry.name))); }) }), _jsx(Box, { textAlign: "right", children: data.slice(3).map(function (entry, index) { return (_jsxs(Box, { display: "flex", alignItems: "center", children: [_jsx("svg", { width: "6", height: "6", children: _jsx("circle", { cx: "3", cy: "3", r: "3", fill: entry.color }) }), _jsxs(Typography, { ml: 1, fontSize: 10, children: [entry.name, " : ", entry.value, "%"] })] }, "legend-".concat(index).concat(entry.value))); }) })] })] }));
};
export default Policies;
