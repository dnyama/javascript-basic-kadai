const kadaiBtn = document.getElementById('btn');
const kadaiText = document.getElementById('text');

kadaiBtn.addEventListener('click',() => {
  kadaiText.textContent = 'ボタンをクリックしました';
});
