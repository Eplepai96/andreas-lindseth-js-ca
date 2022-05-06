// console.log(window.location)
const breweryContainer = document.querySelector(".brewery-container")

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const name = params.get("name");

console.log(name)

const url = "https://api.openbrewerydb.org/breweries/" + name;

async function fetchBrewery () {
    try{
        const response = await fetch(url)
        const brewery = await response.json();

        console.log(brewery)
        createHTML(brewery)

        console.log(queryString)

    } catch(error) {
        console.log(error)
        breweryContainer.innerHTML = displayError("Couldn't find brewery", error)
    } finally {
        onLoad()
    }
}

fetchBrewery()

function createHTML (brewery) {
    breweryContainer.innerHTML = `<h1>${brewery.name}</h1>
                                <div class="category">State: ${brewery.state}</div>
                                <div class="group">Phone: ${brewery.phone}</div>`;
}