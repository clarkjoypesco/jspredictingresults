var outsideExample = "First string";
function example() {
    var outsideExample = "Second string";
}
example(); // returns noting
console.log(outsideExample); // prints first string

var outsideExample = "First string";
function example() {
    outsideExample = "Second string";
}
example(); // change the value of outsideExxample to Second String
console.log(outsideExample); // prints Second String


var outsideExample = "First string";
if (true) {
    var outsideExample = "Second string"; // reinitialize outsideExample to Second String
    console.log(outsideExample); // prints Second String
}
console.log(outsideExample); // of course this should be Second String also


example1(); // true
function example1() {
    console.log("Ran the example");
}

example2(); // false
var example2 = function () {
    console.log("Ran the example");
}


var rel = getRelationship(2, 3);
console.log(rel);

function getRelationship(x, y) {

    if (x === y) {
        return 'x  = y';
    }
    else if (x > y) {
        return 'x is > y';
    }
    else if (x < y) {
        return 'x is  <   y'
    }
    else {
        return "Can't compare relationships because " + x + " and " + y + " [is]/[are] not [a] number[s].";
    }

}



var moonWalkers = [
    "Neil Armstrong",
    "Buzz Aldrin",
    "Pete Conrad",
    "Alan Bean",
    "Alan Shepard",
    "Edgar Mitchell",
    "David Scott",
    "James Irwin",
    "John Young",
    "Charles Duke",
    "Eugene Cernan",
    "Harrison Schmitt"
];

function alphabetizer(names) {
    newNames = [];

    for (name in names) {
        newName = names[name].split(" ");
        if (newName.length > 2) {
            newNames.push(newName[1] + ', ' + newName[0] + ' ' + newName[2]);
        } else {
            newNames.push(newName[1] + ', ' + newName[0]);
        }

    }

    return newNames
    // Your code goes here!
}

// Try logging your results to test your code!
console.log(alphabetizer(moonWalkers));




var psiResults;

// Iterate through the localizedRuleNames in ruleResults and 
// return an array of their strings.
function ruleList(results) {
    newResults = [];
    // Your code goes here!
    newResults.push(results.formattedResults.ruleResults.AvoidBadRequests.localizedRuleName);
    newResults.push(results.formattedResults.ruleResults.MinifyJavaScript.localizedRuleName);
    return newResults;
}

// Iterate through pageStats in the psiResults object and 
// return the total number of bytes to load the website.
function totalBytes(results) {
    // Your code goes here!
    newResults = [];
    // Your code goes here!
    newResults.push(results.pageStats.totalRequestBytes);
  
    return newResults;
}

// Below, you'll find a sample PS Insights JSON
// and two console.log statements to help you test your code!

psinsights = {
 "kind": "pagespeedonline#result",
 "id": "/speed/pagespeed",
 "responseCode": 200,
 "title": "PageSpeed Home",
 "score": 90,
 "pageStats": {
  "numberResources": 22,
  "numberHosts": 7,
  "totalRequestBytes": "2761",
  "numberStaticResources": 16,
  "htmlResponseBytes": "91981",
  "cssResponseBytes": "37728",
  "imageResponseBytes": "13909",
  "javascriptResponseBytes": "247214",
  "otherResponseBytes": "8804",
  "numberJsResources": 6,
  "numberCssResources": 2
 },
 "formattedResults": {
  "locale": "en_US",
  "ruleResults": {
    "AvoidBadRequests": {
      "localizedRuleName": "Avoid bad requests",
      "ruleImpact": 0.0
    },
    "MinifyJavaScript": {
      "localizedRuleName": "Minify JavaScript",
      "ruleImpact": 0.1417,
      "urlBlocks": [
      {
        "header": {
       "format": "Minifying the following JavaScript resources could reduce their size by $1 ($2% reduction).",
       "args": [
        {
         "type": "BYTES",
         "value": "1.3KiB"
        },
        {
         "type": "INT_LITERAL",
         "value": "0"
        }
       ]
        },
        "urls": [
        {
          "result": {
         "format": "Minifying $1 could save $2 ($3% reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://code.google.com/js/codesite_tail.pack.04102009.js"
          },
          {
           "type": "BYTES",
           "value": "717B"
          },
          {
           "type": "INT_LITERAL",
           "value": "1"
          }
         ]
        }
       },
       {
        "result": {
         "format": "Minifying $1 could save $2 ($3% reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://www.gmodules.com/ig/proxy?url\u003dhttp%3A%2F%2Fjqueryjs.googlecode.com%2Ffiles%2Fjquery-1.2.6.min.js"
          },
          {
           "type": "BYTES",
           "value": "258B"
          },
          {
           "type": "INT_LITERAL",
           "value": "0"
          }
         ]
        }
       }
      ]
     }
    ]
   },
   "SpriteImages": {
    "localizedRuleName": "Combine images into CSS sprites",
    "ruleImpact": 0.0
   }
  }
 },
 "version": {
  "major": 1,
  "minor": 11
 }
};

// Try logging the outputs below to test your code!
console.log(ruleList(psinsights));
console.log(totalBytes(psinsights));


































