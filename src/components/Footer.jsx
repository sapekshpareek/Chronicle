import { Box, Typography } from "@mui/material";

const Footer = () => {
    return (
        
      <Box sx={{display:"flex",justifyContent:"center",alignItems:"center", bgcolor:"surface"}}>
      <Typography variant="subtitle1" sx={{padding:2}}>Crafted with ❤️ by <b>Sapeksh Pareek</b></Typography>
    </Box>
    );
};

export default Footer;