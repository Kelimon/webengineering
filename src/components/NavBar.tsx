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

    
    return(<>
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
    </>);
}

export default Header;
