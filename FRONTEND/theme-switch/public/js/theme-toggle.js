// This file should be loaded first before any css or body content
const storageKey = 'theme-preference';

// Get the current theme preference from local storage
const getColorPreference = () => {
	if (localStorage.getItem(storageKey))
		return localStorage.getItem(storageKey);
	else
		return window.matchMedia('(prefers-color-scheme: dark)').matches
			? 'dark'
			: 'light';
};

let theme = getColorPreference();

// Set the theme preference in local storage
const setPreference = () => {
	localStorage.setItem(storageKey, theme);
	reflectPreference();
};

//  A function to modify the document with the preferences
const reflectPreference = () => {
	document.firstElementChild.setAttribute('data-theme', theme);
	document.querySelector('#theme-toggle')?.setAttribute('aria-label', theme);
};

window.onload = () => {
	// set on load so screen readers can get the latest value on the button
	reflectPreference();

	// now this script can find and listen for clicks on the control
	document.querySelector('#theme-toggle').addEventListener('click', onCLick);
};

//  A function to handle the click event
const onCLick = () => {
	theme = theme === 'dark' ? 'light' : 'dark';

	setPreference();
};

// Synchronize with the system preference of the user
window
	.matchMedia('(prefers-color-scheme: dark)')
	.addEventListener('change', ({ matches: isDark }) => {
		theme = isDark ? 'dark' : 'light';
		setPreference();
	});
