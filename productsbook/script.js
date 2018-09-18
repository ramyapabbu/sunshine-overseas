console.log("start of js file");

/* Fetch data from the json file into a javascript object */
fetch("product.json")
.then(function(response) {
    return response.json();
    // console.log("inne i fetch");
})
.then(function(data) {
    productData = data;
    
    console.log("fetch done");
    console.log(productData);

    createListFromproductData();
});

//Skapa lista

function createListFromproductData() {
    
    // var productsBook = document.createElement("div");
    // productBook.className = 'productsBookClass';

    console.log("start of function");
    console.log(productData);


    // Loopa genom listan
    for(var index = 0; index < productData.length; index++) {
        
        console.log("inne i loopen");
    console.log(productData[index].productName);
    // FIRST WAY TO DO IT

    // var productCard = document.createElement("div");
    // var getproductName = document.createTextNode(productData[index].productName);
    // productCard.appendChild(getproductName);
    // document.body.appendChild(productCard);


       // Create new card

        // SKAPA KORT VIA EN FUNKTION
        var productCard = createproductCard(productData[index]);

      //Add card to book
    productBook.appendChild(productCard);
       
    }
    
    console.log("fetch done");
    // SKRIV UT PRODUCTBOKEN
   // document.getElementById("productBookContainer").appendChild(productBook)
   // console.log(productBook);
  //  document.body.appendChild(productBook);

 
 }

 function createproductCard(productData) {
   
    console.log(productData);

    var productCard = document.createElement("div")
    productCard.className = 'productCardClass';
    
           // Name
            var printName = document.createElement("h3");
            printName.innerText = "Name: "  + productData.productName;
            //console.log(printName);
            productCard.appendChild(printName);

           //Price
            var printPrice = document.createElement("h3");
            printPrice.innerText = "Price: "  + productData.productPrice;
            //console.log(printPrice);
            productCard.appendChild(printPrice);
            
            //Image
            var printImage = document.createElement("img");
            printImage.src = "bild/" + productData.productImage;
            productCard.appendChild(printImage);
    
          // return productCard;
}

