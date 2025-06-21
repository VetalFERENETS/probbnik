const openBtn   = document.getElementById('openSponsorModal');
const closeBtn  = document.getElementById('closeModal');
const overlay   = document.getElementById('overlay');
const modal     = document.getElementById('sponsorModal');
const nickname  = document.getElementById('nickname');
const statusDiv = document.getElementById('status');
const amountBtns = document.querySelectorAll('.amount-btn');

function showModal() {
  document.body.classList.add('modal-open');
  overlay.style.display = 'block';
  modal.style.display   = 'block';
}
function hideModal() {
  document.body.classList.remove('modal-open');
  overlay.style.display = 'none';
  modal.style.display   = 'none';
  statusDiv.textContent = '';
  nickname.value = '';
}

openBtn.addEventListener('click', showModal);
closeBtn.addEventListener('click', hideModal);
overlay.addEventListener('click', hideModal);

amountBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const nick = nickname.value.trim();
    const amount = btn.dataset.amount;
    if (!nick) {
      statusDiv.textContent = 'Please enter your nickname.';
      return;
    }
    statusDiv.textContent = 'Sending…';

    fetch('/sponsor', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({ nickname: nick, amount })
    })
    .then(r => r.json())
    .then(j => {
      if (j.success) {
        statusDiv.textContent = 'Thank you for sponsoring!';
        setTimeout(hideModal, 1500);
      } else {
        statusDiv.textContent = 'Error: ' + j.error;
      }
    })
    .catch(e => {
      statusDiv.textContent = 'Network error.';
    });
  });
});
