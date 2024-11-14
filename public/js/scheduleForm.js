// $('#package').on('change', function () {
//     console.log("Selected value: " + $(this).val());

//     if ($(this).val() === "other") {
//         console.log("Showing otherInput...");
//         $('#otherInput').show();
//     } else {
//         console.log("Hiding otherInput...");
//         $('#otherInput').hide();
//     }

//     if ($(this).val() === "additional") {
//         console.log("Showing additionalOptions...");
//         $('#additionalOptions').show();
//     } else {
//         console.log("Hiding additionalOptions...");
//         $('#additionalOptions').hide();
//     }
// });
$(document).ready(function () {
    // Hide the "other" and "individual items" form elements by default
    $("#otherInput").hide();
    $("#additionalOptions").hide();

    // Show/hide the "other" form element when the "package" dropdown changes
    $("#package").change(function () {
        if ($(this).val() === "other") {
            $("#otherInput").show();
        } else {
            $("#otherInput").hide();
        }
        if ($(this).val() === "additional") {
            $("#additionalOptions").show();
        } else {
            $("#additionalOptions").hide();
        }
    });
});
