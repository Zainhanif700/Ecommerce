import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, Card, CardContent, styled, Typography } from '@mui/material';
import Img from '../../../public/trophy.jpg';
const TriangleImg = styled("img")({
    right: 0,
    bottom: 0,
    height: 170,
    position: 'absolute',
});
const TropyImg = styled('img')({
    right: 36,
    height: 98,
    botto4: 20,
    position: 'absolute'
});
function Achivement() {
    return (_jsx(Card, { className: 'space-y-5', sx: { position: 'relative', }, children: _jsxs(CardContent, { children: [_jsx(Typography, { variant: 'h6', sx: { letterSpacing: '.25px' }, children: "Shop With Us" }), _jsx(Typography, { variant: 'body2', children: "Congratulations" }), _jsx(Typography, { variant: 'h5', sx: { my: 3.1 }, children: "420.8k" }), _jsx(Button, { size: 'small', variant: 'contained', children: "View Sales" }), _jsx(TriangleImg, { src: Img }), _jsx(TropyImg, { src: '' })] }) }));
}
export default Achivement;
