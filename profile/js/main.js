var cards = $('.spreadout');
var viewport = $(window);

function canYouSeeIt(){
    var portheight = viewport.height();
    var porttop = viewport.scrollTop();
    var portbottom = (portheight + porttop);

    $.each(cards, function (){
        var card = $(this);
        var cardheight = card.outerHeight();
        var cardtop = card.offset().top;
        var cardbottom = cardheight + cardtop;
        var count = 0;

            if((cardbottom>=porttop)&&(cardtop<=portbottom)&&(count<1)){
                card.addClass('spread');
                card.addClass('fadein');
                card.addClass('slidein');
                count=count + 1;
            }
    });
}

viewport.on('scroll resize', canYouSeeIt );
viewport.trigger('scroll');

/* Adding Skills */

var mylist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < mylist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  mylist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Create a new item when clicking on the add button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue !== '') {

    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
} 