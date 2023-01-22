
function mystery_button() {
    var x = document.getElementById("boring");
    var y = document.getElementById("notBoring");

    if (x.innerHTML === "yay! exciting ^_^") {
      x.innerHTML = "smh - so boring!!";
    } else {
      x.innerHTML = "yay! exciting ^_^";
    }
  }