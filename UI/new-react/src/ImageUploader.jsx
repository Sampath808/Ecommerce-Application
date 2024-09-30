import React, { useState } from "react";

function ImageUploader() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append("file", selectedFile);

      const response = await fetch("http://localhost:8080/images/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const filename = selectedFile.name;
        setUploadedImage("http://localhost:8080/images/${filename}");
      } else {
        console.error("Failed to upload image");
      }
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload Image</button>
      {uploadedImage && (
        <div>
          <h3>Uploaded Image:</h3>
          <img
            src={uploadedImage}
            alt="Uploaded"
            style={{ maxWidth: "500px" }}
          />
        </div>
      )}
    </div>
  );
}

export default ImageUploader;
