import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './infoBox.css';

export default function InfoBox({ info }){
    const INIT_URL ="https://media.istockphoto.com/id/498063665/photo/rainy-landscape.jpg?s=2048x2048&w=is&k=20&c=X8ecxMSWW5AaLFBxlzhxvzKSnCy_9apOlhvlJCOp-YU=";
   
    const HOT_URL ="https://media.istockphoto.com/id/1283886803/photo/beachside-pathway-leading-to-the-ocean-with-spectacular-sunrise.jpg?s=2048x2048&w=is&k=20&c=0bKiMCZAMaRPeSVNEFXeWRUC43QouB0Tjh05WC_H-s0=";
    const COLD_URL ="https://images.unsplash.com/photo-1541565437827-5f8a6f8a1b61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29sZCUyMGltYWdlcyd8ZW58MHx8MHx8fDA%3D";
    const RAIN_URL="https://media.istockphoto.com/id/683973882/photo/bluured-photo-of-indian-road-traffic-during-rain.jpg?s=2048x2048&w=is&k=20&c=-_7uWUWRz9yJkmBn5K1ZPB0w-d-Tsg2CeZ87srGAMoM=";

    return (
        <div className="info-box">
            <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height:140}}
          height="140"
          image={
            info.humidity>80
            ? RAIN_URL
            :info.temp >15
            ? HOT_URL
            : COLD_URL
          }
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}
          </Typography>
          <Typography variant="body2" color="text.secondary" component={"span"}>
            <p>Temperature ={info.temp}&deg;C</p>
            <p>Humidity = {info.humidity}</p>
            <p>Min Temp ={info.tempMin}&deg;C</p>
            <p>Max Temp ={info.tempMax}&deg;C</p>
            <p>
                The weather can be described as <i>{info.weather}</i> and feels {info.feelslike}&deg;C
            </p>
          </Typography>
        </CardContent>
    </Card>
    </div>
    </div>
    );
}