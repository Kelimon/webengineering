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
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthRoute from "./components/AuthRoute";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import { Login } from "@mui/icons-material";
import RegisterPage from "./pages/RegisterPage";

interface WikiPage {
  title: string;
  extract: string;
  description: string;
  link: string;
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  return (
    <BrowserRouter basename="/webengineering">
            <Routes>
            <Route
          path="/home"
          element={!isLoggedIn ? <HomePage /> : <LoginPage setIsLoggedIn={setIsLoggedIn} />}
        />
            <Route
          path="/login"
          element={<LoginPage setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path="/register"
          element={<RegisterPage setIsLoggedIn={setIsLoggedIn} />}
        />
            </Routes>
        </BrowserRouter>
  );
}

export default App;
