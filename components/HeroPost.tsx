import Link from "next/link";

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <section>
      <div className="">
        <div>
          <h3 className="">
            <Link as={`/blog/posts/${slug}`} href="/blog/posts/[slug]">
              <a>{title}</a>
            </Link>
          </h3>
          <div className="">{date}</div>
        </div>
      </div>
    </section>
  );
}
