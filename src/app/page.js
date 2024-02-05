import Header from "./Components/Header";
import ImageBackgroundRemover from "./Components/ImageBackgroundRemover";

export default function Home() {
  return (
   <div className=" md:h-screen h-full md:w-screen w-full bg-gradient-radial from-pink-300 to-blue-400 overflow-hidden">
    <Header/>
      <div className="p-5 pt-40">
      <ImageBackgroundRemover/>
      </div>
    </div>
  )
}
