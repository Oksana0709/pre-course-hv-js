​const colors = ["синий", "черный", "зеленый", "красный", "желтый", "зеленый"];

function createColorString() {
    return return colors.filter(i => i === "черный" || i === "красный"|| i === "желтый" ).join('-')
}



console.log(createColorString());
