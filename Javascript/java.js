//Objektet

let obj_1 = {
    //Ndertimi i nje objekti duke perdorur 'key':
    key1: "first value",
    key2: "second value"
}

let person = {
    firstName: "Katherine",
    lastName: "Pierce",
    age: 17,
    haight: 170 + "cm",
    training: ["web", "java", "python"],
    films: [
        {
            title: "Vampire Diaries",
            category: "drama/romance"
        },
        {
            title: "The originals",
            category: "drama"
        }
    ]
}

console.log(person)

//Thirrja vetem te nje elementi te perfshire ne object:
console.log(person["lastName"])
console.log(person.firstName)

//Thirrja e nje elementi te perfshire ne object por qe ndodhet brenda array, duke perdorur indeksin (me kllapa katore):
console.log(person.training[0])

//Thirrja e nje elementi tek array me kllapa gjarperueshe:
console.log(person.films[0].category)

//Verifikimi i indekseve te elementeve te perfshira ne nje array:
for (let i in person) {
    console.log(person[i])
}


//Functions:
//kemi dy lloje funksionesh: klasike dhe me shigjet por me e perdorshmja eshte e para:

//sintaksa klasike:
function emriFunksion() {
    //ketu ne vendosim instruksionet
}

//sintaksa me shigjet:
const emri_funsion = () => {
    //instruksionet
}

//therritja e funksionit per deklarimin e funksionit:
emriFunksion()  //nese kemi parametra, i vendosim brenda kllapave rrethore
emri_funsion()

//form:
function getInfo(event) {
    event.preventDefault()   //nepermjet kesajt parandalojme pjesen e refresh te faqes
    let firstName = document.getElementById("fname").value    //'.value' perdoret per te marre info nga inputet
    let lastName = document.getElementById("sname").value

    //therritja e elementeve:
    document.getElementById("title").textContent = "Hello " + firstName + " " + lastName + "."
}

//image function:
// function changeImage() {
    // let img1 = document.getElementsByTagName("img")[0]


    // if (img1.src.match('Image/dselena.jpg')) {    //'.match' ka te njejtin funksion si '=='
    //     img1.src = 'Image/tvdvd.webp'
    // } else {
    //     img1.src = 'Image/dselena.jpg'

    // }
// }

//change text:
function changeText() {
    document.getElementById("text").textContent = 'Katherine'
    document.getElementById("text").style.color = 'red'
    document.getElementById("text").style.fontSize = '50px'
}






