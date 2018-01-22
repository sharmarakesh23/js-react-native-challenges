/* 
  Here are two profile objects 
  Your challenge is to write a function called `createConversationStarters`
  that will parse these objects and match up common attributes,

  The expected output of this function can be an array or string that says something like:
  `You both live in mumbai
  she is from the Marathi community as well`

  Hint: you can use using object access syntax, 
  basic conditionals and array manipulation to solve this challenge
*/

const me = {
  name: "Amit",
  neverMarried: true,
  age: 42,
  education: "Masters - Management",
  community: "Marathi",
  bio:
    "I am putting up this profile on behalf of my Son. He has done her Masters from Nagpur",
  location: {
    street: "6928 bahnhofstraße",
    city: "mumbai",
    state: "berlin",
    postcode: 47868
  },
  cuisine: "Veg"
};

const partner = {
  name: "Savita",
  neverMarried: true,
  age: 42,
  education: "Masters - Marketing",
  community: "Marathi",
  bio:
    "I am putting up this profile on behalf of my daughter. She has done her Masters from Nagpur",
  location: {
    street: "6928 bahnhofstraße",
    city: "mumbai",
    state: "berlin",
    postcode: 47868
  },
  cuisine: "Non-Veg"
};

/* 
  Start writing function here
*/


function createConversationStarters(currentUser, partner) {
  const starterList = [];

  if (isSameAge(currentUser, partner)) {
    starterList.push(`You bohth have same age  ${currentUser.age} years`);
  }

  starterList.push(isBothNeverMarried(currentUser, partner) ? 
  `You both are sigle`: 
  `You both are diversed`);

  if (isSameLocation(currentUser, partner)) {
    starterList.push(`You both live in ${currentUser.location.city}`);
  }

  if (isSameCommunity(currentUser, partner)) {
    starterList.push(`she is from the ${currentUser.community} community as well`);
  }
  
  return starterList;
}

function isSameLocation(myProfile, partnerProfile) {
  return myProfile.location.city === partnerProfile.location.city;
}

function isSameCommunity(myProfile, partnerProfile) {
  return myProfile.community === partnerProfile.community;
}

function isSameAge(myProfile, partnerProfile) {
  return myProfile.age === partnerProfile.age;
}

function isBothNeverMarried(myProfile, partnerProfile) {
  return myProfile.neverMarried === partnerProfile.neverMarried;
}


const list = createConversationStarters(me, partner);

list.forEach(element => {
  console.log(element);
});


