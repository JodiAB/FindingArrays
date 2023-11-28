// Wait for the webpage to finish loading
document.addEventListener('DOMContentLoaded', function () {

    // Define a function to find unique numbers from two lists
    function difference(arr1, arr2) {
        // Combine the two lists into one
        const combinedList = arr1.concat(arr2);
        
        // Remove duplicate numbers to get unique numbers
        const uniqueNumbers = Array.from(new Set(combinedList)).map(Number);
        
        // Sort the unique numbers in ascending order
        const sortedUniqueNumbers = uniqueNumbers.sort((a, b) => a - b);
        
        // Return the sorted list of unique numbers
        return sortedUniqueNumbers;
    }

    // Add a click event listener to a button on the webpage
    document.getElementById('findUniqueButton').addEventListener('click', function () {
        // Get input values from two text boxes on the webpage
        const list1 = document.getElementById('array1').value.split(',').map(item => item.trim());
        const list2 = document.getElementById('array2').value.split(',').map(item => item.trim());

        // Find unique numbers from the input lists
        const uniqueNumbers = difference(list1, list2);

        // Display the result on the webpage
        document.getElementById('result').innerHTML = 'Unique Numbers (sorted): ' + uniqueNumbers.join(', ');
    });
});
