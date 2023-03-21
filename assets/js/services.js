fetch('./assets/api/services.php', {
    method: 'POST',
    body: JSON.stringify({})
})
    .then(response => response.json())
    .then(data => {
        let accordion = document.querySelector('.accordion')
        accordion.innerHTML = `
        <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            ${data[0].title}
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                        <div class="accordion-body">
                            ${data[0].description}
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                            ${data[1].title}
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                        <div class="accordion-body">
                            ${data[1].description}
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                            ${data[2].title}
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                        <div class="accordion-body">
                            ${data[2].description}
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingFourth">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFourth" aria-expanded="true" aria-controls="panelsStayOpen-collapseFourth">
                            ${data[3].title}
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseFourth" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFourth">
                        <div class="accordion-body">
                            ${data[3].description}
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingFifth">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFifth" aria-expanded="true" aria-controls="panelsStayOpen-collapseFifth">
                            ${data[4].title}
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseFifth" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFifth">
                        <div class="accordion-body">
                            ${data[4].description}
                        </div>
                    </div>
                </div>
        `
        console.log(data)
    })
    .catch(error => console.error(error));