$(document).ready(function() {
	console.log('doc is ready');

  $eurasianBeaverImg = $('<img src="img/eurasian-beaver.jpg">');
  $eurasianBeaverImg.attr('alt', 'Eurasian Beaver');

  $eurasianBeaverAnchor = $('<a>');
  $eurasianBeaverAnchor.append("<br>Eurasian Beaver");
  $eurasianBeaverAnchor.prepend($eurasianBeaverImg);
  $eurasianBeaverAnchor.attr('class','level-2');

  $eurasianBeaverElem = $('<li>');
  $eurasianBeaverElem.attr('id','eurasian-beaver').attr('class','eurasian-beaver');
  $eurasianBeaverElem.attr('class','animal');
  $eurasianBeaverElem.append($eurasianBeaverAnchor);

  $eurasianBeaverAnchor.appendTo($eurasianBeaverElem);
  $beaverList = $eurasianBeaverElem.wrap('<ul>').parent();

  $('#beavers').append($beaverList);

});

// * Inside
//   - `prepend()` / `append()`
//   - `prependTo()` / `appendTo()`
// * Outside
//   - `before()` / `insertBefore()`
//   - `after()` / `insertAter()`
// * Around
//   - `wrap()`
//   - `wrapAll()`
//   - `wrapInner()`


// <ul>
//   <li id="eurasian-beaver" class="animal">
//     <a class="level-2"><img src="img/eurasian-beaver.jpg" alt="Eurasian Beaver"><br>Eurasian Beaver</a>
//   </li>
//   <li id="eurasian-beaver" class="animal">
//     <a class="level-2"><img src="img/beaver.jpg" alt="Eurasian Beaver"><br>N. American Beaver</a>
//   </li>
// </ul>