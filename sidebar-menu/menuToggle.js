const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.navigation');

menuToggle.onclick = () => {
    navigation.classList.toggle('open');
}


const listitems = document.querySelectorAll('.list-item');

listitems.forEach(item => {
    item.onclick = () => {
        listitems.forEach(item => item.classList.remove('active'));
        item.classList.add('active');
    }
});