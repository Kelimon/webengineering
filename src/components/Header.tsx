import { AppBar, Box, Button,Toolbar, Typography } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
import { Link } from "react-scroll";

interface HeaderProps {
    setOpenFirstDialog: Dispatch<SetStateAction<boolean>>;
  }

function Header({ setOpenFirstDialog }: HeaderProps){
    //const [openFirstDialog, setOpenFirstDialog] = useState(false);
    
    function handleDienste() {
        setOpenFirstDialog(true);
      }

    
    return(<><AppBar position="fixed" style={{ backgroundColor: "black" }}>
    <Toolbar>
      <img
        src="/logodhbw.svg"
        alt="Your logo"
        style={{ width: "20%", height: "auto" }}
      />
      <Typography
        marginLeft={5}
        marginBottom={1}
        variant="h4"
        component="div"
      >
        DHBW Stuttgart Web Engineering Portal
      </Typography>
    </Toolbar>
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "grey",
        padding: 1,
      }}
    >
      <Link to="0" smooth duration={100} offset={-100}>
        <Button variant="contained" href="#item1">
          <Typography color={"white"}>Informatik</Typography>
        </Button>
      </Link>
      <Link to="1" smooth duration={100} offset={-100}>
        <Button variant="contained" href="#item2">
          <Typography color={"white"}>Elektrotechnik</Typography>
        </Button>
      </Link>
      <Link to="2" smooth duration={100} offset={-100}>
        <Button variant="contained" href="#item3">
          <Typography color={"white"}>Maschinenbau</Typography>
        </Button>
      </Link>
      <Button
        variant="contained"
        href="#item4"
        onClick={() => {
          handleDienste();
        }}
      >
        <Typography color={"white"}>Dienste</Typography>
      </Button>
    </Box>
  </AppBar></>);
}

export default Header;