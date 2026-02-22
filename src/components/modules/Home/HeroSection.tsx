import { Asterisk, Grid2x2, Mails,  Sparkles } from "lucide-react";
import Image from "next/image";
import heroImage from "../../../../public/assets/Images/Home/Hero_Image.png";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import DemoVideoModal from "./DemoVideoModal";
export default function HeroSection() {
  return (
    <div className="bg-linear-to-b from-blue-800 to-cyan-500 min-h-175 w-full relative">
      <div className="absolute bottom-5 left-10 md:bottom-20 md:left-20 z-10">
        <Asterisk className="text-blue-500 animate-spin" size={40} />
      </div>
      <div className="absolute top-10 right-2 md:top-20 md:right-20 z-10">
        <Sparkles className="text-blue-500 animate-bounce" size={30} />
      </div>


      <div className="container mx-auto flex flex-col md:flex-row items-center px-4 lg:px-0 py-5 z-20 gap-10">
        <div className="w-full md:w-1/2 space-y-5 z-20">
          <div className=" w-fit space-y-3">  
            <h1 className="text-3xl md:text-5xl lg:text-7xl text-white font-bold">
              Discover Health: Find Your Trusted  {" "}
              <Mails className="w-20 h-12 rounded-2xl bg-cyan-100 text-blue-500 border  inline-block" size={10} />{" "}
              Doctors Today
            </h1>
            <p className="text-background/80">Streamline appointments, records, and communication between doctors and patients in one secure platform</p>
          </div>
          

          <div className="relative  ">
            <Input className="px-2 py-7 bg-white outline-0 border-0 rounded-3xl" placeholder="          Specialty"/>
            <Grid2x2 className="absolute top-5 left-3 " size={18}/>
            <Button variant={"outline"} className="absolute right-3 top-3 bg-linear-to-r from-blue-800 to-cyan-500 px-3 py-4 min-w-32 rounded-3xl text-white font-bold cursor-pointer text-md hover:bg-linear-to-r hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 ease-in-out hover:text-white">Search</Button>
          </div>

          <div className="flex gap-5">
            <Button className="text-blue-500 font-bold px-3 py-5 cursor-pointer" variant={"outline"}>Start Free Trail</Button>
            <DemoVideoModal/>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <div className="relative  h-125 md:h-175">
            <Image
              src={heroImage}
              alt="Doctor Avatar"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
