import * as React from "react";
import { styled } from "@mui/system";

import Header from "./components/Header"
import PersonenDialog from "./components/PersonenDialog";
import WikipediaDialog from "./components/WikipediaDialog";

import axios from "axios";
import "./App.css";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import { Button } from "@mui/material";
import { Paper, Grid, Card, CardContent } from "@mui/material";
import { CardMedia } from "@mui/material";
import { Link } from "react-scroll";
import { useState } from "react";
import DiensteDialog from "./components/DiensteDialog";
import YoutubeVideo from "./components/YoutubeVideo";
import Faculties from "./components/Faculties";
import Footer from "./components/Footer"
import CanvasDialog from "./components/CanvasDialog";

interface WikiPage {
  title: string;
  extract: string;
  description: string;
  link: string;
}

function App() {
  const [openFirstDialog, setOpenFirstDialog] = useState(false);
  const [openSecondDialog, setOpenSecondDialog] = useState(false);
  const [openThirdDialog, setOpenThirdDialog] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [wikipages, setWikipages] = useState<WikiPage[]>([]);
  const [openCanvasDialog, setOpenCanvasDialog] = useState(false)

  const CustomDialog = styled(Dialog)({
    "& .MuiDialog-paper": {
      width: "80%",
      maxHeight: "calc(100% - 64px)",
    },
  });

  


  


  return (
    <>
      <Header setOpenFirstDialog={setOpenFirstDialog} />
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
          <CanvasDialog setOpenCanvasDialog={setOpenCanvasDialog} openCanvasDialog={openCanvasDialog}/>
        <Grid container spacing={4}>
        <CanvasDialog setOpenCanvasDialog={setOpenCanvasDialog} openCanvasDialog={openCanvasDialog}/>
          <YoutubeVideo/>
          <CanvasDialog setOpenCanvasDialog={setOpenCanvasDialog} openCanvasDialog={openCanvasDialog}/>
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

export default App;
