"use client";
import React, { useState } from "react";

export default function Resume({ resumeFile, setResumeFile }: any) {
  const handleFileChange = (event: any) => {
    setResumeFile(event.target.files[0]);
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
        {resumeFile?.name || "  Please select your resume for upload"}
      </label>
    </div>
  );
}
