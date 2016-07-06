'use strict';

let f1 = (one, two, three) => {
  console.log(['F1', one, two, three].join('****'));
}

let f2 = f1.bind(null, 'blah from F2');

let f3 = f2.bind(null, 'somethingn else from F3');

module.exports = f3;