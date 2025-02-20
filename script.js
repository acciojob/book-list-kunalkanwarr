document.getElementById('submit').addEventListener('click', function() {
    // Get input values
    const title = document.getElementById('title').value.trim();
    const author = document.getElementById('author').value.trim();
    const isbn = document.getElementById('isbn').value.trim();

    // Validate inputs
    if (title === '' || author === '' || isbn === '') {
        alert('Please fill in all fields');
        return;
    }

    // Create a new row and cells
    const tableBody = document.getElementById('book-list');
    
    const newRow = document.createElement('tr');
    
    newRow.innerHTML = `
        <td>${title}</td>
        <td>${author}</td>
        <td>${isbn}</td>
        <td><button class="delete">Clear</button></td>
    `;

    // Append the new row to the table body
    tableBody.appendChild(newRow);

    // Clear input fields
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';

    // Add event listener for the clear button
    const clearButton = newRow.querySelector('.delete');
    
    clearButton.addEventListener('click', function() {
        tableBody.removeChild(newRow);
    });
});
