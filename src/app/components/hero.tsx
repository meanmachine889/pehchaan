import Image from "next/image";
import Socials from "./socials";

export default function Hero() {
  return (
    <div className="flex flex-col w-full items-center justify-center gap-[3vw] py-[8vh] px-[4vw]">
      <div className="flex flex-col items-center justify-center w-full">
        <h1 className="text-[12vw] md:text-[10vw] font-bold text-center leading-tight">
          THE WEEKND
        </h1>
        <p className="text-[4vw] md:text-[3vw] mt-[1vw] text-center">
          Singer & Producer
        </p>
      </div>
      <div className="relative mt-[4vw] md:mt-[2vw] rounded-2xl border-2 md:p-3 p-[2vw] flex items-center justify-center w-[90vw] md:w-[50vw] aspect-square overflow-hidden">
        <Image
          width={800}
          height={800}
          quality={100}
          src={
            "https://res.cloudinary.com/dnfv0h10u/image/upload/v1735840278/weeknd_vheybk.jpg"
          }
          alt="The Weeknd"
          className="rounded-xl"
        />
      </div>
      <div className="flex flex-col items-center justify-center min-w-[40vw]">
        <Socials />
      </div>
    </div>
  );
}
