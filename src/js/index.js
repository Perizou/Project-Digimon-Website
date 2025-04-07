// Select all buttons and characters from the DOM
const buttons = document.querySelectorAll('.button');
const characters = document.querySelectorAll('.character');

/**
 * Removes the 'selected' class from the currently selected button
 * @param {HTMLElement} currentlySelected - The currently selected button
 */
function deselectButton(currentlySelected) {
  currentlySelected.classList.remove('selected');
}

/**
 * Adds the 'selected' class to the clicked button
 * @param {HTMLElement} button - The button to select
 */
function selectButton(button) {
  button.classList.add('selected');
}

/**
 * Removes the 'selected' class from the currently selected character
 */
function deselectCharacter() {
  const selectedCharacter = document.querySelector('.character.selected');
  if (selectedCharacter) {
    selectedCharacter.classList.remove('selected');
  }
}

/**
 * Adds the 'selected' class to the character corresponding to the button index
 * @param {number} index - Index of the character to select
 */
function selectCharacter(index) {
  characters[index].classList.add('selected');
}

/**
 * Handles the button click event
 * @param {HTMLElement} button - The clicked button
 * @param {number} index - Index of the clicked button
 */
function handleButtonClick(button, index) {
  const selectedButton = document.querySelector('.button.selected');
  
  // Update button selection
  deselectButton(selectedButton);
  selectButton(button);
  
  // Update character selection
  deselectCharacter();
  selectCharacter(index);
}

/**
 * Initializes event listeners for all buttons
 */
function initializeEventListeners() {
  buttons.forEach((button, index) => {
    button.addEventListener('click', () => handleButtonClick(button, index));
  });
}

// Start the application by setting up event listeners
initializeEventListeners();