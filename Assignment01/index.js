// Fetching and loading movies
fetch("./English.json")
    .then(response => response.json())
    .then(english => loadMovies(english));

function loadMovies(english) {
    var cardContainer = document.getElementById("col");

    for (var i = 0; i < english.English.length; i++) {
        let id = english.English[i].id;
        let title = english.English[i].title;
        let year = english.English[i].year;
        let imageUrl = english.English[i].url;
        let plot = english.English[i].plot;
        let cast = english.English[i].cast;
        let director = english.English[i].director;

        let addCard = document.createElement("div");

        // Apply Bootstrap grid system classes for three cards per row
        addCard.classList.add("col-md-4");

        addCard.innerHTML = `
            <div class="card shadow-sm mb-4">
                <img src=${imageUrl} class="card-img-top" style="height: 500px"alt="movie"></img>
                <div class="card-body">
                    <p class="card-text"><strong>${title}</strong></p>
                    <p class="card-text"><strong>Year: </strong>${year}</p>
                    <p><strong>Plot: </strong></p>
                    <p class="card-text">${plot}</p>
                    <p class="card-text"><strong>Cast: </strong>${cast}</p>
                    <p class="card-text"><strong>Director: </strong>${director}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" id="buyBtn_${title}" class="btn btn-sm btn-outline-secondary">Buy</button>
                            <button type="button" id="rentBtn_${title}" class="btn btn-sm btn-outline-secondary">Rent</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        cardContainer.appendChild(addCard);

        // Adding event listeners to the Buy and Rent buttons
        document.getElementById(`buyBtn_${title}`).addEventListener('click', function () {
            buyMovie(title);
        });

        document.getElementById(`rentBtn_${title}`).addEventListener('click', function () {
            rentMovie(title);
        });
    }
}

// Functions to handle Buy and Rent button clicks
function buyMovie(title) {
    alert(`You have bought the movie: ${title}.`);
    // Logic to display bought confirmation image can be added here
}

function rentMovie(title) {
    alert(`You have rented the movie: ${title}.`);
    // Logic to display rented confirmation image can be added here
}

