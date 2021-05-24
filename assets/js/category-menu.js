function myFunction() {
    document.getElementById("category").classList.toggle("show1");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.categorybtn')) {
      var categories = document.getElementsByClassName("category-content");
      var i;
      for (i = 0; i < categories.length; i++) {
        var openDropdown = categories[i];
        if (openDropdown.classList.contains('show1')) {
          openDropdown.classList.remove('show1');
        }
      }
    }
  }