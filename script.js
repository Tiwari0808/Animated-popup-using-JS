console.log('hello');

let popup = document.querySelector("#popup");

openPopup = ()=>{
    popup.classList.add("open-popup");
}

closePopup = ()=>{
    popup.classList.remove("open-popup");
}