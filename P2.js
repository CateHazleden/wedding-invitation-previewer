// Get the modal
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const btn = document.getElementById("modBtn");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// Clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// Clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Reset button connect to clear innerDiv onkey events


// Flex box actions

// Invitation 1

function inv1Prev() {
  
  document.getElementById("invContainer").style.backgroundImage = "url(inviteImages/floral_2.png)";

  document.getElementById("invDisplay").style.visibility = "visible";

  document.getElementById("prevPara").style.display = "none";
}

// Invitation 2

function inv2Prev() {

  document.getElementById("invContainer").style.backgroundImage = "url(inviteImages/stripes_edit.png)";

  document.getElementById("invDisplay").style.visibility = "visible";

  document.getElementById("prevPara").style.display = "none";

}

// Invitation 3

function inv3Prev() {

  document.getElementById("invContainer").style.backgroundImage = "url(inviteImages/Swirls_blur.png)";

  document.getElementById("invDisplay").style.visibility = "visible";

  document.getElementById("prevPara").style.display = "none";
}
// Key up events on invite

document.getElementById("fname").addEventListener("keyup", fnameDetail);

function fnameDetail() {
  
  let x = document.getElementById("fname").value;

  document.getElementById("invPtrOne").innerHTML = x;
}
  
document.getElementById("sname").addEventListener("keyup", snameDetail);

function snameDetail() {
  
  let x = document.getElementById("sname").value;

  document.getElementById("invPtrTwo").innerHTML = x;
}

document.getElementById("date").addEventListener("keyup", dateDetail);

function dateDetail() {
  
  let x = document.getElementById("date").value;

  document.getElementById("wedDate").innerHTML = x;
}

document.getElementById("time").addEventListener("keyup", timeDetail);

function timeDetail() {
  
  let x = document.getElementById("time").value;

  document.getElementById("wedTime").innerHTML = x;
}

document.getElementById("address").addEventListener("keyup", addDetail);

function addDetail() {
  
  let x = document.getElementById("address").value;

  document.getElementById("wedAdd").innerHTML = x;
}