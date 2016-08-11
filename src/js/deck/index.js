var  m = require("mithril"),
  code = require("../cmp/codemirror"),
  fragment = {class: "fragment"};


module.exports = [
  {
    view: function() {
      return m("section", {}, [
          m("h1", "The Prototype"),
          m("h2", "What is even happening right now?")
      ]);
    }
  },

  {
    view: function() {
      return m("section", {}, [
        m("section",   [
          m("h1", "Who am I?"),
          m("ul", [
            m("li", fragment, "Bradley Stafford"),
            m("li", fragment, "Front-end Engineer @ Amazon (AUI Team)"),
            m("li", fragment, "Code Jester"),
            m("li", fragment, "Nicolas Cage enthusiast"),
            m("li", fragment, "Non-sequitur list creator"),
            m("li", fragment, "Hats")
          ])
        ]),
      ]);
    }
  },

  {
    view: function() {
     return m("section", {}, [
      m("h1", "Let's talk about Prototypes"),
      m("h2", "What is a prototype?"),
      m("ul", [
        m("li", fragment, "Object allowing inheritance and reusability"),
        m("li", fragment, "gives basic, free functionality of the major types"),
        m("li", fragment, "Each type has its respective prototype + object")
      ]),
      m("h2", fragment, "If you come from an OO background..."),
      m("ul", [
        m("li", fragment, m("code", "Class Object extends Object.prototype"))
      ])
     ]);
    }
  },

  {
    view: function() {
     return m("section", {}, [
       m("h1", "Talking about code sucks."),
       m(code, {code: require("../examples/first-prototype-example")})
     ]);
   },

  },

  { // After demonstrating the object using a property not immediate to itself.
   view: function() {
     return m("section", {}, [
       m("h1", "Why does this work?"),
       m("h2", "Asking for a friend"),
       m("ul", [
         m("li", fragment, "The Prototype chain"),
         m("li", fragment, "A singly-linked linked-list"),
         m("li", fragment, "Each with member properties"),
         m("li", fragment, "Properties are immediately accessible to all objects of that type."),
         m("li", fragment, "Each type in javascript has access to its prototype chain")
       ])
     ]);
   }
  },

  { // Object with toBradley Example
   view: function() {
    return m("section", {}, [
      m("h1", "Talking about code sucks. (Pt. II)"),
      m(code, {code: require("../examples/prototype-chain-example") })
    ]);
   }
  },

  {
    view: function() {
      return m("section", [
        m("section", [
          m("h1", "It's not just basic types"),
          m("ul", [
            m("li", fragment, "Custom objects can have a prototype"),
            m("li", fragment, "more ideal than a million member properties"),
            m("li", fragment, "persistent data"),
            m("li", fragment, "easy to override for use-cases")
          ])
        ]),
        m("section", [
          m("h1", "Inside the Cage"),
          m(code, {code: require("../examples/nicolas-cage-example")})
        ])
      ]);
    }
  },

  {
    view: function() {
      return m("section", [
        m("section", [
          m("h1", "Prototype delegation checklist"),
          m("h2", fragment, "For the modern dingus (like the dude that's talking)"),
          m("p", fragment, "...He totally wrote that"),
          m("ol", [
            m("li", fragment, "Is the stuff I'm trying to access on the current object/structure?"),
            m("li", fragment, "If not, is there a prototype I can look at?"),
            m("li", fragment, "If yes, look at that object and see if it's there"),
            m("li", fragment, "If not, return to step 2")
          ]),
        ])
      ]);
    }
  },

  { // Ways to use the prototype
  view: function() {
      return m("section", [
        m("section", [
          m("h1", "Ways to use Prototypes"),
          m("ul", [
            m("li", fragment, "Delegation"),
            m("li", fragment, "Inheritance"),
            m("li", fragment, "Method borrowing"),
          ])
        ]),
        m("section", [
          m("h1", "Delegation"),
          m(code, {code: require("../examples/delegation-example")})
        ]),        
        m("section", [
          m("h1", "Inheritance"),
          m(code, {code: require("../examples/inheritance-example")})
        ]),
        m("section", [
          m("h1", "Method Borrowing"),
          m(code, {code: require("../examples/borrowing-example")})
        ])
      ]);
    }
  },

  { // Ways to misuse the prototype
    view: function() {
      return m("section", [
        m("section", [
          m("h1", "Ways to MISUSE Prototypes"),
          m("ul", [
            m("li", "This is like a blank check"),
            m("li", "full of different, shiny guns"),
            m("li", "...to shoot yourself in the foot")
          ])
        ])
      ]);
    }
  },

  {
    view: function() {
      return m("section", [
        m("section", [
          m("h1", "Funsies, not footguns"),
        ]),
        m("section", [
          m("h1", "Constructor Pattern"),
          m(code, {code: require("../examples/constructor-pattern-example")})
        ]),
        m("section", [
          m("h1", "Object.create()"),
          m(code, {code: require("../examples/object-create-example")})
        ])
      ]);
    }
  },

  { // Conclusion / Warning?
   view: function() {
     return m("section", [
       m("section", [
         m("h1", "Some takeaways"),
         m("h2", fragment, "AKA praise the sun he's almost finished"),
         m("ul", [
           m("li", fragment, "Prototypes are powerful"),
           m("li", fragment, "Prototypes are useful"),
           m("li", fragment, "Constructor pattern -> runtime prototype creation"),
           m("li", fragment, "Object.create -> compile-time prototype creation"),
           m("li", fragment, "Prototypes can be extensible, flexible, useful"),
           m("li", fragment, "All of these eyes on me burn")
         ])
       ])
     ]);
   }
 },

 { // Conclusion / Warning?
  view: function() {
    return m("section", [
      m("section", [
        m("h1", "Thanks for your time!")
      ])
    ]);
  }
 }


]
