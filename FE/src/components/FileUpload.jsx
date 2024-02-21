import React from "react";
import Dropzone from "react-dropzone";
import axiosInstance from "../utils/axios";

const FileUpload = ({ onImageChange, images }) => {
  const handleDrop = async (files) => {
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
    } catch (error) {
      console.error(error);
    }
  };
  const handleDelete = (image) => {
    const currentIdx = images.indexOf(image);
    let newImages = [...images];
      newImages.splice(currentIdx, 1); // currentIndex 부터 1 까지 즉, currentIndex 하나만 지우게 된다. 
      // splice 는 원본을 복사한다 불변성이 지켜짐
    onImageChange(newImages);
  };
  return (
    <div className="flex gap-4 ">
      <Dropzone onDrop={handleDrop}>
        {({ getRootProps, getInputProps }) => (
          <section className="min-w-[300px] h-[300px] border flex items-center justify-center">
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <p className="text-3xl">+</p>
            </div>
          </section>
        )}
      </Dropzone>

      <div className="flex-grow h-[300px] border flex items-center justify-center overflow-x-scroll overflow-y-hidden">
        {images.map((image, index) => (
          <div onClick={() => handleDelete(image)} key={image}>
            <img
              className="min-w-[300px] h-[300px]"
              src={`${import.meta.env.VITE_SERVER_URL}/${image}`}
              alt={image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FileUpload;
