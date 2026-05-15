import Image from "next/image";
import Link from "next/link";

interface ServiceItemProps {
  img: string;
  id: number;
  desc: string;
  header: string;
}

const servicesData = [
  {
    id: 1,
    img: "/grow.svg",
    header: "Grow your career",
    desc: "Develop your craft and grow your creative impact",
  },
  {
    id: 2,
    img: "/sun.svg",
    header: "Showcase your craft",
    desc: "Put your work out there, get noticed, and refine your craft with insights from a supportive creative community.",
  },
  {
    id: 3,
    img: "/trophy.svg",
    header: "Contests",
    desc: "Put your talent to the test — join creative challenges, get your work seen worldwide, and earn cash prizes & other awesome rewards.",
  },
  {
    id: 4,
    img: "/battery.svg",
    header: "Collaborations",
    desc: "Build collaborations with the right people who appreciate your craft and supports your creativity",
  },
  {
    id: 5,
    img: "/search.svg",
    header: "Discover talent",
    desc: "The premier platform to discover extraordinary creative talent from across the globe.",
  },
  {
    id: 6,
    img: "/banknote.svg",
    header: "Earn",
    desc: "Transform your passion into profit — find work and get paid, right where you create",
  },
];

function Services() {
  return (
    <section className="bg-white p-4">
      <div className="container">
        <p className="text-3xl font-bold text-[#030e22] text-center">
          Our Services
        </p>

        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-2">
          {servicesData.map((service) => (
            <ServicesItem
              key={service.id}
              img={service.img}
              id={service.id}
              header={service.header}
              desc={service.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;

function ServicesItem({ img, id, desc, header }: ServiceItemProps) {
  return (
    <div className="service__info flex justify-center items-center flex-col py-20 px-7">
      <div className="icon">
        <Image src={img} alt={header} width={80} height={80} />
      </div>
      <div className="flex flex-col gap-4 my-5">
        <h3 className="font-bold text-[#030e22] text-2xl">{header}</h3>
        <p className="text-gray-500 font-regular">{desc}</p>
        <Link href="/about" className="font-bold text-[#030e22] hover:text-[#ff6600] transition-colors">
          Learn More
        </Link>
      </div>
    </div>
  );
}
