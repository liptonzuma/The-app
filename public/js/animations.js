const icon = document.querySelector('.hamburger');
const change = document.querySelector('.icon')
const menu = document.querySelector('.nav-links')

icon.addEventListener('click', () => {
    menu.classList.toggle('hide')
    icon.classList.toggle('pos')
    console.log(change.className)
    changeIcons()
})

function changeIcons() {
    if (change.className.includes('fa-bars')) {
        change.classList.remove('fa-bars')
        change.classList.add('fa-times')
    } else {
        change.classList.add('fa-bars')
        change.classList.remove('fa-times')

    }
}