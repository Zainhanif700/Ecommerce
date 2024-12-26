import { Box, CssBaseline, List, ListItem, ListItemButton, ListItemIcon, ListItemText, } from "@mui/material";
import { Route, Routes, useNavigate } from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CreateProductForm from "./CreateProductForm";
import ProductTable from "./ProductTable";
import OrdersTable from "./OrdersTable";
import CustomerTables from "./CustomerTables";
import AdminDashboard from "./AdminDashboard";

const menu = [
    { name: 'Dashboard', path: '/admin', icon: <DashboardIcon /> },
    { name: 'Products', path: '/admin/products', icon: <DashboardIcon /> },
    { name: 'Customers', path: '/admin/customers', icon: <DashboardIcon /> },
    { name: 'Orders', path: '/admin/orders', icon: <DashboardIcon /> },
    { name: 'AddProduct', path: '/admin/product/create', icon: <DashboardIcon /> },
]

function Admin() {
    const navigate = useNavigate();

    const drawer = (
        <Box sx={{ overflow: 'auto', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            {/* {isLargeScreen && <Toolbar />} */}
            <List>
                {menu.map((item) =>
                    <ListItem key={item.name} disablePadding onClick={() => navigate(item.path)}>
                        <ListItemButton>
                            <ListItemIcon>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText>
                                {item.name}
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                )}
            </List>

            <List>
                <ListItem disablePadding >
                    <ListItemButton>
                        <ListItemIcon>
                            <AccountCircleIcon />
                        </ListItemIcon>
                        <ListItemText>
                            Account
                        </ListItemText>
                    </ListItemButton>
                </ListItem>

            </List>
        </Box>
    )


    return (
        <div>
            <div className="flex h-screen ">
                <CssBaseline/>
                <div className="shadow-lg shadow-gray-600 w-[15%] h-full fixed top-0 border-r-gray-300 border">
                    {drawer}
                </div>
                <div className="w-[85%] ml-[15%]">
                    <Routes>
                        <Route path='/' element={<AdminDashboard/>}></Route>
                        <Route path='/product/create' element={<CreateProductForm/>}></Route>
                        <Route path='/products' element={<ProductTable/>}></Route>
                        <Route path='/orders' element={<OrdersTable/>}></Route>
                        <Route path='/customers' element={<CustomerTables/>}></Route>
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default Admin;
