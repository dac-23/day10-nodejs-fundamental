function main() {
  // let list = [{}, {}, {}];
  let list = [
    { id: 1, name: "rohit" },
    { id: 2, name: "rahul" },
    { id: 3, name: "sanju" },
  ];

  // Access the members
  // lets print only rohit
  let rohitObj = list[0];
  console.log(rohitObj.name); // prefer
  console.log(list[0].name);
  console.log(list[0]["name"]);

  // Add new item
  let newItem = { id: 4, name: "raina" };
  list.push(newItem);

  let newItem1 = { id: 5, name: "dhoni" };
  list.push(newItem1);

  // Iterate all the element of list
  for (let item of list) {
    console.log(item.name);
  }
}

main();
