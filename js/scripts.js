

// Filter Toggle Button
$(function(){
    $("#filter-btn").click(function(){
      $("#filter").toggle();
    });
  });

  // Property Type Button Dropdown Remains Open on Checkbox Selection
$('.dropdown-menu').click(function(e) {
    e.stopPropagation();
});
