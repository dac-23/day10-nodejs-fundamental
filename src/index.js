function main() {
  // PURPOSE
  // JSON STRING TO OBJECT LITERALS
  let jsonStr = `{ "id": 1, "name": "rohit", "email": "rohit@gmail.com" }`;
  let obj = JSON.parse(jsonStr);

  console.log(typeof jsonStr);
  console.log(typeof obj);

  // OBJECT LITERAL TO JSON STRING
  let str1 = JSON.stringify(obj);
  console.log(str1);
}

main();
