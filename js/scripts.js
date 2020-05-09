function filterFunction() {
    var F = document.getElementById("filter"),
        displayValue = "";
    if (F.style.display == "")
        displayValue = "none";

    F.style.display = displayValue;
}

$('.dropdown-menu').click(function(e) {
    e.stopPropagation();
});