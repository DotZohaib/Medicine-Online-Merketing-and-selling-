  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.style.display === "block") {
          openDropdown.style.display = "none";
        }
      }
    }
  }



  // Detect touch events
document.addEventListener("touchstart", function() {
    // Do nothing for now, just to detect touch events
  }, false);
  
  // Add hover class on touchstart
  document.querySelectorAll('.hoverable').forEach(function(element) {
    element.addEventListener('touchstart', function(event) {
      // Prevent default touch behavior (e.g., scrolling)
      event.preventDefault();
      
      // Add the 'hover' class to the touched element
      this.classList.add('hover');
    });
  });
  
  // Remove hover class on touchend
  document.querySelectorAll('.hoverable').forEach(function(element) {
    element.addEventListener('touchend', function() {
      // Remove the 'hover' class from the touched element
      this.classList.remove('hover');
    });
  });
  



  document.querySelector("#change-image").addEventListener("click", function(){
    document.querySelector("#upload-form input").click();
  })


  document.querySelector("#upload-form input").addEventListener("change", function(){
    document.querySelector("#upload-form").submit();
  })



  document.addEventListener("DOMContentLoaded", function() {
    // Add click event listeners to social icons
    const socialIcons = document.querySelectorAll("#socail i");
    socialIcons.forEach(icon => {
        icon.addEventListener("click", function() {
            const platform = this.classList[1].split("-")[1];
            // You can add custom logic here based on which social icon was clicked
            console.log(`Clicked on ${platform} icon`);
            // Example: redirect to social platform URL
            window.open(`https://www.${platform}.com/yourprofile`, "_blank");
        });
    });
});
