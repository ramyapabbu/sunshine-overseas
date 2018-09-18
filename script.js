/* Fetch data from the json file into a javascript object */
fetch("students.json")
.then(function(response) {
    return response.json();
})
.then(function(data) {
    studentData = data;
    createListFromStudentData();

    console.log(studentData);
});

//Skapa lista

function createListFromStudentData() {
    
    console.log(studentData);

        var adressBook = document.createElement("div");
        adressBook.className = 'adressBookClass';

    // Loopa genom listan
    for(var index = 0; index < studentData.length; index++) {
       
    console.log(studentData[index].studentName);

    // FIRST WAY TO DO IT

    // var adressCard = document.createElement("div");
    // var getStudentName = document.createTextNode(studentData[index].studentName);
    // adressCard.appendChild(getStudentName);
    // document.body.appendChild(adressCard);


       // Create new card

        // SKAPA KORT VIA EN FUNKTION
         var adressCard = createAdressCard(studentData[index]);

      //Add card to book
     adressBook.appendChild(adressCard);
       
    }

    // SKRIV UT ADRESSBOKEN
   // document.getElementById("adressBookContainer").appendChild(adressBook)
   // console.log(adressBook);
    document.body.appendChild(adressBook);

 
 }

 function createAdressCard(studentData) {
   
    var adressCard = document.createElement("div")
    adressCard.className = 'adressCardClass';
    
           // Name
            var printName = document.createElement("h3");
            printName.innerText = "Name: "  + studentData.studentName;
            //console.log(printName);
            adressCard.appendChild(printName);
    
            //Image
            var printImage = document.createElement("img");
            printImage.src = "bild/" + studentData.studentImage;
            adressCard.appendChild(printImage);
    
           return adressCard;
}



