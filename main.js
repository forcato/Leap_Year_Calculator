/*  Here we need to check some division operators.
    If the input year is cleanly divisible by 4, 
    then is a leap year, but if not,
    isn`t a leap year.

    Right away, we check if the input year is cleanly divisible
    by 100. If isn`t, then it`s not a Leap Year.
    But if it is, then we need to check one last operation.

    Now the last step is to check if the input year is divisible
    by 400.

    If it`s cleanly divisible by 400, then it`s DEFINITELY a Leap Year.
    If not, then it`s definitely NOT a Leap Year.

*/
const button = document.getElementById('submitButton')
button.addEventListener('click', checkLeapYear)

function checkLeapYear() {
    const year = document.getElementById("year").value

    if (isNaN(year)) {
		document.getElementById("result").textContent = "Please enter a valid year.";
		return;
    }

	let leapYear = false;

	if (year % 4 == 0) {
		if (year % 100 == 0) {
			if (year % 400 == 0) {
				leapYear = true;
			}
		} else {
			leapYear = true;
		}
	}

	if (leapYear == true) {
		document.getElementById("result").textContent = year + " is a leap year!!!";
	} else {
		document.getElementById("result").textContent = year + " is not a leap year.";
	}
}
