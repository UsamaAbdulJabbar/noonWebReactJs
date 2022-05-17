    import { Grid } from '@mui/material';
    import 'bootstrap/dist/css/bootstrap.min.css';
    import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import Button from '@mui/material/Button';
import StarIcon from '@mui/icons-material/Star';
import PrivacyTipOutlinedIcon from '@mui/icons-material/PrivacyTipOutlined';
import EmailIcon from '@mui/icons-material/Email';



function FourCards() {
    const theme = useTheme();

    return (
        <div className='container'>
            <div style={{ backgroundColor: "rgb(235, 235, 235)" }}>
                <Grid item md={12} sm={12}>
                    <div className='d-flex ' style={{ backgroundColor: "rgb(235, 235, 235)" }}>
                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/home-and-kitchen/kitchen-and-dining/serveware/?sort[by]=popularity&sort[dir]=desc' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220218/e5bee49ffcaa13a53b1da540633b9dee/en_dk_uae-mega-01.png' /></button></a>
                        </div>
                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/beauty-and-health/beauty/fragrance/frag-dis-FR_08/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220218/e5bee49ffcaa13a53b1da540633b9dee/en_dk_uae-mega-01-frag.png' /></button></a>

                        </div>
                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/kitchenappliances/?sort[by]=popularity&sort[dir]=desc' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/458c0135272d0f8f072746e502793e48/en_dk_uae-mega-03.png' /></button></a>

                        </div>
                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/electronics-and-mobiles/video-games-10181/gaming-accessories/?sort[by]=popularity&sort[dir]=desc' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_dk_uae-mega-01.png' /></button></a>

                        </div>
                    </div>
                </Grid>
                <Grid item md={12} sm={12}>
                    <div className='d-flex ' style={{ backgroundColor: "rgb(250, 242, 156)" }}>
                        <div className='p-2'  >
                            <a href='https://www.noon.com/uae-en/home-and-kitchen/kitchen-and-dining/serveware/?sort[by]=popularity&sort[dir]=desc' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mega-deal-title-01.png' /></button></a>
                        </div>

                    </div>
                </Grid>
                <Grid item md={12} sm={12}>
                    <div className='d-flex ' style={{ backgroundColor: "rgb(250, 242, 156)" }}>
                        <div className='p-2 ' >
                            <a href='https://www.noon.com/uae-en/electronics-and-mobiles/mobiles-and-accessories/mobiles-20905/smartphones/vivo/?f[launch_year]=2021&f[partner]=p_9404&limit=50&sort[by]=popularity&sort[dir]=desc' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220515/30b8014e24462d675bfef68f69962048/en_dk_uae-mega-01.png' /></button></a>
                        </div>
                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/fashion/men-31225/new-arrivals-jan-FA_03/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220513/e53ff4481c2db1adba2528fd5c2a1491/en_dk_uae-mega-02.png' /></button></a>
                        </div>
                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/toys-sale-may22/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220513/e53ff4481c2db1adba2528fd5c2a1491/en_dk_uae-mega-03.png' /></button></a>
                        </div>
                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/beauty-and-health/health/health-dis-BE_07/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220514/30321d99e9c64cf46960fc9311ff2b99/en_mb_uae-mega-04.png' /></button></a>
                        </div>

                    </div>
                </Grid>

                <Grid item md={12} sm={12}>
                    <div className='d-flex ' style={{ backgroundColor: "white" }}>
                        <div className='p-2'  >
                            <a href='https://www.noon.com/uae-en/home-and-kitchen/kitchen-and-dining/serveware/?sort[by]=popularity&sort[dir]=desc' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220513/d021fb6eac92bc9095986a2ebaed91ff/en_dk_uae-title_01.png' /></button></a>
                        </div>

                    </div>
                </Grid>

                <Grid item md={12} sm={12}>
                    <div className='d-flex ' style={{ backgroundColor: "white" }}>
                        <div className='p-2 ' >
                            <a href='https://www.noon.com/uae-en/electronics-and-mobiles/mobiles-and-accessories/mobiles-20905/smartphones/vivo/?f[launch_year]=2021&f[partner]=p_9404&limit=50&sort[by]=popularity&sort[dir]=desc' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220217/bedfe99bb4990ba161fa0afe97058613/en_mb-homepagesection-1.png' /></button></a>
                        </div>
                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/fashion/men-31225/new-arrivals-jan-FA_03/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220217/bedfe99bb4990ba161fa0afe97058613/en_mb-homepagesection-2.png' /></button></a>
                        </div>
                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/toys-sale-may22/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220217/bedfe99bb4990ba161fa0afe97058613/en_mb-homepagesection-3.png' /></button></a>
                        </div>
                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/beauty-and-health/health/health-dis-BE_07/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220513/d021fb6eac92bc9095986a2ebaed91ff/en_mb_uae-homepagesection-1.png' /></button></a>
                        </div>
                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/beauty-and-health/health/health-dis-BE_07/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220217/bedfe99bb4990ba161fa0afe97058613/en_mb-homepagesection-5.png' /></button></a>
                        </div>

                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/beauty-and-health/health/health-dis-BE_07/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220513/d021fb6eac92bc9095986a2ebaed91ff/en_mb_uae-homepagesection-2.png' /></button></a>
                        </div>

                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/beauty-and-health/health/health-dis-BE_07/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220217/f2110af7397b4aca9c8418c5436619ff/en_mb-homepagesection-6.png' /></button></a>
                        </div>


                    </div>
                </Grid>


                <Grid item md={12} sm={12}>
                    <div className='d-flex ' style={{ backgroundColor: "rgb(235, 235, 235)" }}>
                        <div className='p-2 ' >
                            <a href='https://www.noon.com/uae-en/electronics-and-mobiles/mobiles-and-accessories/mobiles-20905/smartphones/vivo/?f[launch_year]=2021&f[partner]=p_9404&limit=50&sort[by]=popularity&sort[dir]=desc' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220512/eeab095cb62684f674a60cd9c0ce818d/en_dk_uae-sfb-01.png' /></button></a>
                        </div>
                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/fashion/men-31225/new-arrivals-jan-FA_03/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220511/577658a174192bfff25a35af16e30456/en_dk_uae-sfb-01.png' /></button></a>
                        </div>
                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/toys-sale-may22/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220509/dd6bc73b46f1505c4ced34da87323be4/en_dk_uae-sfb-01.png' /></button></a>
                        </div>


                    </div>
                </Grid>

                <Grid item md={12} sm={12}>
                    <div className='d-flex  ' style={{ backgroundColor: "rgb(243, 224, 8)" }}>
                        <img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_dk_uae-title-01C.png' />

                    </div>
                </Grid>

                <Grid item md={12} sm={12}>
                    <div className='d-flex  ' style={{ backgroundColor: "rgb(243, 224, 8)" }}>
                        <div className='p-2' >
                            <a href='https://www.noon.com/uae-en/electronics-and-mobiles/mobiles-and-accessories/mobiles-20905/smartphones/vivo/?f[launch_year]=2021&f[partner]=p_9404&limit=50&sort[by]=popularity&sort[dir]=desc' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220514/9db653be66b503cd51330e4b388b44d8/en_mb_uae-mega-01.png' /></button></a>
                        </div>
                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/fashion/men-31225/new-arrivals-jan-FA_03/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220514/9db653be66b503cd51330e4b388b44d8/en_mb_uae-mega-02.png' /></button></a>
                        </div>
                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/toys-sale-may22/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220514/9db653be66b503cd51330e4b388b44d8/en_mb_uae-mega-03.png' /></button></a>
                        </div>
                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/beauty-and-health/health/health-dis-BE_07/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220514/9db653be66b503cd51330e4b388b44d8/en_mb_uae-mega-04.png' /></button></a>
                        </div>

                    </div>
                </Grid>



                <Grid item md={12} sm={12}>
                    <div className='d-flex my-4  ' style={{ backgroundColor: "white", justifyContent: "space-between" }}>
                        <div><h3>
                            More  Clearance Deal
                        </h3></div>
                        <div>
                            <Button variant="outlined" size="medium" color='inherit'>
                                View All
                            </Button>
                        </div>


                    </div>
                </Grid>


                <Grid item md={12} sm={12}>
                    <div className='d-flex ' style={{ backgroundColor: "white" }}>
                        <div className='p-2 ' style={{ alignItems: "left" }} >
                            <a href='https://www.noon.com/uae-en/electronics-and-mobiles/mobiles-and-accessories/mobiles-20905/smartphones/vivo/?f[launch_year]=2021&f[partner]=p_9404&limit=50&sort[by]=popularity&sort[dir]=desc' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://z.nooncdn.com/products/tr:n-t_240/v1648195487/N31981369A_1.jpg' />
                                <p>noon east  Electric</p>
                                <p>Stainless Steel  Kettle wi...</p>
                                <p>AED <b>25.00</b></p>
                                <p><del style={{ color: "rgb(126, 133, 155)" }}>AED 119</del> <b style={{ color: "rgb(56, 174, 4)" }}>78% OFF</b> </p>
                                <p>Arrives</p>
                                <h6>Tommorrow, May 16</h6>
                                <img src='https://z.nooncdn.com/s/app/com/noon/images/fulfilment_express_v2-en.svg' />
                                <img endIcon={<StarIcon />} />

                            </button></a>

                        </div>
                        <div className='p-2 ' style={{ alignItems: "left" }} >
                            <a href='https://www.noon.com/uae-en/electronics-and-mobiles/mobiles-and-accessories/mobiles-20905/smartphones/vivo/?f[launch_year]=2021&f[partner]=p_9404&limit=50&sort[by]=popularity&sort[dir]=desc' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://z.nooncdn.com/products/tr:n-t_240/v1645647290/N28834620A_1.jpg' />
                                <p>noon east  Electric</p>
                                <p>Stainless Steel  Kettle wi...</p>
                                <p>AED <b>25.00</b></p>
                                <p><del style={{ color: "rgb(126, 133, 155)" }}>AED 119</del> <b style={{ color: "rgb(56, 174, 4)" }}>78% OFF</b> </p>
                                <p>Arrives</p>
                                <h6>Tommorrow, May 16</h6>
                                <img src='https://z.nooncdn.com/s/app/com/noon/images/fulfilment_express_v2-en.svg' />
                                <img endIcon={<StarIcon />} />

                            </button></a>

                        </div>
                        <div className='p-2 ' style={{ alignItems: "left" }} >
                            <a href='https://www.noon.com/uae-en/electronics-and-mobiles/mobiles-and-accessories/mobiles-20905/smartphones/vivo/?f[launch_year]=2021&f[partner]=p_9404&limit=50&sort[by]=popularity&sort[dir]=desc' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://z.nooncdn.com/products/tr:n-t_240/v1650966443/N42984416A_1.jpg' />
                                <p>noon east  Electric</p>
                                <p>Stainless Steel  Kettle wi...</p>
                                <p>AED <b>25.00</b></p>
                                <p><del style={{ color: "rgb(126, 133, 155)" }}>AED 119</del> <b style={{ color: "rgb(56, 174, 4)" }}>78% OFF</b> </p>
                                <p>Arrives</p>
                                <h6>Tommorrow, May 16</h6>
                                <img src='https://z.nooncdn.com/s/app/com/noon/images/fulfilment_express_v2-en.svg' />
                                <img endIcon={<StarIcon />} />

                            </button></a>

                        </div>
                        <div className='p-2 ' style={{ alignItems: "left" }} >
                            <a href='https://www.noon.com/uae-en/electronics-and-mobiles/mobiles-and-accessories/mobiles-20905/smartphones/vivo/?f[launch_year]=2021&f[partner]=p_9404&limit=50&sort[by]=popularity&sort[dir]=desc' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://z.nooncdn.com/products/tr:n-t_240/v1635748093/N22547721A_5.jpg' />
                                <p>noon east  Electric</p>
                                <p>Stainless Steel  Kettle wi...</p>
                                <p>AED <b>25.00</b></p>
                                <p><del style={{ color: "rgb(126, 133, 155)" }}>AED 119</del> <b style={{ color: "rgb(56, 174, 4)" }}>78% OFF</b> </p>
                                <p>Arrives</p>
                                <h6>Tommorrow, May 16</h6>
                                <img src='https://z.nooncdn.com/s/app/com/noon/images/fulfilment_express_v2-en.svg' />
                                <img endIcon={<StarIcon />} />

                            </button></a>

                        </div>
                        <div className='p-2 ' style={{ alignItems: "left" }} >
                            <a href='https://www.noon.com/uae-en/electronics-and-mobiles/mobiles-and-accessories/mobiles-20905/smartphones/vivo/?f[launch_year]=2021&f[partner]=p_9404&limit=50&sort[by]=popularity&sort[dir]=desc' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://z.nooncdn.com/products/tr:n-t_240/v1647008666/N11073341A_1.jpg' />
                                <p>noon east  Electric</p>
                                <p>Stainless Steel  Kettle wi...</p>
                                <p>AED <b>25.00</b></p>
                                <p><del style={{ color: "rgb(126, 133, 155)" }}>AED 119</del> <b style={{ color: "rgb(56, 174, 4)" }}>78% OFF</b> </p>
                                <p>Arrives</p>
                                <h6>Tommorrow, May 16</h6>
                                <img src='https://z.nooncdn.com/s/app/com/noon/images/fulfilment_express_v2-en.svg' />
                                <img endIcon={<StarIcon />} />

                            </button></a>

                        </div>

                        <div className='p-2 ' style={{ alignItems: "left" }} >
                            <a href='https://www.noon.com/uae-en/electronics-and-mobiles/mobiles-and-accessories/mobiles-20905/smartphones/vivo/?f[launch_year]=2021&f[partner]=p_9404&limit=50&sort[by]=popularity&sort[dir]=desc' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://z.nooncdn.com/products/tr:n-t_240/v1646051940/N11822347A_1.jpg' />
                                <p>noon east  Electric</p>
                                <p>Stainless Steel  Kettle wi...</p>
                                <p>AED <b>25.00</b></p>
                                <p><del style={{ color: "rgb(126, 133, 155)" }}>AED 119</del> <b style={{ color: "rgb(56, 174, 4)" }}>78% OFF</b> </p>
                                <p>Arrives</p>
                                <h6>Tommorrow, May 16</h6>
                                <img src='https://z.nooncdn.com/s/app/com/noon/images/fulfilment_express_v2-en.svg' />
                                <img endIcon={<StarIcon />} />

                            </button></a>

                        </div>

                        <div className='p-2 ' style={{ alignItems: "left" }} >
                            <a href='https://www.noon.com/uae-en/electronics-and-mobiles/mobiles-and-accessories/mobiles-20905/smartphones/vivo/?f[launch_year]=2021&f[partner]=p_9404&limit=50&sort[by]=popularity&sort[dir]=desc' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://z.nooncdn.com/products/tr:n-t_240/v1632919229/N44288783A_1.jpg' />
                                <p>noon east  Electric</p>
                                <p>Stainless Steel  Kettle wi...</p>
                                <p>AED <b>25.00</b></p>
                                <p><del style={{ color: "rgb(126, 133, 155)" }}>AED 119</del> <b style={{ color: "rgb(56, 174, 4)" }}>78% OFF</b> </p>
                                <p>Arrives</p>
                                <h6>Tommorrow, May 16</h6>
                                <img src='https://z.nooncdn.com/s/app/com/noon/images/fulfilment_express_v2-en.svg' />
                                <img endIcon={<StarIcon />} />

                            </button></a>

                        </div>


                    </div>
                </Grid>

                <Grid className='my-3' item md={12} sm={12}>
                    <div>
                        <img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_dk-uae-free-delivery-banner-strip.png' />
                    </div>

                </Grid>

                <Grid item md={12} sm={12}>
                    <div className='d-flex my-4  ' style={{ backgroundColor: "white", justifyContent: "space-between" }}>
                        <div><h3>
                            Trending Deals in Electronics
                        </h3></div>
                        <div>
                            <Button variant="outlined" size="medium" color='inherit'>
                                View All
                            </Button>
                        </div>


                    </div>
                </Grid>



                <Grid item md={12} sm={12}>
                    <div className='d-flex ' style={{ backgroundColor: "white" }}>
                        <div className='p-2 ' style={{ alignItems: "left" }} >
                            <a href='https://www.noon.com/uae-en/electronics-and-mobiles/mobiles-and-accessories/mobiles-20905/smartphones/vivo/?f[launch_year]=2021&f[partner]=p_9404&limit=50&sort[by]=popularity&sort[dir]=desc' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://z.nooncdn.com/products/tr:n-t_240/v1621935249/N47626990A_1.jpg' />
                                <p>noon east  Electric</p>
                                <p>Stainless Steel  Kettle wi...</p>
                                <p>AED <b>25.00</b></p>
                                <p><del style={{ color: "rgb(126, 133, 155)" }}>AED 119</del> <b style={{ color: "rgb(56, 174, 4)" }}>78% OFF</b> </p>
                                <p>Arrives</p>
                                <h6>Tommorrow, May 16</h6>
                                <img src='https://z.nooncdn.com/s/app/com/noon/images/fulfilment_express_v2-en.svg' />
                                <img endIcon={<StarIcon />} />

                            </button></a>

                        </div>
                        <div className='p-2 ' style={{ alignItems: "left" }} >
                            <a href='https://www.noon.com/uae-en/electronics-and-mobiles/mobiles-and-accessories/mobiles-20905/smartphones/vivo/?f[launch_year]=2021&f[partner]=p_9404&limit=50&sort[by]=popularity&sort[dir]=desc' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://z.nooncdn.com/products/tr:n-t_240/v1648570072/N50840187A_1.jpg' />
                                <p>noon east  Electric</p>
                                <p>Stainless Steel  Kettle wi...</p>
                                <p>AED <b>25.00</b></p>
                                <p><del style={{ color: "rgb(126, 133, 155)" }}>AED 119</del> <b style={{ color: "rgb(56, 174, 4)" }}>78% OFF</b> </p>
                                <p>Arrives</p>
                                <h6>Tommorrow, May 16</h6>
                                <img src='https://z.nooncdn.com/s/app/com/noon/images/fulfilment_express_v2-en.svg' />
                                <img endIcon={<StarIcon />} />

                            </button></a>

                        </div>
                        <div className='p-2 ' style={{ alignItems: "left" }} >
                            <a href='https://www.noon.com/uae-en/electronics-and-mobiles/mobiles-and-accessories/mobiles-20905/smartphones/vivo/?f[launch_year]=2021&f[partner]=p_9404&limit=50&sort[by]=popularity&sort[dir]=desc' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://z.nooncdn.com/products/tr:n-t_240/v1643263567/N50867004A_1.jpg' />
                                <p>noon east  Electric</p>
                                <p>Stainless Steel  Kettle wi...</p>
                                <p>AED <b>25.00</b></p>
                                <p><del style={{ color: "rgb(126, 133, 155)" }}>AED 119</del> <b style={{ color: "rgb(56, 174, 4)" }}>78% OFF</b> </p>
                                <p>Arrives</p>
                                <h6>Tommorrow, May 16</h6>
                                <img src='https://z.nooncdn.com/s/app/com/noon/images/fulfilment_express_v2-en.svg' />
                                <img endIcon={<StarIcon />} />

                            </button></a>

                        </div>
                        <div className='p-2 ' style={{ alignItems: "left" }} >
                            <a href='https://www.noon.com/uae-en/electronics-and-mobiles/mobiles-and-accessories/mobiles-20905/smartphones/vivo/?f[launch_year]=2021&f[partner]=p_9404&limit=50&sort[by]=popularity&sort[dir]=desc' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://z.nooncdn.com/products/tr:n-t_240/v1645115670/N42284105A_1.jpg' />
                                <p>noon east  Electric</p>
                                <p>Stainless Steel  Kettle wi...</p>
                                <p>AED <b>25.00</b></p>
                                <p><del style={{ color: "rgb(126, 133, 155)" }}>AED 119</del> <b style={{ color: "rgb(56, 174, 4)" }}>78% OFF</b> </p>
                                <p>Arrives</p>
                                <h6>Tommorrow, May 16</h6>
                                <img src='https://z.nooncdn.com/s/app/com/noon/images/fulfilment_express_v2-en.svg' />
                                <img endIcon={<StarIcon />} />

                            </button></a>

                        </div>
                        <div className='p-2 ' style={{ alignItems: "left" }} >
                            <a href='https://www.noon.com/uae-en/electronics-and-mobiles/mobiles-and-accessories/mobiles-20905/smartphones/vivo/?f[launch_year]=2021&f[partner]=p_9404&limit=50&sort[by]=popularity&sort[dir]=desc' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://z.nooncdn.com/products/tr:n-t_240/v1647698964/N25731211A_1.jpg' />
                                <p>noon east  Electric</p>
                                <p>Stainless Steel  Kettle wi...</p>
                                <p>AED <b>25.00</b></p>
                                <p><del style={{ color: "rgb(126, 133, 155)" }}>AED 119</del> <b style={{ color: "rgb(56, 174, 4)" }}>78% OFF</b> </p>
                                <p>Arrives</p>
                                <h6>Tommorrow, May 16</h6>
                                <img src='https://z.nooncdn.com/s/app/com/noon/images/fulfilment_express_v2-en.svg' />
                                <img endIcon={<StarIcon />} />

                            </button></a>

                        </div>

                        <div className='p-2 ' style={{ alignItems: "left" }} >
                            <a href='https://www.noon.com/uae-en/electronics-and-mobiles/mobiles-and-accessories/mobiles-20905/smartphones/vivo/?f[launch_year]=2021&f[partner]=p_9404&limit=50&sort[by]=popularity&sort[dir]=desc' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://z.nooncdn.com/products/tr:n-t_240/v1633936540/N14078082A_1.jpg' />
                                <p>noon east  Electric</p>
                                <p>Stainless Steel  Kettle wi...</p>
                                <p>AED <b>25.00</b></p>
                                <p><del style={{ color: "rgb(126, 133, 155)" }}>AED 119</del> <b style={{ color: "rgb(56, 174, 4)" }}>78% OFF</b> </p>
                                <p>Arrives</p>
                                <h6>Tommorrow, May 16</h6>
                                <img src='https://z.nooncdn.com/s/app/com/noon/images/fulfilment_express_v2-en.svg' />
                                <img endIcon={<StarIcon />} />

                            </button></a>

                        </div>

                        <div className='p-2 ' style={{ alignItems: "left" }} >
                            <a href='https://www.noon.com/uae-en/electronics-and-mobiles/mobiles-and-accessories/mobiles-20905/smartphones/vivo/?f[launch_year]=2021&f[partner]=p_9404&limit=50&sort[by]=popularity&sort[dir]=desc' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://z.nooncdn.com/products/tr:n-t_240/v1633343874/N40635116A_1.jpg' />
                                <p>noon east  Electric</p>
                                <p>Stainless Steel  Kettle wi...</p>
                                <p>AED <b>25.00</b></p>
                                <p><del style={{ color: "rgb(126, 133, 155)" }}>AED 119</del> <b style={{ color: "rgb(56, 174, 4)" }}>78% OFF</b> </p>
                                <p>Arrives</p>
                                <h6>Tommorrow, May 16</h6>
                                <img src='https://z.nooncdn.com/s/app/com/noon/images/fulfilment_express_v2-en.svg' />
                                <img endIcon={<StarIcon />} />

                            </button></a>

                        </div>


                    </div>
                </Grid>


                <Grid item md={12} sm={12}>
                    <div className='d-flex ' style={{ backgroundColor: "rgb(235, 235, 235)" }}>
                        <div className='p-2 ' >
                            <a href='https://www.noon.com/uae-en/electronics-and-mobiles/mobiles-and-accessories/mobiles-20905/smartphones/vivo/?f[launch_year]=2021&f[partner]=p_9404&limit=50&sort[by]=popularity&sort[dir]=desc' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/ads/banner-720x720/en_dk_uae-spot-01%20(21).1652450482.4938705.png' /></button></a>
                        </div>
                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/fashion/men-31225/new-arrivals-jan-FA_03/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220218/0a3aa81cd5cd61e00d09bb556e4a0467/en_dk_uae-spot-03.png' /></button></a>
                        </div>
                        <div className='p-2 '>
                            <a href='https://www.noon.com/uae-en/toys-sale-may22/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220509/dd6bc73b46f1505c4ced34da87323be4/en_dk_uae-spot-women-01.png' /></button></a>
                        </div>


                    </div>
                </Grid>

                <Grid className='my-3' item md={12} sm={12}>
                    <div>
                        <img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_dk_uae-strip-01G.png' />
                    </div>

                </Grid>


                {/* Trending deal  in laptops */}
                <Grid item md={12} sm={12}>
                    <div className='d-flex my-5  ' style={{ backgroundColor: "white", justifyContent: "space-between" }}>
                        <div><h3>
                            Trending Deals in Laptops
                        </h3></div>
                        <div>
                            <Button variant="outlined" size="medium" color='inherit'>
                                View All
                            </Button>
                        </div>


                    </div>
                </Grid>

                <Grid item md={12} sm={12}>
                    <div className='d-flex ' style={{ backgroundColor: "white" }}>
                        <div className='p-2 ' style={{ alignItems: "left" }} >
                            <a href='https://www.noon.com/uae-en/electronics-and-mobiles/mobiles-and-accessories/mobiles-20905/smartphones/vivo/?f[launch_year]=2021&f[partner]=p_9404&limit=50&sort[by]=popularity&sort[dir]=desc' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://z.nooncdn.com/products/tr:n-t_240/v1645115670/N42284105A_1.jpg' />
                                <p>noon east  Electric</p>
                                <p>Stainless Steel  Kettle wi...</p>
                                <p>AED <b>25.00</b></p>
                                <p><del style={{ color: "rgb(126, 133, 155)" }}>AED 119</del> <b style={{ color: "rgb(56, 174, 4)" }}>78% OFF</b> </p>
                                <p>Arrives</p>
                                <h6>Tommorrow, May 16</h6>
                                <img src='https://z.nooncdn.com/s/app/com/noon/images/fulfilment_express_v2-en.svg' />
                                <img endIcon={<StarIcon />} />

                            </button></a>

                        </div>
                        <div className='p-2 ' style={{ alignItems: "left" }} >
                            <a href='https://www.noon.com/uae-en/electronics-and-mobiles/mobiles-and-accessories/mobiles-20905/smartphones/vivo/?f[launch_year]=2021&f[partner]=p_9404&limit=50&sort[by]=popularity&sort[dir]=desc' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://z.nooncdn.com/products/tr:n-t_240/v1645115681/N51448598A_1.jpg' />
                                <p>noon east  Electric</p>
                                <p>Stainless Steel  Kettle wi...</p>
                                <p>AED <b>25.00</b></p>
                                <p><del style={{ color: "rgb(126, 133, 155)" }}>AED 119</del> <b style={{ color: "rgb(56, 174, 4)" }}>78% OFF</b> </p>
                                <p>Arrives</p>
                                <h6>Tommorrow, May 16</h6>
                                <img src='https://z.nooncdn.com/s/app/com/noon/images/fulfilment_express_v2-en.svg' />
                                <img endIcon={<StarIcon />} />

                            </button></a>

                        </div>
                        <div className='p-2 ' style={{ alignItems: "left" }} >
                            <a href='https://www.noon.com/uae-en/electronics-and-mobiles/mobiles-and-accessories/mobiles-20905/smartphones/vivo/?f[launch_year]=2021&f[partner]=p_9404&limit=50&sort[by]=popularity&sort[dir]=desc' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://z.nooncdn.com/products/tr:n-t_240/v1650552881/N51035099A_1.jpg' />
                                <p>noon east  Electric</p>
                                <p>Stainless Steel  Kettle wi...</p>
                                <p>AED <b>25.00</b></p>
                                <p><del style={{ color: "rgb(126, 133, 155)" }}>AED 119</del> <b style={{ color: "rgb(56, 174, 4)" }}>78% OFF</b> </p>
                                <p>Arrives</p>
                                <h6>Tommorrow, May 16</h6>
                                <img src='https://z.nooncdn.com/s/app/com/noon/images/fulfilment_express_v2-en.svg' />
                                <img endIcon={<StarIcon />} />

                            </button></a>

                        </div>
                        <div className='p-2 ' style={{ alignItems: "left" }} >
                            <a href='https://www.noon.com/uae-en/electronics-and-mobiles/mobiles-and-accessories/mobiles-20905/smartphones/vivo/?f[launch_year]=2021&f[partner]=p_9404&limit=50&sort[by]=popularity&sort[dir]=desc' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://z.nooncdn.com/products/tr:n-t_240/v1637998900/N45795259A_1.jpg' />
                                <p>noon east  Electric</p>
                                <p>Stainless Steel  Kettle wi...</p>
                                <p>AED <b>25.00</b></p>
                                <p><del style={{ color: "rgb(126, 133, 155)" }}>AED 119</del> <b style={{ color: "rgb(56, 174, 4)" }}>78% OFF</b> </p>
                                <p>Arrives</p>
                                <h6>Tommorrow, May 16</h6>
                                <img src='https://z.nooncdn.com/s/app/com/noon/images/fulfilment_express_v2-en.svg' />
                                <img endIcon={<StarIcon />} />

                            </button></a>

                        </div>
                        <div className='p-2 ' style={{ alignItems: "left" }} >
                            <a href='https://www.noon.com/uae-en/electronics-and-mobiles/mobiles-and-accessories/mobiles-20905/smartphones/vivo/?f[launch_year]=2021&f[partner]=p_9404&limit=50&sort[by]=popularity&sort[dir]=desc' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://z.nooncdn.com/products/tr:n-t_240/v1648219210/N41910685A_1.jpg' />
                                <p>noon east  Electric</p>
                                <p>Stainless Steel  Kettle wi...</p>
                                <p>AED <b>25.00</b></p>
                                <p><del style={{ color: "rgb(126, 133, 155)" }}>AED 119</del> <b style={{ color: "rgb(56, 174, 4)" }}>78% OFF</b> </p>
                                <p>Arrives</p>
                                <h6>Tommorrow, May 16</h6>
                                <img src='https://z.nooncdn.com/s/app/com/noon/images/fulfilment_express_v2-en.svg' />
                                <img endIcon={<StarIcon />} />

                            </button></a>

                        </div>

                        <div className='p-2 ' style={{ alignItems: "left" }} >
                            <a href='https://www.noon.com/uae-en/electronics-and-mobiles/mobiles-and-accessories/mobiles-20905/smartphones/vivo/?f[launch_year]=2021&f[partner]=p_9404&limit=50&sort[by]=popularity&sort[dir]=desc' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://z.nooncdn.com/products/tr:n-t_240/v1635842015/N44042514A_1.jpg' />
                                <p>noon east  Electric</p>
                                <p>Stainless Steel  Kettle wi...</p>
                                <p>AED <b>25.00</b></p>
                                <p><del style={{ color: "rgb(126, 133, 155)" }}>AED 119</del> <b style={{ color: "rgb(56, 174, 4)" }}>78% OFF</b> </p>
                                <p>Arrives</p>
                                <h6>Tommorrow, May 16</h6>
                                <img src='https://z.nooncdn.com/s/app/com/noon/images/fulfilment_express_v2-en.svg' />
                                <img endIcon={<StarIcon />} />

                            </button></a>

                        </div>

                        <div className='p-2 ' style={{ alignItems: "left" }} >
                            <a href='https://www.noon.com/uae-en/electronics-and-mobiles/mobiles-and-accessories/mobiles-20905/smartphones/vivo/?f[launch_year]=2021&f[partner]=p_9404&limit=50&sort[by]=popularity&sort[dir]=desc' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://z.nooncdn.com/products/tr:n-t_240/v1645546015/N47721975A_1.jpg' />
                                <p>noon east  Electric</p>
                                <p>Stainless Steel  Kettle wi...</p>
                                <p>AED <b>25.00</b></p>
                                <p><del style={{ color: "rgb(126, 133, 155)" }}>AED 119</del> <b style={{ color: "rgb(56, 174, 4)" }}>78% OFF</b> </p>
                                <p>Arrives</p>
                                <h6>Tommorrow, May 16</h6>
                                <img src='https://z.nooncdn.com/s/app/com/noon/images/fulfilment_express_v2-en.svg' />
                                <img endIcon={<StarIcon />} />

                            </button></a>

                        </div>


                    </div>
                </Grid>

                {/* Deal only on moon */}

                <Grid item md={12} sm={12}>
                    <div className='d-flex ' style={{ backgroundColor: "rgb(200, 239, 250" }}>
                        <div className='p-2'  >
                            <a href='https://www.noon.com/uae-en/home-and-kitchen/kitchen-and-dining/serveware/?sort[by]=popularity&sort[dir]=desc' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220506/aea0b6fb802441648afe8b450184b13f/en_dk-uae-deal-title-01.gif    ' /></button></a>
                        </div>

                    </div>
                </Grid>

                <Grid item md={12} sm={12}>
                    <div className='d-flex  ' style={{ backgroundColor: "rgb(200, 239, 250)" }}>
                        <div className='p-2' >
                            <a href='https://www.noon.com/uae-en/electronics-and-mobiles/mobiles-and-accessories/mobiles-20905/smartphones/vivo/?f[launch_year]=2021&f[partner]=p_9404&limit=50&sort[by]=popularity&sort[dir]=desc' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220514/7d479376a38d9623593cfdcd4002b92e/en_mb_uae-deals-01.png' /></button></a>
                        </div>
                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/fashion/men-31225/new-arrivals-jan-FA_03/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220514/7d479376a38d9623593cfdcd4002b92e/en_mb_uae-deals-02.png' /></button></a>
                        </div>
                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/toys-sale-may22/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220514/748bf56982867c107f39b365f76d14ca/en_mb_uae-deals-03.png' /></button></a>
                        </div>
                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/beauty-and-health/health/health-dis-BE_07/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220514/7d479376a38d9623593cfdcd4002b92e/en_mb_uae-deals-04.png' /></button></a>
                        </div>

                    </div>
                </Grid>

                {/* trending deals in mobiles */}
                <Grid item md={12} sm={12}>
                    <div className='d-flex my-5  ' style={{ backgroundColor: "white", justifyContent: "space-between" }}>
                        <div><h3>
                            Trending Deals in Mobiles
                        </h3></div>
                        <div>
                            <Button variant="outlined" size="medium" color='inherit'>
                                View All
                            </Button>
                        </div>


                    </div>
                </Grid>

                <Grid item md={12} sm={12}>
                    <div className='d-flex ' style={{ backgroundColor: "white" }}>

                        <div className='p-2 ' style={{ alignItems: "left" }} >
                            <a href='https://www.noon.com/uae-en/electronics-and-mobiles/mobiles-and-accessories/mobiles-20905/smartphones/vivo/?f[launch_year]=2021&f[partner]=p_9404&limit=50&sort[by]=popularity&sort[dir]=desc' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://z.nooncdn.com/products/tr:n-t_240/v1648570072/N50840187A_1.jpg' />
                                <p>noon east  Electric</p>
                                <p>Stainless Steel  Kettle wi...</p>
                                <p>AED <b>25.00</b></p>
                                <p><del style={{ color: "rgb(126, 133, 155)" }}>AED 119</del> <b style={{ color: "rgb(56, 174, 4)" }}>78% OFF</b> </p>
                                <p>Arrives</p>
                                <h6>Tommorrow, May 16</h6>
                                <img src='https://z.nooncdn.com/s/app/com/noon/images/fulfilment_express_v2-en.svg' />
                                <img endIcon={<StarIcon />} />

                            </button></a>

                        </div>
                        <div className='p-2 ' style={{ alignItems: "left" }} >
                            <a href='https://www.noon.com/uae-en/electronics-and-mobiles/mobiles-and-accessories/mobiles-20905/smartphones/vivo/?f[launch_year]=2021&f[partner]=p_9404&limit=50&sort[by]=popularity&sort[dir]=desc' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://z.nooncdn.com/products/tr:n-t_240/v1648570082/N52929058A_1.jpg' />
                                <p>noon east  Electric</p>
                                <p>Stainless Steel  Kettle wi...</p>
                                <p>AED <b>25.00</b></p>
                                <p><del style={{ color: "rgb(126, 133, 155)" }}>AED 119</del> <b style={{ color: "rgb(56, 174, 4)" }}>78% OFF</b> </p>
                                <p>Arrives</p>
                                <h6>Tommorrow, May 16</h6>
                                <img src='https://z.nooncdn.com/s/app/com/noon/images/fulfilment_express_v2-en.svg' />
                                <img endIcon={<StarIcon />} />

                            </button></a>

                        </div>
                        <div className='p-2 ' style={{ alignItems: "left" }} >
                            <a href='https://www.noon.com/uae-en/electronics-and-mobiles/mobiles-and-accessories/mobiles-20905/smartphones/vivo/?f[launch_year]=2021&f[partner]=p_9404&limit=50&sort[by]=popularity&sort[dir]=desc' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://z.nooncdn.com/products/tr:n-t_240/v1642258788/N41247589A_1.jpg' />
                                <p>noon east  Electric</p>
                                <p>Stainless Steel  Kettle wi...</p>
                                <p>AED <b>25.00</b></p>
                                <p><del style={{ color: "rgb(126, 133, 155)" }}>AED 119</del> <b style={{ color: "rgb(56, 174, 4)" }}>78% OFF</b> </p>
                                <p>Arrives</p>
                                <h6>Tommorrow, May 16</h6>
                                <img src='https://z.nooncdn.com/s/app/com/noon/images/fulfilment_express_v2-en.svg' />
                                <img endIcon={<StarIcon />} />

                            </button></a>

                        </div>
                        <div className='p-2 ' style={{ alignItems: "left" }} >
                            <a href='https://www.noon.com/uae-en/electronics-and-mobiles/mobiles-and-accessories/mobiles-20905/smartphones/vivo/?f[launch_year]=2021&f[partner]=p_9404&limit=50&sort[by]=popularity&sort[dir]=desc' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://z.nooncdn.com/products/tr:n-t_240/v1648034118/N52930541A_1.jpg' />
                                <p>noon east  Electric</p>
                                <p>Stainless Steel  Kettle wi...</p>
                                <p>AED <b>25.00</b></p>
                                <p><del style={{ color: "rgb(126, 133, 155)" }}>AED 119</del> <b style={{ color: "rgb(56, 174, 4)" }}>78% OFF</b> </p>
                                <p>Arrives</p>
                                <h6>Tommorrow, May 16</h6>
                                <img src='https://z.nooncdn.com/s/app/com/noon/images/fulfilment_express_v2-en.svg' />
                                <img endIcon={<StarIcon />} />

                            </button></a>

                        </div>
                        <div className='p-2 ' style={{ alignItems: "left" }} >
                            <a href='https://www.noon.com/uae-en/electronics-and-mobiles/mobiles-and-accessories/mobiles-20905/smartphones/vivo/?f[launch_year]=2021&f[partner]=p_9404&limit=50&sort[by]=popularity&sort[dir]=desc' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://z.nooncdn.com/products/tr:n-t_240/v1645762210/N52751033A_1.jpg' />
                                <p>noon east  Electric</p>
                                <p>Stainless Steel  Kettle wi...</p>
                                <p>AED <b>25.00</b></p>
                                <p><del style={{ color: "rgb(126, 133, 155)" }}>AED 119</del> <b style={{ color: "rgb(56, 174, 4)" }}>78% OFF</b> </p>
                                <p>Arrives</p>
                                <h6>Tommorrow, May 16</h6>
                                <img src='https://z.nooncdn.com/s/app/com/noon/images/fulfilment_express_v2-en.svg' />
                                <img endIcon={<StarIcon />} />

                            </button></a>

                        </div>

                        <div className='p-2 ' style={{ alignItems: "left" }} >
                            <a href='https://www.noon.com/uae-en/electronics-and-mobiles/mobiles-and-accessories/mobiles-20905/smartphones/vivo/?f[launch_year]=2021&f[partner]=p_9404&limit=50&sort[by]=popularity&sort[dir]=desc' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://z.nooncdn.com/products/tr:n-t_240/v1642700117/N52455051A_1.jpg' />
                                <p>noon east  Electric</p>
                                <p>Stainless Steel  Kettle wi...</p>
                                <p>AED <b>25.00</b></p>
                                <p><del style={{ color: "rgb(126, 133, 155)" }}>AED 119</del> <b style={{ color: "rgb(56, 174, 4)" }}>78% OFF</b> </p>
                                <p>Arrives</p>
                                <h6>Tommorrow, May 16</h6>
                                <img src='https://z.nooncdn.com/s/app/com/noon/images/fulfilment_express_v2-en.svg' />
                                <img endIcon={<StarIcon />} />

                            </button></a>

                        </div>

                        <div className='p-2 ' style={{ alignItems: "left" }} >
                            <a href='https://www.noon.com/uae-en/electronics-and-mobiles/mobiles-and-accessories/mobiles-20905/smartphones/vivo/?f[launch_year]=2021&f[partner]=p_9404&limit=50&sort[by]=popularity&sort[dir]=desc' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://z.nooncdn.com/products/tr:n-t_240/v1646808689/N52856958A_1.jpg' />
                                <p>noon east  Electric</p>
                                <p>Stainless Steel  Kettle wi...</p>
                                <p>AED <b>25.00</b></p>
                                <p><del style={{ color: "rgb(126, 133, 155)" }}>AED 119</del> <b style={{ color: "rgb(56, 174, 4)" }}>78% OFF</b> </p>
                                <p>Arrives</p>
                                <h6>Tommorrow, May 16</h6>
                                <img src='https://z.nooncdn.com/s/app/com/noon/images/fulfilment_express_v2-en.svg' />
                                <img endIcon={<StarIcon />} />

                            </button></a>

                        </div>


                    </div>
                </Grid>


                {/* Aerial Add Banner */}
                <Grid className='my-3' item md={12} sm={12}>
                    <div style={{ backgroundColor: "rgb(200, 245, 200)" }}>
                        <button style={{ border: "none" }}> <img width="100%" src='https://k.nooncdn.com/cms/pages/20211205/facb109f7445b0f993137ce467180ea2/en_noonsection-01.gif' /></button>
                    </div>

                </Grid>

                {/* Groceries */}
                <Grid item md={12} sm={12}>
                    <div className='d-flex ' style={{ backgroundColor: "rgb(200, 245, 200)" }}>
                        <div className='p-2'  >
                            <a href='https://www.noon.com/uae-en/home-and-kitchen/kitchen-and-dining/serveware/?sort[by]=popularity&sort[dir]=desc' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20211205/facb109f7445b0f993137ce467180ea2/en_title-noon-01.png ' /></button></a>
                        </div>

                    </div>
                </Grid>

                {/* groceires Card */}

                <Grid item md={12} sm={12}>
                    <div className='d-flex  ' style={{ backgroundColor: "rgb(200, 245, 200)" }}>
                        <div className='p-2' >
                            <a href='https://www.noon.com/uae-en/electronics-and-mobiles/mobiles-and-accessories/mobiles-20905/smartphones/vivo/?f[launch_year]=2021&f[partner]=p_9404&limit=50&sort[by]=popularity&sort[dir]=desc' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220112/4d90a77f391834f5df66e403d031fa6a/en_cat-01.png' /></button></a>
                        </div>
                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/fashion/men-31225/new-arrivals-jan-FA_03/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20210713/e5779551d69de4a559176a5fd1df4ba5/en_cat-02.png' /></button></a>
                        </div>
                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/toys-sale-may22/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20210713/e5779551d69de4a559176a5fd1df4ba5/en_cat-03.png' /></button></a>
                        </div>
                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/beauty-and-health/health/health-dis-BE_07/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20210713/e5779551d69de4a559176a5fd1df4ba5/en_cat-04.png' /></button></a>
                        </div>
                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/beauty-and-health/health/health-dis-BE_07/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20210713/e5779551d69de4a559176a5fd1df4ba5/en_cat-05.png' /></button></a>
                        </div>
                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/beauty-and-health/health/health-dis-BE_07/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20210713/e5779551d69de4a559176a5fd1df4ba5/en_cat-06.png' /></button></a>
                        </div>

                    </div>
                </Grid>

                {/* Trending dealis in kutchen and dinnding  */}
                <Grid item md={12} sm={12}>
                    <div className='d-flex my-5  ' style={{ backgroundColor: "white", justifyContent: "space-between" }}>
                        <div><h3>
                            Trending Deals in Kitchen and Dinning
                        </h3></div>
                        <div>
                            <Button variant="outlined" size="medium" color='inherit'>
                                View All
                            </Button>
                        </div>


                    </div>
                </Grid>

                <Grid item md={12} sm={12}>
                    <div className='d-flex w-100 h-100 ' style={{ backgroundColor: "white" }}>

                        <div className='p-2 ' style={{ alignItems: "left" }} >
                            <a href='https://www.noon.com/uae-en/electronics-and-mobiles/mobiles-and-accessories/mobiles-20905/smartphones/vivo/?f[launch_year]=2021&f[partner]=p_9404&limit=50&sort[by]=popularity&sort[dir]=desc' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://z.nooncdn.com/products/tr:n-t_240/v1646724232/N20689072A_4.jpg' />
                                <p>noon east  Electric</p>
                                <p>Stainless Steel  Kettle wi...</p>
                                <p>AED <b>25.00</b></p>
                                <p><del style={{ color: "rgb(126, 133, 155)" }}>AED 119</del> <b style={{ color: "rgb(56, 174, 4)" }}>78% OFF</b> </p>
                                <p>Arrives</p>
                                <h6>Tommorrow, May 16</h6>
                                <img src='https://z.nooncdn.com/s/app/com/noon/images/fulfilment_express_v2-en.svg' />
                                <img endIcon={<StarIcon />} />

                            </button></a>

                        </div>
                        <div className='p-2 ' style={{ alignItems: "left" }} >
                            <a href='https://www.noon.com/uae-en/electronics-and-mobiles/mobiles-and-accessories/mobiles-20905/smartphones/vivo/?f[launch_year]=2021&f[partner]=p_9404&limit=50&sort[by]=popularity&sort[dir]=desc' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://z.nooncdn.com/products/tr:n-t_240/v1645647290/N28834620A_1.jpg' />
                                <p>noon east  Electric</p>
                                <p>Stainless Steel  Kettle wi...</p>
                                <p>AED <b>25.00</b></p>
                                <p><del style={{ color: "rgb(126, 133, 155)" }}>AED 119</del> <b style={{ color: "rgb(56, 174, 4)" }}>78% OFF</b> </p>
                                <p>Arrives</p>
                                <h6>Tommorrow, May 16</h6>
                                <img src='https://z.nooncdn.com/s/app/com/noon/images/fulfilment_express_v2-en.svg' />
                                <img endIcon={<StarIcon />} />

                            </button></a>

                        </div>
                        <div className='p-2 ' style={{ alignItems: "left" }} >
                            <a href='https://www.noon.com/uae-en/electronics-and-mobiles/mobiles-and-accessories/mobiles-20905/smartphones/vivo/?f[launch_year]=2021&f[partner]=p_9404&limit=50&sort[by]=popularity&sort[dir]=desc' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://z.nooncdn.com/products/tr:n-t_240/v1635748093/N22547721A_5.jpg' />
                                <p>noon east  Electric</p>
                                <p>Stainless Steel  Kettle wi...</p>
                                <p>AED <b>25.00</b></p>
                                <p><del style={{ color: "rgb(126, 133, 155)" }}>AED 119</del> <b style={{ color: "rgb(56, 174, 4)" }}>78% OFF</b> </p>
                                <p>Arrives</p>
                                <h6>Tommorrow, May 16</h6>
                                <img src='https://z.nooncdn.com/s/app/com/noon/images/fulfilment_express_v2-en.svg' />
                                <img endIcon={<StarIcon />} />

                            </button></a>

                        </div>
                        <div className='p-2 ' style={{ alignItems: "left" }} >
                            <a href='https://www.noon.com/uae-en/electronics-and-mobiles/mobiles-and-accessories/mobiles-20905/smartphones/vivo/?f[launch_year]=2021&f[partner]=p_9404&limit=50&sort[by]=popularity&sort[dir]=desc' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://z.nooncdn.com/products/tr:n-t_240/pzsku/Z7AF573123E987A37330FZ/45/_/1645286375/3f3f3b8d-4d41-496f-8658-46b2dd6a8666.jpg' />
                                <p>noon east  Electric</p>
                                <p>Stainless Steel  Kettle wi...</p>
                                <p>AED <b>25.00</b></p>
                                <p><del style={{ color: "rgb(126, 133, 155)" }}>AED 119</del> <b style={{ color: "rgb(56, 174, 4)" }}>78% OFF</b> </p>
                                <p>Arrives</p>
                                <h6>Tommorrow, May 16</h6>
                                <img src='https://z.nooncdn.com/s/app/com/noon/images/fulfilment_express_v2-en.svg' />
                                <img endIcon={<StarIcon />} />

                            </button></a>

                        </div>
                        <div className='p-2 ' style={{ alignItems: "left" }} >
                            <a href='https://www.noon.com/uae-en/electronics-and-mobiles/mobiles-and-accessories/mobiles-20905/smartphones/vivo/?f[launch_year]=2021&f[partner]=p_9404&limit=50&sort[by]=popularity&sort[dir]=desc' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://z.nooncdn.com/products/tr:n-t_240/v1650799997/N38900263A_1.jpg' />
                                <p>noon east  Electric</p>
                                <p>Stainless Steel  Kettle wi...</p>
                                <p>AED <b>25.00</b></p>
                                <p><del style={{ color: "rgb(126, 133, 155)" }}>AED 119</del> <b style={{ color: "rgb(56, 174, 4)" }}>78% OFF</b> </p>
                                <p>Arrives</p>
                                <h6>Tommorrow, May 16</h6>
                                <img src='https://z.nooncdn.com/s/app/com/noon/images/fulfilment_express_v2-en.svg' />
                                <img endIcon={<StarIcon />} />

                            </button></a>

                        </div>

                        <div className='p-2 ' style={{ alignItems: "left" }} >
                            <a href='https://www.noon.com/uae-en/electronics-and-mobiles/mobiles-and-accessories/mobiles-20905/smartphones/vivo/?f[launch_year]=2021&f[partner]=p_9404&limit=50&sort[by]=popularity&sort[dir]=desc' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://z.nooncdn.com/products/tr:n-t_240/v1647531314/N42677068A_1.jpg' />
                                <p>noon east  Electric</p>
                                <p>Stainless Steel  Kettle wi...</p>
                                <p>AED <b>25.00</b></p>
                                <p><del style={{ color: "rgb(126, 133, 155)" }}>AED 119</del> <b style={{ color: "rgb(56, 174, 4)" }}>78% OFF</b> </p>
                                <p>Arrives</p>
                                <h6>Tommorrow, May 16</h6>
                                <img src='https://z.nooncdn.com/s/app/com/noon/images/fulfilment_express_v2-en.svg' />
                                <img endIcon={<StarIcon />} />

                            </button></a>

                        </div>

                        <div className='p-2 ' style={{ alignItems: "left" }} >
                            <a href='https://www.noon.com/uae-en/electronics-and-mobiles/mobiles-and-accessories/mobiles-20905/smartphones/vivo/?f[launch_year]=2021&f[partner]=p_9404&limit=50&sort[by]=popularity&sort[dir]=desc' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://z.nooncdn.com/products/tr:n-t_240/v1600780419/N39007197A_9.jpg' />
                                <p>noon east  Electric</p>
                                <p>Stainless Steel  Kettle wi...</p>
                                <p>AED <b>25.00</b></p>
                                <p><del style={{ color: "rgb(126, 133, 155)" }}>AED 119</del> <b style={{ color: "rgb(56, 174, 4)" }}>78% OFF</b> </p>
                                <p>Arrives</p>
                                <h6>Tommorrow, May 16</h6>
                                <img src='https://z.nooncdn.com/s/app/com/noon/images/fulfilment_express_v2-en.svg' />
                                <img endIcon={<StarIcon />} />

                            </button></a>

                        </div>


                    </div>
                </Grid>


                {/* Aerial Add Banner */}
                <Grid zeroMinWidth={true} className='my-3' item md={12} sm={12}>
                    <div style={{ backgroundColor: "rgb(200, 245, 200)" }}>
                        <button style={{ border: "none" }}> <img width="100%" src='https://k.nooncdn.com/cms/pages/20220427/5e979b26c16ad2ef4831b78682c15905/en_dk-strip-011.gif' /></button>
                    </div>

                </Grid>



                {/* 50-80%off men fashion */}
                <Grid item md={12} sm={12}>
                    <div className='d-flex ' style={{ backgroundColor: "rgb(255, 243, 221)" }}>
                        <div className='p-2'  >
                            <a href='https://www.noon.com/uae-en/home-and-kitchen/kitchen-and-dining/serveware/?sort[by]=popularity&sort[dir]=desc' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220510/b02e0177525f2f4f358b854eea0c545f/en_dk_uae-mw-title.png   ' /></button></a>
                        </div>

                    </div>
                </Grid>


                <Grid item md={12} sm={12}>
                    <div className='d-flex ' style={{ backgroundColor: "rgb(255, 243, 221)" }}>
                        <div className='p-2 ' >
                            <a href='https://www.noon.com/uae-en/electronics-and-mobiles/mobiles-and-accessories/mobiles-20905/smartphones/vivo/?f[launch_year]=2021&f[partner]=p_9404&limit=50&sort[by]=popularity&sort[dir]=desc' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-mw-01.png' /></button></a>
                        </div>
                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/fashion/men-31225/new-arrivals-jan-FA_03/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-mw-02.png' /></button></a>
                        </div>
                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/toys-sale-may22/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-mw-03.png' /></button></a>
                        </div>
                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/beauty-and-health/health/health-dis-BE_07/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-mw-04.png' /></button></a>
                        </div>
                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/beauty-and-health/health/health-dis-BE_07/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-mw-05.png' /></button></a>
                        </div>

                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/beauty-and-health/health/health-dis-BE_07/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-mw-06.png' /></button></a>
                        </div>

                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/beauty-and-health/health/health-dis-BE_07/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220509/6231bea81d19ed96141df69a8ece4512/en_dk_uae-mw-01.png' /></button></a>
                        </div>
                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/beauty-and-health/health/health-dis-BE_07/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-mw-08.png' /></button></a>
                        </div>


                    </div>
                </Grid>





                {/* 50-80%off women fashion */}
                <Grid item md={12} sm={12}>
                    <div className='d-flex ' style={{ backgroundColor: "rgb(255, 243, 221)" }}>
                        <div className='p-2'  >
                            <a href='https://www.noon.com/uae-en/home-and-kitchen/kitchen-and-dining/serveware/?sort[by]=popularity&sort[dir]=desc' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220510/b02e0177525f2f4f358b854eea0c545f/en_dk_uae-ww-title.png' /></button></a>
                        </div>

                    </div>
                </Grid>


                <Grid item md={12} sm={12}>
                    <div className='d-flex ' style={{ backgroundColor: "rgb(255, 243, 221)" }}>
                        <div className='p-2 ' >
                            <a href='https://www.noon.com/uae-en/electronics-and-mobiles/mobiles-and-accessories/mobiles-20905/smartphones/vivo/?f[launch_year]=2021&f[partner]=p_9404&limit=50&sort[by]=popularity&sort[dir]=desc' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-ww-01.png' /></button></a>
                        </div>
                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/fashion/men-31225/new-arrivals-jan-FA_03/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-ww-02.png' /></button></a>
                        </div>
                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/toys-sale-may22/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-ww-03.png' /></button></a>
                        </div>
                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/beauty-and-health/health/health-dis-BE_07/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-ww-06.png' /></button></a>
                        </div>
                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/beauty-and-health/health/health-dis-BE_07/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-ww-04.png' /></button></a>
                        </div>

                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/beauty-and-health/health/health-dis-BE_07/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220509/6231bea81d19ed96141df69a8ece4512/en_dk_uae-ww-01.png' /></button></a>
                        </div>

                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/beauty-and-health/health/health-dis-BE_07/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-ww-07.png' /></button></a>
                        </div>
                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/beauty-and-health/health/health-dis-BE_07/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-ww-08.png' /></button></a>
                        </div>


                    </div>
                </Grid>

                {/* Aerial Add Banner */}
                <Grid zeroMinWidth={true} color="rgb(255, 243, 221)" className='my-3' item md={12} sm={12}>
                    <div style={{ backgroundColor: "rgb(255, 243, 221)" }}>
                        <button style={{ border: "none" }}> <img width="100%" src='https://k.nooncdn.com/cms/pages/20220513/566de6256fc734f249b05d5ec115504f/en_dk_uae-hero-03.png' /></button>
                    </div>

                </Grid>

                <Grid zeroMinWidth={true} color="rgb(255, 243, 221)" className='my-3' item md={12} sm={12}>

                    <div style={{ backgroundColor: "rgb(255, 243, 221)" }}>
                        <button style={{ border: "none" }}> <img width="100%" src='https://k.nooncdn.com/cms/pages/20220427/5e979b26c16ad2ef4831b78682c15905/en_dk-mashreq-1strip-01.gif' /></button>
                    </div>

                </Grid>


                {/* Electronics */}
                {/* 50-80%off women fashion */}
                <Grid item md={12} sm={12}>
                    <div className='d-flex ' style={{ backgroundColor: "white" }}>
                        <div className='p-2'  >
                            <a href='https://www.noon.com/uae-en/home-and-kitchen/kitchen-and-dining/serveware/?sort[by]=popularity&sort[dir]=desc' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-electronics-title.png' /></button></a>
                        </div>

                    </div>
                </Grid>



                <Grid item md={12} sm={12}>
                    <div className='d-flex ' style={{ backgroundColor: "white" }}>
                        <div className='p-2 ' >
                            <a href='https://www.noon.com/uae-en/electronics-and-mobiles/mobiles-and-accessories/mobiles-20905/smartphones/vivo/?f[launch_year]=2021&f[partner]=p_9404&limit=50&sort[by]=popularity&sort[dir]=desc' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-electronics-01.png' /></button></a>
                        </div>
                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/fashion/men-31225/new-arrivals-jan-FA_03/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-electronics-02.png' /></button></a>
                        </div>
                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/toys-sale-may22/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-electronics-03.png' /></button></a>
                        </div>
                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/beauty-and-health/health/health-dis-BE_07/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-electronics-04.png' /></button></a>
                        </div>
                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/beauty-and-health/health/health-dis-BE_07/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-electronics-05.png' /></button></a>
                        </div>

                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/beauty-and-health/health/health-dis-BE_07/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-electronics-06.png' /></button></a>
                        </div>

                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/beauty-and-health/health/health-dis-BE_07/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-electronics-07.png' /></button></a>
                        </div>



                    </div>
                </Grid>


                {/* 50-80%off women fashion */}
                <Grid item md={12} sm={12}>
                    <div className='d-flex ' style={{ backgroundColor: "white" }}>
                        <div className='p-2'  >
                            <a href='https://www.noon.com/uae-en/home-and-kitchen/kitchen-and-dining/serveware/?sort[by]=popularity&sort[dir]=desc' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-mobile-title.png' /></button></a>
                        </div>

                    </div>
                </Grid>


                <Grid item md={12} sm={12}>
                    <div className='d-flex ' style={{ backgroundColor: "white" }}>
                        <div className='p-2 ' >
                            <a href='https://www.noon.com/uae-en/electronics-and-mobiles/mobiles-and-accessories/mobiles-20905/smartphones/vivo/?f[launch_year]=2021&f[partner]=p_9404&limit=50&sort[by]=popularity&sort[dir]=desc' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-electronics-01.png' /></button></a>
                        </div>
                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/fashion/men-31225/new-arrivals-jan-FA_03/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-electronics-02.png' /></button></a>
                        </div>
                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/toys-sale-may22/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-electronics-03.png' /></button></a>
                        </div>
                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/beauty-and-health/health/health-dis-BE_07/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-electronics-04.png' /></button></a>
                        </div>
                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/beauty-and-health/health/health-dis-BE_07/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-electronics-05.png' /></button></a>
                        </div>

                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/beauty-and-health/health/health-dis-BE_07/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-electronics-06.png' /></button></a>
                        </div>

                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/beauty-and-health/health/health-dis-BE_07/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-electronics-07.png' /></button></a>
                        </div>



                    </div>
                </Grid>



                <Grid item md={12} sm={12}>
                    <div className='d-flex ' style={{ backgroundColor: "white" }}>
                        <div className='p-2'  >
                            <a href='https://www.noon.com/uae-en/home-and-kitchen/kitchen-and-dining/serveware/?sort[by]=popularity&sort[dir]=desc' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-laptops-title.png' /></button></a>
                        </div>

                    </div>
                </Grid>


                <Grid item md={12} sm={12}>
                    <div className='d-flex ' style={{ backgroundColor: "white" }}>
                        <div className='p-2 ' >
                            <a href='https://www.noon.com/uae-en/electronics-and-mobiles/mobiles-and-accessories/mobiles-20905/smartphones/vivo/?f[launch_year]=2021&f[partner]=p_9404&limit=50&sort[by]=popularity&sort[dir]=desc' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-electronics-01.png' /></button></a>
                        </div>
                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/fashion/men-31225/new-arrivals-jan-FA_03/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-electronics-02.png' /></button></a>
                        </div>
                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/toys-sale-may22/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-electronics-03.png' /></button></a>
                        </div>
                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/beauty-and-health/health/health-dis-BE_07/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-electronics-04.png' /></button></a>
                        </div>
                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/beauty-and-health/health/health-dis-BE_07/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-electronics-05.png' /></button></a>
                        </div>

                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/beauty-and-health/health/health-dis-BE_07/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-electronics-06.png' /></button></a>
                        </div>

                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/beauty-and-health/health/health-dis-BE_07/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-electronics-07.png' /></button></a>
                        </div>



                    </div>
                </Grid>


                {/* Aerial Add Banner */}
                <Grid zeroMinWidth={true} color="rgb(255, 243, 221)" className='my-3' item md={12} sm={12}>
                    <div style={{ backgroundColor: "rgb(255, 243, 221)" }}>
                        <button style={{ border: "none" }}> <img width="100%" src='https://k.nooncdn.com/cms/pages/20211018/ecde4ae8250d6cd07b29d4de4b106f61/en_strip-00.png' /></button>
                    </div>

                </Grid>

                {/* beauty */}
                {/* 50-80%off women fashion */}
                <Grid item md={12} sm={12}>
                    <div className='d-flex ' style={{ backgroundColor: "white" }}>
                        <div className='p-2'  >
                            <a href='https://www.noon.com/uae-en/home-and-kitchen/kitchen-and-dining/serveware/?sort[by]=popularity&sort[dir]=desc' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-beauty-title.png' /></button></a>
                        </div>

                    </div>
                </Grid>


                <Grid item md={12} sm={12}>
                    <div className='d-flex ' style={{ backgroundColor: "white" }}>
                        <div className='p-2 ' >
                            <a href='https://www.noon.com/uae-en/electronics-and-mobiles/mobiles-and-accessories/mobiles-20905/smartphones/vivo/?f[launch_year]=2021&f[partner]=p_9404&limit=50&sort[by]=popularity&sort[dir]=desc' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-beauty-01.png' /></button></a>
                        </div>
                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/fashion/men-31225/new-arrivals-jan-FA_03/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-beauty-02.png' /></button></a>
                        </div>
                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/toys-sale-may22/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_dk_uae-beauty-03.png' /></button></a>
                        </div>
                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/beauty-and-health/health/health-dis-BE_07/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-beauty-04.png' /></button></a>
                        </div>
                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/beauty-and-health/health/health-dis-BE_07/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-beauty-05.png' /></button></a>
                        </div>

                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/beauty-and-health/health/health-dis-BE_07/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-beauty-06.png' /></button></a>
                        </div>

                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/beauty-and-health/health/health-dis-BE_07/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-beauty-08.png' /></button></a>
                        </div>



                    </div>
                </Grid>


                <Grid item md={12} sm={12}>
                    <div className='d-flex ' style={{ backgroundColor: "white" }}>
                        <div className='p-2'  >
                            <a href='https://www.noon.com/uae-en/home-and-kitchen/kitchen-and-dining/serveware/?sort[by]=popularity&sort[dir]=desc' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-fragrances-title.png' /></button></a>
                        </div>

                    </div>
                </Grid>


                <Grid item md={12} sm={12}>
                    <div className='d-flex ' style={{ backgroundColor: "white" }}>
                        <div className='p-2 ' >
                            <a href='https://www.noon.com/uae-en/electronics-and-mobiles/mobiles-and-accessories/mobiles-20905/smartphones/vivo/?f[launch_year]=2021&f[partner]=p_9404&limit=50&sort[by]=popularity&sort[dir]=desc' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-beauty-01.png' /></button></a>
                        </div>
                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/fashion/men-31225/new-arrivals-jan-FA_03/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-beauty-02.png' /></button></a>
                        </div>
                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/toys-sale-may22/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_dk_uae-beauty-03.png' /></button></a>
                        </div>
                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/beauty-and-health/health/health-dis-BE_07/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-beauty-04.png' /></button></a>
                        </div>
                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/beauty-and-health/health/health-dis-BE_07/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-beauty-05.png' /></button></a>
                        </div>

                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/beauty-and-health/health/health-dis-BE_07/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-beauty-06.png' /></button></a>
                        </div>

                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/beauty-and-health/health/health-dis-BE_07/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-beauty-08.png' /></button></a>
                        </div>



                    </div>
                </Grid>


                {/* kitchen favorite */}

                <Grid item md={12} sm={12}>
                    <div className='d-flex ' style={{ backgroundColor: "white" }}>
                        <div className='p-2'  >
                            <a href='https://www.noon.com/uae-en/home-and-kitchen/kitchen-and-dining/serveware/?sort[by]=popularity&sort[dir]=desc' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-kitchen-title.png' /></button></a>
                        </div>

                    </div>
                </Grid>


                <Grid item md={12} sm={12}>
                    <div className='d-flex ' style={{ backgroundColor: "white" }}>
                        <div className='p-2 ' >
                            <a href='https://www.noon.com/uae-en/electronics-and-mobiles/mobiles-and-accessories/mobiles-20905/smartphones/vivo/?f[launch_year]=2021&f[partner]=p_9404&limit=50&sort[by]=popularity&sort[dir]=desc' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-beauty-01.png' /></button></a>
                        </div>
                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/fashion/men-31225/new-arrivals-jan-FA_03/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-beauty-02.png' /></button></a>
                        </div>
                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/toys-sale-may22/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_dk_uae-beauty-03.png' /></button></a>
                        </div>
                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/beauty-and-health/health/health-dis-BE_07/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-beauty-04.png' /></button></a>
                        </div>
                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/beauty-and-health/health/health-dis-BE_07/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-beauty-05.png' /></button></a>
                        </div>

                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/beauty-and-health/health/health-dis-BE_07/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-beauty-06.png' /></button></a>
                        </div>

                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/beauty-and-health/health/health-dis-BE_07/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-beauty-08.png' /></button></a>
                        </div>



                    </div>
                </Grid>


                {/* Home Appliance */}
                <Grid item md={12} sm={12}>
                    <div className='d-flex ' style={{ backgroundColor: "white" }}>
                        <div className='p-2'  >
                            <a href='https://www.noon.com/uae-en/home-and-kitchen/kitchen-and-dining/serveware/?sort[by]=popularity&sort[dir]=desc' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-home-title.png' /></button></a>
                        </div>

                    </div>
                </Grid>


                <Grid item md={12} sm={12}>
                    <div className='d-flex ' style={{ backgroundColor: "white" }}>
                        <div className='p-2 ' >
                            <a href='https://www.noon.com/uae-en/electronics-and-mobiles/mobiles-and-accessories/mobiles-20905/smartphones/vivo/?f[launch_year]=2021&f[partner]=p_9404&limit=50&sort[by]=popularity&sort[dir]=desc' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-beauty-01.png' /></button></a>
                        </div>
                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/fashion/men-31225/new-arrivals-jan-FA_03/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-beauty-02.png' /></button></a>
                        </div>
                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/toys-sale-may22/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_dk_uae-beauty-03.png' /></button></a>
                        </div>
                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/beauty-and-health/health/health-dis-BE_07/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-beauty-04.png' /></button></a>
                        </div>
                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/beauty-and-health/health/health-dis-BE_07/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-beauty-05.png' /></button></a>
                        </div>

                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/beauty-and-health/health/health-dis-BE_07/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-beauty-06.png' /></button></a>
                        </div>

                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/beauty-and-health/health/health-dis-BE_07/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-beauty-08.png' /></button></a>
                        </div>



                    </div>
                </Grid>

                {/* Toys */}
                <Grid item md={12} sm={12}>
                    <div className='d-flex ' style={{ backgroundColor: "white" }}>
                        <div className='p-2'  >
                            <a href='https://www.noon.com/uae-en/home-and-kitchen/kitchen-and-dining/serveware/?sort[by]=popularity&sort[dir]=desc' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-toys-title.png' /></button></a>
                        </div>

                    </div>
                </Grid>


                <Grid item md={12} sm={12}>
                    <div className='d-flex ' style={{ backgroundColor: "white" }}>
                        <div className='p-2 ' >
                            <a href='https://www.noon.com/uae-en/electronics-and-mobiles/mobiles-and-accessories/mobiles-20905/smartphones/vivo/?f[launch_year]=2021&f[partner]=p_9404&limit=50&sort[by]=popularity&sort[dir]=desc' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-beauty-01.png' /></button></a>
                        </div>
                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/fashion/men-31225/new-arrivals-jan-FA_03/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-beauty-02.png' /></button></a>
                        </div>
                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/toys-sale-may22/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_dk_uae-beauty-03.png' /></button></a>
                        </div>
                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/beauty-and-health/health/health-dis-BE_07/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-beauty-04.png' /></button></a>
                        </div>
                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/beauty-and-health/health/health-dis-BE_07/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-beauty-05.png' /></button></a>
                        </div>

                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/beauty-and-health/health/health-dis-BE_07/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-beauty-06.png' /></button></a>
                        </div>

                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/beauty-and-health/health/health-dis-BE_07/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-beauty-08.png' /></button></a>
                        </div>



                    </div>
                </Grid>


                {/* baby must have */}
                <Grid item md={12} sm={12}>
                    <div className='d-flex ' style={{ backgroundColor: "white" }}>
                        <div className='p-2'  >
                            <a href='https://www.noon.com/uae-en/home-and-kitchen/kitchen-and-dining/serveware/?sort[by]=popularity&sort[dir]=desc' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-baby-title.png' /></button></a>
                        </div>

                    </div>
                </Grid>


                <Grid item md={12} sm={12}>
                    <div className='d-flex ' style={{ backgroundColor: "white" }}>
                        <div className='p-2 ' >
                            <a href='https://www.noon.com/uae-en/electronics-and-mobiles/mobiles-and-accessories/mobiles-20905/smartphones/vivo/?f[launch_year]=2021&f[partner]=p_9404&limit=50&sort[by]=popularity&sort[dir]=desc' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-beauty-01.png' /></button></a>
                        </div>
                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/fashion/men-31225/new-arrivals-jan-FA_03/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-beauty-02.png' /></button></a>
                        </div>
                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/toys-sale-may22/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_dk_uae-beauty-03.png' /></button></a>
                        </div>
                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/beauty-and-health/health/health-dis-BE_07/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-beauty-04.png' /></button></a>
                        </div>
                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/beauty-and-health/health/health-dis-BE_07/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-beauty-05.png' /></button></a>
                        </div>

                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/beauty-and-health/health/health-dis-BE_07/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-beauty-06.png' /></button></a>
                        </div>

                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/beauty-and-health/health/health-dis-BE_07/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-beauty-08.png' /></button></a>
                        </div>



                    </div>
                </Grid>

                {/* sports and outdoor essantial */}

                <Grid item md={12} sm={12}>
                    <div className='d-flex ' style={{ backgroundColor: "white" }}>
                        <div className='p-2'  >
                            <a href='https://www.noon.com/uae-en/home-and-kitchen/kitchen-and-dining/serveware/?sort[by]=popularity&sort[dir]=desc' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-sports-title.png' /></button></a>
                        </div>

                    </div>
                </Grid>


                <Grid item md={12} sm={12}>
                    <div className='d-flex ' style={{ backgroundColor: "white" }}>
                        <div className='p-2 ' >
                            <a href='https://www.noon.com/uae-en/electronics-and-mobiles/mobiles-and-accessories/mobiles-20905/smartphones/vivo/?f[launch_year]=2021&f[partner]=p_9404&limit=50&sort[by]=popularity&sort[dir]=desc' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-beauty-01.png' /></button></a>
                        </div>
                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/fashion/men-31225/new-arrivals-jan-FA_03/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-beauty-02.png' /></button></a>
                        </div>
                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/toys-sale-may22/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_dk_uae-beauty-03.png' /></button></a>
                        </div>
                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/beauty-and-health/health/health-dis-BE_07/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-beauty-04.png' /></button></a>
                        </div>
                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/beauty-and-health/health/health-dis-BE_07/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-beauty-05.png' /></button></a>
                        </div>

                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/beauty-and-health/health/health-dis-BE_07/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-beauty-06.png' /></button></a>
                        </div>

                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/beauty-and-health/health/health-dis-BE_07/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-beauty-08.png' /></button></a>
                        </div>



                    </div>
                </Grid>

                {/* noon favorite brand */}

                <Grid item md={12} sm={12}>
                    <div className='d-flex ' style={{ backgroundColor: "white" }}>
                        <div className='p-2'  >
                            <a href='https://www.noon.com/uae-en/home-and-kitchen/kitchen-and-dining/serveware/?sort[by]=popularity&sort[dir]=desc' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-noon-title.png' /></button></a>
                        </div>

                    </div>
                </Grid>


                <Grid item md={12} sm={12}>
                    <div className='d-flex ' style={{ backgroundColor: "white" }}>
                        <div className='p-2 ' >
                            <a href='https://www.noon.com/uae-en/electronics-and-mobiles/mobiles-and-accessories/mobiles-20905/smartphones/vivo/?f[launch_year]=2021&f[partner]=p_9404&limit=50&sort[by]=popularity&sort[dir]=desc' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-beauty-01.png' /></button></a>
                        </div>
                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/fashion/men-31225/new-arrivals-jan-FA_03/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-beauty-02.png' /></button></a>
                        </div>
                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/toys-sale-may22/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_dk_uae-beauty-03.png' /></button></a>
                        </div>
                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/beauty-and-health/health/health-dis-BE_07/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-beauty-04.png' /></button></a>
                        </div>
                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/beauty-and-health/health/health-dis-BE_07/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-beauty-05.png' /></button></a>
                        </div>

                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/beauty-and-health/health/health-dis-BE_07/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-beauty-06.png' /></button></a>
                        </div>

                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/beauty-and-health/health/health-dis-BE_07/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-beauty-08.png' /></button></a>
                        </div>



                    </div>
                </Grid>

                {/* watches */}


                <Grid item md={12} sm={12}>
                    <div className='d-flex ' style={{ backgroundColor: "white" }}>
                        <div className='p-2'  >
                            <a href='https://www.noon.com/uae-en/home-and-kitchen/kitchen-and-dining/serveware/?sort[by]=popularity&sort[dir]=desc' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-watches-title.png' /></button></a>
                        </div>

                    </div>
                </Grid>


                <Grid item md={12} sm={12}>
                    <div className='d-flex ' style={{ backgroundColor: "white" }}>
                        <div className='p-2 ' >
                            <a href='https://www.noon.com/uae-en/electronics-and-mobiles/mobiles-and-accessories/mobiles-20905/smartphones/vivo/?f[launch_year]=2021&f[partner]=p_9404&limit=50&sort[by]=popularity&sort[dir]=desc' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-beauty-01.png' /></button></a>
                        </div>
                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/fashion/men-31225/new-arrivals-jan-FA_03/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-beauty-02.png' /></button></a>
                        </div>
                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/toys-sale-may22/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_dk_uae-beauty-03.png' /></button></a>
                        </div>
                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/beauty-and-health/health/health-dis-BE_07/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-beauty-04.png' /></button></a>
                        </div>
                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/beauty-and-health/health/health-dis-BE_07/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-beauty-05.png' /></button></a>
                        </div>

                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/beauty-and-health/health/health-dis-BE_07/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-beauty-06.png' /></button></a>
                        </div>

                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/beauty-and-health/health/health-dis-BE_07/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-beauty-08.png' /></button></a>
                        </div>



                    </div>
                </Grid>

                {/* eye ware */}



                <Grid item md={12} sm={12}>
                    <div className='d-flex ' style={{ backgroundColor: "white" }}>
                        <div className='p-2'  >
                            <a href='https://www.noon.com/uae-en/home-and-kitchen/kitchen-and-dining/serveware/?sort[by]=popularity&sort[dir]=desc' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-eyewear-title.png' /></button></a>
                        </div>

                    </div>
                </Grid>


                <Grid item md={12} sm={12}>
                    <div className='d-flex ' style={{ backgroundColor: "white" }}>
                        <div className='p-2 ' >
                            <a href='https://www.noon.com/uae-en/electronics-and-mobiles/mobiles-and-accessories/mobiles-20905/smartphones/vivo/?f[launch_year]=2021&f[partner]=p_9404&limit=50&sort[by]=popularity&sort[dir]=desc' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-beauty-01.png' /></button></a>
                        </div>
                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/fashion/men-31225/new-arrivals-jan-FA_03/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-beauty-02.png' /></button></a>
                        </div>
                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/toys-sale-may22/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_dk_uae-beauty-03.png' /></button></a>
                        </div>
                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/beauty-and-health/health/health-dis-BE_07/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-beauty-04.png' /></button></a>
                        </div>
                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/beauty-and-health/health/health-dis-BE_07/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-beauty-05.png' /></button></a>
                        </div>

                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/beauty-and-health/health/health-dis-BE_07/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-beauty-06.png' /></button></a>
                        </div>

                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/beauty-and-health/health/health-dis-BE_07/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-beauty-08.png' /></button></a>
                        </div>



                    </div>
                </Grid>

                {/* health and nutrition */}



                <Grid item md={12} sm={12}>
                    <div className='d-flex ' style={{ backgroundColor: "white" }}>
                        <div className='p-2'  >
                            <a href='https://www.noon.com/uae-en/home-and-kitchen/kitchen-and-dining/serveware/?sort[by]=popularity&sort[dir]=desc' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-health-title.png' /></button></a>
                        </div>

                    </div>
                </Grid>


                <Grid item md={12} sm={12}>
                    <div className='d-flex ' style={{ backgroundColor: "white" }}>
                        <div className='p-2 ' >
                            <a href='https://www.noon.com/uae-en/electronics-and-mobiles/mobiles-and-accessories/mobiles-20905/smartphones/vivo/?f[launch_year]=2021&f[partner]=p_9404&limit=50&sort[by]=popularity&sort[dir]=desc' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-beauty-01.png' /></button></a>
                        </div>
                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/fashion/men-31225/new-arrivals-jan-FA_03/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-beauty-02.png' /></button></a>
                        </div>
                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/toys-sale-may22/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_dk_uae-beauty-03.png' /></button></a>
                        </div>
                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/beauty-and-health/health/health-dis-BE_07/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-beauty-04.png' /></button></a>
                        </div>
                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/beauty-and-health/health/health-dis-BE_07/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-beauty-05.png' /></button></a>
                        </div>

                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/beauty-and-health/health/health-dis-BE_07/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-beauty-06.png' /></button></a>
                        </div>

                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/beauty-and-health/health/health-dis-BE_07/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-beauty-08.png' /></button></a>
                        </div>



                    </div>
                </Grid>


                {/* Furniture */}


                <Grid item md={12} sm={12}>
                    <div className='d-flex ' style={{ backgroundColor: "white" }}>
                        <div className='p-2'  >
                            <a href='https://www.noon.com/uae-en/home-and-kitchen/kitchen-and-dining/serveware/?sort[by]=popularity&sort[dir]=desc' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-furniture-title.png' /></button></a>
                        </div>

                    </div>
                </Grid>


                <Grid item md={12} sm={12}>
                    <div className='d-flex ' style={{ backgroundColor: "white" }}>
                        <div className='p-2 ' >
                            <a href='https://www.noon.com/uae-en/electronics-and-mobiles/mobiles-and-accessories/mobiles-20905/smartphones/vivo/?f[launch_year]=2021&f[partner]=p_9404&limit=50&sort[by]=popularity&sort[dir]=desc' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-beauty-01.png' /></button></a>
                        </div>
                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/fashion/men-31225/new-arrivals-jan-FA_03/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-beauty-02.png' /></button></a>
                        </div>
                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/toys-sale-may22/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_dk_uae-beauty-03.png' /></button></a>
                        </div>
                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/beauty-and-health/health/health-dis-BE_07/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-beauty-04.png' /></button></a>
                        </div>
                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/beauty-and-health/health/health-dis-BE_07/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-beauty-05.png' /></button></a>
                        </div>

                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/beauty-and-health/health/health-dis-BE_07/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-beauty-06.png' /></button></a>
                        </div>

                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/beauty-and-health/health/health-dis-BE_07/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-beauty-08.png' /></button></a>
                        </div>



                    </div>
                </Grid>

                {/* stationary */}


                <Grid item md={12} sm={12}>
                    <div className='d-flex ' style={{ backgroundColor: "white" }}>
                        <div className='p-2'  >
                            <a href='https://www.noon.com/uae-en/home-and-kitchen/kitchen-and-dining/serveware/?sort[by]=popularity&sort[dir]=desc' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-stationery-title.png ' /></button></a>
                        </div>

                    </div>
                </Grid>


                <Grid item md={12} sm={12}>
                    <div className='d-flex ' style={{ backgroundColor: "white" }}>
                        <div className='p-2 ' >
                            <a href='https://www.noon.com/uae-en/electronics-and-mobiles/mobiles-and-accessories/mobiles-20905/smartphones/vivo/?f[launch_year]=2021&f[partner]=p_9404&limit=50&sort[by]=popularity&sort[dir]=desc' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-beauty-01.png' /></button></a>
                        </div>
                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/fashion/men-31225/new-arrivals-jan-FA_03/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-beauty-02.png' /></button></a>
                        </div>
                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/toys-sale-may22/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_dk_uae-beauty-03.png' /></button></a>
                        </div>
                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/beauty-and-health/health/health-dis-BE_07/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-beauty-04.png' /></button></a>
                        </div>
                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/beauty-and-health/health/health-dis-BE_07/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-beauty-05.png' /></button></a>
                        </div>

                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/beauty-and-health/health/health-dis-BE_07/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-beauty-06.png' /></button></a>
                        </div>

                        <div className='p-2'>
                            <a href='https://www.noon.com/uae-en/beauty-and-health/health/health-dis-BE_07/' target="_blank" ><button style={{ border: "none" }}><img width="100%" src='https://k.nooncdn.com/cms/pages/20220505/0b9dd852e2c3703e625225a52eb180a6/en_dk_uae-beauty-08.png' /></button></a>
                        </div>



                    </div>
                </Grid >





                {/* Aerial Add Banner */}
                <Grid zeroMinWidth={true} color="rgb(255, 243, 221)" className='my-3' item md={12} sm={12}>
                    <div style={{ backgroundColor: "rgb(255, 243, 221)" }}>
                        <button style={{ border: "none" }}> <img width="100%" src='https://k.nooncdn.com/cms/pages/20220310/bb8ec300f66b4fc78e65c2eb8a25eda5/en_plp.jpg' /></button>
                    </div>

                </Grid>

                <hr />
                <Grid item md={12} sm={12}>
                    <div className='d-flex' style={{justifyContent:"space-between"}}>
                        <div className='p-3'>
                            <h3>We're Always Here To  Help</h3>
                            <p>Reach out to us through any of these support channels</p>
                        </div>
                        <div className='d-flex'>
                            <div className='p-3'>
                            <Button sx={{backgroundColor:"white", color:"black"}} variant="contained" startIcon={<PrivacyTipOutlinedIcon/>} >
                                    <div>
                                    <div><p>HELP CENTER</p></div>
                                   <div><p style={{fontSize:"1rem"}}>help.noon.com</p></div>
                                    </div>
                                </Button>
                            </div>
                            <div className='p-3'>
                            <Button sx={{backgroundColor:"white", color:"black"}} variant="contained" startIcon={<EmailIcon/>} >
                                    <div>
                                    <div><p>EMAIL support</p></div>
                                   <div><p style={{fontSize:"1rem"}}>care@noon.com</p></div>
                                    </div>
                                </Button>
                            </div>
                        </div>
                    </div>

                </Grid>

                <hr />



                







            </div>






        </div>


    );
}



export default FourCards;
