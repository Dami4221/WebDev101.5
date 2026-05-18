// Grab the form controls and the summary display div
const nameInput = document.getElementById('form-name');
const roleSelect = document.getElementById('form-role');
const summaryDiv = document.getElementById('volunteer-summary');

function updateLiveSummary() {
  const userName = nameInput.value || "Volunteer";
  const selectedRole = roleSelect.value;

  const checkedRadio = document.querySelector('input[name="availability"]:checked');
  const availability = checkedRadio ? checkedRadio.value : "unspecified days";

  const checkedBoxes = document.querySelectorAll('input[name="interests"]:checked');
  const interestsArray = [];
  checkedBoxes.forEach(checkbox => {
    interestsArray.push(checkbox.value);
  });

  let interestsText = "no specific skills selected yet";
  if (interestsArray.length > 0) {
    interestsText = interestsArray.join(', ');
  }

  summaryDiv.textContent = `${userName} is interested in ${selectedRole} on ${availability}, with specific focus areas in: ${interestsText}.`;
}

nameInput.addEventListener('input', updateLiveSummary);
roleSelect.addEventListener('change', updateLiveSummary);

document.querySelector('.form').addEventListener('change', updateLiveSummary);
