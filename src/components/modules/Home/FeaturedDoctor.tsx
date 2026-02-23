import { Calendar, Dot,  MapPin, Search, Star } from "lucide-react";
import doctor1 from "../../../../public/assets/Images/Home/doctor-1.jpg"
import doctor2 from "../../../../public/assets/Images/Home/doctor-2.jpg"
import doctor3 from "../../../../public/assets/Images/Home/doctor-3.jpg"
import doctor4 from "../../../../public/assets/Images/Home/doctor-4.jpg"
import Image from "next/image";
import { Button } from "@/components/ui/button";
export default function FeaturedDoctor() {
  return (
    <div className="container mx-auto space-y-10 px-4 lg:px-0">
      <div className="flex flex-col justify-center items-center space-y-5">
        <div className="flex justify-center text-white">
          <div className="bg-linear-to-r from-blue-800 to-cyan-500 flex items-center px-3 py-2 rounded-3xl">
            <Dot />
            Featured Doctors
            <Dot />
          </div>
        </div>
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">Our <span className="text-blue-500">Highlighted</span> Doctor</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 ">
        <div className="border rounded-t-lg space-y-5 relative shadow-md">
          <div className="absolute top-5 left-3 z-20">
            <div className="bg-orange-500 px-2 py-1 rounded-lg flex items-center gap-2 text-white">
              <Star/>
              5.0
            </div>
          </div>


            <div className="relative h-50 ">
                <Image className="rounded-t-lg" src={doctor1} alt="doctor-1" fill style={{objectFit: "cover"}}/>
            </div>

            <div className="flex justify-between items-center border-l-2 border-l-green-500 px-1">
                <p className="text-blue-500 font-bold">Neurologist</p>
                <p className="bg-green-200 text-green-500 px-1 rounded-md flex"><Dot/> Available</p>
            </div>

            <div className="p-2">
                <h1 className="text-xl font-bold">Dr Harold Bryant</h1>
                <div className="flex justify-between">
                    <h1 className="flex gap-1"><MapPin/> Dhaka, Bangladesh</h1>
                    <h1 className="flex gap-1 text-blue-500"><Dot/> 30 Min</h1>
                </div>
            </div>

            <hr />  

            <div className="flex items-center justify-between p-2">
                <div>
                    <h1 className="text-muted-foreground">Consultation Fee</h1>
                    <p className="text-orange-400 font-bold">$500</p>
                </div> 
                <div>
                    <div className="w-10 h-10  rounded-full flex justify-center items-center border border-blue-500">
                        <Calendar className="text-blue-500"/>
                    </div>
                </div>   
            </div>


        </div>

        <div className="border rounded-t-lg space-y-5 relative shadow-md">
          <div className="absolute top-5 left-3 z-20">
            <div className="bg-orange-500 px-2 py-1 rounded-lg flex items-center gap-2 text-white">
              <Star/>
              5.0
            </div>
          </div>


            <div className="relative h-50 ">
                <Image className="rounded-t-lg" src={doctor2} alt="doctor-1" fill style={{objectFit: "cover"}}/>
            </div>

            <div className="flex justify-between items-center border-l-2 border-l-green-500 px-1">
                <p className="text-blue-500 font-bold">Neurologist</p>
                <p className="bg-green-200 text-green-500 px-1 rounded-md flex"><Dot/> Available</p>
            </div>

            <div className="p-2">
                <h1 className="text-xl font-bold">Dr Harold Bryant</h1>
                <div className="flex justify-between">
                    <h1 className="flex gap-1"><MapPin/> Dhaka, Bangladesh</h1>
                    <h1 className="flex gap-1 text-blue-500"><Dot/> 30 Min</h1>
                </div>
            </div>

            <hr />  

            <div className="flex items-center justify-between p-2">
                <div>
                    <h1 className="text-muted-foreground">Consultation Fee</h1>
                    <p className="text-orange-400 font-bold">$500</p>
                </div> 
                <div>
                    <div className="w-10 h-10  rounded-full flex justify-center items-center border border-blue-500">
                        <Calendar className="text-blue-500"/>
                    </div>
                </div>   
            </div>


        </div>


        <div className="border rounded-t-lg space-y-5 relative shadow-md">
          <div className="absolute top-5 left-3 z-20">
            <div className="bg-orange-500 px-2 py-1 rounded-lg flex items-center gap-2 text-white">
              <Star/>
              5.0
            </div>
          </div>


            <div className="relative h-50 ">
                <Image className="rounded-t-lg" src={doctor3} alt="doctor-1" fill style={{objectFit: "cover"}}/>
            </div>

            <div className="flex justify-between items-center border-l-2 border-l-green-500 px-1">
                <p className="text-blue-500 font-bold">Neurologist</p>
                <p className="bg-green-200 text-green-500 px-1 rounded-md flex"><Dot/> Available</p>
            </div>

            <div className="p-2">
                <h1 className="text-xl font-bold">Dr Harold Bryant</h1>
                <div className="flex justify-between">
                    <h1 className="flex gap-1"><MapPin/> Dhaka, Bangladesh</h1>
                    <h1 className="flex gap-1 text-blue-500"><Dot/> 30 Min</h1>
                </div>
            </div>

            <hr />  

            <div className="flex items-center justify-between p-2">
                <div>
                    <h1 className="text-muted-foreground">Consultation Fee</h1>
                    <p className="text-orange-400 font-bold">$500</p>
                </div> 
                <div>
                    <div className="w-10 h-10  rounded-full flex justify-center items-center border border-blue-500">
                        <Calendar className="text-blue-500"/>
                    </div>
                </div>   
            </div>


        </div>

        <div className="border rounded-t-lg space-y-5 relative shadow-md">
          <div className="absolute top-5 left-3 z-20">
            <div className="bg-orange-500 px-2 py-1 rounded-lg flex items-center gap-2 text-white">
              <Star/>
              5.0
            </div>
          </div>


            <div className="relative h-50 ">
                <Image className="rounded-t-lg" src={doctor4} alt="doctor-1" fill style={{objectFit: "cover"}}/>
            </div>

            <div className="flex justify-between items-center border-l-2 border-l-green-500 px-1">
                <p className="text-blue-500 font-bold">Neurologist</p>
                <p className="bg-green-200 text-green-500 px-1 rounded-md flex"><Dot/> Available</p>
            </div>

            <div className="p-2">
                <h1 className="text-xl font-bold">Dr Harold Bryant</h1>
                <div className="flex justify-between">
                    <h1 className="flex gap-1"><MapPin/> Dhaka, Bangladesh</h1>
                    <h1 className="flex gap-1 text-blue-500"><Dot/> 30 Min</h1>
                </div>
            </div>

            <hr />  

            <div className="flex items-center justify-between p-2">
                <div>
                    <h1 className="text-muted-foreground">Consultation Fee</h1>
                    <p className="text-orange-400 font-bold">$500</p>
                </div> 
                <div>
                    <div className="w-10 h-10  rounded-full flex justify-center items-center border border-blue-500">
                        <Calendar className="text-blue-500"/>
                    </div>
                </div>   
            </div>


        </div>

      </div>

      <div className="text-center">
        <Button className="border cursor-pointer" variant={"outline"}><Search/> Find More Doctor</Button>
      </div>
    </div>
  );
}
