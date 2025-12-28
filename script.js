let text = document.getElementById('text');
let cl1 = document.getElementById('cl1');
let cl2 = document.getElementById('cl2');
let hl1 = document.getElementById('hl1');
window.addEventListener('scroll', () => {
    let value = window.scrollY;
    text.style.marginTop = value * 2.5 + 'px';
    cl1.style.left = value * -1 + 'px';
    cl2.style.right = value * -1 + 'px';
    cl1.style.top = value * -1 + 'px';
    cl2.style.top = value * -1 + 'px';
    hl1.style.marginTop = value * 1 + 'px';
})