// Learning about functional programming
const prepareTea = () => 'greenTea';

const getTea = (numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

const tea4TeamFCC = getTea(40);

// Understand terminology
const prepareGreenTea = () => 'greenTea';

const prepareBlackTea = () => 'blackTea';

const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);

console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);

// Understand the hazards of using imperative code
// tabs is an array of titles of each site open within the window
var Window = function(tabs) {
  this.tabs = tabs; // We keep a record of the array inside the object
};

// When you join two windows into one window
Window.prototype.join = function (otherWindow) {
  this.tabs = this.tabs.concat(otherWindow.tabs);
  return this;
};

// When you open a new tab at the end
Window.prototype.tabOpen = function (tab) {
  this.tabs.push('new tab'); // Let's open a new tab for now
  return this;
};

// When you close a tab
Window.prototype.tabClose = function (index) {
  var tabsBeforeIndex = this.tabs.splice(0, index); // Get the tabs before the tab
  var tabsAfterIndex = this.tabs.splice(1); // Get the tabs after the tab

  this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together
  return this;
 };

// Let's create three browser windows
var workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
var socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
var videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Entertainment sites

// Now perform the tab opening, closing, and other operations
var finalTabs = socialWindow
  .tabOpen() // Open a new tab for cat memes
  .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
  .join(workWindow.tabClose(1).tabOpen());
console.log(finalTabs.tabs);

// Avoid mutations and side effects using functional programming
var fixedValue = 4;

function incrementer () {
  return fixedValue + 1; //By using + 1 instead of ++ it doesn't change the original value
}

// Pass arguments to avoid external dependence in a function
var fixedValue = 4;

function incrementer (fixedValue) {
  return fixedValue + 1; 
}

// Refactor global variables out of functions
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

function add(newList, bookName) {
  return [...newList, bookName];
}

function remove (newList, bookName) {
  return newList.filter(book => book !== bookName);
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);

// Use the map method to extract data from an array
var ratings = [];
for(var i=0; i < watchList.length; i++){
  ratings.push({title: watchList[i]["Title"],  rating: watchList[i]["imdbRating"]});
}
// Can turn into this using map function
const ratings = watchList.map(item => ({
  title: item["Title"],
  rating: item["imdbRating"]
}));

// Implement map on a prototype
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  var newArray = [];
  this.forEach(a => newArray.push(callback(a)));
  return newArray;
};

var new_s = s.myMap(function(item) {
  return item * 2;
});

// Use the filter method to extract data from an array
var filteredList = watchList.map(item => {
  return {
    title: item.Title,
    rating: item.imdbRating
  };
})
.filter(item => {
  return parseFloat(item.rating) >= 8.0; 
});

// 