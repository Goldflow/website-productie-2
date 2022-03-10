let objectVoorbeeld1 = { eigenSchap: "hallo", soort: "object 1" };
let objectVoorbeeld2 = { eigenSchap: "hi", soort: "object 2" };
let objectVoorbeeld3 = { eigenSchap: "hey", soort: "object 3" };
let lijstObjecten = [objectVoorbeeld1, objectVoorbeeld2, objectVoorbeeld3];
// print hier aantal elementen uit in je array
console.log(lijstObjecten.length);

// loop, die evenveel keer wordt uitgeprint als elementen in je lijst
// print het eerste element van de lijst uit
// pas de loop aan zodat je elk element 1 keer uitprint
for (let i = 0; i < lijstObjecten.length; i++) {
    objectPrinten(lijstObjecten[i]);
}

// schrijf een functie die elke eigenschap/property van je object zal uitprinten
// vb.
function objectPrinten(parameter) {
    console.log(parameter.eigenSchap + ' ' + parameter.soort);
}

// An unordered list that displays an object content.
function createList (lijst) {
  let unorderedList = document.createElement("ul");

  for (let parameter in lijst) {
    let listItem = document.createElement("li");
    listItem.textContent = objectPrinten(parameter);
    unorderedList.appendChild(listItem);
  }
  return unorderedList;
};

createList(lijstObjecten);