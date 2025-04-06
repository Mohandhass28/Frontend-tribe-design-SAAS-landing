import Avatar from "@/components/Avatar";
import FeatureCard from "@/components/FeatureCard";
import Image from "next/image";
import Key from "@/components/Key";
import Tag from "@/components/Tag";
import avatar1 from "@/assets/images/avatar-ashwin-santiago.jpg";
import avatar2 from "@/assets/images/avatar-lula-meyers.jpg";
import avatar3 from "@/assets/images/avatar-florence-shaw.jpg";
import avatar4 from "@/assets/images/avatar-owen-garcia.jpg";

const features = [
  "Asset Library",
  "Code Preview",
  "Flow Mode",
  "Smart Sync",
  "Auto Layout",
  "Fast Search",
  "Smart Guides",
];

export default function Features() {
  return (
    <section className="py-24">
      <div className="container">
        <div className="flex justify-center">
          <Tag>Features</Tag>
        </div>
        <h2 className="text-6xl font-medium text-center mt-6 px-[2px] max-w-2xl mx-auto">
          Where power meets <span className="text-lime-400">simplicity</span>
        </h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-8">
          <FeatureCard
            className="md:col-span-2 lg:col-span-1 group"
            title="Real time collaboration"
            description="Work together seamlessly with conflict-free editing."
          >
            <div className="aspect-video flex items-center justify-center">
              <Avatar className="z-40">
                <Image src={avatar1} alt="avatar 1" className="rounded-full" />
              </Avatar>
              <Avatar className="-ml-6 border-indigo-500 z-30">
                <Image src={avatar2} alt="avatar 2" className="rounded-full" />
              </Avatar>
              <Avatar className="-ml-6 border-amber-500 z-20">
                <Image src={avatar3} alt="avatar 3" className="rounded-full" />
              </Avatar>
              <Avatar className="-ml-6 border-transparent group-hover:border-green-500 transition">
                <div className="size-full bg-neutral-700 rounded-full inline-flex items-center justify-center gap-1 relative">
                  <Image
                    src={avatar4}
                    alt="avatar 4"
                    className="absolute size-full rounded-full opacity-0 group-hover:opacity-100 transition"
                  />
                  {Array.from({ length: 3 }).map((_, index) => {
                    return (
                      <span
                        className="size-1.5 rounded-full bg-white inline-flex"
                        key={index}
                      ></span>
                    );
                  })}
                </div>
              </Avatar>
            </div>
          </FeatureCard>
          <FeatureCard
            className="md:col-span-2 lg:col-span-1 group"
            title="Interactive prototyping"
            description="Enhance your clients with prototypes the react to user actions."
          >
            <div className="aspect-video flex items-center justify-center">
              <p className="text-[1.9rem] font-extrabold text-white/20 group-hover:text-white/10 transition duration-500 text-center ">
                We&apos;ve achieved{" "}
                <span className="bg-gradient-to-r from-purple-400 block to-pink-400 bg-clip-text text-transparent relative">
                  <span className="">incredible</span>
                  <video
                    src="/assets/gif-incredible.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute bottom-full left-1/2 -translate-1/2 rounded-2xl shadow-xl opacity-0 pointer-none group-hover:opacity-100 transition duration-500"
                  />
                </span>{" "}
                growth this year.
              </p>
            </div>
          </FeatureCard>
          <FeatureCard
            className="md:col-span-2 md:col-start-2 lg:col-span-1 group "
            title="Keyboard quick actions"
            description="Powerful command to help you create designs more quickly."
          >
            <div className="aspect-video flex items-center justify-center gap-4">
              <Key className="w-28 outline-2 outline-offset-4 group-hover:outline-lime-400 outline-transparent transition duration-500 group-hover:translate-y-1">
                shift
              </Key>
              <Key className="outline-2 outline-offset-4 group-hover:outline-lime-400 outline-transparent transition duration-500 group-hover:translate-y-1 delay-150">
                alt
              </Key>
              <Key className="outline-2 outline-offset-4 group-hover:outline-lime-400 outline-transparent transition duration-500 group-hover:translate-y-1 delay-300">
                C
              </Key>
            </div>
          </FeatureCard>
        </div>
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          {features.map((feature) => (
            <div
              key={feature}
              className="bg-neutral-900 border border-white/10 inline-flex px-3 md:px-5 py-1.5 md:py-2 rounded-2xl gap-3 items-center text-[1rem] hover:scale-105 transition duration-500 group"
            >
              <span
                className="bg-lime-400 text-neutral-950 size-5 rounded-full inline-flex items-center justify-center
              group-hover:rotate-45 transition duration-500"
              >
                &#10038;
              </span>
              <span className="font-[550] md:text-lg">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
