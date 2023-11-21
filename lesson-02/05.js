
let passport = {
  name: "Petr",
  surename: "Petrov",
};

let copyObj = { ...passport };
copyObj.name = "Ivan";


console.log(passport);
console.log(copyObj);
