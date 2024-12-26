import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SettingsCellIcon from '@mui/icons-material/SettingsCell';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Avatar, Box, Card, CardContent, CardHeader, Grid, IconButton, Typography } from '@mui/material';
const saleData = [
    {
        stats: '245k',
        title: 'Sales',
        color: '#E8BD0D',
        icon: _jsx(TrendingUpIcon, { sx: { fontSize: '1.75rem' } })
    },
    {
        stats: '12.5k',
        title: 'Customers',
        color: '#22CB5C',
        icon: _jsx(AccountCircleIcon, { sx: { fontSize: '1.75rem' } })
    },
    {
        stats: '1.54k',
        title: 'Products',
        color: '#DE4839',
        icon: _jsx(SettingsCellIcon, { sx: { fontSize: '1.75rem' } })
    },
    {
        stats: '88k',
        title: 'Revenue',
        color: '#12B0E8',
        icon: _jsx(AttachMoneyIcon, { sx: { fontSize: '1.75rem' } })
    }
];
const renderStats = () => {
    return saleData.map((item, index) => (_jsx(Grid, { xs: 12, sm: 3, children: _jsxs(Box, { sx: { display: 'flex', alignItems: 'center' }, children: [_jsx(Avatar, { variant: 'rounded', sx: {
                        width: 44,
                        height: 44,
                        mr: 3,
                        color: 'white',
                        boxShadow: 3,
                        backgroundColor: `${item.color}`
                    }, children: item.icon }), _jsxs(Box, { sx: { display: 'flex', flexDirection: 'column' }, children: [_jsx(Typography, { variant: 'caption', children: item.title }), _jsx(Typography, { variant: 'h6', children: item.stats })] })] }) }, index)));
};
function MonthlyOverview() {
    return (_jsxs(Card, { children: [_jsx(CardHeader, { title: 'Monthly Overview', action: _jsx(IconButton, { size: 'small', children: _jsx(MoreVertIcon, {}) }), subheader: _jsxs(Typography, { variant: 'body2', children: [_jsx(Box, { component: "span", sx: { fontWeight: 600 }, children: "Total 48.5% growth" }), "this month"] }), titleTypographyProps: {
                    sx: {
                        mb: 2.5,
                        lineHeight: '2rem !important',
                        letterspacing: '.15px !important'
                    }
                } }), _jsx(CardContent, { sx: { pt: theme => `${theme.spacing(3)} !important` }, children: _jsx(Grid, { container: true, spacing: [5, 0], children: renderStats() }) })] }));
}
export default MonthlyOverview;
