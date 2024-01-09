"use client";
import React, { useState } from "react";

export default function Resume() {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    } else {
      setFileName("");
    }
  };

  return (
    <div className="file-upload-wrapper">
      <input
        type="file"
        id="file-upload"
        className="file-upload-input"
        onChange={handleFileChange}
      />
      <label htmlFor="file-upload" className="file-upload-label">
        {fileName || "  Please select your resume for upload"}
      </label>
    </div>
  );
}
