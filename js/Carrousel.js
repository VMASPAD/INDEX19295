var carousel = $(".carousel"),
    items = $(".item"),
    currdeg  = 0;

$(".next").on("click", { d: "n" }, rotate);
$(".prev").on("click", { d: "p" }, rotate);

function rotate(e){
  if(e.data.d=="n"){
    currdeg = currdeg - 60;
  }
  if(e.data.d=="p"){
    currdeg = currdeg + 60;
  }
  carousel.css({
    "-webkit-transform": "rotateY("+currdeg+"deg)",
    "-moz-transform": "rotateY("+currdeg+"deg)",
    "-o-transform": "rotateY("+currdeg+"deg)",
    "transform": "rotateY("+currdeg+"deg)"
  });
    items.css({
    "-webkit-transform": "rotateY("+(-currdeg)+"deg)",
    "-moz-transform": "rotateY("+(-currdeg)+"deg)",
    "-o-transform": "rotateY("+(-currdeg)+"deg)",
    "transform": "rotateY("+(-currdeg)+"deg)"
  });
  // add extra elements to buttons for hover, keeps html cleaner
$('.btn').prepend('<div class="hover"><span></span><span></span><span></span><span></span><span></span></div>');

$('.social-btn').prepend('<div class="hover"><span></span><span></span><span></span><span></span></div>');
}