import Image from "next/image";
import bg from "../../public/background/HomeBg.jpg"
import RenderModel from "@/components/RenderModel";
import Model from "@/components/models/homemodel";
import Navigation from "@/components/Navigation";


export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image src={bg} alt="BackgroundImage" fill className="w-full h-screen object-cover object-center " />
      <div className="w-full h-screen">
        <Navigation />
        <RenderModel className={"w-full h-full"}>
          <Model />
        </RenderModel>

      </div>
    </main>
  );
}
