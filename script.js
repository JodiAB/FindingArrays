document.addEventListener('DOMContentLoaded', function () {
    function difference(arr1, arr2) {
        const combinedArray = arr1.concat(arr2);
        const uniqueElementsSet = new Set(combinedArray);
        const sortedUniqueElements = Array.from(uniqueElementsSet).map(Number).sort((a, b) => a - b);
        return sortedUniqueElements;
    }

    document.getElementById('findUniqueButton').addEventListener('click', function () {
        const array1 = document.getElementById('array1').value.split(',').map(item => item.trim());
        const array2 = document.getElementById('array2').value.split(',').map(item => item.trim());

        const uniqueElements = difference(array1, array2);

        document.getElementById('result').innerHTML = 'Unique Elements (sorted): ' + uniqueElements.join(', ');
    });
});
