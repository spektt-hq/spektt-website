import Image from "next/image";
import { FaStar } from "react-icons/fa6";

interface TestimonialProps {
  title: string;
  desc: string;
  username: string;
  storename: string;
  logo: string;
  index: number;
}

const testimonialsData = [
  {
    index: 1,
    title: "The Connector",
    desc: "I was only making things in my bubble prior to this forum. I'm currently working with writers from the UK, photographers from Nigeria, and animators from South Africa. I've never felt more inspired and connected. It's like an online studio full of enthusiastic, knowledgeable individuals. I always meet someone fresh to learn from or collaborate with whenever I log in. In this manner, creativity should feel shared and alive.",
    username: "Lina T",
    storename: "App Store",
    logo: "/app-store-icon.svg",
  },
  {
    index: 2,
    title: "The Challenger",
    desc: "The creative challenges I faced here compelled me to step outside my usual limits. I submitted a work that I nearly held back — and it ultimately won! That level of encouragement is uncommon. The topics are thrilling, the timelines keep me on track, and witnessing the creations of others inspires me every single time. It has allowed me to maintain consistency and reconnect with my competitive spirit in a truly positive manner.",
    username: "Jamal O",
    storename: "App Store",
    logo: "/app-store-icon.svg",
  },
  {
    index: 3,
    title: "The Feedback Seeker",
    desc: "Getting authentic critiques from fellow artists has greatly enhanced my growth. Beyond mere appreciation, the thoughtful analysis has truly shaped my artistic journey. Implementing suggested changes based on feedback has led to substantial improvements in my work. The artistic community provides both encouragement and candid assessment—exactly the combination I needed to elevate my craft beyond the limitations of environments where only positive reinforcement exists.",
    username: "Amara B",
    storename: "App Store",
    logo: "/app-store-icon.svg",
  },
  {
    index: 4,
    title: "The Earner",
    desc: "I never realized that I could make money from my spoken word performances until I became part of this platform. It provided me with a venue and resources to generate income. It was a turning point for me. I've secured performances, sold unique content, and even teamed up on compensated projects with other artists I encountered here. It's uplifting to understand that my art can be more than just a hobby—it can actually be a career.",
    username: "Chinedu K",
    storename: "Play Store",
    logo: "/play-store-icon.svg",
  },
  {
    index: 5,
    title: "The Uplifter",
    desc: "This goes beyond being just an app for real!, it's an awesome creative community. I've watched novices transform into talents, while experienced professionals support others. This is a true representation of creative culture. No matter your skill level, you feel acknowledged here. I've guided two emerging designers and gained insights from a cinematographer much younger than me. The atmosphere is vibrant and authentic — we cheer for each other's successes as if they were our own.",
    username: "Kemi A",
    storename: "Play Store",
    logo: "/play-store-icon.svg",
  },
  {
    index: 6,
    title: "The Global Voice",
    desc: "As an artist based in Nairobi, I never thought my artworks would connect with individuals in Europe and America. This platform made that a reality. It's genuinely an international community. I've sold prints abroad, engaged in worldwide collaborations, and even been highlighted in a digital gallery exhibition. For the first time, it feels like my art has traveled the globe.",
    username: "Samuel W",
    storename: "Play Store",
    logo: "/play-store-icon.svg",
  },
];

function Testimonials() {
  return (
    <div className="bg-white p-4">
      <div className="container">
        <p className="text-3xl font-bold text-[#030e22] my-10 text-center">
          What Cre8ives say about us!
        </p>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-2">
          {testimonialsData.map((testimonial) => (
            <Testimonial
              key={testimonial.index}
              index={testimonial.index}
              title={testimonial.title}
              desc={testimonial.desc}
              username={testimonial.username}
              storename={testimonial.storename}
              logo={testimonial.logo}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;

function Testimonial({
  index,
  title,
  desc,
  username,
  storename,
  logo,
}: TestimonialProps) {
  return (
    <div className="testimonial flex-col flex gap-4 text-left">
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }, (_, i) => (
          <FaStar key={i} className="size-5 text-yellow-500" />
        ))}
      </div>

      <div className="flex-col flex gap-2">
        <h2 className="text-xl font-medium text-[#030e22]">{title}</h2>
        <p className="text-gray-500 font-regular text-sm">{desc}</p>
      </div>
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm font-medium text-[#030e22] flex items-center hover:text-[#ff6600] transition-colors"
      >
        {username}・{storename}&nbsp;
        <Image src={logo} alt={username} width={20} height={20} />
      </a>
    </div>
  );
}
