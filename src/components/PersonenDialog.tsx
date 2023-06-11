import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

interface PersonenDialogProps {
    setOpenSecondDialog: Dispatch<SetStateAction<boolean>>;
    openSecondDialog: boolean;
  }

function PersonenDialog({setOpenSecondDialog,openSecondDialog}: PersonenDialogProps){

    var jsonstring =
    ' { "Menschen" : [' +
    ' { "Vorname" : "Peter", "Nachname" :"Müller", "Gender": "male", "Rolle" : "Student"  },' +
    ' { "Vorname" : "Susanne", "Nachname" :"Lehmann", "Gender": "female", "Rolle" : "Student"  },' +
    ' { "Vorname" : "Jürgen", "Nachname" :"Schneider", "Gender": "male", "Rolle" : "Dozent"  }' +
    //  add another Person ..  see this statement concatenates substrings using the +  operator
    //  ... add another person like  ' .... ' +
    " ] }";

  var json = JSON.parse(jsonstring);


    return(<><Dialog
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
      </Dialog></>
    );
}

export default PersonenDialog;