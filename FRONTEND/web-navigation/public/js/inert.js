const trapFocus = (element) => {
	const focusableEls = element.querySelectorAll(
		'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])'
	);

	const firstFocusableEl = focusableEls[0];
	const lastFocusableEl = focusableEls[focusableEls.length - 1];
	const KEYCODE_TAB = 9;

	element.addEventListener('keydown', (e) => {
		const isTabPressed = e.key === 'Tab' || e.keyCode === KEYCODE_TAB;

		if (!isTabPressed) {
			return;
		}

		if (e.shiftKey) {
			/* Shift + Tab*/ if (document.activeElement === firstFocusableEl) {
				lastFocusableEl.focus();
				e.preventDefault();
			}
		} /* Tab */ else {
			if (document.activeElement === lastFocusableEl) {
				firstFocusableEl.focus();
				e.preventDefault();
			}
		}
	});
};

export default trapFocus;
