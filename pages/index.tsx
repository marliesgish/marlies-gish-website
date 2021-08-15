import Head from "next/head";
import ConstraintWidth from "../components/layout/ConstraintWidth";
import Masthead from "../components/Masthead";
import PrimaryButton from "../components/buttons/PrimaryButton";
import PostPreview from "../components/PostPreview";
import SidePadding from "../components/SidePadding";
import Paragraph from "../components/type/Paragraph";
import theme from "../styles/theme";
import { getAllPosts } from "../lib/api";
import Widget from "../components/Widget";
import Main from "../components/layout/Main";
import breakpoints from "../styles/breakpoints";
import CONSTANTS from "../constants/constants";

const Index = ({ posts = [] }) => {
  return (
    <div className="container">
      <Head>
        <title>Home | {CONSTANTS.pageTitleSuffix}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="heading">
        <SidePadding>
          <ConstraintWidth
            maxWidth={CONSTANTS.pageWidth - 2 * CONSTANTS.sidePadding}
          >
            <ConstraintWidth maxWidth={560}>
              <Masthead
                center
                headline="A psychologist diving into the world of data science"
              />
            </ConstraintWidth>
            <Paragraph>
              Welcome to my journey towards becoming an experienced Data
              Scientist. In 2018 I completed my Research Master in Psychology
              where I discovered the joy of exploring, analyzing and predicting
              data. The journey really started mid 2019 when my curiosity led me
              to learning Python, SQL and Power BI.
            </Paragraph>
          </ConstraintWidth>
        </SidePadding>
      </div>

      <Main>
        <div className="grid">
          <div className="grid-item">
            <Widget
              iconSrc="/feather.svg"
              iconAlt="Icon of a feather pen"
              title="My latest writing"
              buttons={
                <PrimaryButton block small href="/blog">
                  See all blog posts
                </PrimaryButton>
              }
            >
              {posts.map((post) => {
                return (
                  <PostPreview
                    key={post.slug}
                    slug={post.slug}
                    title={post.title}
                    excerpt={post.excerpt}
                    date={post.date}
                    small
                  />
                );
              })}
            </Widget>
          </div>
          <Widget
            iconSrc="/woman.svg"
            iconAlt="Icon of a woman"
            title="About"
            buttons={
              <PrimaryButton block small href="/about">
                More about me
              </PrimaryButton>
            }
          >
            <Paragraph small>
              Who am I? Let me answer this question by first introducing myself.
              I am in my early thirties, trying to follow my dreams and live my
              life as best as possible.
            </Paragraph>
          </Widget>

          <Widget
            iconSrc="/paper-plane.svg"
            iconAlt="Icon of paper-plane"
            title="Contact me"
            buttons={
              <PrimaryButton block small href="mailto:me@marliesgish.com">
                Send me an email
              </PrimaryButton>
            }
          >
            <Paragraph small>
              Want to shoot me a question, or do you have any comments or
              advice?
            </Paragraph>
          </Widget>
        </div>
      </Main>
      <style jsx>{`
        .grid {
          display: grid;
          grid-template-columns: 1fr;
          row-gap: 30px;
        }

        @media (${breakpoints.tablet}) {
          .grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            column-gap: 30px;
          }

          .grid-item {
            grid-column-start: 1;
            grid-column-end: 3;
          }
        }

        .heading {
          background-color: ${theme.colors.primary};
          color: #fff;
          padding-bottom: 100px;
        }
      `}</style>
    </div>
  );
};

export async function getStaticProps() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { posts: allPosts.slice(0, 3) }, // only show first 3 posts on homepage
  };
}

export default Index;
