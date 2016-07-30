var m      = require("mithril"),
    Reveal = require("reveal.js");

    // Presentation Slides.
    //slides = require("./js/slides");

// Global CSS output by Browserify via Modular CSS
require("./css/import-reveal.css");
require("./css/import-codemirror.css");


function configure(element, initialized) {
   if(initialized) return;

   Reveal.initialize({
     height: 800,
     width: 1280,
     transition: "fade",
   });
}

m.render(document.body, m("div", {class: "reveal", config: configure }, require("./js/slides.js")));

setInterval(m.redraw, 5000);
