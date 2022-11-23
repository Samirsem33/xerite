$('.close').click(function () {
  $('body').toggleClass('overfh')
  if ($('body').hasClass('overfh')) {
    $('.remenucl').animate({ 'width': '100%' }, 500)
  }
  else {
    $('.remenucl').animate({ 'width': '0%' }, 500)
  }
})

$('.maga3').click(function () {
  if ($(this).css("height") == "50px") {
    $('.maga3 .firlan').css("transform", "rotate(0deg)");
    $(".maga3").css('height', '50px')
    $(".maga3").removeClass('bgcm');


    $(this).children().eq(0).children().eq(1).css("transform", "rotate(-180deg)");
    $(this).css('height', '150px')
    $(this).addClass('bgcm'); 
  }
  else {
    $(this).children().eq(0).children().eq(1).css("transform", "rotate(0deg)");
    $(this).css('height', '50px')
    $(this).removeClass('bgcm');
  }
});


$('.c').click(function () {
  $('.xer').css("display", "none");
  $(`[cat="${$(this).attr('cat')}"]`).css("display", "block");
})