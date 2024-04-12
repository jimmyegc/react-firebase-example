import { useState } from "react"
import { uploadFile } from "../functions/uploadFile"

export const UploadFile = () => {
  const [image, setImage] = useState(null)

  const handleUpload = async (e) => {
    e.preventDefault()
    const file = e.target.archivo.files[0]
    const url = await uploadFile(file)
    console.log(url)
    setImage(url)
  }

  return (<>
    <h2>Upload File</h2>
    <form onSubmit={handleUpload}>
      <input type="file" name="archivo" id="archivo" />
      <button type="submit"
        className="bg-blue-500 p-2 rounded-xl text-white"
      >Upload</button>
    </form>
    <img src={image} alt="img"></img>
  </>)
}