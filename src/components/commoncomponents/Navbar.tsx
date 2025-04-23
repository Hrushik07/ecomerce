import { AppBar, Box, TextField, Toolbar, Typography } from '@mui/material'

const Navbar = () => {
  return (
    <AppBar>
      <Toolbar>
        <Box width="100%" sx={{display:"flex",justifyContent:"space-between", alignItems:"center"}}>
          <Typography sx={{ margin: "0px 30px", fontSize: "20px" }}>
            E-Shopping
          </Typography>

          <TextField
            placeholder="search"
            sx={{ bgcolor: "white", borderRadius: "8px",width:"400px" }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar