import * as React from "react";
import { styled } from "@mui/system";

import Header from "./../components/Header"
import PersonenDialog from "./../components/PersonenDialog";
import WikipediaDialog from "./../components/WikipediaDialog";

import axios from "axios";
import "./../App.css";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { Paper, Grid, Card, CardContent } from "@mui/material";
import { CardMedia } from "@mui/material";
import { Link } from "react-scroll";
import { useState } from "react";
import DiensteDialog from "./../components/DiensteDialog";
import YoutubeVideo from "./../components/YoutubeVideo";
import Faculties from "./../components/Faculties";
import Footer from "./../components/Footer"
import CanvasDialog from "./../components/CanvasDialog";
import NavBar from "./../components/NavBar";

interface WikiPage {
  title: string;
  extract: string;
  description: string;
  link: string;
}

function HomePage() {
  const [openFirstDialog, setOpenFirstDialog] = useState(false);
  const [openSecondDialog, setOpenSecondDialog] = useState(false);
  const [openThirdDialog, setOpenThirdDialog] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [wikipages, setWikipages] = useState<WikiPage[]>([]);
  const [openCanvasDialog, setOpenCanvasDialog] = useState(false)
  

  return (
    <>
      <AppBar position="fixed" style={{ backgroundColor: "black" }}>
      <Header  />
      <NavBar setOpenFirstDialog={setOpenFirstDialog}/>
      </AppBar>
      <DiensteDialog setOpenCanvasDialog={setOpenCanvasDialog} setOpenFirstDialog={setOpenFirstDialog} setOpenSecondDialog={setOpenSecondDialog} setOpenThirdDialog={setOpenThirdDialog} setWikipages={setWikipages} setInputValue={setInputValue} openFirstDialog={openFirstDialog} inputValue={inputValue} />
      <PersonenDialog setOpenSecondDialog={setOpenSecondDialog} openSecondDialog={openSecondDialog}/>
      <WikipediaDialog openThirdDialog={openThirdDialog} setOpenThirdDialog={setOpenThirdDialog} wikipages={wikipages}/>
      <CanvasDialog setOpenCanvasDialog={setOpenCanvasDialog} openCanvasDialog={openCanvasDialog}/>
      <Container
          component="main"
          sx={{
            paddingTop: "150px",
            backgroundColor: "lightgrey",
            width: '10000px',  // Add this line
          }}
        >
        <Grid container spacing={4}>
          <YoutubeVideo/>
          <Faculties/>
          
          <Grid item xs={12}>
            <Box height={180}></Box>
          </Grid>
          
        </Grid>
        
      </Container>
      
      <Footer/>
    </>
  );
}

export default HomePage;
