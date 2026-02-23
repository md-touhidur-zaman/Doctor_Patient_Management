import { Button } from "@/components/ui/button";
import Image from "next/image";
import img1 from "../../../../public/assets/Images/Home/CallToAction.png"
export default function CallToAction() {
  return (
    <div className="bg-linear-to-l from-blue-800 to-cyan-500 container mx-auto px-4 lg:px-0 rounded-lg">
      <div className="flex flex-col md:flex-row justify-center items-center  min-h-60 mx-5">
        <div className="w-full md:w-1/2 text-white space-y-3">
          <h1 className="text-3xl font-bold ">Ready to Transform Your Healthcare Practice?</h1>
          <p className="">
            Join thousands of healthcare providers using our platform to deliver
            better patient care and streamline operations
          </p>
          <Button className="bg-linear-to-r from-blue-800 to-cyan-800 cursor-pointer">
            Sign Up For Free
          </Button>
        </div>

        <div className="w-full md:w-1/2">
        <div className="relative h-80">
            <Image src={img1} alt="" fill style={{objectFit: "contain"}}/>
        </div>
        
        </div>
      </div>
    </div>
  );
}
