import path from "path";
import { GetStaticPaths, GetStaticProps } from "next";
import {
  getAllPostSlugs,
  getPostContentFromSlug,
  parseFrontmatter,
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
        <article className="mt-16">
          <header className="text-center">
            <h1 className="font-display text-7xl">{frontmatter.title}</h1>
            <p className="mt-2">Published on {frontmatter.prettyDate}</p>
          </header>
          <main className="mx-auto mt-16 prose">
            {Component ? <Component components={components} /> : null}
          </main>
        </article>
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
      frontmatter: parseFrontmatter(frontmatter, slug as string),
    },
  };
};
