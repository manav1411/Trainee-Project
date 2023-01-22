
function mystery_button() {
    var x = document.getElementById("boring_text");

    var circle1 = document.getElementById("circle1");
    var circle2 = document.getElementById("circle2");
    var circle3 = document.getElementById("circle3");
    var circle4 = document.getElementById("circle4");


    if (x.innerHTML === "<h3> yay! exciting ^_^ </h3>") {
      x.innerHTML = "<h3> smh - so boring!! </h3>";
      circle1.innerHTML = "about me";
      circle2.innerHTML = "definitions";
      circle3.innerHTML = "github";
      circle4.innerHTML = "resources";
    } else {
      x.innerHTML = "<h3> yay! exciting ^_^ </h3>";
      circle1.innerHTML = "?????";
      circle2.innerHTML = "?????";
      circle3.innerHTML = "?????";
      circle4.innerHTML = "?????";
    }
  }




//parralax effect code - inspired by:
//https://www.youtube.com/watch?v=ntg6tbGxP3k
document.addEventListener("mousemove", parallax);
function parallax(event) {
  this.querySelectorAll(".parallax-wrap span").forEach((shift) => {
    const position = shift.getAttribute("value");
    const x = (window.innerWidth - event.pageX * position) / 90;
    const y = (window.innerHeight - event.pageY * position) / 90;

    shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
}
