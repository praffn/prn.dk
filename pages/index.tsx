import Head from "next/head";
import Image from "next/image";
import prnClayImage from "../assets/prn-clay.png";
import Sparkle from "../components/Sparkle";

export default function Home() {
  return (
    <>
      <Head>
        <title>Phillip Raffnsøe Nilsson</title>
        <meta
          name="description"
          content="Personal website for Phillip Raffnsøe Nilsson"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="border-b border-gray-300">
        <div className="flex flex-col md:flex-row items-center">
          <div className="mt-8 md:mt-0 flex-1 flex-shrink-0">
            <p className="font-display text-center max-w-xs md:max-w-none md:text-left text-4xl md:text-5xl lg:text-7xl">
              I’m Phillip.
              <br />I build{" "}
              <span className="text-watermelon-500">
                <Sparkle size={20} color="#FFA3AB">
                  digital
                </Sparkle>
                <Sparkle size={20} color="#FFA3AB">
                  experiences
                </Sparkle>
              </span>
            </p>
          </div>
          <div className="mt-8 md:mt-0 flex-1 flex-shrink-0">
            <div className="max-w-xs  md:max-w-lg m-auto text-[0px]">
              <Image
                placeholder="blur"
                src={prnClayImage}
                alt="Claylike cartoon 3D rendering of Phillip Raffnsøe Nilsson giving thumbs-up"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 sm:w-2/3 md:w-1/2 lg:w-1/3 mb-8">
        <div className="space-y-4">
          <p className="">
            I'm a full stack developer with 8 years of experience in helping
            companies and organizations build modern, performant, accessible and
            responsive websites and digital solutions.
          </p>
          <p>
            I've been working freelance and at various digital agencies and tech
            companies. I'm currently a senior software engineer at{" "}
            <a
              href="https://ageras.group/"
              className="underline"
              rel="nofollow"
            >
              Ageras Group
            </a>
            .
          </p>
        </div>
      </div>
    </>
  );
}
