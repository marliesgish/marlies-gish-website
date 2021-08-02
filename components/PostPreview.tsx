import React from "react";
import Link from "next/link";
import { formatPostDate } from "../helpers/helpers";

interface Props {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
}

const PostPreview: React.FC<Props> = ({ slug, title, excerpt, date }) => (
  <article className="article">
    <h3>
      <Link href="/" passHref>
        <a className="post-title">title</a>
      </Link>
    </h3>
    <p
      style={{ marginBottom: 5 }}
      dangerouslySetInnerHTML={{ __html: excerpt }}
    />
    <div className="date">
      <small style={{ fontSize: 14, opacity: 0.5, lineHeight: 1 }}>
        <time dateTime={date}>{formatPostDate(date)}</time>
      </small>
    </div>
    <style jsx>{`
      .article + .article {
        margin-top: 50px;
      }

      .post-title {
        color: rgba(0, 0, 0, 0.8);
      }

      .date {
        color: rgba(0, 0, 0, 0.6);
        line-height: 1;
      }
    `}</style>
  </article>
);

export default PostPreview;
