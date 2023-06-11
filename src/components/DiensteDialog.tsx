import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import WikipediaGetRequest from "./WikipediaGetRequest";


interface DiensteDialogProps {
    setOpenFirstDialog: Dispatch<SetStateAction<boolean>>;
    setOpenSecondDialog: Dispatch<SetStateAction<boolean>>;
    setOpenThirdDialog: Dispatch<SetStateAction<boolean>>;
    setWikipages: Dispatch<SetStateAction<WikiPage[]>>;
    setInputValue: Dispatch<SetStateAction<string>>;
    setOpenCanvasDialog: Dispatch<SetStateAction<boolean>>;
    
    openFirstDialog: boolean;
    inputValue: String;
  }

  interface WikiPage {
    title: string;
    extract: string;
    description: string;
    link: string;
  }


function DiensteDialog({setOpenCanvasDialog, setOpenFirstDialog, setOpenSecondDialog, setOpenThirdDialog, openFirstDialog, setInputValue, setWikipages, inputValue}: DiensteDialogProps){

    


    return(<><Dialog
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
              await WikipediaGetRequest({setWikipages, inputValue});
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
          <Button
            onClick={() => {
              setOpenCanvasDialog(true);
            }}
          >
            Canvas
          </Button>
        </DialogActions>
      </Dialog></>)
}

export default DiensteDialog;