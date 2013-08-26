$(document).ready(function () {
  waldSitepicker();
  function waldSitepicker () {

   $('#wald-sitepicker .droplink').click(function () {
    $(this).toggleClass('active');
    $('#wald-sitepicker .drop').fadeToggle(300);
    return false;
   })

  }
})