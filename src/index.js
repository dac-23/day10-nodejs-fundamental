function main() {
  let obj = { id: 1, name: "rohit" };
  console.log(obj.name);

  // Modify The Member
  obj.name = "rohit sharma";
  obj.id = 11;
  console.log(obj.name);

  // Add More Members
  obj.email = "rohit@gmail.com";
  obj.mobile = "122121";

  console.log(obj);

  // Delete the member
  delete obj.id;

  console.log(obj);
}

main();
