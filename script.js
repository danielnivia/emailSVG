let emailClosed = document.getElementById("closedEmail");
let emailOpen = document.getElementById("openEmail");

emailOpen.style.opacity = "0";
emailClosed.style.display = "1";



emailClosed.addEventListener("click", () => {
    console.log("openEmail");
     emailOpen.style.opacity = "1";
     emailClosed.style.opacity = "0"

 });

 emailOpen.addEventListener("click", () => {
    console.log("closeEmail");
    emailClosed.style.opacity = "1";
    emailOpen.style.opacity = "0";
 });

// emailOpen.addEventListener("click", () => {
//     emailOpen.style.display = "none";
//     emailClosed.style.display = "display";
// })


// function openFunction(){
// console.log("you clicked");
// emailOpen.style.display = "display";
// console.log("hello");
// }