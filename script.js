const background = document.getElementById('background');
const password = document.getElementById('password');

password.addEventListener('input', (e) => {
    const passwordText = e.target.value;
    const passwordLength = passwordText.length;
    const blurValue = 20 - passwordLength * 2;
    
    if (passwordLength < 10) {
        background.style.filter = `blur(${blurValue}px)`;
    } else {
        background.style.filter = 'blur(0px)';
    }
});