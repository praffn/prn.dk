import path from "path";
import { GetStaticPaths, GetStaticProps } from "next";
import {
  getAllPostSlugs,
  getPostContentFromSlug,
  PostFrontmatter,
} from "../../lib/posts";
import { bundleMDX } from "mdx-bundler";
import { getMDXComponent } from "mdx-bundler/client";
import { useEffect, useMemo, useState } from "react";
import Head from "next/head";
import { MDXStaticCodeSnippet } from "../../components/StaticCodeSnippet/StaticCodeSnippet";
import Playground from "../../components/Playground/Playground";

interface PostProps {
  code: string;
  frontmatter: PostFrontmatter;
}

const components = {
  pre: MDXStaticCodeSnippet,
};

export default function Post({ code, frontmatter }: PostProps) {
  const Component = useMemo(
    () =>
      getMDXComponent(code, {
        Playground,
      }),
    [code]
  );

  return (
    <>
      <Head>
        <title>{frontmatter.title}</title>
        {frontmatter.description ? (
          <meta name="description" content={frontmatter.description} />
        ) : null}
      </Head>
      <div>
        <h1>Heheh</h1>
        {Component ? <Component components={components} /> : null}
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = await getAllPostSlugs();

  return {
    paths: slugs.map((slug) => `/posts/${slug}`),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<PostProps> = async ({ params }) => {
  const { slug } = params!;

  const postContent = await getPostContentFromSlug(slug as string);
  const { code, frontmatter } = await bundleMDX(postContent, {
    cwd: path.join(process.cwd(), "posts"),
    globals: {
      playground: "Playground",
    },
  });

  return {
    props: {
      code,
      frontmatter: frontmatter as PostFrontmatter,
    },
  };
};
