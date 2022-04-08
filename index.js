// Write your code here!

const ul = document.getElementById('main')
ul.remove();

let newHeader = document.createElement("h1");
document.body.appendChild(newHeader);
newHeader.id = "victory"
newHeader.textContent= "Erick is the champion"

