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
import { Box, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { ComposedChart, Bar, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, } from "recharts";
var data = [
    { month: "Jan", "Pre Mitigation": 0.3, "Post Mitigation": 0.4 },
    { month: "Feb", "Pre Mitigation": 0.4, "Post Mitigation": 0.5 },
    { month: "Mar", "Pre Mitigation": 0.5, "Post Mitigation": 0.6 },
    { month: "Apr", "Pre Mitigation": 0.4, "Post Mitigation": 0.6 },
    { month: "May", "Pre Mitigation": 0.4, "Post Mitigation": 0.5 },
    { month: "Jun", "Pre Mitigation": 0.3, "Post Mitigation": 0.4 },
    { month: "Jul", "Pre Mitigation": 0.6, "Post Mitigation": 0.5 },
    { month: "Aug", "Pre Mitigation": 0.5, "Post Mitigation": 0.6 },
    { month: "Sep", "Pre Mitigation": 0.4, "Post Mitigation": 0.5 },
    { month: "Oct", "Pre Mitigation": 0.5, "Post Mitigation": 0.7 },
    { month: "Nov", "Pre Mitigation": 0.5, "Post Mitigation": 0.6 },
    { month: "Dec", "Pre Mitigation": 0.7, "Post Mitigation": 0.8 },
];
var ComplianceTrend = function () {
    var _a = useState([]), hiddenItems = _a[0], setHiddenItems = _a[1];
    var handleLegendClick = function (entry) {
        var dataKey = entry.dataKey;
        if (hiddenItems.includes(dataKey)) {
            setHiddenItems(hiddenItems.filter(function (legend) { return legend !== dataKey; }));
        }
        else {
            setHiddenItems(__spreadArray(__spreadArray([], hiddenItems, true), [dataKey], false));
        }
    };
    // Custom legend icon to display circles instead of lines
    var renderLegend = function (props) {
        var payload = props.payload;
        return (_jsx("ul", { style: {
                display: "flex",
                listStyleType: "none",
                padding: 0,
                margin: 0,
            }, children: payload.map(function (entry, index) { return (_jsx("li", { style: {
                    display: "flex",
                    alignItems: "center",
                    marginRight: 10,
                    cursor: "pointer",
                }, children: _jsxs("button", { type: "button", style: {
                        display: "flex",
                        alignItems: "center",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        padding: 0,
                        margin: 0,
                    }, onClick: function () { return handleLegendClick(entry); }, children: [_jsx("svg", { width: "6", height: "6", style: { marginRight: 5 }, children: _jsx("circle", { cx: "3", cy: "3", r: "3", fill: entry.color }) }), _jsx("span", { style: { fontSize: 10 }, children: entry.value })] }) }, "item-".concat(index).concat(entry.color))); }) }));
    };
    return (_jsxs(Box, { px: { xs: 2, md: 3 }, py: { xs: 2, md: 3 }, borderRadius: 3.5, children: [_jsxs(Stack, { direction: "row", justifyContent: "space-between", children: [_jsx(Typography, { color: "#597C9B", fontWeight: 500, textTransform: "uppercase", children: "Compliance Trend" }), _jsx(Box, { children: _jsxs("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [_jsx("mask", { id: "mask0_1_302", style: { maskType: "alpha" }, maskUnits: "userSpaceOnUse", x: "0", y: "0", width: "24", height: "24", children: _jsx("rect", { width: "24", height: "24", fill: "#C7D1CF" }) }), _jsx("g", { mask: "url(#mask0_1_302)", children: _jsx("path", { d: "M9 22C7.06667 22 5.41667 21.3167 4.05 19.95C2.68333 18.5833 2 16.9333 2 15C2 13.0667 2.68333 11.4167 4.05 10.05C5.41667 8.68333 7.06667 8 9 8C10.9333 8 12.5833 8.68333 13.95 10.05C15.3167 11.4167 16 13.0667 16 15C16 16.9333 15.3167 18.5833 13.95 19.95C12.5833 21.3167 10.9333 22 9 22ZM9 20C10.3833 20 11.5625 19.5125 12.5375 18.5375C13.5125 17.5625 14 16.3833 14 15C14 13.6167 13.5125 12.4375 12.5375 11.4625C11.5625 10.4875 10.3833 10 9 10C7.61667 10 6.4375 10.4875 5.4625 11.4625C4.4875 12.4375 4 13.6167 4 15C4 16.3833 4.4875 17.5625 5.4625 18.5375C6.4375 19.5125 7.61667 20 9 20ZM16.95 15.7C16.9833 15.6 17 15.4917 17 15.375V15C17 12.7833 16.2208 10.8958 14.6625 9.3375C13.1042 7.77917 11.2167 7 9 7H8.625C8.50833 7 8.4 7.01667 8.3 7.05C8.73333 5.58333 9.55417 4.375 10.7625 3.425C11.9708 2.475 13.3833 2 15 2C16.9333 2 18.5833 2.68333 19.95 4.05C21.3167 5.41667 22 7.06667 22 9C22 10.6167 21.525 12.0292 20.575 13.2375C19.625 14.4458 18.4167 15.2667 16.95 15.7Z", fill: "#C7D1CF" }) })] }) })] }), _jsx(Box, { mx: -2.5, children: _jsx(ResponsiveContainer, { width: "100%", height: 200, className: "customLegend autoLegendWidth", children: _jsxs(ComposedChart, { data: data, margin: { top: 20, right: 30, left: 20, bottom: 20 }, children: [_jsx(CartesianGrid, { strokeDasharray: "3 3", strokeOpacity: 0 }), " ", _jsx(XAxis, { dataKey: "month", tickFormatter: function (value) { return value.charAt(0); }, fontSize: 10, color: "#A4B8CB" }), _jsx(Tooltip, {}), _jsx(Legend, { content: renderLegend, verticalAlign: "top", align: "right", height: 36, style: { marginLeft: "20px" } }), _jsx(Bar, { dataKey: "Pre Mitigation", fill: "#CBE1DF", barSize: 4, name: "Pre Mitigation", opacity: hiddenItems.includes("Pre Mitigation") ? 0 : 1, radius: [10, 10, 0, 0] }), _jsx(Bar, { dataKey: "Post Mitigation", fill: "#E09E50", barSize: 4, name: "Post Mitigation", opacity: hiddenItems.includes("Post Mitigation") ? 0 : 1, radius: [10, 10, 0, 0] })] }) }) })] }));
};
export default ComplianceTrend;
