import * as React from "react";
import { styled } from "@mui/system";

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

  const CustomDialog = styled(Dialog)({
    "& .MuiDialog-paper": {
      width: "80%",
      maxHeight: "calc(100% - 64px)",
    },
  });

  const faculties = [
    {
      title: "Informatik",
      image: "/Erdbeer-Q.jpeg",
      description:
        "Informatiker übertragen Vorgänge der realen Welt auf Computersysteme, indem sie die Aufgabenstellung ingeeignete Modelle überführen und diese dann aufSoftwaresystemen abbilden. Die Vielfalt anAnwendungsmöglichkeiten ist dabei nahezu unbegrenzt undsteigt stetig mit der zunehmenden Leistungsfähigkeit derSysteme.",
      width: "50rem",
      heigth: 200,
    },
    {
      title: "Elektrotechnik",
      image: "/Mandarinen-Q.jpeg",
      description:
        "Die Elektrotechnik bewegt und verändert die Welt: Smartphones, Assistenzsysteme, Smart Home oderMedizintechnik sind aus unserem Leben nicht mehrwegzudenken, die Energiewende ist in aller Munde.Ingenieurinnen und Ingenieure der Elektrotechnikgestalten und entwickeln die Systeme und haben so einendirekten Einfluss auf unser alltägliches Leben. Siebefassen sich nicht nur mit elektrischen undelektronischen Systemen, sondern arbeiten in einem sehrvielfältigen Arbeitsfeld, das von der Entwicklung einesProdukts über das Projektmanagement bis hin zu Marketingund Vertrieb reicht.",
      width: "50rem",
      heigth: 285,
    },
    {
      title: "Maschinenbau",
      image: "/Pizza-Q.jpeg",
      description:
        "Der Maschinenbau mit seinen zahlreichen Ausprägungen verknüpft Theorie und Praxis, Naturwissenschaft und Technik. Die umfassende Ausbildung an der Dualen Hochschule Stuttgart ermöglicht es Absolventinnen und Absolventen des Studiengangs, Aufgaben in vielen Tätigkeitsfeldern zu übernehmen:",
      width: "21rem",
      heigth: 285,
    },
  ];
  function handleDienste() {
    setOpenFirstDialog(true);
  }

  async function handleRequest() {
    var input = inputValue;
    console.log(input);
    axios
      .get(
        "https://de.wikipedia.org/w/api.php?action=query&generator=prefixsearch&format=json&gpslimit=4&prop=extracts%7Cdescription&exintro=1&explaintext=1&exsentences=3&redirects=1&gpssearch=" +
          inputValue.toString() +
          "&origin=*"
      )
      .then((result) => {
        console.log(result);
        const pages = result.data.query.pages;

        let pagesjson = [];
        let i = 0;
        console.log("1");
        for (const pageId in pages) {
          const page = pages[pageId];
          pagesjson[i] = {
            title: page.title,
            extract: page.extract,
            description: page.description,
            link: "https://de.wikipedia.org/?curid=" + pageId.toString(),
          };
          i = i + 1;
        }
        setWikipages(pagesjson);
      })
      .catch((result) => {
        console.log("failed");
      });
  }

  var jsonstring =
    ' { "Menschen" : [' +
    ' { "Vorname" : "Peter", "Nachname" :"Müller", "Gender": "male", "Rolle" : "Student"  },' +
    ' { "Vorname" : "Susanne", "Nachname" :"Lehmann", "Gender": "female", "Rolle" : "Student"  },' +
    ' { "Vorname" : "Jürgen", "Nachname" :"Schneider", "Gender": "male", "Rolle" : "Dozent"  }' +
    //  add another Person ..  see this statement concatenates substrings using the +  operator
    //  ... add another person like  ' .... ' +
    " ] }";

  var json = JSON.parse(jsonstring);

  return (
    <>
      <AppBar position="fixed" style={{ backgroundColor: "black" }}>
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
      </AppBar>
      <Dialog
        open={openFirstDialog}
        onClose={() => {
          setOpenFirstDialog(false);
        }}
        sx={{
          top: "-210px",
          left: "600px",
        }}
      >
        <DialogTitle sx={{ backgroundColor: "lightblue" }}>Dienste</DialogTitle>
        <DialogContent
          sx={{
            backgroundColor: "#3c79a4aa",
            margin: "0rem",
            borderRadius: "4px",
          }}
        >
          <TextField
            autoFocus
            margin="dense"
            id="inputField"
            label="Suche"
            type="text"
            fullWidth
            onChange={(e) => setInputValue(e.target.value)}
            sx={{ marginTop: "2rem" }}
          />
          <Button
            onClick={async () => {
              await handleRequest();
              setOpenThirdDialog(true);
            }}
          >
            Search
          </Button>
        </DialogContent>

        <DialogActions sx={{ backgroundColor: "lightblue" }}>
          <Button
            onClick={() => {
              setOpenFirstDialog(false);
            }}
          >
            Zurück
          </Button>
          <Button
            onClick={() => {
              setOpenSecondDialog(true);
            }}
          >
            Leute
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={openSecondDialog}
        onClose={() => {
          setOpenSecondDialog(false);
        }}
      >
        <DialogTitle sx={{ backgroundColor: "lightyellow" }}>Leute</DialogTitle>
        <DialogContent sx={{ backgroundColor: "lightyellow", padding: "16px" }}>
          <DialogContentText>Hier ist die Tabelle</DialogContentText>
          <TableContainer component={Paper} className="table">
            <Table sx={{ backgroundColor: "yellow" }}>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ border: "1px solid rgba(0, 0, 0, 1)" }}>
                    Vorname
                  </TableCell>
                  <TableCell sx={{ border: "1px solid rgba(0, 0, 0, 1)" }}>
                    Nachname
                  </TableCell>
                  <TableCell sx={{ border: "1px solid rgba(0, 0, 0, 1)" }}>
                    Gender
                  </TableCell>
                  <TableCell sx={{ border: "1px solid rgba(0, 0, 0, 1)" }}>
                    Rolle
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {json.Menschen.map((row: any) => (
                  <TableRow key={row.id}>
                    <TableCell sx={{ border: "1px solid rgba(0, 0, 0, 1)" }}>
                      {row.Vorname}
                    </TableCell>
                    <TableCell sx={{ border: "1px solid rgba(0, 0, 0, 1)" }}>
                      {row.Nachname}
                    </TableCell>
                    <TableCell sx={{ border: "1px solid rgba(0, 0, 0, 1)" }}>
                      {row.Gender}
                    </TableCell>
                    <TableCell sx={{ border: "1px solid rgba(0, 0, 0, 1)" }}>
                      {row.Rolle}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </DialogContent>

        <DialogActions sx={{ backgroundColor: "lightyellow" }}>
          <Button
            onClick={() => {
              setOpenSecondDialog(false);
            }}
          >
            Back
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={openThirdDialog}
        onClose={() => {
          setOpenThirdDialog(false);
        }}
        sx={{
          right: "500px",
        }}
        style={{ width: "90vw" }}
        maxWidth="lg"
        fullWidth
      >
        <DialogTitle sx={{ backgroundColor: "lightgreen" }}>
          Wikipedia Results
        </DialogTitle>
        <DialogContent sx={{ backgroundColor: "lightgreen" }}>
          <DialogContentText>
            Hier sind die Suchergebnisse aufgelistet
          </DialogContentText>
          <TableContainer component={Paper} className="table">
            <Table sx={{ backgroundColor: "green" }}>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ border: "2px solid rgba(0, 0, 0, 1)" }}>
                    Search Argument
                  </TableCell>
                  <TableCell sx={{ border: "2px solid rgba(0, 0, 0, 1)" }}>
                    Description
                  </TableCell>
                  <TableCell sx={{ border: "2px solid rgba(0, 0, 0, 1)" }}>
                    Extract
                  </TableCell>
                  <TableCell sx={{ border: "2px solid rgba(0, 0, 0, 1)" }}>
                    Link
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody></TableBody>
              {wikipages.map((row: any) => (
                <TableRow key={row.id}>
                  <TableCell sx={{ border: "2px solid rgba(0, 0, 0, 1)" }}>
                    {row.title}
                  </TableCell>
                  <TableCell sx={{ border: "2px solid rgba(0, 0, 0, 1)" }}>
                    {row.description}
                  </TableCell>
                  <TableCell sx={{ border: "2px solid rgba(0, 0, 0, 1)" }}>
                    {row.extract}
                  </TableCell>
                  <TableCell
                    sx={{
                      border: "2px solid rgba(0, 0, 0, 1)",
                    }}
                    color="black"
                  >
                    <a
                      href={row.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#0c076b" }}
                    >
                      {row.link}
                    </a>
                  </TableCell>
                </TableRow>
              ))}
            </Table>
          </TableContainer>
        </DialogContent>

        <DialogActions sx={{ backgroundColor: "lightgreen" }}>
          <Button
            onClick={() => {
              setOpenThirdDialog(false);
            }}
          >
            Zurück
          </Button>
        </DialogActions>
      </Dialog>
      <Container
        component="main"
        sx={{
          paddingTop: "150px",
          backgroundColor: "lightgrey",
        }}
      >
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Paper sx={{ width: 450, marginLeft: "50px" }}>
              <iframe
                title="YouTube Video"
                width="100%"
                height="300"
                src="https://youtube.com/embed/2dy9fLZEg9A"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </Paper>
            <Typography
              color={"black"}
              sx={{ marginLeft: "50px" }}
              fontSize={16}
            >
              Die DHBW Stuttgart steht für eine einzigartige Verbindung von
              Theorie und Praxis: Zusammen mit rund 2.000 Unternehmen und
              sozialen Einrichtungen (den Dualen Partnern) werden über 40
              anerkannte Bachelor-Studienrichtungen in den Fakultäten
              Wirtschaft, Technik und Sozialwesen angeboten.
            </Typography>
          </Grid>
          {faculties.map((faculty, index) => (
            <Grid item xs={12} key={index} id={index.toString()}>
              <Card className="grid-item">
                <CardContent sx={{ backgroundColor: "#003366" }}>
                  <Typography
                    variant="h4"
                    component="h2"
                    color={"white"}
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {faculty.title}
                  </Typography>
                </CardContent>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "lightgrey",
                  }}
                >
                  <CardMedia
                    component="img"
                    height={faculty.heigth.toString()} // Set the width of the image
                    image={faculty.image}
                    alt={faculty.title}
                    sx={{
                      width: faculty.width,
                      padding: "0rem",
                      boxShadow: "0 4px 6px 4px rgba(0, 0, 0, 0.5)",
                      borderRadius: "3px",
                    }}
                  />
                  <CardContent>
                    <Typography variant="body1">
                      {faculty.description}
                    </Typography>
                  </CardContent>
                </Box>
              </Card>
            </Grid>
          ))}
          <Grid item xs={12}>
            <Box height={180}></Box>
          </Grid>
        </Grid>
      </Container>
      <Box
        sx={{
          p: 2,
          position: "fixed",
          bottom: 0,
          width: "100%",
          backgroundColor: "#f0f0f0",
        }}
      >
        <Typography variant="body2" color="text.secondary" align="center">
          Copyright &copy; DHBW Stuttgart
        </Typography>
      </Box>
    </>
  );
}

export default App;
