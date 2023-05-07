import { ui } from "./ui.module.js";

export class Details {
    constructor(id) {
        this.ui = new ui();
        function close() {
           // When click on close button in details => Hide details section and display games sections.
            document.querySelector("#games").classList.remove("d-none");
            document.querySelector("#details").classList.add("d-none");


        }
        btnClose.addEventListener("click", () => {
            close()
        })
        this.getDetailss(id)
    }

      getDetailss(id) {
        // Api Function method => loading will still appeared untill the response is 100% appeared then loading screen will hide again.
        document.querySelector('.loading').classList.remove("d-none");
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': 'b29accd116mshaa6ef77b7e9adddp1ff19fjsn3bba8edb0955',
                    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
                }
            };
            // in This Api Link it get the id of game from api response then show it . 
            fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options)
            .then((response) => response.json())
            .then((response) => this.ui.detailsInfo(response))
            .catch((err) => console.error(err))
        

             document.querySelector('.loading').classList.add("d-none");
        
        }
        
}