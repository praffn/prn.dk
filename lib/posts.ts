import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";

const postDirectory = path.join(process.cwd(), "posts");

export interface PostFrontmatter {
  title: string;
  date: string;
  excerpt: string;
  description?: string;
}

export interface PostInfo extends PostFrontmatter {
  slug: string;
}

function slugFromFilename(filename: string): string {
  return filename.replace(/\d{4}-\d{2}-\d{2}-([^.]+).mdx/, "$1");
}

export async function getAllPostSlugs(): Promise<Array<string>> {
  const filenames = await fs.readdir(postDirectory);
  return filenames.map(slugFromFilename);
}

export async function getAllPosts(): Promise<Array<PostInfo>> {
  const filenames = await fs.readdir(postDirectory);

  const postPromises = filenames.map(async (filename) => {
    const slug = slugFromFilename(filename);
    const fullPath = path.join(postDirectory, filename);
    const fileContents = await fs.readFile(fullPath, "utf-8");
    const { data } = matter(fileContents);

    return {
      ...data,
      slug,
    } as unknown as PostInfo;
  });

  return await Promise.all(postPromises);
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
