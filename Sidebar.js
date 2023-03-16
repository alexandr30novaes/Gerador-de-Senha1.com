
let passwordLength = 15

//input da senha
const inputEL = document.querySelector("#password")

//input checkbox-container
const upperCaseCheckeEL = document.querySelector("#uppercase-chek")
const numberCheckeEL = document.querySelector("#number-chek")
const symbolCheckeEL = document.querySelector("#symbol-chek")
const securityIndicatorBarEL = document.querySelector("#security-indicator-bar")

//Função gerando senha aleatoria, em um lupin.
function generatePassword() {

    //inputs Maiúscula, Numeros e Simbolos
    let chars = "abcdefghjklmnpqrstuvwxyz"
    const upperCaseChars = "ABCDEFGHJKLMNPQRSTUVWXYZ"
    const numberChars = "123456789"
    const symbolChars = "?!@&*()[]"

    if (upperCaseCheckeEL.checked) { //Condição do click
        chars += upperCaseChars
    }

    if (numberCheckeEL.checked) {
        chars += numberChars
    }

    if (symbolCheckeEL.checked) {
        chars += symbolChars
    }
    
    let password = ""
    
    for (let i = 0; i < passwordLength; i++) {
        const randomNumber = Math.floor(Math.random() * chars.length)
        password += chars.substring(randomNumber, randomNumber + 1)

    }
    //Adicionando a função de gerar senha no input. 
    inputEL.value = password

    calculateQuality()
};

//Função da barra security-indicator-bar
function calculateQuality() {
    //Dividindo o peso da barra entre os chebox-container, e a barra de tamanho 
    const percent = Math.round(
        (passwordLength / 32) * 25 + 
        (upperCaseCheckeEL.checked ? 15 : 0) +
        (numberCheckeEL.checked ? 25 : 0) +
        (symbolCheckeEL .checked ? 35 : 0)

    )

    console.log(percent)

    securityIndicatorBarEL.style.width = `${percent}%` /* Abrindo o style no js, e ajustando o valor p/ % */

    if (percent > 69) {
        securityIndicatorBarEL.classList.remove("critical")
        securityIndicatorBarEL.classList.remove("warning")
        securityIndicatorBarEL.classList.add("safe")
    } else if(percent > 50) {
        securityIndicatorBarEL.classList.remove("critical")
        securityIndicatorBarEL.classList.add("warning")
        securityIndicatorBarEL.classList.remove("safe")
    } else {
        securityIndicatorBarEL.classList.add("critical")
        securityIndicatorBarEL.classList.remove("warning")
        securityIndicatorBarEL.classList.remove("safe")
    }

    if (percent >= 100 ) { //arredondando o final da barra.
        securityIndicatorBarEL.classList.add("completed")
    } else {
        securityIndicatorBarEL.classList.remove("completed")

    }
}

//Formato de API dos navegadores
function copy () {
    navigator.clipboard.writeText(inputEL.value)
};

//Função do btn para copiar o testo do input
document.querySelector("#btn").addEventListener("click" , copy)
//Função de copiar o input do botão
document.querySelector("#copy1").addEventListener("click" , copy)

//Função do input RANGE.
const passwordLengthEL = document.querySelector("#password-length")
passwordLengthEL.addEventListener("input", function () {
    passwordLength = passwordLengthEL.value
    document.querySelector("#password-length-text") .innerText = passwordLength
    generatePassword()
});

upperCaseCheckeEL.addEventListener("click", generatePassword) //Função click do checkbox-container
numberCheckeEL.addEventListener("click", generatePassword)
symbolCheckeEL.addEventListener("click", generatePassword)

generatePassword()