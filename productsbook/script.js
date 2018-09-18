/* Fetch data from the json file into a javascript object */
fetch("product.json")
.then(function(response) {
    return response.json();
})
.then(function(data) {
    productdata = data;
    createListFromproductData();

    console.log(productData);
});

//Skapa lista

function createListFromproductData() {
    
    console.log(productData);

        var productsBook = document.createElement("div");
        productBook.className = 'productsBookClass';

    // Loopa genom listan
    for(var index = 0; index < productData.length; index++) {
       
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

    // SKRIV UT ADRESSBOKEN
   // document.getElementById("adressBookContainer").appendChild(adressBook)
   // console.log(productBook);
    document.body.appendChild(productBook);

 
 }

 function createproductCard(productData) {
   
    var productCard = document.createElement("div")
    adressCard.className = 'adressCardClass';
    
           // Name
            var printName = document.createElement("h3");
            printName.innerText = "Name: "  + productData.productName;
            //console.log(printName);
            productCard.appendChild(printName);
    
            //Image
            var printImage = document.createElement("img");
            printImage.src = "bild/" + productData.productImage;
            productCard.appendChild(printImage);
    
           return productCard;
}

