fetch("./aboutInstructor.json")
    .then(response => response.json())
    .then(aboutInstructor => loadInfo(aboutInstructor));

function loadInfo(aboutInstructor) {
    var cardContainer = document.getElementById("col");

    for (var i = 0; i < aboutInstructor.AboutInstructor.length; i++) {
        let id = aboutInstructor.AboutInstructor[i].id;
        let name = aboutInstructor.AboutInstructor[i].name;
        let imageUrl = aboutInstructor.AboutInstructor[i].url;
        let about = aboutInstructor.AboutInstructor[i].about;

        let addCard = document.createElement("div");

        // Apply Bootstrap grid system classes for three cards per row
        addCard.classList.add("col-md-4");

        addCard.innerHTML = `
            <div class="card shadow-sm mb-4">
            <img src=${imageUrl} class="card-img-top" style="height: 500px"alt="instructor"></img>
                <div class="card-body">
                    <p class="card-text" style="margin-left:50px"><strong>${name}</strong></p>
                    <p class="card-text"><strong>Net-ID: </strong>${id}</p>
                    <p class="card-text">${about}</p>
                </div>
            </div>
        `;

        // Append the created card to the container
        cardContainer.appendChild(addCard);
    }
}
