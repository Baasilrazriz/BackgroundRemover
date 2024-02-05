"use client"
// components/ImageBackgroundRemover.js
import React, { useState } from 'react';
import axios from 'axios';
import FormData from 'form-data';

const ImageBackgroundRemover = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [image, setImage] = useState(null);


  const handleImageChange = async(event) => {
    const file = event.target.files[0];
  await  setImage(URL.createObjectURL(file))
    if (file) {
      const formData = new FormData();
      formData.append('size', 'auto');
      formData.append('image_file', file);

      axios({
        method: 'post',
        url: 'https://api.remove.bg/v1.0/removebg',
        data: formData,
        responseType: 'arraybuffer',
        headers: {
          
          'X-Api-Key': 'd4T3aNxzpceGqLY3TMaKDGe8',
        },
        encoding: null,
      })
        .then((response) => {
          if (response.status !== 200) {
            console.error('Error:', response.status, response.statusText);
            return;
          }
          const imageUrl = URL.createObjectURL(new Blob([response.data]));
          setSelectedImage(imageUrl);
        })
        .catch((error) => {
          console.error('Request failed:', error);
        });
    }
  };

  return (
 <div className='h-full w-full flex md:flex-col flex-row justify-center '>
       <div className="mt-8  flex md:flex-row flex-col justify-center  gap-10 ">

<input
  type="file"
  accept="image/*"
  onChange={handleImageChange}
  className="hidden"
  id="imageInput"
/>
<label htmlFor="imageInput" className="cursor-pointer">
  <div className="border-dashed border-2 border-gray-300 h-96 w-96 rounded-xl flex justify-center items-center p-2">
    {image ? (
     <div className='h-full w-full overflow-hidden rounded-xl'>
         <img src={image} alt="Selected" className="h-full w-full object-fill" />
        </div>


    ) : (
      <p className="text-gray-500">Select an image</p>
    )}
  </div>
</label>


<div className='w-32 hidden md:block'>

<img className='h-full w-full object-fill' src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNC4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cG9seWdvbiBmaWxsPSIjNkU4M0I3IiBwb2ludHM9IjUwMiwyNTYgMzAyLDEwNiAzMDIsMTg2IDE0NiwxODYgMTQ2LDMyNiAzMDIsMzI2IDMwMiw0MDYgCQkiLz4NCgk8L2c+DQoJPGc+DQoJCTxyZWN0IHg9Ijc4IiB5PSIxODYiIGZpbGw9IiM2RTgzQjciIHdpZHRoPSI0MCIgaGVpZ2h0PSIxNDAiLz4NCgk8L2c+DQoJPGc+DQoJCTxyZWN0IHg9IjEwIiB5PSIxODYiIGZpbGw9IiM2RTgzQjciIHdpZHRoPSI0MCIgaGVpZ2h0PSIxNDAiLz4NCgk8L2c+DQo8L2c+DQo8L3N2Zz4NCg==" alt="" />
</div>
<div className='border-dashed border-2 border-gray-300 h-96 w-96 rounded-xl overflow p-2'>

{selectedImage && (

<div className='h-full w-full overflow-hidden rounded-xl'>
<img src={selectedImage} alt="Removed Background" className="h-full w-full object-fill" />
</div>

)}
</div>
</div>
 </div>
  );
};

export default ImageBackgroundRemover;
