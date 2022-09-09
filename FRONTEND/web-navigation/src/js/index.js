import trapFocus from './inert.js';

const nav = document.querySelector('#mainnav');
const list = nav.querySelector('ul');
const burgerClone = document
	.querySelector('#burger-template')
	.content.cloneNode(true);
const button = burgerClone.querySelector('button');

// Toggle aria-expanded attribute
button.addEventListener('click', () => {
	// Get the aria-expanded attribute and check if the value is false
	// If it's "false", isOpen is true, otherwise it's false
	const isOpen = button.getAttribute('aria-expanded') === 'false';
	// Change the aria-expanded value accordingly
	button.setAttribute('aria-expanded', isOpen);
});

// Hide list on keydown Escape
nav.addEventListener('keydown', (event) => {
	if (event.code === 'Escape') {
		button.setAttribute('aria-expanded', false);
	}
});

// Add the button to the DOM
nav.insertBefore(burgerClone, list);

// Add the trapFocus function to the button
button.addEventListener('click', () => {
	// Makes sure that when we use the keyboard within the nav, we can't tab outside of it (focus trap)
	trapFocus(nav);
});
