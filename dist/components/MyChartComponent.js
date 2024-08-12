import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { Paper, Typography } from '@mui/material';
import exampleImage from '../../public/example-image.png'; // Import the image
var MyChartComponent = function () {
    var data = [
        { name: 'Page A', value: 4000 },
        { name: 'Page B', value: 3000 },
        { name: 'Page C', value: 2000 },
        { name: 'Page D', value: 2780 },
        { name: 'Page E', value: 1890 },
    ];
    return (_jsxs(Paper, { style: { padding: 20 }, children: [_jsx(Typography, { variant: "h6", children: "My Chart" }), _jsx("div", { children: _jsx("img", { src: exampleImage, alt: "Example", style: { width: '100%', maxWidth: '400px' } }) }), _jsxs(BarChart, { width: 500, height: 300, data: data, children: [_jsx(CartesianGrid, { strokeDasharray: "3 3" }), _jsx(XAxis, { dataKey: "name" }), _jsx(YAxis, {}), _jsx(Tooltip, {}), _jsx(Bar, { dataKey: "value", fill: "#8884d8" })] })] }));
};
export default MyChartComponent;
