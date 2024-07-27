

function clearField(){
    const user_date = document.getElementById('dob').value='';
    document.getElementById('result').textContent = "";
}
document.getElementById('ageForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the form from submitting

    // Get the date of birth from the input field
    const dob = new Date(document.getElementById('dob').value);
    const today = new Date();

    // Calculate the age in years, months, and days
    let age = today.getFullYear() - dob.getFullYear();
    let month = today.getMonth() - dob.getMonth();
    let day = today.getDate() - dob.getDate();

    // Adjust if birth date has not occurred yet in the current year
    if (month < 0 || (month === 0 && day < 0)) {
        age--;
        month += 12;
    }

    if (day < 0) {
        const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        day += prevMonth;
        month--;
    }

    // Display the result
    document.getElementById('result').textContent = 
        "You are " + age + " years, " + month + " months, and " + day + " days old.";
});
