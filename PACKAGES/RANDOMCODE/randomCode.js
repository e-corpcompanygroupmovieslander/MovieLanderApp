//RANDOM CODE GENERATOR
const RANDOMCODE=(inputValue,callback)=>{
    // Get the current date and time
    const currentDate = new Date();
    const currentDay = currentDate.getDate();
    const currentHour = currentDate.getHours();
    const currentMinute = currentDate.getMinutes();
    const currentSecond = currentDate.getSeconds();

    // Combine the input value with date and time
    const combinedString = inputValue + currentDay + currentHour + currentMinute + currentSecond;

    // Generate a random number based on the combined string
    const randomNumber = parseInt(combinedString, 36) % 10000; // Modulus 10,000 to limit to four digits

    // Format the random number as a four-digit string
    const randomCode = randomNumber.toString().padStart(4, '0');

    // Invoke the callback with the random code
    callback(randomCode);
}

export{RANDOMCODE}