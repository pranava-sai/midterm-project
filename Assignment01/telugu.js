// Fetching and loading movies
fetch("./telugu.json")
  .then(response => response.json())
  .then(telugu => loadMovies(telugu));

function loadMovies(telugu) {
  var cardContainer = document.getElementById("col");

  for (var i = 0; i < telugu.Telugu.length; i++) {
    let id = telugu.Telugu[i].id;
    let title = telugu.Telugu[i].title;
    let year = telugu.Telugu[i].year;
    let imageUrl = telugu.Telugu[i].url;
    let plot = telugu.Telugu[i].plot;
    let cast = telugu.Telugu[i].cast;
    let director = telugu.Telugu[i].director;

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

