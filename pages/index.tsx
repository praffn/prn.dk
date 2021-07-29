import { GetStaticProps } from "next";
import Head from "next/head";
import { getRecentPosts, PostInfo } from "../lib/posts";
import Image from "next/image";
import prnClayImage from "../assets/prn-clay.png";

interface HomeProps {
  posts: Array<PostInfo>;
}

export default function Home({ posts }: HomeProps) {
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
        <div className="flex items-center">
          <div className="flex-1 flex-shrink-0">
            <p className="font-display text-7xl">
              I’m Phillip.
              <br />I build{" "}
              <span className="text-watermelon-500">digital experiences</span>
            </p>
          </div>
          <div className="flex-1 flex-shrink-0">
            <div className="max-w-lg m-auto text-[0px]">
              <Image src={prnClayImage} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const posts = await getRecentPosts(2);

  return {
    props: {
      posts,
    },
  };
};
