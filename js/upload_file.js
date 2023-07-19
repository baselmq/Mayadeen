 // Get the upload file element
 const uploadFileElement = document.querySelector('.upload-file');
 const selectedFileElement = document.querySelector('#selected-file');

 // Add a click event listener to the upload file element
 uploadFileElement.addEventListener('click', function() {
   // Create an input element of type "file"
   const fileInput = document.createElement('input');
   fileInput.type = 'file';

   // Hide the file input
   fileInput.style.display = 'none';

   // Append the file input to the document body
   document.body.appendChild(fileInput);

   // Simulate a click on the file input element
   fileInput.click();

   // Add an event listener to handle the file selection
   fileInput.addEventListener('change', function() {
     // Retrieve the selected file
     const selectedFile = fileInput.files[0];

     // Display the selected file name in the frontend
     selectedFileElement.textContent = `${selectedFile.name}`;
     selectedFileElement.style.display = 'block';

     // Remove the file input element from the document body
     document.body.removeChild(fileInput);
   });
 });