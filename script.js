$(document).ready(function () {
  $(".ratings").click(function() {
    var value = $(this).data("value");
    $('.ratings').removeClass('active');
    $(this).addClass("active");
    $('.ratings_text').text(`you selected ${value} out of 5`);
  });
  $(".btn").click(function() {
    $('.container').hide();
    $('.thanku_container').show();
    $('.ratings_text').show();
  });
});
