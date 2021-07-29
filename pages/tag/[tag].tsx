import {
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from "next";
import { getAllPostsByTag, getAllTags, PostInfo } from "../../lib/posts";

interface TagProps {
  tag: string;
  posts: ReadonlyArray<PostInfo>;
}

function Tag({ tag, posts }: TagProps) {
  return (
    <div>
      <h1>{tag}</h1>
      {posts.map((post) => (
        <div key={post.slug}>{post.title}</div>
      ))}
    </div>
  );
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  const tags = await getAllTags();

  return {
    paths: tags.map((tag) => `/tag/${tag}`),
    fallback: false,
  };
}

export async function getStaticProps(
  context: GetStaticPropsContext
): Promise<GetStaticPropsResult<TagProps>> {
  const tag = context.params!.tag as any as string;
  const posts = await getAllPostsByTag(tag);
  return {
    props: {
      tag,
      posts,
    },
  };
}

export default Tag;
