
function isLeap(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0 && year % 400 === 0 || (year % 100 !== 0)) {
            return 'Leap year.';
        }
    }
    return 'Not leap year.'
}