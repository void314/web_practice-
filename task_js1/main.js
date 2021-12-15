let movie = "Fight Club";
let description = "Терзаемый хронической бессонницей и отчаянно пытающийся вырваться из мучительно скучной жизни клерк встречает некоего Тайлера Дардена, харизматического торговца мылом с извращенной философией. Тайлер уверен, что самосовершенствование — удел слабых, а саморазрушение — единственное, ради чего стоит жить.";

document.getElementsByClassName("movie")[0].innerHTML = movie;
document.getElementsByClassName("description")[0].innerHTML = description;

$(document).ready(function(){
    $(".btn-slide").click(function(){
        $("#panel").slideToggle("slow");
        $(this).toggleClass("active");
    });
    $("h2").append('<em></em>');

    $(".thumbs a").click(function (){
      var largePath = $(this).attr("href");
      var largeAlt = $(this).attr("title");

      $("#largeImg").attr({src: largePath, alt: largeAlt});

      $("h2 em").html(" (" + largeAlt + ")");
      return false;
    });
});