const submitButton = document.getElementById("submit-button");
const allInputs = [...document.getElementsByTagName("input")];

const formObj = {}

submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    allInputs.forEach(input => {
       // burda checbox komutuna bool değerler atıyoruz
        if (input.type === "checkbox") {
            formObj[input.name] = input.checked;
        } 
        else {
            formObj[input.name] = input.value;
        }
    });
    console.log(formObj)
    console.table(formObj);
})


