fetch('/assets/api/promoData.php')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        for (let promo of data) {
            let promo_codes = document.querySelector('.promo-codes')
            console.log(promo)
            promo_codes.innerHTML += `
        <div class="promo">
            <div class="promo-img">
                <img src="assets/img/${promo.img}" alt="">
            </div>
            
            <div class="promo-content">
                <h1>${promo.title}</h1>
                    <p>${promo.description}</p>
            </div>
        </div>
                `
        }

    })