
//  Дан объект passport. Создай его копию и поменяй имя с "Petr" на "Ivan", и убедись 
// в консоли, что у объекта passport имя осталось "Petr", а у твоего нового объекта "Ivan".
// ❗Для того, чтобы проверить правильность данного задания должно быть выведено 2 console.log

let passport = {
  name: "Petr",
  surname: "Petrov",
};

let passport2 = { ...passport };

passport2 = {
  name: "Ivan",
  surname: "Petrov",
};

console.log(passport);
console.log(passport2);
