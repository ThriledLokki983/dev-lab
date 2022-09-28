// This file should be loaded first before any css or body content
const storageKey = 'theme-preference';

const getColorPreference = () => {
	if (localStorage.getItem(storageKey))
		return localStorage.getItem(storageKey);
	else
		return window.matchMedia('(prefers-color-scheme: dark)').matches
			? 'dark'
			: 'light';
};

let theme = getColorPreference();

const setPreference = () => {
	localStorage.setItem(storageKey, theme);
	reflectPreference();
};

const reflectPreference = () => {
	document.firstElementChild.setAttribute('color-scheme', theme);
	document.querySelector('#theme-toggle')?.setAttribute('aria-label', theme);
};

window.onload = () => {
	reflectPreference();
	document.querySelector('#theme-toggle')?.addEventListener('click', onCLick);
};

const onCLick = () => {
	theme = theme === 'dark' ? 'light' : 'dark';
	setPreference();
};

window
	.matchMedia('(prefers-color-scheme: dark)')
	.addEventListener('change', ({ matches: isDark }) => {
		theme = isDark ? 'dark' : 'light';
		setPreference();
	});
