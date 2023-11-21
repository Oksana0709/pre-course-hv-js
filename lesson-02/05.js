
let passport = {
  name: "Petr",
  surname: "Petrov",
};

let copyObj = { ...passport };
copyObj.name = "Ivan";


console.log(passport.name)
console.log(copyObj.name)
