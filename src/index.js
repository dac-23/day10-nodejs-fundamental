function main() {
  let list = ["delhi", "calcutta"];

  // Modify the List :: Existing member
  list[0] = "New Delhi";
  list[1] = "Mumbai";

  // Add New Item in the list
  list.push("pune");
  list.push("nagpur");

  // Remove Item from the list
  list.pop();

  // Iterate all the element of list
  for (let item of list) {
    console.log(item);
  }
}

main();
