$(function() {
    $(".devourburger").on("click", function(event) {
      var id = $(this).data("id");
      var devoured = $(this).data("devoured");
      console.log("where are you?" + devoured)
      var newBurgerState = {
        devoured: devoured
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newBurgerState
      }).then(
        function() {
          console.log("changed burger to" + devoured);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-burger").on("click", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        name: $("#newBurger").val().trim()

      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  
