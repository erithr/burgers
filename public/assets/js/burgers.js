// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    $(".change-eaten").on("click", function (event) {
        var id = $(this).data("id");
        var devoured = $(this).data("newEatenState");
        alert("Delish!")
        var newEatenState = {
            devoured: devoured
        };
        console.log("nES", newEatenState);
        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newEatenState
        }).then(
            function () {
                console.log("changed to devoured", devoured);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
        alert("Comming Right Up!")
        var newBurger = {
            burger_name: $("#burger-name").val().trim(),
            devoured: 0
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("new burger created");
                // Reload the page to get the updated list
                location.reload();
            }
        );

    });
});

// $(".create-form").on("submit", function (event) {
//     // Make sure to preventDefault on a submit event.
//     event.preventDefault();

//     var newCat = {
//         name: $("#ca").val().trim(),
//         sleepy: $("[name=sleepy]:checked").val().trim()
//     };

//     // Send the POST request.
//     $.ajax("/api/cats", {
//         type: "POST",
//         data: newCat
//     }).then(
//         function () {
//             console.log("created new cat");
//             // Reload the page to get the updated list
//             location.reload();
//         }
//     );
// });