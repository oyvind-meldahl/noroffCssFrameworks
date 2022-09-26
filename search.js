const searchBar = document.querySelector(".searchbar")
const searchButton = document.querySelector(".searchbutton")
let visible = false

searchBar.style.display = "none"

function changeText() {
    if(visible == false) {
  searchBar.style.display = ""
  visible = true
 } else {
    searchBar.style.display = "none"
    visible = false
 }
} 

searchButton.addEventListener("click", changeText)