
var nodeSmall = my$('node_small');
        nodeSmall.onmouseover = function () {
            // my$('er').className = 'erweima show';
            my$('er').className = my$('er').className.replace('hide', 'show'); 
        }


        nodeSmall.onmouseout = function () {
            // my$('er').className = 'erweima hide';
            my$('er').className = my$('er').className.replace('show', 'hide');
        }// JavaScript Document