'use strict';
var pubg = prompt('do you like pubg').toLowerCase();

while (pubg != 'yes' && pubg != 'no' && pubg != 'y' && pubg != 'n') {
  pubg = prompt(
    'your answer should be yes or no (do you like pubg)'
  ).toLowerCase();
}
if (pubg === 'yes' || pubg === 'y') {
  alert('me too :)');
} else {
  alert('unfortunately i like it');
}
var age = prompt('are you younger then 25').toLowerCase();

while (age != 'yes' && age != 'no' && age != 'y' && age != 'n') {
  age = prompt(
    'your answer should be yes or no (are you younger then 25)'
  ).toLowerCase();
}
if (age === 'yes' || age === 'y') {
  alert('me too :)');
} else {
  alert('you are bigger then me');
}
var food = prompt('do you like fast food').toLowerCase();

while (food != 'yes' && food != 'no' && food != 'y' && food != 'n') {
  food = prompt(
    'your answer should be yes or no (do you like fast food)'
  ).toLowerCase();
}
if (food === 'yes' || food === 'y') {
  alert('me too :)');
} else {
  alert('unfortunately i like it');
}
var job = prompt('are you in computer field').toLowerCase();

while (job != 'yes' && job != 'no' && job != 'y' && job != 'n') {
  job = prompt(
    'your answer should be yes or no (are you in computer field)'
  ).toLowerCase();
}
if (job === 'yes' || job === 'y') {
  alert('me too :)');
} else {
  alert('good job, I am developer');
}
var read = prompt('do you like reading').toLowerCase();

while (read != 'yes' && read != 'no' && read != 'y' && read != 'n') {
  read = prompt(
    'your answer should be yes or no (do you like reading)'
  ).toLowerCase();
}
if (read === 'yes' || read === 'y') {
  alert('me too :)');
} else {
  alert('i like it its good you should try it');
}
