$(document).ready(function() {
  console.log('doc is ready');

  $eurasianBeaverImg = $('<img src="img/eurasian-beaver.jpg">');
  $eurasianBeaverAnchor = $('<a>');
  $eurasianBeaverElem = $('<li>');

  $eurasianBeaverAnchor.append("<br>Eurasian Beaver");
  $eurasianBeaverAnchor.prepend($eurasianBeaverImg);
  $eurasianBeaverAnchor.appendTo($eurasianBeaverElem);
  $beaverList = $eurasianBeaverElem.wrap('<ul>').parent();

  $eurasianBeaverImg.attr('alt', 'Eurasian Beaver');
  $eurasianBeaverAnchor.attr('class','level-2');
  $eurasianBeaverElem.attr('id','eurasian-beaver').attr('class','eurasian-beaver');

  $('#beavers').append($beaverList);

});