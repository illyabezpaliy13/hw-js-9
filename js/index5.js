const subjectsStr = ["Біологія", "Математика", "Англ", "Музика", "Геометрія"];
let subjectsStrLenght;
let element;
for (let i = 0; i < subjectsStr.length; i += 1) {
  element = subjectsStr[i];
  console.log(element);
  subjectsStrLenght = element.length;
  if (subjectsStrLenght >= 5) {
    console.log(element);
  }
}