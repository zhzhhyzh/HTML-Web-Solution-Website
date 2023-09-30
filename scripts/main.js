var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("assessment__button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
if(btn)
btn.onclick = function() {
  modal.style.display = "block";
}

if(span)
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

if(btn&&span)
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
const onSubmit = () =>{
   alert("Sent successfully!")
}

document.addEventListener("scroll", function() {
  var pageTop = window.scrollY;
  var pageBottom = pageTop + window.innerHeight;
  var tags = document.getElementsByClassName("tag");

  for (var i = 0; i < tags.length; i++) {
    var tag = tags[i];
    console.log( window.innerHeight) 

    console.log(i,tag.getBoundingClientRect() )
    if (tag.getBoundingClientRect().top +window.scrollY +300 < pageBottom) {
    tag.classList.add("visible");
    } else {
      // $(tag).removeClass("visible");
    }
  }
});
document.addEventListener("DOMContentLoaded", function() {
  var pageTop = window.scrollY;
  var pageBottom = pageTop + window.innerHeight;
  var tags = document.getElementsByClassName("tag");

  for (var i = 0; i < tags.length; i++) {
    var tag = tags[i];

    if (tag.getBoundingClientRect().top < pageBottom) {
      tag.classList.add("visible");
    } else {
      // $(tag).removeClass("visible");
    }
  }
});

