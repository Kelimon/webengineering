import { Grid, Paper, Typography } from '@mui/material';
import React from 'react';

interface Props {
  // Add your props here
}

const YoutubeVideo: React.FC<Props> = () => {
  return (
    <>
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
    </>
  );
};

export default YoutubeVideo;