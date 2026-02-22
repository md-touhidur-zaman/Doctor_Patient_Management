"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Play } from "lucide-react";
import { useState } from "react";

export default function DemoVideoModal() {
  const [open, setOpen] = useState(false);
  return (
    <Dialog>
      <DialogTrigger>
        <Button
          className="text-blue-500 font-bold px-3 py-5 bg-cyan-100 cursor-pointer"
          variant={"outline"}
          onClick={() => setOpen(true)}
        >
          <Play /> Watch Demo
        </Button>
      </DialogTrigger>
      <DialogContent className="min-w-[60%] min-h-60 container mx-auto">
        {open && (
          <video className="" controls autoPlay>
            <source src="/HeroVideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </DialogContent>
    </Dialog>
  );
}
