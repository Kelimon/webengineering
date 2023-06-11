import { Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';

interface Props {
  // Add your props here
}

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

const Faculties: React.FC<Props> = () => {
  return (
    <>
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
            </>
  );
};

export default Faculties;