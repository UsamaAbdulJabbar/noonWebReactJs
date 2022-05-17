import AppBar from '@mui/material/AppBar';

import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import DeliveryDiningOutlinedIcon from '@mui/icons-material/DeliveryDiningOutlined';
import OutlinedInput from '@mui/material/OutlinedInput';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import KeyboardArrowDownIcon  from '@mui/icons-material/KeyboardArrowDown';



function Navbar() {
    const addToCart =()=>{
        return (
            alert("Item Added succcessflly in Cart")
        )
        
    }
    return (
        <div className="App">
            <header className="App-header">
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="relative" sx={{ backgroundColor: "yellow", color: "black", display: "flex", justifyContent: "center", }}>
                        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>

                            <Typography component="div" sx={{ justifyContent: "center" }}>
                                <img style={{ width: "100px", cursor: "pointer" }} src="https://theme.zdassets.com/theme_assets/1061178/9e8c91f10b97dcebdd7b45d6e0610b689662bcbe.png" />
                            </Typography>
                            <Typography >
                                <Button endIcon={<ExpandMoreIcon />} onClick={Map} sx={{ fontSize: "" }}	 >
                                    <img  style={{ width: "40px", cursor: "pointer", padding: "5px" }} src='https://icons.iconarchive.com/icons/custom-icon-design/all-country-flag/256/United-Arab-Emirates-icon.png' />
                                    <p style={{ color: "black", fontWeight: "lighter" }}><b sx={{ fontWeight: "bold" }}>Deliver to <br />Dubai </b></p>
                                </Button>
                            </Typography>

                            <Typography >
                                {/* <TextField


                                    placeholder="Search here..."

                                    sx={{ backgroundColor: "white",  width: "1200px", position: "relative", outline:"none",   }}
                                /> */}
                                <OutlinedInput


                                    sx={{ width: "1200px", height: "35px", backgroundColor: "white", border: "1px solid black", border: "none", outline: "none" }}
                                    startAdornment={<InputAdornment position="start"></InputAdornment>}
                                    placeholder="What you are looking for ?"

                                />
                            </Typography>


                            <Typography >
                                <Button onClick={addToCart} color="inherit" sx={{ border: "1px solid black", borderStyle: "none", borderTopStyle: "none", borderBottomStyle: "none", borderRadius: "0px", fontWeight: "bold", margin: "5px" }}>العربیۃ</Button>
                                <Button color="inherit" sx={{ border: "1px solid black", borderTopStyle: "none", borderBottomStyle: "none", borderRadius: "0px", fontWeight: "bold", margin: "5px" }}>Sign In </Button>
                                <Button onClick={addToCart} color="inherit" sx={{ border: "1px solid black", borderStyle: "none", borderTopStyle: "none", borderBottomStyle: "none", borderRadius: "0px", fontWeight: "bold", margin: "5px" }} >Cart</Button>
                            </Typography>
                        </Toolbar>
                    </AppBar>
                </Box>
            </header>
        </div>
    );
}

export default Navbar;