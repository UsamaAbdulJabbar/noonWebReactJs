import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import 'bootstrap/dist/css/bootstrap.min.css';
import Grid from '@mui/material/Grid';
import { height } from '@mui/system';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
function RoundeBanner() {
  const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );


  return (
    <div className='container  my-3' style={{ justifyContent: "center" }}    >
      {/* <Grid item ms={12}>
        <div>
          <Stack direction="row" spacing={2}>
            <Avatar sx={{ width: "105px", height: "100px", border: "2px solid black" }} alt="Remy Sharp" src="https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mb_uae-cat-grocery-01.png" />
            <Avatar sx={{ width: "105px", height: "100px", border: "2px solid black" }} alt="Remy Sharp" src="https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mb_uae-cat-grocery-01.png" />
            <Avatar sx={{ width: "105px", height: "100px", border: "2px solid black" }} alt="Remy Sharp" src="https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mb_uae-cat-grocery-01.png" />
            <Avatar sx={{ width: "105px", height: "100px", border: "2px solid black" }} alt="Remy Sharp" src="https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mb_uae-cat-grocery-01.png" />
            <Avatar sx={{ width: "105px", height: "100px", border: "2px solid black" }} alt="Remy Sharp" src="https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mb_uae-cat-grocery-01.png" />
            <Avatar sx={{ width: "105px", height: "100px", border: "2px solid black" }} alt="Remy Sharp" src="https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mb_uae-cat-grocery-01.png" />
            <Avatar sx={{ width: "105px", height: "100px", border: "2px solid black" }} alt="Remy Sharp" src="https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mb_uae-cat-grocery-01.png" />
            <Avatar sx={{ width: "105px", height: "100px", border: "2px solid black" }} alt="Remy Sharp" src="https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mb_uae-cat-grocery-01.png" />
            <Avatar sx={{ width: "105px", height: "100px", border: "2px solid black" }} alt="Remy Sharp" src="https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mb_uae-cat-grocery-01.png" />
            <Avatar sx={{ width: "105px", height: "100px", border: "2px solid black" }} alt="Remy Sharp" src="https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mb_uae-cat-grocery-01.png" />


          </Stack>
        </div>
      </Grid> */}



      {/* <Card sx={{ minWidth: 135, backgroundColor: "black" }}>
        <CardContent>

          <Typography variant="body2">
            <Avatar sx={{ width: "105px", height: "110px", border: "1px solid white" }} alt="Remy Sharp" src="https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mb_uae-cat-grocery-01.png" />


          </Typography>
        </CardContent>

      </Card> */}

      <div>
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner container-fluid">
            <div class="carousel-item active" className='d-flex'>
             <a href='https://daily.noon.com/uae-en/' target="blank"> <button style={{ border: "none" }}><img src="https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mb_uae-cat-grocery-01.png" class="d-block" style={{ width: "100px" }} alt="..." /></button></a>
              <a href='https://www.noon.com/uae-en/outlet-store-21-ae/' target="blank"><button style={{ border: "none" }}><img src="https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mb_uae-cat-17.png" class="d-block  " alt="..." style={{ width: "100px" }} /></button></a>
              <a href='https://www.noon.com/uae-en/gift-card/' target="blank"><button style={{ border: "none" }}><img src="https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mb_uae-cat-19.png" class="d-block " alt="..." style={{ width: "100px" }} /></button></a>
              <a href='https://www.noon.com/uae-en/health-personal-care/' target="blank"><button style={{ border: "none" }}><img src="https://k.nooncdn.com/cms/pages/20220513/d921c8edd98861aaa6e1ec86250af731/en_mb_uae-cat-08.png" class="d-block " alt="..." style={{ width: "100px" }} /></button></a>
              <a href='https://www.noon.com/uae-en/toys/' target="_blank"><button style={{ border: "none" }}><img src="https://k.nooncdn.com/cms/pages/20220514/c1083397f9c020e54b252397d49db7e2/en_mb_uae-cat-toy_Sale.png" class="d-block " alt="..." style={{ width: "100px" }} /></button></a>
              <a href='https://www.noon.com/uae-en/fragrance-store/' target="blank"><button style={{ border: "none" }}><img src="https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mb_uae-cat-22.png" class="d-block " alt="..." style={{ width: "100px" }} /></button></a>
              <a href='https://www.noon.com/uae-en/mobiles/' target="blank"><button style={{ border: "none" }}><img src="https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mb_uae-cat-01.png" class="d-block " alt="..." style={{ width: "100px" }} /></button></a>
              <a href='https://www.noon.com/uae-en/laptops/' target="blank"><button style={{ border: "none" }}><img src="https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mb_uae-cat-23.png" class="d-block " alt="..." style={{ width: "100px" }} /></button></a>
              <a href='https://www.noon.com/uae-en/gaminghub/ ' target="blank"><button style={{ border: "none" }}><img src="https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mb_uae-cat-27.png" class="d-block " alt="..." style={{ width: "100px" }} /></button></a>
              <a href='https://www.noon.com/uae-en/beauty/' target="blank"><button style={{ border: "none" }}><img src="https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mb_uae-cat-03.png" class="d-block " alt="..." style={{ width: "100px" }} /></button></a>
              <a href='https://www.noon.com/uae-en/home-kitchen/' target="blank"><button style={{ border: "none" }}><img src="https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mb_uae-cat-02.png" class="d-block " alt="..." style={{ width: "100px" }} /></button></a>
              <a href='https://www.noon.com/uae-en/audio-video/' target="blank"><button style={{ border: "none" }}><img src="https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mb_uae-cat-05.png" class="d-block " alt="..." style={{ width: "100px" }} /></button></a>

            </div>
            <div class="carousel-item">
            <a href='https://daily.noon.com/uae-en/' target="blank"> <button style={{ border: "none" }}><img src="https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mb_uae-cat-grocery-01.png" class="d-block" style={{ width: "100px" }} alt="..." /></button></a>
              <a href='https://www.noon.com/uae-en/outlet-store-21-ae/' target="blank"><button style={{ border: "none" }}><img src="https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mb_uae-cat-17.png" class="d-block  " alt="..." style={{ width: "100px" }} /></button></a>
              <a href='https://www.noon.com/uae-en/gift-card/' target="blank"><button style={{ border: "none" }}><img src="https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mb_uae-cat-19.png" class="d-block " alt="..." style={{ width: "100px" }} /></button></a>
              <a href='https://www.noon.com/uae-en/health-personal-care/' target="blank"><button style={{ border: "none" }}><img src="https://k.nooncdn.com/cms/pages/20220513/d921c8edd98861aaa6e1ec86250af731/en_mb_uae-cat-08.png" class="d-block " alt="..." style={{ width: "100px" }} /></button></a>
              <a href='https://www.noon.com/uae-en/toys/' target="_blank"><button style={{ border: "none" }}><img src="https://k.nooncdn.com/cms/pages/20220514/c1083397f9c020e54b252397d49db7e2/en_mb_uae-cat-toy_Sale.png" class="d-block " alt="..." style={{ width: "100px" }} /></button></a>
              <a href='https://www.noon.com/uae-en/fragrance-store/' target="blank"><button style={{ border: "none" }}><img src="https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mb_uae-cat-22.png" class="d-block " alt="..." style={{ width: "100px" }} /></button></a>
              <a href='https://www.noon.com/uae-en/mobiles/' target="blank"><button style={{ border: "none" }}><img src="https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mb_uae-cat-01.png" class="d-block " alt="..." style={{ width: "100px" }} /></button></a>
              <a href='https://www.noon.com/uae-en/laptops/' target="blank"><button style={{ border: "none" }}><img src="https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mb_uae-cat-23.png" class="d-block " alt="..." style={{ width: "100px" }} /></button></a>
              <a href='https://www.noon.com/uae-en/gaminghub/ ' target="blank"><button style={{ border: "none" }}><img src="https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mb_uae-cat-27.png" class="d-block " alt="..." style={{ width: "100px" }} /></button></a>
              <a href='https://www.noon.com/uae-en/beauty/' target="blank"><button style={{ border: "none" }}><img src="https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mb_uae-cat-03.png" class="d-block " alt="..." style={{ width: "100px" }} /></button></a>
              <a href='https://www.noon.com/uae-en/home-kitchen/' target="blank"><button style={{ border: "none" }}><img src="https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mb_uae-cat-02.png" class="d-block " alt="..." style={{ width: "100px" }} /></button></a>
              <a href='https://www.noon.com/uae-en/audio-video/' target="blank"><button style={{ border: "none" }}><img src="https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mb_uae-cat-05.png" class="d-block " alt="..." style={{ width: "100px" }} /></button></a>

            </div>
            <div class="carousel-item">
             <a href='https://daily.noon.com/uae-en/' target="blank"> <button style={{ border: "none" }}><img src="https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mb_uae-cat-grocery-01.png" class="d-block" style={{ width: "100px" }} alt="..." /></button></a>
              <a href='https://www.noon.com/uae-en/outlet-store-21-ae/' target="blank"><button style={{ border: "none" }}><img src="https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mb_uae-cat-17.png" class="d-block  " alt="..." style={{ width: "100px" }} /></button></a>
              <a href='https://www.noon.com/uae-en/gift-card/' target="blank"><button style={{ border: "none" }}><img src="https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mb_uae-cat-19.png" class="d-block " alt="..." style={{ width: "100px" }} /></button></a>
              <a href='https://www.noon.com/uae-en/health-personal-care/' target="blank"><button style={{ border: "none" }}><img src="https://k.nooncdn.com/cms/pages/20220513/d921c8edd98861aaa6e1ec86250af731/en_mb_uae-cat-08.png" class="d-block " alt="..." style={{ width: "100px" }} /></button></a>
              <a href='https://www.noon.com/uae-en/toys/' target="_blank"><button style={{ border: "none" }}><img src="https://k.nooncdn.com/cms/pages/20220514/c1083397f9c020e54b252397d49db7e2/en_mb_uae-cat-toy_Sale.png" class="d-block " alt="..." style={{ width: "100px" }} /></button></a>
              <a href='https://www.noon.com/uae-en/fragrance-store/' target="blank"><button style={{ border: "none" }}><img src="https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mb_uae-cat-22.png" class="d-block " alt="..." style={{ width: "100px" }} /></button></a>
              <a href='https://www.noon.com/uae-en/mobiles/' target="blank"><button style={{ border: "none" }}><img src="https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mb_uae-cat-01.png" class="d-block " alt="..." style={{ width: "100px" }} /></button></a>
              <a href='https://www.noon.com/uae-en/laptops/' target="blank"><button style={{ border: "none" }}><img src="https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mb_uae-cat-23.png" class="d-block " alt="..." style={{ width: "100px" }} /></button></a>
              <a href='https://www.noon.com/uae-en/gaminghub/ ' target="blank"><button style={{ border: "none" }}><img src="https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mb_uae-cat-27.png" class="d-block " alt="..." style={{ width: "100px" }} /></button></a>
              <a href='https://www.noon.com/uae-en/beauty/' target="blank"><button style={{ border: "none" }}><img src="https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mb_uae-cat-03.png" class="d-block " alt="..." style={{ width: "100px" }} /></button></a>
              <a href='https://www.noon.com/uae-en/home-kitchen/' target="blank"><button style={{ border: "none" }}><img src="https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mb_uae-cat-02.png" class="d-block " alt="..." style={{ width: "100px" }} /></button></a>
              <a href='https://www.noon.com/uae-en/audio-video/' target="blank"><button style={{ border: "none" }}><img src="https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mb_uae-cat-05.png" class="d-block " alt="..." style={{ width: "100px" }} /></button></a>

            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>

    </  div>
  )
}

export default RoundeBanner;