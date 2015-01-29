/*
  Kerem Sevencan @keremciu

  ----------------
  Hello Everyone!
  - I loved Material Design and I developed the following polymer app without Canvas and Polymer.

  You can use Only CSS3 - Pure Javascript!

  I hope you like it :)

  http://www.polymer-project.org/samples/tutorial/finished/index.html

  You can follow me on twitter or dribbble: https://twitter.com/keremciu
  https://dribbble.com/keremciu

 */
window.onload = function() {
    var classname = document.getElementsByClassName("more");

    var clickFunction = function(e) {
        e.preventDefault();
        var parent = this.parentNode.parentNode;
        var sibling = parent.nextSibling.nextSibling;
        var className = sibling.className;
        if (className.match(/hidden/)) {
          sibling.className = "row";
        } else {
          sibling.className = "row hidden";
        }
    };

    for(var i=0;i<classname.length;i++){
        classname[i].addEventListener('click', clickFunction, false);
    }
}
