// Function to add a new field to the form
function addField(type, label, options = []) {
    const field = createField(type, label, options);
    document.getElementById('form-builder').appendChild(field);
}

// Event listener for add field button
document.getElementById('add-field').addEventListener('click', () => {
    const fieldType = document.getElementById('field-type').value;
    const fieldLabel = document.getElementById('field-label').value;
    addField(fieldType, fieldLabel);
});

// Event listener for export button
document.getElementById('export-btn').addEventListener('click', () => {
    const formFields = document.querySelectorAll('.form-field');
    const formData = [];
    formFields.forEach(field => {
        const label = field.querySelector('label').textContent;
        const fieldType = field.querySelector('input, select').type;
        const options = [];
        field.querySelectorAll('option').forEach(option => {
            options.push(option.textContent);
        });
        formData.push({ label, type: fieldType, options });
    });
    const jsonData = JSON.stringify(formData);

    // Create a blob from the JSON data
    const blob = new Blob([jsonData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    // Create a link element and trigger the download
    const a = document.createElement('a');
    a.href = url;
    a.download = 'form_data.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
});

// Event listener for import button
document.getElementById('import-btn').addEventListener('click', () => {
    const fileInput = document.getElementById('import-file');
    const file = fileInput.files[0];
    if (!file || file.type !== 'application/json') {
        alert('Please select a valid JSON file.');
        return;
    }
    const reader = new FileReader();
    reader.onload = function(event) {
        const jsonData = event.target.result;
        const formData = JSON.parse(jsonData);
        // Code to recreate form from imported data
    };
    reader.readAsText(file);
});
