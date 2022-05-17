import 'bootstrap/dist/css/bootstrap.min.css';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


function Carousal() {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }))



    return (


        <div className='container' >
            <div className='container '>

                <Grid  md={5} sx={{ width: "100%" }}>

                    <img width="100%" src='https://k.nooncdn.com/cms/pages/20220409/05b73fea272435d63ffd1f14e5c2fb7a/en_dk-toggle.png' />

                </Grid>



                <div className='  my-1'>
                  

                        <Grid container spacing={0} style={{style:"display flex",}}  >
                            <Grid container spacing={0}  item  md={8} xs={8} >
                                
                                    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel" >
                                        <div class="carousel-indicators">
                                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                        </div>
                                        <div class="carousel-inner">
                                            <div class="carousel-item active">
                                                <img style={{height:"21vh"  }} src="https://k.nooncdn.com/cms/pages/20220513/c332de5eae59ba81ed030535479d60d2/en_hero-noon-RakBank.png" class="d-block w-100" alt="..." />
                                            </div>
                                            <div class="carousel-item">
                                                <img style={{height:"21vh  "}}   src="https://k.nooncdn.com/cms/pages/20220310/bb8ec300f66b4fc78e65c2eb8a25eda5/en_hero.jpg" class="d-block w-100" alt="..." />
                                            </div>
                                            <div class="carousel-item">
                                                <img style={{height:"21vh  "}}   src="https://k.nooncdn.com/cms/pages/20220513/272b0974d1d7d927a0837b7e69e779c8/en_dk_uae-hero-01.gif" class="d-block w-100" alt="..." />
                                            </div>
                                        </div>
                                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span class="visually-hidden">Previous</span>
                                        </button>
                                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span class="visually-hidden">Next</span>
                                        </button>
                                    </div>
                                

                            </Grid>
                            <Grid container spacing={0} item md={4}  >
                                <div className='d-flex '>

                                    <img width="50%" src='https://k.nooncdn.com/cms/pages/20220510/c252e39d84d26530b563be2f71d11296/en_dk_uae-fash-01.png' />



                                    <img width="50%" src='https://k.nooncdn.com/cms/pages/20220510/c252e39d84d26530b563be2f71d11296/en_dk_uae-fash-03.png' />

                                </div>

                            </Grid>
                            {/* <Grid item xs={4}>
                            <Item>xs=4</Item>
                        </Grid> */}
                            {/* <Grid item xs={8}>
                            <Item>xs=8</Item>
                        </Grid> */}
                        </Grid> 
                    
                </div>
            </div>


        </div>
    );
}

export default Carousal