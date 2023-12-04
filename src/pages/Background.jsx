import "../sources/IniciarSesion.css";
import logoB from "../assets/logoY.jpg";
import CardLogin from "../organismo/CardLogin";
import { Grid, Typography } from "@mui/material";

function IniciarSesion() {
  return (
    <>
      <Grid
        container
        spacing={1}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{
          mt: "2em",
          display: "flex",
          justifyContent: "center",
          boxSizing: "border-box",
        }}
      >
        <>
          <Grid
            item={6}
           sx={{
            width:'50%',
            display:'flex',
            justifyContent:'end'
            
           }}
          >
            <img src={logoB} alt="logo"  className="imgLogoPage" />
          </Grid>
          <Grid
            item={6}
           sx={{
            width:'50%',
            display:'flex',
            alignItems:'center',
            justifyContent:'center'
            
           }}
          >
            <CardLogin />
          </Grid>
        </>
      </Grid>
    </>
  );
}
export default IniciarSesion;

