const container = document.querySelector(".container")

// const url = "https://emojihub.herokuapp.com/api/all";
const url = "https://api.openbrewerydb.org/breweries";

async function getBrewery() {
    try{
    const response = await fetch(url)
    const results = await response.json();

    console.log(results)
    
    container.innerHTML = ""

    for (let i = 0; i < results.length; i++) {
        container.innerHTML += `<a href="details.html?name=${results.name}" class="link-container">                       
                                <div class="content">${results[i].name}</div>
                                <div class="originator">${results[i].country}</div>
                                <div class="tags">${results[i].city}</div>
                                </a>`
    }

    } catch(error){
        console.log(error)
        container.innerHTML = displayError("An error occured", error)
    } finally {
        onLoad()
    }
    
}
 getBrewery()













































// async function getQuotes() {
//     try{
//         const response = await fetch(url)
//         const content = await response.json()
//         console.log(content)

//         container.innerHTML = "";

       

        // quotes.forEach(function(quote) {
        //         container.innerHTML += `<a href="details.html?id=${quote.id}" class="quote">
        //                             <div class="content">${quote[i].content}</div>
        //                             <div class="originator">${quote[i].originator.name}</div>
        //                             <div class="tags">${quote[i].tags}</div>
        //                             </a>`
        // })

        // for (let i = 0; i < content.length; i++) {
        //     container.innerHTML += `<a href="details.html">
        //                             <div class="content">${quotes[i].content}</div>
        //                             <div class="originator">${quotes[i].originator.name}</div>
        //                             <div class="tags">${quotes[i].tags}</div>
        //                             </a>`
        // }

//     }catch(err)
//     {
//         console.error(err)
//         container.innerHTML = "An error occured"
//     }
// } 
// getQuotes()

