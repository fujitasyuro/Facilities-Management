var buildingBtns = document.querySelectorAll(".buildings__building");

buildingBtns.forEach(function(btn) {
   btn.onclick = function() {
      var floor = btn.getAttribute("data-modal");

      document.getElementById(floor).classList.add("active");
      // document.getElementById(floor).style.display = "block";
   };
});

var buildingClose = document.querySelectorAll(".floor--close");

buildingClose.forEach(function(btn) {
   btn.onclick = function() {
      var floor = (btn.closest(".floors").classList.remove("active"));
   };
});