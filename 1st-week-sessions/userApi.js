/*
  Follow step by step instructions to complete these 
  multiple challenges related to arrays.
*/

/*
  This require statement conveniently brings in the entire set of user profile
  data for you from a neighbouring file.
  
  You can imagine that this is your network api call delivering you data
*/
const profiles = require("./userData");

/*
  1.1 Check the type of data returned
  Expected output: [object Array] OR true
  hint: google how to find type of data structures in javascript
*/

console.log(profiles);

/*
  1.2 Log of the size of the data returned
  Expected output: "We just fetched [x] users" where x represents the actual number
*/

console.log(`We just fetched [${profiles.length}] users`);

/*
  1.3 Get the first five items from the data set
  Expected output: an array with the first 5 items
*/
function sliceFistFiveElementOfProfiles()
{
  return profiles.slice(0, 5);
}
console.log(`first ${sliceFistFiveElementOfProfiles().length} profiles => ${sliceFistFiveElementOfProfiles()}`);

/*
  1.4 Remove the first profile from this data while returning it at the same time
  Expected output: a) user by the name of dânia da mota and b) an array of profiles without dânia da mota 
*/
/*
let fname = "dânia"
let lName = "da mota"
function filterProfiles()
{
  var resultList = profiles.filter(function (el) {
    return (el.first === fname && el.last === lName);
});
return resultList;
}*/

var slicedProfiles = sliceFistFiveElementOfProfiles()

console.log(`\n \nusers by the name of dânia da mota \n ${JSON.stringify(slicedProfiles[0])} \n \n \n \n `);

slicedProfiles.shift()
console.log(`an array of profiles without dânia da mota  ${slicedProfiles}\n`);

/*
  1.5 Paginate the api results in sets of variable amounts
  Example: Paginate(profiles, 2, 5)
  Expected output: An array of profiles containing items sliced from page 2 to page 3 containing 5 items
*/

paginate(profiles,8,5)

function paginate(profiles,numOfpage,elemtnToSlice)
{

 if ((profiles.length % numOfpage) === 0){
  let pageOffSet = profiles.length/numOfpage;
  var pageList = [];
  var sliceFromEachPage = [];
  for (i = 0; i < numOfpage; i++) {
    var page = profiles.slice(0,pageOffSet);
    pageList[i] = page;
    sliceFromEachPage[i] = page.slice(0,elemtnToSlice)
  }
  console.log(`Page count ${page.length} \n Each Page => ${page}\n`)
  console.log(`Slice count ${sliceFromEachPage.length} \n slicedProfiles Of Each Page => ${sliceFromEachPage}\n`)
}
else
{
    console.log("invalue page division , could not devide array in equal pages");
}




} 

console.dir();
