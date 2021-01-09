$(function() {
    // this button click, moves the item from 
  $(".devourburger").on("click", function(event) {
    console.log("hello pat")
    var id = $(this).val();
      // var id = event.data.id;
      // var devoured = event.data.devoured;
      console.log("where are you Id?" + id)
      
      // Send the PUT request.
      $.ajax( {
        method: "PUT",
        url: "/api/burgers/" + id,
        // data: newBurgerState
      }).then(
        function(res) {
          // console.log("changed burger to" + devoured);
          // // Reload the page to get the updated list
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
  
