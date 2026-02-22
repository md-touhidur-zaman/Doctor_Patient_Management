import { Calendar, Dot, MessageCircle, NotebookText, Pill } from "lucide-react";

export default function Feature() {
  return (
    <div className="container mx-auto space-y-10 px-4 lg:px-0">
      <div className="text-center space-y-3">
        <div className="flex justify-center text-white">
          <div className="bg-linear-to-r from-blue-800 to-cyan-500 flex items-center px-3 py-2 rounded-3xl">
            <Dot />
            Features
            <Dot />
          </div>
        </div>
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">
          Everything You Need to Manage Healthcare
        </h1>
        <p className="text-muted-foreground">Comprehensive tools designed for modern healthcare practices</p>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 ">

        <div className="border rounded-xl flex flex-col justify-center  px-5 py-10 space-y-3 hover:scale-105 hover:shadow-lg cursor-pointer transition-all duration-100 ease-linear">
            <div className="max-w-12 h-12 rounded-lg flex items-center justify-center border bg-cyan-100">
                <Calendar/>
            </div>
            <div>
                <h1 className="text-xl font-bold">Appointment Scheduling</h1>
                <p className="text-justify">Smart calendar system with automated reminders, conflict detection, and easy rescheduling for both doctors and patients.</p>
            </div>
        </div>

        <div className="border rounded-xl flex flex-col justify-center  px-5 py-10 space-y-3 hover:scale-105 hover:shadow-lg cursor-pointer transition-all duration-100 ease-linear">
            <div className="max-w-12 h-12 rounded-lg flex items-center justify-center border bg-cyan-100">
                <NotebookText/>
            </div>
            <div>
                <h1 className="text-xl font-bold">Medical Records</h1>
                <p className="text-justify">Secure, centralized electronic health records with instant access to patient history, lab results, and treatment plans.</p>
            </div>
        </div>
        <div className="border rounded-xl flex flex-col justify-center  px-5 py-10 space-y-3 hover:scale-105 hover:shadow-lg cursor-pointer transition-all duration-100 ease-linear">
            <div className="max-w-12 h-12 rounded-lg flex items-center justify-center border bg-cyan-100">
                <MessageCircle/>
            </div>
            <div>
                <h1 className="text-xl font-bold">Secure Messaging</h1>
                <p className="text-justify">HIPAA-compliant messaging platform for real-time communication between healthcare providers and patients.</p>
            </div>
        </div>
        <div className="border rounded-xl flex flex-col justify-center  px-5 py-10 space-y-3 hover:scale-105 hover:shadow-lg cursor-pointer transition-all duration-100 ease-linear">
            <div className="max-w-12 h-12 rounded-lg flex items-center justify-center border bg-cyan-100">
                <Pill/>
            </div>
            <div>
                <h1 className="text-xl font-bold">Prescription Management</h1>
                <p className="text-justify">Digital prescription system with e-prescribing, refill requests, and medication tracking for better patient care.</p>
            </div>
        </div>

      </div>
    </div>
  );
}
