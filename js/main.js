$(function () {
    // NavBar
    $(".n").mouseenter(function () {
        $(".toggle").addClass("show")
    });
    $(".toggle").mouseleave(function () {
        $(".toggle").removeClass("show")
    });
    // Products
    $(".hvr").hover(function(){
        $(this).css("background-color", "white");
        $(".bl").css("color", "#000")
        }, function(){
        $(this).css("background-color", "#F9F9F9");
        $(".bl").css("color", "#009ADE")
      });
      $(".over").hover(function(){
        $(this).css("background-color", "white");
        $(".bl").css("color", "#000")
        }, function(){
        $(this).css("background-color", "#E8F7FF");
        $(".bl").css("color", "#009ADE")
      });
      $(".bfr").hover(function (){
        $('.jqr').css("background-color", "#a1e1ff")
        $('.jqr').css("transform", "scale(1.5)")
      }, function() {
        $('.jqr').css("background-color", "#fff")
        $('.jqr').css("transform", "scale(1)")
      });
});