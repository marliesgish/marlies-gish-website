import { AppProps } from "next/app";
import Header from "../components/Header";
import Footer from "../components/Footer";
import theme from "../styles/theme";
import breakpoints from "../styles/breakpoints";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
      <Footer />
      <style jsx global>{`
        @font-face {
          font-family: "Inter";
          font-style: normal;
          font-weight: 100;
          font-display: swap;
          src: url("/fonts/Inter-Thin.woff2?v=3.12") format("woff2"),
            url("/fonts/Inter-Thin.woff?v=3.12") format("woff");
        }
        @font-face {
          font-family: "Inter";
          font-style: italic;
          font-weight: 100;
          font-display: swap;
          src: url("/fonts/Inter-ThinItalic.woff2?v=3.12") format("woff2"),
            url("/fonts/Inter-ThinItalic.woff?v=3.12") format("woff");
        }

        @font-face {
          font-family: "Inter";
          font-style: normal;
          font-weight: 200;
          font-display: swap;
          src: url("/fonts/Inter-ExtraLight.woff2?v=3.12") format("woff2"),
            url("/fonts/Inter-ExtraLight.woff?v=3.12") format("woff");
        }
        @font-face {
          font-family: "Inter";
          font-style: italic;
          font-weight: 200;
          font-display: swap;
          src: url("/fonts/Inter-ExtraLightItalic.woff2?v=3.12") format("woff2"),
            url("/fonts/Inter-ExtraLightItalic.woff?v=3.12") format("woff");
        }

        @font-face {
          font-family: "Inter";
          font-style: normal;
          font-weight: 300;
          font-display: swap;
          src: url("/fonts/Inter-Light.woff2?v=3.12") format("woff2"),
            url("/fonts/Inter-Light.woff?v=3.12") format("woff");
        }
        @font-face {
          font-family: "Inter";
          font-style: italic;
          font-weight: 300;
          font-display: swap;
          src: url("/fonts/Inter-LightItalic.woff2?v=3.12") format("woff2"),
            url("/fonts/Inter-LightItalic.woff?v=3.12") format("woff");
        }

        @font-face {
          font-family: "Inter";
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: url("/fonts/Inter-Regular.woff2?v=3.12") format("woff2"),
            url("/fonts/Inter-Regular.woff?v=3.12") format("woff");
        }
        @font-face {
          font-family: "Inter";
          font-style: italic;
          font-weight: 400;
          font-display: swap;
          src: url("/fonts/Inter-Italic.woff2?v=3.12") format("woff2"),
            url("/fonts/Inter-Italic.woff?v=3.12") format("woff");
        }

        @font-face {
          font-family: "Inter";
          font-style: normal;
          font-weight: 500;
          font-display: swap;
          src: url("/fonts/Inter-Medium.woff2?v=3.12") format("woff2"),
            url("/fonts/Inter-Medium.woff?v=3.12") format("woff");
        }
        @font-face {
          font-family: "Inter";
          font-style: italic;
          font-weight: 500;
          font-display: swap;
          src: url("/fonts/Inter-MediumItalic.woff2?v=3.12") format("woff2"),
            url("/fonts/Inter-MediumItalic.woff?v=3.12") format("woff");
        }

        @font-face {
          font-family: "Inter";
          font-style: normal;
          font-weight: 600;
          font-display: swap;
          src: url("/fonts/Inter-SemiBold.woff2?v=3.12") format("woff2"),
            url("/fonts/Inter-SemiBold.woff?v=3.12") format("woff");
        }
        @font-face {
          font-family: "Inter";
          font-style: italic;
          font-weight: 600;
          font-display: swap;
          src: url("/fonts/Inter-SemiBoldItalic.woff2?v=3.12") format("woff2"),
            url("/fonts/Inter-SemiBoldItalic.woff?v=3.12") format("woff");
        }

        @font-face {
          font-family: "Inter";
          font-style: normal;
          font-weight: 700;
          font-display: swap;
          src: url("/fonts/Inter-Bold.woff2?v=3.12") format("woff2"),
            url("/fonts/Inter-Bold.woff?v=3.12") format("woff");
        }
        @font-face {
          font-family: "Inter";
          font-style: italic;
          font-weight: 700;
          font-display: swap;
          src: url("/fonts/Inter-BoldItalic.woff2?v=3.12") format("woff2"),
            url("/fonts/Inter-BoldItalic.woff?v=3.12") format("woff");
        }

        @font-face {
          font-family: "Inter";
          font-style: normal;
          font-weight: 800;
          font-display: swap;
          src: url("/fonts/Inter-ExtraBold.woff2?v=3.12") format("woff2"),
            url("/fonts/Inter-ExtraBold.woff?v=3.12") format("woff");
        }
        @font-face {
          font-family: "Inter";
          font-style: italic;
          font-weight: 800;
          font-display: swap;
          src: url("/fonts/Inter-ExtraBoldItalic.woff2?v=3.12") format("woff2"),
            url("/fonts/Inter-ExtraBoldItalic.woff?v=3.12") format("woff");
        }

        @font-face {
          font-family: "Inter";
          font-style: normal;
          font-weight: 900;
          font-display: swap;
          src: url("/fonts/Inter-Black.woff2?v=3.12") format("woff2"),
            url("/fonts/Inter-Black.woff?v=3.12") format("woff");
        }
        @font-face {
          font-family: "Inter";
          font-style: italic;
          font-weight: 900;
          font-display: swap;
          src: url("/fonts/Inter-BlackItalic.woff2?v=3.12") format("woff2"),
            url("/fonts/Inter-BlackItalic.woff?v=3.12") format("woff");
        }

        html {
          font-family: ${theme.fontFamily};
          font-size: 18px;
          line-height: 1.5;
          background-color: ${theme.colors.background};
          color: ${theme.colors.text};
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        html,
        body {
          padding: 0;
          margin: 0;
        }

        a {
          color: ${theme.colors.secondary};
          text-decoration: none;
          transition: color 0.2s;
          border-bottom: 1px solid ${theme.colors.secondary};
        }

        a:hover {
          color: ${theme.colors.secondary};
          border-bottom-color: transparent;
        }

        * {
          box-sizing: border-box;
        }

        p {
          line-height: 1.5;
          font-size: 18px;
        }

        img {
          width: 100%;
        }

        h2 {
          margin-top: 0;
          font-size: 22px;
          font-weight: 500;

          color: #323232;
        }

        @media (${breakpoints.laptop}) {
          h2 {
            padding-top: 2em;
            font-size: 26px;
          }
        }

        code {
          background-color: #f7f7f7;
          color: #690;
          font-size: 14px !important;
          padding: 2px 6px;
        }

        pre {
          background-color: green;
        }

        pre.language-py {
          border-radius: 10px;
          font-size: 16px;
        }

        :not(pre) > code[class*="language-"],
        pre[class*="language-"] {
          background: #f7f7f7;
        }

        blockquote {
          border-left: 3px solid ${theme.colors.primary};
          padding: 0;
          padding-left: 1em;
          margin-left: 0;
          font-style: italic;
        }

        blockquote > p {
          font-size: 26px;
        }
      `}</style>
    </div>
  );
};

export default MyApp;
