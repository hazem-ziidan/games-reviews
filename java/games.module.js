import { Details } from "./details.module.js";
import { ui } from "./ui.module.js";


export class Games  {

    constructor() {
        // Default value for games display is (mmorpg section).
        this.getgames("mmorpg");
        // Here to choose the category from navbar to show the data as ur lovely category . 
        document.querySelectorAll(".navbar a").forEach((link) => {
            link.addEventListener("click", (event) => {
                document.querySelector(".navbar .active").classList.remove("active");
                event.target.classList.add("active");
                this.getgames(event.target.dataset.category);

            });
        });

        this.ui = new ui()
       
    }
// API (Games by platform & category or tag from www.raidapi.com)
    async getgames(Category) {

        document.querySelector('.loading').classList.remove("d-none");
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'b29accd116mshaa6ef77b7e9adddp1ff19fjsn3bba8edb0955',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };



        let games = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${Category}`, options)
        let response = await games.json()

        // After check all response then we recall the displayGames function.
        this.ui.displayGames(response)
        
        this.cardDetails()
        
        document.querySelector('.loading').classList.add("d-none");
    }

// This function when click on any card hide games section >> and display details section
    cardDetails() {
         
         let card =  document.querySelectorAll(".card")
         card.forEach((item) => {
           
            item.addEventListener("click", () => {
                const id = item.id;
                const details = new Details(id);
                document.querySelector("#games").classList.add("d-none");
                document.querySelector("#details").classList.remove("d-none");
            });
        });

    }
   

    
}


