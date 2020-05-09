

$(function(){
    $("#filter-btn").click(function(){
      $("#filter").toggle();
    });
  });

$('.dropdown-menu').click(function(e) {
    e.stopPropagation();
});