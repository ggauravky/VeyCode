import { Button } from "@/components/ui/button";
import UserButton from "@/modules/auth/components/user-button";


export default function Home() {
   
  return (
    <div className=" z-20 flex flex-col items-center justify-start min-h-screen py-2 mt-10">
    <Button>
      Get Started
    </Button>
    <UserButton />
    </div>
  );
}
