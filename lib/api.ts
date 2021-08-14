import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

//
// BLOG
//

const postsDirectory = join(process.cwd(), "_posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

type Post = {
  slug?: string;
  title?: string;
  excerpt?: string;
  coverImage?: string;
  date?: string;
  ogImage?: {
    url: string;
  };
  content?: string;
};

type Field =
  | "title"
  | "slug"
  | "content"
  | "excerpt"
  | "coverImage"
  | "date"
  | "ogImage";

export function getPostBySlug(slug, fields = []): Post {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  // console.log("fullPath", fullPath);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  // console.log("fileContents", fileContents);
  const { data, content } = matter(fileContents);
  // console.log("fileContents", fileContents);

  const items: Post = {};
  // Ensure only the minimal needed data is exposed
  fields.forEach((field: Field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }

    if (field === "content") {
      items[field] = content;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPosts(fields = []) {
  const slugs: string[] = getPostSlugs();

  // console.log("slugs", slugs);
  const posts = slugs
    .filter((s) => s !== ".DS_Store")
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}

//
// ABOUT
//

const aboutFile = join(process.cwd(), "_about/about.md");

export function getAbout() {
  const fileContents = fs.readFileSync(aboutFile, "utf8");
  const { content } = matter(fileContents);

  return content;
}
