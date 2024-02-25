function saveFormDataToFile() {
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
    };

    const jsonData = JSON.stringify(formData);
    const blob = new Blob([jsonData], { type: 'application/json' });

    const a = document.createElement('a');
    const url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = 'formData.json';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
}
document.getElementById('submitButton').addEventListener('click', saveFormDataToFile);