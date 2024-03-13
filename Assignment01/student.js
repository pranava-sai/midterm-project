// Fetching and loading movies
fetch("./aboutStudent.json")
    .then(response => response.json())
    .then(aboutStudent => loadMovies(aboutStudent));

function loadMovies(aboutStudent) {
    var cardContainer = document.getElementById("col");

    for (var i = 0; i < aboutStudent.AboutStudent.length; i++) {
        let id = aboutStudent.AboutStudent[i].id;
        let name = aboutStudent.AboutStudent[i].name;
        let year = aboutStudent.AboutStudent[i].entryYear;
        let imageUrl = aboutStudent.AboutStudent[i].url;
        let about = aboutStudent.AboutStudent[i].about;

        let addCard = document.createElement("div");

        // Apply Bootstrap grid system classes for three cards per row
        addCard.classList.add("col-md-4");

        addCard.innerHTML = `
            <div class="card shadow-sm mb-4">
            <img src=${imageUrl} class="card-img-top" style="height: 500px"alt="student"></img>
                <div class="card-body">
                    <p class="card-text" style="margin-left:50px"><strong>${name}</strong></p>
                    <p class="card-text"><strong>Net-ID: </strong>${id}</p>
                    <p class="card-text"><strong>Entry Year: </strong>${year}</p>
                    <p class="card-text">${about}</p>
                </div>
            </div>
        `;
        cardContainer.appendChild(addCard);
    }
}

