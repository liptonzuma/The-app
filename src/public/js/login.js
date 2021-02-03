const courierInstead = document.querySelector('.courierInstead')
const ownerInstead = document.querySelector('.ownerInstead')
const courierForm = document.querySelector('.courier')
const ownerForm = document.querySelector('.item-owner')

courierInstead.addEventListener('click', () => {
    event.preventDefault()
    courierForm.classList.add('right')
    ownerForm.classList.add('left')
})

ownerInstead.addEventListener('click', () => {
    event.preventDefault()
    courierForm.classList.remove('right')
    ownerForm.classList.remove('left')
})