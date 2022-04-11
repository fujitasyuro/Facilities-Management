var buildingBtns = document.querySelectorAll(".miniroom");

buildingBtns.forEach(function(btn) {
   btn.onclick = function() {
      var floor = btn.getAttribute("data-modal");
      document.getElementById(floor).classList.add("active");
      document.getElementById("computer--svg").style.display = "block";
      document.getElementById("table--svg").style.display = "block";
   };
});

var buildingClose = document.querySelectorAll(".room--close");

buildingClose.forEach(function(btn) {
   btn.onclick = function() {
      var room = (btn.closest(".room").classList.remove("active"));
      document.getElementById("computer--svg").style.display = "none";
      document.getElementById("table--svg").style.display = "none";
      
   };
});
