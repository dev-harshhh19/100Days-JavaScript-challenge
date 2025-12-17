document.getElementById('postForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const body = document.getElementById('body').value;

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: title,
            body: body,
            userId: 1 // Assuming a user ID for the post
        })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('response').innerHTML = `
            <h2>Post Created Successfully!</h2>
            <p><strong>ID:</strong> ${data.id}</p>
            <p><strong>Title:</strong> ${data.title}</p>
            <p><strong>Body:</strong> ${data.body}</p>
        `;
        document.getElementById('postForm').reset(); // Clear the form
    })
    .catch(error => {
        document.getElementById('response').innerHTML = `
            <h2>Error creating post:</h2>
            <p>${error.message}</p>
        `;
    });
});
