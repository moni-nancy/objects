//Question 1

function InstagramPost(authorHandle, content, imageLink, views, likes) {
  this.authorHandle = authorHandle;
  this.content = content;
  this.imageLink = imageLink;
  this.views = views;
  this.likes = likes;
}

//Question 2

const post1 = new InstagramPost('passionflix', 'based on the book by Amy Daws, movie premier at March 30', 'https://www.instagram.com/p/CpDRDtsL-lO/?utm_source=ig_web_copy_link', 1000, 200);

const post2 = new InstagramPost('interswitchdev', 'Hello Devs! Is this a myth or a fact? Can developers actually work in any organisation, or just technology fixated companies? Tag the Devs you know to respond as well.', 'https://www.instagram.com/p/CpCmOyyIUlI/?utm_source=ig_web_copy_link', 59, 6);

console.log(post1);
console.log(post2);

//Question 3

// A
function createPerson(name, age, location) {
  return {
    name: name,
    age: age,
    location: location
  };
}

function createJambScores(eng, govt, lit, crk) {
  return {
    ENG: eng,
    GOVT: govt,
    LIT: lit,
    CRK: crk
  };
}

const musa = {
  person: createPerson('Musa Dawodu', 19, 'Lekki, Lagos State'),
  jambScores: createJambScores(70, 85, 82, 94)
};


console.log(musa);

//Question 4
// using the Object.assign method
const originalObj = { m: 1, n: 2 };
const clonedObj = Object.assign({}, originalObj);


//using the spread operator
const originalObj = { m: 1, n: 2 };
const clonedObj = { ...originalObj };


//Question 5
const presidentialCandidates = {
   AAC: 'Omoyele Sowore',
   ACCORD: 'Christopher Imumolen',
   APC: 'Bola Ahmed Tinubu',
   LP: 'Peter Obi',
   NNPP: 'Rabiu Kwankwaso',
   PDP: 'Atiku Abubakar',
}

for (let key in presidentialCandidates) {
  console.log(`${presidentialCandidates[key]} is the presidential candidate of ${key}`);
}
//answer
//  Omoyele Sowore is the presidential candidate of AAC
//  Christopher Imumolen is the presidential candidate of ACCORD
//  Bola Ahmed Tinubu is the presidential candidate of APC
//  Peter Obi is the presidential candidate of LP
//  Rabiu Kwankwaso is the presidential candidate of NNPP
//  Atiku Abubakar is the presidential candidate of PDP

