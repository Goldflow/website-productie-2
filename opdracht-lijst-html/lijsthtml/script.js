// An unordered list that displays an object content.
let createList = function (arr) {
  let list = document.createElement("ul");

  for (let key in arr) {
    let listItem = document.createElement("li");
    listItem.textContent = `${key} -------- ${arr[key]}`;
    list.appendChild(listItem);
  }
  return list;
};

for (let person of actors) {
  let newHeader = document.createElement("h3");
  newHeader.textContent = person["name"];
  container.appendChild(newHeader);
  container.appendChild(createList(person));
}
