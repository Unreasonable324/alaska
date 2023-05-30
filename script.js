const buttons = document.querySelectorAll('.map-navigation')
const tabsItem = document.querySelectorAll('.map-image')
buttons.forEach(function (item) {
    item.addEventListener('click', function () {
        let currentBtn = item
        let tabId = currentBtn.getAttribute('data-tab')
        let currentTab = document.querySelector(tabId)
        if (!currentBtn.classList.contains('active')) {
            buttons.forEach(function (item) {
                item.classList.remove('active')
            })
            tabsItem.forEach(function (item) {
                item.classList.remove('tab_active')
            })
            currentBtn.classList.add('active')
            currentTab.classList.add('tab_active')
        }

    })
})
document.querySelector('.map-navigation').click()




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