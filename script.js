"use strict";

const fiveDigitNumberInput = prompt('Enter 5 digit number');

if (fiveDigitNumberInput === null) {
    alert('Okay, bye');
} else if (
    !fiveDigitNumberInput.trim() ||
    isNaN(fiveDigitNumberInput) ||
    !Number.isInteger(+fiveDigitNumberInput)
) {
    alert('Error: invalid number');
} else {
    const num = Math.abs(+fiveDigitNumberInput);

    if (String(num).length === 5) {
        const spacedNumber = String(num).split('').join(' ');
        alert(`Result: ${spacedNumber}`);
    } else {
        alert('Number is not 5-digit');
    }
}