function main() {
  let obj = { id: 1, name: "rohit" };
  console.log(obj.name);
  console.log(obj["name"]);

  // Modify The Member
  obj.name = "rohit sharma"; // using dot operator
  obj["id"] = 11; // using bracket operator
  console.log(obj.name);

  // Add More Members
  obj.email = "rohit@gmail.com"; // using the dot operator
  obj["mobile"] = "122121"; // using the bracket operator

  console.log(obj);

  // Delete the member
  delete obj.id;

  console.log(obj);
}

main();
