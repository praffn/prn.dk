import Link from "next/link";

function Post({ post }: any) {
  const {
    link,
    module: { meta },
  } = post;

  return (
    <article>
      {/* <HeadPost meta={meta}/> */}
      <Link href={`/blog/${link}`}>
        <a>Read more</a>
      </Link>
    </article>
  );
}

export default Post;
