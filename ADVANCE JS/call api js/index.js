// Using the Fetch API to call the API
fetch('https://fakestoreapi.com/products')
    .then((response) => {
        // Check if the response status is OK (200)
        if (!response.ok) {
            throw new Error('Network response was not OK');
        }
        // Parse the response JSON data
        return response.json();
    })
    .then((data) => {
        // Process the data
        console.log(data);
    })
    .catch((error) => {
        // Handle errors
        console.error('Error:', error);
    });
