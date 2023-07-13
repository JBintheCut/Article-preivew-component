const shareModal = document.querySelector('#modal')
const shareButton = document.querySelector('#share')

shareButton.addEventListener('click', ()=> {
    openModal()
})

function openModal() {
    shareModal.classList.toggle('active')
}