import { Facebook, Instagram, Twitch, Twitter, Youtube } from 'lucide-react';

const socialIcons = [
  { Icon: Twitch, label: "Twitch" },
  { Icon: Twitter, label: "Twitter" },
  { Icon: Youtube, label: "YouTube" },
  { Icon: Instagram, label: "Instagram" },
  { Icon: Facebook, label: "Facebook" },
];

export default function Socials() {
  return (
    <div className="w-full mt-[4vw] px-[3vw]">
      <div className="flex flex-wrap gap-[3vw] items-center justify-center">
        {socialIcons.map(({ Icon, label }) => (
          <SocialIcon key={label} Icon={Icon} label={label} />
        ))}
      </div>
    </div>
  );
}

function SocialIcon({ Icon, label }: { Icon: React.ElementType; label: string }) {
  return (
    <a
      href={`https://${label.toLowerCase()}.com/theweeknd`}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-zinc-800 p-[2vw] md:p-[1.1vw] rounded-lg transition-all duration-300 hover:bg-zinc-700 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-gray-300"
      aria-label={`Follow on ${label}`}
    >
      <Icon className="w-[6vw] h-[6vw] md:w-[3vw] md:h-[3vw] text-gray-400 hover:text-gray-200" />
    </a>
  );
}

