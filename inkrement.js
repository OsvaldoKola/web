  // Function to increase the number by a certain amount
  function increaseNumber(element, targetValue) {
    let currentNumber = parseInt(element.innerText);
    let targetNumber = parseInt(targetValue); // The target number you want to reach
    let increment = 1; // Increment value
    let delay = 50; // Delay between increments in milliseconds

    // Increase the number until it reaches the target
    if (currentNumber < targetNumber) {
        currentNumber += increment;
        element.innerText = currentNumber + "%";
        setTimeout(function () {
            increaseNumber(element, targetValue);
        }, delay);
    }
}

// Get all elements with the class and call the function for each
let elements = document.getElementsByClassName("increasingNumber");
for (let i = 0; i < elements.length; i++) {
    increaseNumber(elements[i], 85); // Set target value to 85 for each element
}

// Get all elements with the class and call the function for each
let elements1 = document.getElementsByClassName("increasingNumber2");
for (let i = 0; i < elements1.length; i++) {
    increaseNumber(elements1[i], 90); // Set target value to 85 for each element
}





const startCount = 0;
    const endCount = 1000;
    const duration = 2000; // in milliseconds
    const step = Math.ceil(duration / (endCount - startCount));

    let currentCount = startCount;
    const counterElements = document.querySelectorAll('.counter');

    function updateCount() {
        counterElements.forEach(counterElement => {
            counterElement.textContent = '+' + currentCount;
        });

        if (currentCount < endCount) {
            currentCount++;
            setTimeout(updateCount, step);
        }
    }

    updateCount();