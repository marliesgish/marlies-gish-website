import { useRouter } from "next/router";
import ErrorPage from "next/error";
// import Container from "../../components/container";
// import PostBody from "../../components/post-body";
// import Header from "../../components/header";
// import PostHeader from "../../components/post-header";
// import Layout from "../../components/layout";
import { getPostBySlug, getAllPosts } from "../../lib/api";
// import PostTitle from "../../components/post-title";
import Head from "next/head";
import markdownToHtml from "../../lib/markdownToHtml";
import PostHeader from "../../components/PostHeader";
import PostBody from "../../components/PostBody";
import Card from "../../components/Card";
import Main from "../../components/layout/Main";
import CONSTANTS from "../../constants/constants";

export default function Post({ post, morePosts, preview }) {
  const router = useRouter();

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Main>
      {router.isFallback ? (
        <div>Loading…</div>
      ) : (
        <Card>
          <article>
            <Head>
              <title>
                {post.title} | {CONSTANTS.pageTitleSuffix}
              </title>
              <meta property="og:image" content={post.ogImage.url} />
              <link href="/styles/prism.css" rel="stylesheet" />
              <script src="/js/prism.js"></script>
            </Head>

            <PostHeader title={post.title} date={post.date} />
            <PostBody content={post.content} />
          </article>
        </Card>
      )}
    </Main>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "content",
    "ogImage",
    "coverImage",
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
