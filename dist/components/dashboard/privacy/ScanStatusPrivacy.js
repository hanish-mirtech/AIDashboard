import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
var ScanStatusPrivacy = function () {
    var _a = useState(0), totalWidth = _a[0], setTotalWidth = _a[1];
    var data = [
        { name: "Compliant", value: 85, color: "#2D3E4E" },
        { name: "Vulnerable", value: 14, color: "#BF7822" },
    ];
    var secondChartData = [
        { name: "Pre-masking", value: 51, color: "#2D3E4E" },
        { name: "Vulnerable", value: 14, color: "#597C9B" },
    ];
    useEffect(function () {
        var elm = document.querySelector("#ScanStatusPrivacy");
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
    return (_jsxs(Box, { id: "ScanStatusPrivacy", 
        // className="bg-white custom-shadow1"
        px: { xs: 2, md: 3 }, py: { xs: 2, md: 3 }, borderRadius: 3.5, children: [_jsxs(Stack, { direction: "row", justifyContent: "space-between", mb: 1, children: [_jsx(Typography, { color: "#597C9B", fontWeight: 500, textTransform: "uppercase", children: "Scan Status" }), _jsx(Box, { children: _jsxs("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [_jsx("mask", { id: "mask0_1_77", style: { maskType: "alpha" }, maskUnits: "userSpaceOnUse", x: "0", y: "0", width: "20", height: "20", children: _jsx("rect", { width: "20", height: "20", fill: "#D9D9D9" }) }), _jsx("g", { mask: "url(#mask0_1_77)", children: _jsx("path", { d: "M16.4791 18.8542L14.5833 16.9583C13.9028 17.4028 13.1771 17.7431 12.4062 17.9792C11.6354 18.2153 10.8333 18.3333 9.99998 18.3333C8.8472 18.3333 7.76387 18.1146 6.74998 17.6771C5.73609 17.2396 4.85415 16.6458 4.10415 15.8958C3.35415 15.1458 2.7604 14.2639 2.3229 13.25C1.8854 12.2361 1.66665 11.1528 1.66665 10C1.66665 9.16666 1.7847 8.36458 2.02081 7.59375C2.25692 6.82291 2.5972 6.09722 3.04165 5.41666L1.14581 3.52083L2.33331 2.33333L17.6666 17.6667L16.4791 18.8542ZM16.9583 14.5833L5.41665 3.04166C6.0972 2.59722 6.8229 2.25694 7.59373 2.02083C8.36456 1.78472 9.16665 1.66666 9.99998 1.66666C11.1528 1.66666 12.2361 1.88541 13.25 2.32291C14.2639 2.76041 15.1458 3.35416 15.8958 4.10416C16.6458 4.85416 17.2396 5.73611 17.6771 6.75C18.1146 7.76389 18.3333 8.84722 18.3333 10C18.3333 10.8333 18.2153 11.6354 17.9791 12.4062C17.743 13.1771 17.4028 13.9028 16.9583 14.5833Z", fill: "#C7D1CF" }) })] }) })] }), totalWidth > 0 && (_jsxs(Grid, { container: true, alignItems: "flex-end", spacing: 3, children: [_jsxs(Grid, { item: true, children: [_jsxs(PieChart, { width: 100, height: 100, children: [_jsxs("defs", { children: [_jsxs("linearGradient", { id: "pattern-".concat(data[0].name), x1: "100", y1: "50", x2: "0", y2: "50", gradientUnits: "userSpaceOnUse", children: [_jsx("stop", { stopColor: "#4A6782" }), _jsx("stop", { offset: "1", stopColor: "#2D3E4E" })] }), _jsxs("linearGradient", { id: "pattern-".concat(data[1].name), x1: "50", y1: "0", x2: "50", y2: "50", gradientUnits: "userSpaceOnUse", children: [_jsx("stop", { stopColor: "#E09E50" }), _jsx("stop", { offset: "1", stopColor: "#BF7822" })] })] }), _jsx(Pie, { data: data, cx: "50%" // Center the Pie horizontally
                                        , cy: "50%" // Adjust this value to center the Pie vertically
                                        , labelLine: false, outerRadius: 50, fill: "#8884d8", dataKey: "value", children: data.map(function (entry, index) { return (_jsx(Cell, { fill: "url(#pattern-".concat(entry.name, ")") }, "cell-".concat(index).concat(entry.name))); }) }), _jsx(Tooltip, {})] }), _jsx(Typography, { fontSize: 12, color: "#3C5268", textAlign: "center", mt: 1, children: "Total Scans" })] }), _jsxs(Grid, { item: true, children: [_jsx(CircleChart, {}), _jsx(Typography, { fontSize: 12, color: "#3C5268", textAlign: "center", mt: 1, children: "Compliant Scans" })] })] })), _jsxs(Box, { display: "flex", justifyContent: "space-between", width: "100%", mt: 1, children: [_jsx(Box, { children: data.map(function (entry, index) { return (_jsxs(Box, { display: "flex", alignItems: "center", children: [_jsx("svg", { width: "6", height: "6", children: _jsx("circle", { cx: "3", cy: "3", r: "3", fill: entry.color }) }), _jsxs(Typography, { fontSize: 10, color: "#3C5268", ml: 1, children: [entry.name, " : ", entry.value, "%"] })] }, "legend-".concat(index).concat(entry.color))); }) }), _jsx(Box, { textAlign: "right", children: secondChartData.map(function (entry, index) { return (_jsxs(Box, { display: "flex", alignItems: "center", children: [_jsx("svg", { width: "6", height: "6", children: _jsx("circle", { cx: "3", cy: "3", r: "3", fill: entry.color }) }), _jsxs(Typography, { fontSize: 10, color: "#3C5268", ml: 1, children: [entry.name, " : ", entry.value, "%"] })] }, "legend-".concat(index).concat(entry.value))); }) })] })] }));
};
var CircleChart = function () {
    var outerCircleRadius = 72;
    var innerCircleRadius = outerCircleRadius / 3; // Adjust the inner circle radius here
    // const chartHeight = outerCircleRadius * 2;
    return (_jsx(ResponsiveContainer, { width: "100%", height: outerCircleRadius, children: _jsxs("svg", { width: outerCircleRadius, height: outerCircleRadius, children: [_jsxs("defs", { children: [_jsxs("linearGradient", { id: "outer-circle", x1: "36", y1: "72", x2: "36", y2: "0", gradientUnits: "userSpaceOnUse", children: [_jsx("stop", { stopColor: "#4A6782" }), _jsx("stop", { offset: "1", stopColor: "#2D3E4E" })] }), _jsxs("linearGradient", { id: "inner-circle", x1: "37", y1: "72", x2: "37", y2: "29", gradientUnits: "userSpaceOnUse", children: [_jsx("stop", { stopColor: "#8AA4BC" }), _jsx("stop", { offset: "1", stopColor: "#597C9B" })] })] }), _jsx("circle", { cx: "50%", cy: "50%", r: outerCircleRadius / 2, fill: "url(#outer-circle)" }), _jsx("circle", { cx: "50%", cy: "calc(100% - ".concat(innerCircleRadius, "px)"), r: innerCircleRadius, fill: "url(#inner-circle)" })] }) }));
};
export default ScanStatusPrivacy;
