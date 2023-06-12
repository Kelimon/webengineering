import { AppBar, Box, Button,Toolbar, Typography } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
import GetUserRequest from "./GetUserRequest";

interface HeaderProps {
  UserEmail: String;
  }

function Header({UserEmail}: HeaderProps){
    const [email, setEmail] = useState("");

    GetUserRequest
    
    return(<>
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
      <Typography marginLeft="auto">logged in with {UserEmail}</Typography>
    </Toolbar>

    </>);
}

export default Header;