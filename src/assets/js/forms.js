$(document).ready(function () {
  $('.form-group input').focus(function(){
    $(this).parents('.form-group').addClass('focused');
  });

  $('.form-group input').blur(function(){
    let inputValue = $(this).val();
    if ( inputValue === '' ) {
      $(this).removeClass('filled');
      $(this).parents('.form-group').removeClass('focused');
    } else {
      $(this).addClass('filled');
    }
  })
});


