import axios from "axios";
import { Dispatch, SetStateAction } from "react";

interface WikipediaGetRequestProps {
    setWikipages: Dispatch<SetStateAction<WikiPage[]>>;
    inputValue: String;
  }

  interface WikiPage {
    title: string;
    extract: string;
    description: string;
    link: string;
  }

function WikipediaGetRequest({setWikipages, inputValue}: WikipediaGetRequestProps){
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

export default WikipediaGetRequest;