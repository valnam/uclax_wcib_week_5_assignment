console.log('Hello from js/scripts.js!');

const customNameA = document.getElementById('customNameA');
const customNameB = document.getElementById('customNameB');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = 'It was a nice 135 degrees fahrenheit outside in the winter heat, so :insertx: went for a walk on the Santa Monica Pier to meet two friends. When they got to :inserty:, their friend Deborah decided she could not even, then :insertz:. Friend Bob saw the whole thing flash before his eyes, but was not surprised or bewildered because :insertx: weighs 300 pounds and was walking on edible stilts.';
let insertX = ['Salt Bae', 'Hannah Montana','Danny Devito','Winnie the Pooh'];
let insertY = ['the burrito stand','the swing sets','the rollercoaster','Third Street Promenade','Bay Cities'];
let insertZ = ['turned into a smore','requested an Uber crane','melted into bulletproof coffee'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);

  if(customNameA.value !== '') {
    const name = customNameA.value;
    newStory = newStory.replace('Bob',name);
  }

  if(customNameB.value !== '') {
    const name = customNameB.value;
    newStory = newStory.replace('Deborah',name);
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300*0.0714286) + ' stone';
    const temperature =  Math.round((94-32) * 5 / 9) + 'centigrade';
    newStory = newStory.replace('94 fahrenheit',temperature);
    newStory = newStory.replace('300 pounds',weight);
  }


  story.textContent = newStory;
  story.style.visibility = 'visible';
}
