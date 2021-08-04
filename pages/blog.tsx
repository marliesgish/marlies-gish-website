import Head from "next/head";
import Card from "../components/Card";
import ConstraintWidth from "../components/layout/ConstraintWidth";
import Main from "../components/layout/Main";
import Masthead from "../components/Masthead";
import PostPreview from "../components/PostPreview";
import H1 from "../components/type/H1";
import CONSTANTS from "../constants/constants";
import { getAllPosts } from "../lib/api";

export default function Blog({ allPosts }) {
  return (
    <>
      <Head>
        <title>Blog | | {CONSTANTS.pageTitleSuffix}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Card>
          <H1>Blog</H1>
          <div>
            {allPosts.map((post) => {
              return (
                <PostPreview
                  key={post.slug}
                  slug={post.slug}
                  title={post.title}
                  date={post.date}
                  excerpt={post.excerpt}
                />
              );
            })}
          </div>
        </Card>
      </Main>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
}
