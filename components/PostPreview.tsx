import React from "react";
import Link from "next/link";
import H3 from "./type/H3";
import DateFormatter from "./DateFormatter";
import Date from "./Date";
import Paragraph from "./type/Paragraph";

interface Props {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
}

const PostPreview: React.FC<Props> = ({ slug, title, excerpt, date }) => (
  <article className="article">
    <H3 style={{ marginBottom: "0.3em" }}>
      <Link as={`/blog/${slug}`} href="/blog/[slug]" passHref>
        <a className="title">{title}</a>
      </Link>
    </H3>
    <div className="date">
      <Date>
        Posted on <DateFormatter dateString={date} />
      </Date>
    </div>
    <div className="excerpt">
      <Paragraph>{excerpt}</Paragraph>
    </div>
    <style jsx>{`
      .article + .article {
        margin-top: 50px;
      }

      .title {
        text-decoration: underline;
        color: rgba(0, 0, 0, 0.8);
        font-weight: 500;
      }

      .title:hover {
        color: rgba(0, 0, 0, 1);
      }

      .date {
        margin-bottom: 7px;
      }

      .excerpt {
        margin-top: 0;
        margin-bottom: 0.5em;
      }
    `}</style>
  </article>
);

export default PostPreview;
