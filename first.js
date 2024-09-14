document.getElementById('loveForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get values from the input fields
    const boyName = document.getElementById('boyName').value.trim().toLowerCase();
    const girlName = document.getElementById('girlName').value.trim().toLowerCase();

    // Define the names for matching
    const matchingBoyName = 'sandesh';
    const matchingGirlNames = ['shristi', 'anjali'];

    // Function to generate a random percentage
    function getRandomPercentage() {
        return Math.floor(Math.random() * 101); // Random percentage between 0 and 100
    }

    // Check if the names match the criteria
    if (boyName === matchingBoyName && matchingGirlNames.includes(girlName)) {
        alert('100 percent vayo party chaiyo');
    } else {
        const randomPercentage = getRandomPercentage();
        alert(`Love Percentage: ${randomPercentage}%`);
    }
});
