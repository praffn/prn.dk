import { GetStaticPropsResult } from "next";
import Head from "next/head";
import Link from "next/link";
import { getAllTags, getRecentPosts, PostInfo } from "../lib/posts";

interface BlogProps {
  readonly recentPosts: ReadonlyArray<PostInfo>;
  readonly allTags: ReadonlyArray<string>;
}

function Blog({ recentPosts, allTags }: BlogProps) {
  return (
    <div className="mt-10 flex space-x-20">
      <Head>
        <title>Blog - Phillip Raffnsøe Nilsson</title>
      </Head>
      <div className="flex-1 space-y-24">
        {recentPosts.map((post) => (
          <article key={post.slug}>
            <h2 className="text-4xl font-display hover:text-watermelon-500 transition-colors">
              <Link href={`/posts/${post.slug}`}>
                <a className="outline-none focus-visible:bg-watermelon-100">
                  {post.title}
                </a>
              </Link>
            </h2>
            <p className="ml-1 mt-2 text-gray-400">
              Published on <time dateTime={post.date}>{post.prettyDate}</time>
            </p>
          </article>
        ))}
      </div>
      <div className="w-96">
        <p>Tags</p>
        <ul className="flex flex-wrap">
          {allTags.map((tag) => (
            <li key={tag}>
              <Link href={`/tag/${tag}`}>
                <a className="text-sm inline-block bg-watermelon-50 px-2 py-1 rounded mr-2 mb-2 hover:bg-watermelon-200 transition-colors">
                  {tag}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export async function getStaticProps(): Promise<
  GetStaticPropsResult<BlogProps>
> {
  const recentPosts = await getRecentPosts(10);
  const allTags = await getAllTags();
  return {
    props: {
      recentPosts,
      allTags,
    },
  };
}

export default Blog;
