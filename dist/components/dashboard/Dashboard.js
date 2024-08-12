import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Grid, Stack, Link, Input, IconButton, Badge, Typography, } from "@mui/material";
import styrkDarkIcon from "../../../public/example-image.png";
import userImage from "../../../public/user.png";
import SearchIcon from "@mui/icons-material/Search";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import AppsRoundedIcon from "@mui/icons-material/AppsRounded";
import CloseIcon from "@mui/icons-material/Close";
import { ModelSecurityScore, ScanStatus, SecurityTrend, } from "./modelSecurity";
import { ComplianceTrend, ModelScanned, TrustScore, } from "./trust";
import { BadQueires, GoodQueries, ScoreTrend, } from "./llmSecurity";
import { PrivacyScore, ScanStatusPrivacy, BadQueires as Policies, } from "./privacy";
import { useState } from "react";
var tabsArray = [
    {
        id: 1,
        text: "Overview",
    },
    {
        id: 2,
        text: "Model Security",
    },
    {
        id: 3,
        text: "Trust",
    },
    {
        id: 4,
        text: "Privacy",
    },
    {
        id: 5,
        text: "LLM Security",
    },
];
var Dashboard = function () {
    var _a = useState(1), selectedTabIndex = _a[0], setSelectedTabIndex = _a[1];
    var onTabClick = function (tabData) {
        setSelectedTabIndex(tabData.id);
        console.log(tabData);
    };
    var _b = useState(), navOpen = _b[0], setNavOpen = _b[1];
    return (_jsxs(Box, { bgcolor: "#F4F6F5", children: [_jsx(Box, { py: 4, children: _jsx(Box, { maxWidth: 1312, mx: "auto", px: 2, children: _jsxs(Grid, { container: true, columnSpacing: 2, alignItems: "center", children: [_jsx(Grid, { item: true, xl: "auto", className: "logoWrapper", children: _jsx(Box, { component: "img", src: styrkDarkIcon, alt: "icon" }) }), _jsx(Grid, { item: true, flex: 1, children: _jsx(Stack, { className: !navOpen ? "navigation" : "navigation topNavActive", flexWrap: "nowrap", direction: "row", spacing: 2, children: tabsArray.map(function (nav) { return (_jsx(Link, { className: "nav-item", color: nav.id === selectedTabIndex ? "primary.main" : "#597C9B", textTransform: "uppercase", underline: "none", lineHeight: 1, fontWeight: nav.id === selectedTabIndex ? 700 : 400, sx: { cursor: "pointer" }, onClick: function () { return onTabClick(nav); }, children: nav.text }, nav.id)); }) }) }), _jsx(Grid, { item: true, xl: "auto", className: "menuBox", children: _jsxs(Stack, { direction: "row", alignItems: "center", spacing: 2, children: [_jsxs(Stack, { direction: "row", alignItems: "center", spacing: 1, className: "bg-white search-box", px: 1.5, py: 1, borderRadius: 3.5, children: [_jsx(SearchIcon, { sx: { color: "#599B96" } }), _jsx(Input, { fullWidth: true, placeholder: "Search", disableUnderline: true, inputProps: {
                                                        sx: {
                                                            "&::placeholder": {
                                                                color: "#597C9B",
                                                                opacity: 1,
                                                            },
                                                        },
                                                    } })] }), _jsxs(Stack, { direction: "row", alignItems: "center", spacing: 1, className: "bg-white settings-bar", px: 1, py: 1, borderRadius: 3.5, children: [_jsx(IconButton, { className: "topNavToggle", onClick: function () {
                                                        setNavOpen(!navOpen);
                                                    }, children: !navOpen ? _jsx(AppsRoundedIcon, {}) : _jsx(CloseIcon, {}) }), _jsx(IconButton, { sx: { color: "#599B96" }, size: "small", children: _jsx(SettingsOutlinedIcon, {}) }), _jsx(IconButton, { sx: { color: "#599B96" }, size: "small", children: _jsx(Badge, { variant: "dot", sx: {
                                                            ".MuiBadge-dot": {
                                                                backgroundColor: "error.light",
                                                                top: 6,
                                                                right: 7,
                                                                border: 1,
                                                                borderColor: "#fff",
                                                            },
                                                        }, children: _jsx(NotificationsOutlinedIcon, {}) }) })] }), _jsx(Box, { component: "img", src: userImage, alt: "ueser", width: 40, height: 40, borderRadius: 50, className: "userIcon" })] }) })] }) }) }), _jsx(Box, { maxWidth: 1312, mx: "auto", px: 2, children: _jsxs(Grid, { container: true, columnSpacing: 4, rowSpacing: 4, children: [_jsxs(Grid, { item: true, xs: 12, sm: 6, md: 6, xl: 3, children: [_jsx(Typography, { fontSize: 14, color: "#597C9B", textTransform: "uppercase", mb: 2, children: "Model Security" }), _jsxs(Stack, { spacing: 4, children: [_jsx(ModelSecurityScore, {}), _jsx(ScanStatus, {}), _jsx(SecurityTrend, {})] })] }), _jsxs(Grid, { item: true, xs: 12, sm: 6, md: 6, xl: 3, children: [_jsx(Typography, { fontSize: 14, color: "#597C9B", textTransform: "uppercase", mb: 2, children: "Trust" }), _jsxs(Stack, { spacing: 4, children: [_jsx(TrustScore, {}), _jsx(ComplianceTrend, {}), _jsx(ModelScanned, {})] })] }), _jsxs(Grid, { item: true, xs: 12, sm: 6, md: 6, xl: 3, children: [_jsx(Typography, { fontSize: 14, color: "#597C9B", textTransform: "uppercase", mb: 2, children: "LLM Security" }), _jsxs(Stack, { spacing: 4, children: [_jsx(GoodQueries, {}), _jsx(BadQueires, {}), _jsx(ScoreTrend, {})] })] }), _jsxs(Grid, { item: true, xs: 12, sm: 6, md: 6, xl: 3, children: [_jsx(Typography, { fontSize: 14, color: "#597C9B", textTransform: "uppercase", mb: 2, children: "Privacy" }), _jsxs(Stack, { spacing: 4, children: [_jsx(PrivacyScore, {}), _jsx(ScanStatusPrivacy, {}), _jsx(Policies, {})] })] })] }) })] }));
};
export default Dashboard;
