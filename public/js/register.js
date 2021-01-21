const owner = document.querySelector('.deliver-for-me')
const courier = document.querySelector('.courier')
const ownerForm = document.querySelector('.deliver-for-me-section')
const courierForm = document.querySelector('.courier-section')
const buttons = document.querySelector('.banner-section')

owner.addEventListener('click', () => {
    courierForm.style.display = "none"
    ownerForm.classList.add('come')
    buttons.style.display = "none"
})
courier.addEventListener('click', () => {
    ownerForm.style.display = "none"
    courierForm.classList.add('bring')
    buttons.style.display = "none"
})