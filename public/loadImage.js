const loadJSON = (callback) => {
    let xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'db.json', true);
    // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = () => {
        try {
            if (xobj.readyState === 4 && xobj.status === 200) {
                // Required use of an anonymous callback 
                // as .open() will NOT return a value but simply returns undefined in asynchronous mode
                callback(xobj.responseText);
            }
        } catch (e) { }
    };
    xobj.send(null);
}

function loadVNBurger() {
    try {
        loadJSON((res) => {
            var data = JSON.parse(res).burgers
            for(let i=0;i<3;i++) {
                if(data[i*3]) {
                    
                    var addInnerHtml = `<div class="products-cards">
                    <div class="product-card">
                        <img src="./images/${data[i*3].image}">
                        <div class="product-card-title">${data[i*3].titleVN}</div>
                        <div class="product-card-description">${data[i*3].descriptionVN}</div>
                        <div class="product-card-price">${data[i*3].price}</div>
                    </div>`
                    console.log(addInnerHtml)
                    if(data[i*3+1]) {
                        addInnerHtml+=`<div class="product-card">
                            <img src="./images/${data[(i*3)+1].image}">
                            <div class="product-card-title">${data[(i*3)+1].titleVN}</div>
                            <div class="product-card-description">${data[(i*3)+1].descriptionVN}</div>
                            <div class="product-card-price">${data[(i*3)+1].price}</div>
                        </div>` 
                    }
                    if(data[i*3+2]) {
                        addInnerHtml+=`<div class="product-card">
                            <img src="./images/${data[(i*3)+2].image}">
                            <div class="product-card-title">${data[(i*3)+2].titleVN}</div>
                            <div class="product-card-description">${data[(i*3)+2].descriptionVN}</div>
                            <div class="product-card-price">${data[(i*3)+2].price}</div>
                        </div>` 
                    }
                    addInnerHtml+=`</div>`
                    console.log(addInnerHtml)
                    document.getElementById(`products-cards-burger`).innerHTML += addInnerHtml
                }
            }
        })
    } catch (error) { }
}


function loadENGBurger() {
    try {
        loadJSON((res) => {
            var data = JSON.parse(res).burgers
            for(let i=0;i<3;i++) {
                if(data[i*3]) {
                    
                    var addInnerHtml = `<div class="products-cards">
                    <div class="product-card">
                        <img src="./images/${data[i*3].image}">
                        <div class="product-card-title">${data[i*3].titleENG}</div>
                        <div class="product-card-description">${data[i*3].descriptionENG}</div>
                        <div class="product-card-price">${data[i*3].price}</div>
                    </div>`
                    console.log(addInnerHtml)
                    if(data[i*3+1]) {
                        addInnerHtml+=`<div class="product-card">
                            <img src="./images/${data[(i*3)+1].image}">
                            <div class="product-card-title">${data[(i*3)+1].titleENG}</div>
                            <div class="product-card-description">${data[(i*3)+1].descriptionENG}</div>
                            <div class="product-card-price">${data[(i*3)+1].price}</div>
                        </div>` 
                    }
                    if(data[i*3+2]) {
                        addInnerHtml+=`<div class="product-card">
                            <img src="./images/${data[(i*3)+2].image}">
                            <div class="product-card-title">${data[(i*3)+2].titleENG}</div>
                            <div class="product-card-description">${data[(i*3)+2].descriptionENG}</div>
                            <div class="product-card-price">${data[(i*3)+2].price}</div>
                        </div>` 
                    }
                    addInnerHtml+=`</div>`
                    console.log(addInnerHtml)
                    document.getElementById(`products-cards-burger`).innerHTML += addInnerHtml
                }
            }
        })
    } catch (error) { }
}


function loadVNHotdog() {
    try {
        loadJSON((res) => {
            var data = JSON.parse(res).hotdogs
            for(let i=0;i<3;i++) {
                if(data[i*3]) {
                    
                    var addInnerHtml = `<div class="products-cards">
                    <div class="product-card">
                        <img src="./images/${data[i*3].image}">
                        <div class="product-card-title">${data[i*3].titleVN}</div>
                        <div class="product-card-description">${data[i*3].descriptionVN}</div>
                        <div class="product-card-price">${data[i*3].price}</div>
                    </div>`
                    console.log(addInnerHtml)
                    if(data[i*3+1]) {
                        addInnerHtml+=`<div class="product-card">
                            <img src="./images/${data[(i*3)+1].image}">
                            <div class="product-card-title">${data[(i*3)+1].titleVN}</div>
                            <div class="product-card-description">${data[(i*3)+1].descriptionVN}</div>
                            <div class="product-card-price">${data[(i*3)+1].price}</div>
                        </div>` 
                    }
                    if(data[i*3+2]) {
                        addInnerHtml+=`<div class="product-card">
                            <img src="./images/${data[(i*3)+2].image}">
                            <div class="product-card-title">${data[(i*3)+2].titleVN}</div>
                            <div class="product-card-description">${data[(i*3)+2].descriptionVN}</div>
                            <div class="product-card-price">${data[(i*3)+2].price}</div>
                        </div>` 
                    }
                    addInnerHtml+=`</div>`
                    console.log(addInnerHtml)
                    document.getElementById(`products-cards-hotdog`).innerHTML += addInnerHtml
                }
            }
        })
    } catch (error) { }
}


function loadENGHotdog() {
    try {
        loadJSON((res) => {
            var data = JSON.parse(res).hotdogs
            for(let i=0;i<3;i++) {
                if(data[i*3]) {
                    
                    var addInnerHtml = `<div class="products-cards">
                    <div class="product-card">
                        <img src="./images/${data[i*3].image}">
                        <div class="product-card-title">${data[i*3].titleENG}</div>
                        <div class="product-card-description">${data[i*3].descriptionENG}</div>
                        <div class="product-card-price">${data[i*3].price}</div>
                    </div>`
                    console.log(addInnerHtml)
                    if(data[i*3+1]) {
                        addInnerHtml+=`<div class="product-card">
                            <img src="./images/${data[(i*3)+1].image}">
                            <div class="product-card-title">${data[(i*3)+1].titleENG}</div>
                            <div class="product-card-description">${data[(i*3)+1].descriptionENG}</div>
                            <div class="product-card-price">${data[(i*3)+1].price}</div>
                        </div>` 
                    }
                    if(data[i*3+2]) {
                        addInnerHtml+=`<div class="product-card">
                            <img src="./images/${data[(i*3)+2].image}">
                            <div class="product-card-title">${data[(i*3)+2].titleENG}</div>
                            <div class="product-card-description">${data[(i*3)+2].descriptionENG}</div>
                            <div class="product-card-price">${data[(i*3)+2].price}</div>
                        </div>` 
                    }
                    addInnerHtml+=`</div>`
                    console.log(addInnerHtml)
                    document.getElementById(`products-cards-hotdog`).innerHTML += addInnerHtml
                }
            }
        })
    } catch (error) { }
}


if(document.getElementById(`products-cards-burger`)) {
    if(location.hash=="#vie") loadVNBurger()
    else loadENGBurger()
}

if(document.getElementById(`products-cards-hotdog`)) {
    if(location.hash=="#vie") loadVNHotdog()
    else loadENGHotdog()
}


