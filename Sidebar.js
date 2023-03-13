let passwordLength = 16

//Função gerando senha aleatoria, em um lupin.
function generatePassword() {
    const chars = "abcdefghjklmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ123456789?!@&*()[]"

    let password = ""
    
    for (let i = 0; i < passwordLength; i++) {
        const randomNumber = Math.floor(Math.random() * chars.length)
        password += chars.substring(randomNumber, randomNumber + 1)

    }
    //Adicionando a função de gerar senha no input.
    const inputEL = document.querySelector("#password") 
    inputEL.value = password

    console.log(password)
};
//Função do input RANGE.
const passwordLengthEL = document.querySelector("#password-length")
passwordLengthEL.addEventListener("input", function () {
    passwordLength = passwordLengthEL.value
    console.log(passwordLength)
    generatePassword()
});

generatePassword()