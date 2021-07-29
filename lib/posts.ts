import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";

const postDirectory = path.join(process.cwd(), "posts");

export interface PostFrontmatter {
  title: string;
  date: string;
  prettyDate: string;
  excerpt: string;
  description?: string;
  tags?: ReadonlyArray<string>;
}

export interface PostInfo extends PostFrontmatter {
  slug: string;
}

function slugFromFilename(filename: string): string {
  return filename.replace(/\d{4}-\d{2}-\d{2}-([^.]+).mdx/, "$1");
}

export async function getAllPostSlugs(): Promise<ReadonlyArray<string>> {
  const filenames = await fs.readdir(postDirectory);
  return filenames.map(slugFromFilename);
}

function guardAgainstInvalidFrontmatter(data: any, postTitle: string) {
  const errors = [];
  if (!data.title) {
    errors.push("title");
  }
  if (!data.date || Number.isNaN(new Date(data.date).getTime())) {
    errors.push("date");
  }

  if (errors.length > 0) {
    throw new Error(
      `Errors in post '${postTitle}': missing or invalid ${errors.join(", ")}`
    );
  }
}

export function parseFrontmatter(
  data: any,
  postTitle: string
): PostFrontmatter {
  guardAgainstInvalidFrontmatter(data, postTitle);
  const date = new Date(data.date);
  const intl = new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
  });

  return {
    ...data,
    prettyDate: intl.format(date),
  } as unknown as PostFrontmatter;
}

export async function getAllPosts(): Promise<Array<PostInfo>> {
  const filenames = await fs.readdir(postDirectory);

  const postPromises = filenames.map(async (filename) => {
    const slug = slugFromFilename(filename);
    const fullPath = path.join(postDirectory, filename);
    const fileContents = await fs.readFile(fullPath, "utf-8");
    const { data } = matter(fileContents);

    const frontmatter = parseFrontmatter(data, fullPath);

    return {
      ...frontmatter,
      slug,
    };
  });

  return await Promise.all(postPromises);
}

export async function getAllTags(): Promise<ReadonlyArray<string>> {
  const allPosts = await getAllPosts();
  const tags = new Set<string>();
  for (const post of allPosts) {
    if (!post.tags || post.tags.length === 0) continue;
    for (const tag of post.tags) {
      tags.add(tag);
    }
  }

  return Array.from(tags);
}

export async function getAllPostsByTag(
  tag: string
): Promise<ReadonlyArray<PostInfo>> {
  const allPosts = await getAllPosts();
  return allPosts
    .filter((post) => {
      return post.tags && post.tags.includes(tag);
    })
    .sort((a, b) => {
      const ad = new Date(a.date);
      const bd = new Date(b.date);
      return ad < bd ? 1 : -1;
    });
}

export async function getRecentPosts(count = 10): Promise<Array<PostInfo>> {
  const allPosts = await getAllPosts();
  const sorted = allPosts.sort((a, b) => {
    const ad = new Date(a.date);
    const bd = new Date(b.date);
    return ad < bd ? 1 : -1;
  });

  return sorted.slice(0, count);
}

export async function getPostContentFromSlug(slug: string): Promise<string> {
  const testerRegex = new RegExp(`\\d{4}-\\d{2}-\\d{2}-${slug}.mdx`);
  const filenames = await fs.readdir(postDirectory);
  const filename = filenames.find((filename) => testerRegex.test(filename));
  if (!filename) {
    throw new Error(`No post with slug ${slug}`);
  }
  const fullPath = path.join(postDirectory, filename);
  const content = await fs.readFile(fullPath, "utf-8");

  return content;
}
