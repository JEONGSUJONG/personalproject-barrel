import React, { useState } from "react";
import Dropzone from "react-dropzone";
import axiosInstance from "../utils/axios";
import { IoIosAttach } from "react-icons/io";
import { TiDocumentDelete } from "react-icons/ti";

const FileUpload = ({ onImageChange, images }) => {
  const [uploadedCount, setUploadedCount] = useState(images.length);
  const handleDrop = async (files) => {
    if (files.length > 4 - images.length) {
      alert("파일 개수는 최대 4개까지 허용됩니다.");
      return;
    }

    let formData = new FormData();

    const config = {
      header: { "content-type": "multipart/form-data" },
    };

    formData.append("file", files[0]);

    try {
      const response = await axiosInstance.post(
        "/products/image",
        formData,
        config
      );
      onImageChange([...images, response.data.fileName]);
      setUploadedCount((prevCount) => prevCount + 1);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = (image) => {
    const currentIndex = images.indexOf(image);
    let newImages = [...images];
    newImages.splice(currentIndex, 1);
    onImageChange(newImages);
    setUploadedCount((prevCount) => prevCount - 1);
  };

  return (
    <div className="flex mt-10">
      <div className="flex w-[15vw] h-[300px] border-black border-2 border-r-0 justify-center items-center">
        <Dropzone onDrop={handleDrop}>
          {({ getRootProps, getInputProps }) => (
            <section>
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <p className="text-6xl flex justify-center items-center">
                  <IoIosAttach />
                </p>
                <p className="mt-4 text-sm flex justify-center items-center">
                  ATTACHED FILE
                </p>
                <p className="text-sm flex justify-center items-center">
                  CLICK or D&D
                </p>
                <p className="text-center">
                  <span
                    className={`text-center ${
                      uploadedCount <= 4 ? "text-red-500" : ""
                    }`}
                  >
                    {uploadedCount}
                  </span>{" "}
                  / 4
                </p>
              </div>
            </section>
          )}
        </Dropzone>
      </div>
      <div className="w-[50vw] h-[300px] flex-grow flex items-center border-black border-2">
        {images.map((image) => (
          <div key={image} className="relative">
            <img
              className="w-[220px] h-[280px] ml-4"
              src={`${import.meta.env.VITE_SERVER_URL}/${image}`}
              alt={image}
            />
            <button
              onClick={() => handleDelete(image)}
              className="absolute top-0 right-0 text-red-400 text-4xl p-2 m-2"
            >
              <TiDocumentDelete />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FileUpload;
