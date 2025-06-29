document.addEventListener("DOMContentLoaded", function() {
    flatpickr("#check-in", {
        dateFormat: "d-m-Y"
    });

    flatpickr("#check-out", {
        dateFormat: "d-m-Y"
    });
});