function generatePassword() {
    const chars = "abcdefghjklmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ123456789?!@&*()[]"

    let password = ""

    for (let i = 0; i < 8; i++) {
        const randomNumber = Math.floor(Math.random() * chars.length)
        password += chars.substring(randomNumber, randomNumber + 1)

    }
    const inputEL = document.querySelector("#password")
    inputEL.value = password

    console.log(password)
};

const passwordLengthEL = document.querySelector("#password-length")
passwordLengthEL.addEventListener("input", function () {
    const passwordLength = passwordLengthEL.value
    console.log(passwordLength)
});

generatePassword()