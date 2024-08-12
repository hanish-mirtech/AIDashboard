import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Typography, Container } from '@mui/material';
var NotAuthorised = function () {
    return (_jsxs(Container, { maxWidth: "sm", style: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            textAlign: 'center',
        }, children: [_jsx(Typography, { variant: "h4", color: "error", gutterBottom: true, children: "Access Denied" }), _jsx(Typography, { variant: "body1", children: "Please provide a valid token to access the library." })] }));
};
export default NotAuthorised;
