// На вход подается 1 слово. Необходимо преобразовать слово в хештег. Добавить
// проверку на ввод текстовых значений
// hSСhOol -> #hschool
let str = `hSChOol`;

if (isNaN(str)) {
    console.log(`#` + str.toLowerCase().trim());
}else{
    console.log(`error`);
}