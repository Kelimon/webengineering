import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

interface WikipediaDialogProps {
    setOpenThirdDialog: Dispatch<SetStateAction<boolean>>;
    openThirdDialog: boolean;
    wikipages: WikiPage[];
  }

  interface WikiPage {
    title: string;
    extract: string;
    description: string;
    link: string;
  }

const WikipediaDialog: React.FC<WikipediaDialogProps> = ({openThirdDialog, setOpenThirdDialog, wikipages}) => {
  return (
    <>
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
    </>
  );
};

export default WikipediaDialog;