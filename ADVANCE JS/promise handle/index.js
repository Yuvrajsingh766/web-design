// Function to simulate an asynchronous task that takes some time to complete
function performTask(taskName, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate an error for task2
            if (taskName === 'task2') {
                reject(new Error('Error in task2'));
            } else {
                resolve(`Task ${taskName} completed successfully.`);
            }
        }, time);
    });
}

// Using Promises to perform tasks
console.log("Starting the tasks...");
performTask('task1', 2000)
    .then((result) => {
        console.log(result); // Output: "Task task1 completed successfully."
        return performTask('task2', 1500); // Perform the second task after the first one is completed
    })
    .then((result) => {
        console.log(result); // This will not be executed in this example due to rejection in task2
    })
    .catch((error) => {
        console.error("Error:", error.message); // Output: "Error: Error in task2"
    });
