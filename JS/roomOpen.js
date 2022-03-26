var buildingBtns = document.querySelectorAll(".miniroom");

buildingBtns.forEach(function(btn) {
   btn.onclick = function() {
      var floor = btn.getAttribute("data-modal");
      document.getElementById("rooms").style.display = "block";
      // document.getElementById(floor).classList.add("active");
      document.getElementById(floor).style.display = "block";
   };
});

var buildingClose = document.querySelectorAll(".room--close");

buildingClose.forEach(function(btn) {
   btn.onclick = function() {
      var room = (btn.closest(".rooms__room").style.display = "none");
      document.getElementById("rooms").style.display = "none";
   };
});
