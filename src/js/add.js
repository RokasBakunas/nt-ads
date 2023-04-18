const button = document.getElementById("add_button");

const fetchShips = (add_ads) => {
  fetch(`https://642db1a4bf8cbecdb40cc275.mockapi.io/stev/products`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(add_ads),
  })
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      const successMessage = document.getElementById("status_good");
      successMessage.innerHTML = "Skelbimas pridėtas";

      setTimeout(() => {
        window.location.replace("./index.html");
      }, 1000);
    });
};

// button.addEventListener("click", () => {
//   const name = document.getElementById("name").value;
//   const description = document.getElementById("description").value;
//   const price = document.getElementById("price").value;
//   const loc = document.getElementById("loc").value;
//   const img = document.getElementById("img").value;

//   const add_ads = {
//     name: name,
//     description: description,
//     price: price,
//     img: img,
//     location: loc,
//   };

//   fetchShips(add_ads);
// });


button.addEventListener("click", () => {
    const name = document.getElementById("name").value;
    const description = document.getElementById("description").value;
    const price = document.getElementById("price").value;
    const loc = document.getElementById("loc").value;
    const img = document.getElementById("img").value;
    
    if (name && description && price && loc && img) {
    const add_ads = {
    name: name,
    description: description,
    price: price,
    img: img,
    location: loc,
    };
    fetchShips(add_ads);
    } else {
    const errorMessage = document.getElementById("status_good");
    errorMessage.setAttribute("id", "status_bad");
    errorMessage.innerHTML = "Užpildykite visus laukelius";
    setTimeout(() => {
        window.location.replace("./add.html");
      }, 1000);
    }
    });