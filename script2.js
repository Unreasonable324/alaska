const btn = document.querySelector('.submit')
const message = document.querySelector('.thanksMessage')
btn.addEventListener('click', function () {
    console.log(message);
    message.style.left = '0%'
    setTimeout(backMessage, 4000);
})

function backMessage() {
    message.style.left = '-30%'

}