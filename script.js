let entryCount = 0;

function countEntry() {
    const entryInput = document.getElementById('entry');
    const entryText = entryInput.value.trim();

    if (entryText !== '') {
        entryCount++;
        updateCountDisplay();
        entryInput.value = ''; // Clear the input field
    }
}

function updateCountDisplay() {
    const countDisplay = document.getElementById('entryCount');
    countDisplay.textContent = `Total Entries: ${entryCount}`;
}
