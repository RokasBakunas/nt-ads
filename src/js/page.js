


const stevId = localStorage.getItem("id");



const addElementToScreen = (data) => {
    const stevPhoto = document.getElementById("product-img");
    stevPhoto.style.backgroundImage = `url(${data.img})`;


    const title = document.getElementById("product-name");
    title.innerHTML = data.name;
  
    const price = document.getElementById("product-price");
    price.innerHTML = `Kaina: ${data.price} €`;

    const description = document.getElementById("product-description");
    description.innerHTML = data.description;

    const loc = document.getElementById("product-loc");
    loc.innerHTML = data.location;


}

fetch(`https://642db1a4bf8cbecdb40cc275.mockapi.io/stev/products/${stevId}`)


.then((res) => {
  
return res.json();

})

.then((data) => {

  // steviaOp(data);
  addElementToScreen(data);
});

//trinimas ad
const button = document.getElementById("delete_button");

const deleteAd = (id) => {
fetch(`https://642db1a4bf8cbecdb40cc275.mockapi.io/stev/products/${id}`, {
method: "DELETE",
})
.then((data) => {
return data.json();
})
.then((data) => {
const successMessage = document.getElementById("status_good");
successMessage.innerHTML = "Skelbimas ištrintas";

setTimeout(() => {
  window.location.replace("./index.html");
}, 1000);
})};

//old delete funkcija
// button.addEventListener("click", () => {
//   deleteAd(stevId);
//   });

// Klausiam ar tikrai norime ištrinti?
  button.addEventListener("click", (data) => {
   
    if(confirm(`Ar tikrai norite ištrinti šį skelimą? `)){
      deleteAd(stevId);
    } else {
      successMessage.innerHTML = "Skelbimas neištrintas";
      window.location.replace("./product-info.html");

    }
  });