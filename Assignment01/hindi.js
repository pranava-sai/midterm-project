// Fetching and loading movies
fetch("./hindi.json")
    .then(response => response.json())
    .then(hindi => loadMovies(hindi));

function loadMovies(hindi) {
    var cardContainer = document.getElementById("col");

    for (var i = 0; i < hindi.Hindi.length; i++) {
        let id = hindi.Hindi[i].id;
        let title = hindi.Hindi[i].title;
        let year = hindi.Hindi[i].year;
        let imageUrl = hindi.Hindi[i].url;
        let plot = hindi.Hindi[i].plot;
        let cast = hindi.Hindi[i].cast;
        let director = hindi.Hindi[i].director;

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

