# Blocking and Non-Blocking Code

- Blocking Code - Sync
- Non-Blocking Code - Async

<img src="./assets/Screenshot 2025-02-26 185240.png"/>


- Jab pahle Promise nhi tha toh async code kaise likhte the aaj yahi samjhenge
- Create a simple Hello.txt file having something in it to understand


<img src="./assets/Screenshot 2025-02-26 185255.png"/>

<img src="./assets/Screenshot 2025-02-26 185314.png"/>

<img src="./assets/Screenshot 2025-02-26 185330.png"/>

<img src="./assets/Screenshot 2025-02-26 185350.png">


chat --
async/await works by transforming the code into a series of Promises behind the scene

### Can we get example when this can be used? Any specific business case ?

- For handling multiple API calls where the order matters.
- When you need to perform sequential asynchronous tasks without nesting.
- For simplifying error handling in async operations.
- When executing parallel tasks and waiting for all of them to complete




- An interviewr asked me this question whats the answer
Write a JavaScript function fetchWithTimeout(url, timeout) that fetches data from a given URL but only waits for the specified timeout duration (in milliseconds). If the response is received within the timeout, the function should return the data. Otherwise, it should return an error indicating that the request has timed out.


### sir can you see one explain of callback hell using .then

- Callback hell occurs when multiple .then() chains are nested

- making the code hard to read and maintain due to deep indentation


fetch('url1')
  .then(res1 => res1.json())
  .then(data1 => fetch('url2')
    .then(res2 => res2.json())
    .then(data2 => fetch('url3')
      .then(res3 => res3.json())

and so on…


1. Yes, the microtask queue existed even before promises. Promises just added more tasks to that queue

2. Callback hell is about nesting callbacks inside each other, which clutters the stack. The callbacks end up in the task queue to run once the current code finishes executing


function initializeCountdown() {
  var countdownElement = document.getElementById("timer");
  if (!countdownElement) return;

  var startTimestamp = new Date(countdownStartTime).getTime();
  var endTimestamp = new Date(countdownEndTime).getTime();
  var now = new Date().getTime();

  if (isNaN(startTimestamp) || isNaN(endTimestamp)) {
    countdownElement.innerHTML = "Invalid countdown date format!";
    return;
  }

  if (now < startTimestamp) {
    countdownElement.innerHTML = "Countdown starts soon!";
    return;
  }

  /**
   * Updates the countdown display
   */
  function updateCountdown() {
    var now = new Date().getTime();
    var timeLeft = endTimestamp - now;

    if (timeLeft <= 0) {
      countdownElement.innerHTML = "OFFER EXPIRED!";
      return;
    }

    document.getElementById('days').textContent = Math.floor(timeLeft / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
    document.getElementById('hours').textContent = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toS
