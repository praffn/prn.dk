import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { useMemo } from "react";
import StaticCodeSnippet from "../components/StaticCodeSnippet/StaticCodeSnippet";
import { getRecentPosts, PostInfo } from "../lib/posts";

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
      <h1>prn</h1>
      <p>phillip@praffn.dk</p>
      <ul>
        <li>
          <a href="https://github.com/praffn">GitHub</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/praffn/">LinkedIn</a>
        </li>
      </ul>
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
