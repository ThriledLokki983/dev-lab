import trapFocus from './inert.js';

const switcher = document.querySelector('#theme-switcher');
const doc = document.firstElementChild;

switcher?.addEventListener('input', (e) => setTheme(e.target.value));

const setTheme = (theme) => doc.setAttribute('color-scheme', theme);

const nav = document.querySelector('#mainnav');
const list = nav.querySelector('ul');
const burgerClone = document
	.querySelector('#burger-template')
	.content.cloneNode(true);
const button = burgerClone.querySelector('button');

button.addEventListener('click', () => {
	const isOpen = button.getAttribute('aria-expanded') === 'false';
	button.setAttribute('aria-expanded', isOpen);
});

nav.addEventListener('keydown', (event) => {
	if (event.code === 'Escape') {
		button.setAttribute('aria-expanded', false);
	}
});

nav.insertBefore(burgerClone, list);

button.addEventListener('click', () => {
	trapFocus(nav);
});
