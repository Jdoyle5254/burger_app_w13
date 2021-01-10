$(function() {
    // this button click, moves the item from the status of devoured = false to the status of devoured = true(note to check the update function from Saturday on changing the status)
  $(".devourburger").on("click", function(event, e) {
    //when the button is clicked, the id is identified (this); 
    console.log("hello pat")
    var id = parseInt($(this).first().attr("id"));
      // var id = event.data.id;
      // var devoured = event.data.devoured;
      console.log("where are you Id?" + id)
      
      //then the id from the DATABASE is updated from false to true which should move the burger name 
      //to be displayed in the list of burgers that have been devoured.   
      // Send the PUT request.
      $.ajax( {
        method: "PUT",
        url: "/api/burgers/" + id,
        // data: newBurgerState
      }).then(
        function(res) {
          // console.log("changed burger to" + devoured);
          // // Reload the page to get the updated list
          window.location.reload(true);
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
  
