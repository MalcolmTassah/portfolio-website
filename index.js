//navigation
const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
}

//email
const copyEmail = document.querySelector('#copy-email');

copyEmail.onclick = () => {
    navigator.clipboard.writeText('maltassah@gmail.com');
    copyEmail.innerText = 'Copied!';
};

//video player
const demoBtns = document.querySelectorAll('.demo-btn');
const demoModal = document.querySelector('#demo-modal');
const closeDemo = document.querySelector('#close-demo');
const demoVideo = document.querySelector('#demo-video');

demoBtns.forEach((button) => {
    button.onclick = () => {
        demoVideo.src = button.dataset.video;
        demoModal.classList.add('active');
    };
});

closeDemo.onclick = () => {
    closeModal();
};

demoModal.onclick = (event) => {
    if (event.target === demoModal) {
        closeModal();
    }
};

function closeModal() {
    demoModal.classList.remove('active');
    demoVideo.src = '';
}
