const stevWrapper = document.getElementById("stev-wrapper");

const steviaOp = (stev) =>{
  console.log(stev);
  const wrapper = document.createElement("div");
  wrapper.setAttribute("class", "house");
  const image = document.createElement("img");
  image.setAttribute("src", stev.img);
  image.setAttribute("class", "product-img");
  image.setAttribute("title", stev.name);

  const titleWrapper = document.createElement("div");
  titleWrapper.setAttribute("class", "title-wrapper");

  const title = document.createElement("span");
  const loc = document.createElement("span");
  const price = document.createElement("span");
  const link = document.createElement("a");
  link.setAttribute("class", "product-link")
  link.href="./product-info.html "

  link.addEventListener("click", ()=>{
    localStorage.setItem("id", stev.itemid);
  });
  loc.setAttribute("class", "location");

  price.setAttribute("class", "price");
  title.setAttribute("class", "name");
  
  loc.innerHTML = stev.location;
  title.innerHTML = stev.name;
  price.innerHTML = stev.price;
  

  titleWrapper.append(title);
  titleWrapper.append(price);

  wrapper.append(loc)
  wrapper.append(image);
  wrapper.append(titleWrapper);

  link.append(wrapper);
  stevWrapper.append(link);
}

fetch("https://642db1a4bf8cbecdb40cc275.mockapi.io/stev/products")
  .then((res) => {
    return res.json();
  })
  .then((stev) => {
    stev.sort((a, b) => a.price - b.price);

    stev.forEach((stev) => {
      steviaOp(stev);
    });
  })
  .catch((err) => {
    console.log("Klaida: ", err);
  });


