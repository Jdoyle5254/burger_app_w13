$(function() {
    $(".devourburger").on("click", function(event) {
      var id = $(this).data("id");
      var devoured = $(this).data("devoured");
  
      var newBurgerState = {
        devoured: devoured
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newBurgerState
      }).then(
        function() {
          console.log("changed burger to", devoured);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("click", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        name: $("newBurger").val().trim(),

      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger"m );
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
//     $(".delete-cat").on("click", function(event) {
//       var id = $(this).data("id");
  
//       // Send the DELETE request.
//       $.ajax("/api/cats/" + id, {
//         type: "DELETE"
//       }).then(
//         function() {
//           console.log("deleted cat", id);
//           // Reload the page to get the updated list
//           location.reload();
//         }
//       );
//     });
//   });
  
//   <script type="text/javascript">
//   $(".delmovie").on("click", function(event) {
//     // Get the ID from the button.
//     // This is shorthand for $(this).attr("data-planid")
//     var id = $(this).data("movieid");

//     // Send the DELETE request.
//     $.ajax("/api/movies/" + id, {
//       type: "DELETE"
//     }).then(
//       function() {
//         console.log("deleted id ", id);
//         // Reload the page to get the updated list
//         location.reload();
//       }
//     );
//   });

//   $("#createmovie").on("submit", function(event) {
//     // Make sure to preventDefault on a submit event.
//     event.preventDefault();

//     // [name=plan] will find an element with a "name" attribute equal to the string "plan"
//     var newMovie = {
//       movie: $("#createmovie [name=movie]").val().trim()
//     };

//     // Send the POST request.
//     $.ajax("/api/movies", {
//       type: "POST",
//       data: newMovie
//     }).then(
//       function() {
//         console.log("created new movie");
//         // Reload the page to get the updated list
//         location.reload();
//       }
//     );
//   });

//   $("#updatemovie").on("submit", function(event) {
//     // Make sure to preventDefault on a submit event.
//     event.preventDefault();

//     // Get the ID by finding an element with a "name" attribute equal to the string "id"
//     var id = $("[name=id]").val().trim();

//     var updatedMovie = {
//       movie: $("#updatemovie [name=movie]").val().trim()
//     };

//     // Send the PUT request.
//     $.ajax("/api/movies/" + id, {
//       type: "PUT",
//       data: updatedMovie
//     }).then(
//       function() {
//         console.log("updated id ", id);
//         // Reload the page to get the updated list
//         location.reload();
//       }
//     );
//   });
// </script>

<button> </button>