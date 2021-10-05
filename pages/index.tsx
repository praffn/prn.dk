import Head from "next/head";
import Image from "next/image";
import prnClayImage from "../assets/prn-clay.png";

export default function Home() {
  return (
    <main>
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
              <span className="text-watermelon-500">digital experiences</span>
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
            I've been working freelance and at various Danish digital agencies.
            I'm currently working at{" "}
            <a href="https://signifly.com" className="underline">
              Signifly
            </a>
            .
          </p>
        </div>
      </div>
    </main>
  );
}
