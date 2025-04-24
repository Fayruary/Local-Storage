const form = document.getElementById('nameForm');
const nameInput = document.getElementById('nameInput');
const displayDiv = document.getElementById('displayName');
const deleteButton = document.getElementById('deleteButton');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const name = nameInput.value;
  localStorage.setItem('savedName', name);
  displaySavedName();
  nameInput.value = '';
});

deleteButton.addEventListener('click', function() {
  localStorage.removeItem('savedName');
  displaySavedName();
});

function displaySavedName() {
  const savedName = localStorage.getItem('savedName');
  if (savedName) {
    displayDiv.textContent = `Halo, ${savedName}!`;
    deleteButton.style.display = 'block';
  } else {
    displayDiv.textContent = 'Belum ada nama yang disimpan.';
    deleteButton.style.display = 'none';
  }
}

window.onload = function() {
  displaySavedName();
};