const btn = document.getElementById('btn');
const resetBtn = document.getElementById('resetBtn');
const mesaj = document.getElementById('mesaj');

btn.addEventListener('click', function () {
    mesaj.textContent = 'Ai apăsat butonul!';
});

resetBtn.addEventListener('click', function () {
    mesaj.textContent = 'Apasă pe buton.';
});
