import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { formatPostDate } from "../helpers/helpers";

const PostPreview = ({ slug, title, excerpt, date }) => (
  <article className="article">
    <h3>
      <Link className="postTitle" href="/" rel="bookmark">
        title
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

      .postTitle {
        color: rgba(0, 0, 0, 0.8);
        /* font-size: 24px; */
        /* box-shadow: 0 2px 0 0 currentColor; */
        /* font-weight: 500; */
      }

      .date {
        color: rgba(0, 0, 0, 0.6);
        line-height: 1;
      }
    `}</style>
  </article>
);

PostPreview.propTypes = {
  siteTitle: PropTypes.string,
};

PostPreview.defaultProps = {
  siteTitle: ``,
};

export default PostPreview;
