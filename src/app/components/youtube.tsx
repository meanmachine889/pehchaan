export default function Youtube() {
  return (
    <div className="rounded-xl bg-gradient-to-b from-zinc-900 to-black border-zinc-900 flex w-[95%] flex-col gap-9 md:gap-[3vw] p-[3vw] py-[10vw] md:py-[4vw]">
      <h2 className="text-[7vw] text-gray-300 md:text-[3vw] md:text-left text-center">
        Stream Timeless
      </h2>
      <div className="flex flex-col md:flex-row w-full gap-5 md:gap-[1vw] items-center justify-center">
        <YoutubeEmbed
          src="https://www.youtube.com/embed/SRVsesZamZw?si=4MNnQODoyIoyM8N2&modestbranding=1"
          title="The Weeknd - Timeless (Official Video)"
        />
        <YoutubeEmbed
          src="https://www.youtube.com/embed/5EpyN_6dqyk?si=ASqZYpUjViPpuOZn&modestbranding=1"
          title="The Weeknd - Another Timeless Track (Official Video)"
        />
      </div>
    </div>
  );
}

function YoutubeEmbed({ src, title }: { src: string; title: string }) {
  return (
    <div className="w-full flex aspect-video rounded-xl overflow-hidden">
      <iframe
        className="w-full h-full"
        src={src}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}
