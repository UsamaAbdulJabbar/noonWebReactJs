import AppBar from '@mui/material/AppBar';
import 'bootstrap/dist/css/bootstrap.min.css';
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
import { Grid } from '@mui/material';
import { width } from '@mui/system';



function NavButtons() {

    return (
        <>
            <Grid>
                <div className='my-1 d-flex'>
                    <div class="dropdown p-1">
                        <button style={{ border: " 1px solid grey", color: "blue", width:"200px" }} class="btn buttontn-light dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            ALL CATEGORIES
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item" href="#">Electronics & Mobiles</a></li>
                            <li><a class="dropdown-item" href="#">Besuty & Fragrances</a></li>
                            <li><a class="dropdown-item" href="#">Fashion</a></li>
                            <li><a class="dropdown-item" href="#">Home 7 Kitchen</a></li>
                            <li><a class="dropdown-item" href="#">Electronics & Mobiles</a></li>
                            <li><a class="dropdown-item" href="#">Besuty & Fragrances</a></li>
                            <li><a class="dropdown-item" href="#">Fashion</a></li>
                            <li><a class="dropdown-item" href="#">Home 7 Kitchen</a></li>
                            <li><a class="dropdown-item" href="#">Electronics & Mobiles</a></li>
                            <li><a class="dropdown-item" href="#">Besuty & Fragrances</a></li>
                            <li><a class="dropdown-item" href="#">Fashion</a></li>
                            <li><a class="dropdown-item" href="#">Home 7 Kitchen</a></li>

                        </ul>
                    </div>
                    <div className=''>
                        
                        <Button  sx={{backgroundColor:"white", color:"black", fontWeight:"bold"}}  size="large">
                            Electrnoics
                        </Button>
                        <Button sx={{backgroundColor:"white", color:"black", fontWeight:"bold"}}  size="large">
                            Men
                        </Button>
                        <Button sx={{backgroundColor:"white", color:"black", fontWeight:"bold"}}  size="large">
                            Women
                        </Button>
                        <Button sx={{backgroundColor:"white", color:"black", fontWeight:"bold"}}  size="large">
                            Home
                        </Button>
                        <Button sx={{backgroundColor:"white", color:"black", fontWeight:"bold"}}  size="large">
                            BEAUTY & Fragrances 
                        </Button>
                        <Button sx={{backgroundColor:"white", color:"black", fontWeight:"bold"}}  size="large">
                            Baby & Toys
                        </Button>
                        <Button sx={{backgroundColor:"white", color:"black", fontWeight:"bold"}}  size="large">
                            Grocery
                        </Button>
                        <Button sx={{backgroundColor:"white", color:"black", fontWeight:"bold"}}  size="large">
                            Sports
                        </Button>
                        <Button sx={{backgroundColor:"white", color:"black", fontWeight:"bold"}}  size="large">
                            BestSeller
                        </Button>
                        <Button sx={{backgroundColor:"white", color:"black", fontWeight:"bold"}}  size="large">
                            Sell On Noon
                        </Button>
                        </div>
                    </div>
                



            </Grid>




        </>
    )
}


export default NavButtons;