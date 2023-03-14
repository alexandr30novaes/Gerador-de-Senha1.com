
let passwordLength = 16
//input da senha
const inputEL = document.querySelector("#password")

//Função gerando senha aleatoria, em um lupin.
function generatePassword() {
    const chars = "abcdefghjklmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ123456789?!@&*()[]"

    let password = ""
    
    for (let i = 0; i < passwordLength; i++) {
        const randomNumber = Math.floor(Math.random() * chars.length)
        password += chars.substring(randomNumber, randomNumber + 1)

    }
    //Adicionando a função de gerar senha no input. 
    inputEL.value = password
};
//Função do btn para copiar o testo do input
function copy () {
    navigator.clipboard.writeText(inputEL.value)
};
const copyButtonEL = document.querySelector("#btn")
copyButtonEL.addEventListener("click" , copy)

//Função do input RANGE.
const passwordLengthEL = document.querySelector("#password-length")
passwordLengthEL.addEventListener("input", function () {
    passwordLength = passwordLengthEL.value
    console.log(passwordLength)
    generatePassword()
});

generatePassword()