$(document).ready(function () {
  let $table = $('table.scroll'),
    $bodyCells = $table.find('tbody tr:first').children(),
    colWidth;
  console.log($table);
  $(window).resize(function() {
    colWidth = $bodyCells.map(function() {
      return $(this).width();
    }).get();

    $table.find('thead tr').children().each(function(i, v) {
      $(v).width(colWidth[i]);
    });
  }).resize();
});

