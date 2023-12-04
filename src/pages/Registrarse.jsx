import "../sources/Registrarse.css"
import logoB from "../assets/logoY.jpg";
import CardR from "./../organismo/CardR"
import { Grid } from "@mui/material";
function Registrarse(){
return(
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
            justifyContent:'end',
            alignItems:'center'

            
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
            <CardR />
          </Grid>
        </>
      </Grid>
  </>
);


}
export default Registrarse;