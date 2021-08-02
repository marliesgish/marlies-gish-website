import React from "react";
import ConstraintWidth from "./layout/ConstraintWidth";
import SidePadding from "./SidePadding";
import theme from "../styles/theme";

interface Props {
  href: string;
  children?: React.ReactNode;
  type: "dark" | "light";
}

const Footer: React.FC<Props> = () => {
  return (
    <footer className="footer">
      <SidePadding>
        <ConstraintWidth maxWidth={820}>
          <div
            style={{
              height: 80,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              color: "#949494",
            }}
          >
            <div>
              <div className="social-links-offset">
                <a
                  href="https://twitter.com/marliesgish"
                  className="social-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    className="socialSvg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0)">
                      <path
                        d="M12.0009 23.9998C18.6282 23.9998 24.0008 18.6273 24.0008 11.9999C24.0008 5.37254 18.6282 0 12.0009 0C5.37353 0 0.000999451 5.37254 0.000999451 11.9999C0.000999451 18.6273 5.37353 23.9998 12.0009 23.9998Z"
                        fill="#A1A1A1"
                      />
                      <path
                        d="M19.3505 8.62396C18.8362 8.85199 18.2831 9.00622 17.7029 9.0751C18.2953 8.72022 18.7498 8.15871 18.9644 7.48853C18.4101 7.81731 17.796 8.05582 17.1429 8.18438C16.6197 7.62715 15.8742 7.2789 15.0487 7.2789C13.465 7.2789 12.1804 8.56343 12.1804 10.1472C12.1804 10.372 12.2059 10.5909 12.2551 10.8009C9.87128 10.6813 7.75764 9.53949 6.34284 7.80362C6.09599 8.22716 5.95438 8.72022 5.95438 9.2458C5.95438 10.2407 6.46113 11.119 7.23035 11.6332C6.76039 11.6185 6.31781 11.4895 5.93128 11.2741C5.93106 11.2863 5.93106 11.2985 5.93106 11.3105C5.93106 12.7002 6.92018 13.8594 8.23209 14.1227C7.99166 14.1886 7.73774 14.2235 7.47656 14.2235C7.29132 14.2235 7.11185 14.2057 6.93687 14.1723C7.3018 15.3116 8.36086 16.141 9.6163 16.1643C8.63445 16.9337 7.39784 17.3921 6.05363 17.3921C5.82261 17.3921 5.59373 17.3786 5.36977 17.3519C6.63846 18.166 8.14653 18.6407 9.76625 18.6407C15.0421 18.6407 17.9273 14.2701 17.9273 10.4794C17.9273 10.3551 17.9245 10.2313 17.919 10.1085C18.4799 9.70421 18.9661 9.19917 19.3505 8.62396Z"
                        fill={theme.colors.background}
                      />
                    </g>
                  </svg>
                </a>
                <a
                  href="https://github.com/marliesgish"
                  className="social-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    className="socialSvg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0)">
                      <path
                        d="M12 0.5C5.37 0.5 0 5.78 0 12.292C0 17.503 3.438 21.922 8.205 23.48C8.805 23.591 9.025 23.226 9.025 22.913C9.025 22.633 9.015 21.891 9.01 20.908C5.672 21.619 4.968 19.326 4.968 19.326C4.422 17.965 3.633 17.601 3.633 17.601C2.546 16.87 3.717 16.885 3.717 16.885C4.922 16.967 5.555 18.1 5.555 18.1C6.625 19.903 8.364 19.382 9.05 19.081C9.158 18.318 9.467 17.799 9.81 17.504C7.145 17.209 4.344 16.195 4.344 11.677C4.344 10.39 4.809 9.338 5.579 8.513C5.444 8.215 5.039 7.016 5.684 5.392C5.684 5.392 6.689 5.076 8.984 6.601C9.944 6.339 10.964 6.209 11.984 6.203C13.004 6.209 14.024 6.339 14.984 6.601C17.264 5.076 18.269 5.392 18.269 5.392C18.914 7.016 18.509 8.215 18.389 8.513C19.154 9.338 19.619 10.39 19.619 11.677C19.619 16.207 16.814 17.204 14.144 17.494C14.564 17.848 14.954 18.571 14.954 19.676C14.954 21.254 14.939 22.522 14.939 22.905C14.939 23.214 15.149 23.583 15.764 23.465C20.565 21.917 24 17.495 24 12.292C24 5.78 18.627 0.5 12 0.5V0.5Z"
                        fill="#A1A1A1"
                      />
                    </g>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/marlies-gish-0621384/"
                  className="social-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    className="socialSvg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0)">
                      <path
                        d="M12 23.999C18.6274 23.999 24 18.6264 24 11.999C24 5.37158 18.6274 -0.00100708 12 -0.00100708C5.37258 -0.00100708 0 5.37158 0 11.999C0 18.6264 5.37258 23.999 12 23.999Z"
                        fill="#A1A1A1"
                      />
                      <path
                        d="M19.1699 12.9654V17.9127H16.3015V13.2969C16.3015 12.138 15.8874 11.3465 14.8489 11.3465C14.0563 11.3465 13.5855 11.8793 13.3776 12.3953C13.3021 12.5797 13.2826 12.8357 13.2826 13.0944V17.9125H10.4141C10.4141 17.9125 10.4526 10.0949 10.4141 9.28567H13.2828V10.5082C13.2771 10.5178 13.2689 10.5272 13.2638 10.5364H13.2828V10.5082C13.664 9.92162 14.3438 9.08309 15.8679 9.08309C17.7551 9.08309 19.1699 10.3161 19.1699 12.9654ZM7.41331 5.12723C6.4321 5.12723 5.79015 5.77132 5.79015 6.61755C5.79015 7.44581 6.41349 8.10851 7.37566 8.10851H7.39428C8.39474 8.10851 9.01679 7.44581 9.01679 6.61755C8.99776 5.77132 8.39474 5.12723 7.41331 5.12723ZM5.96064 17.9127H8.82812V9.28567H5.96064V17.9127Z"
                        fill={theme.colors.background}
                      />
                    </g>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <small>&copy; 2021 Marlies Gish</small>
            </div>
          </div>
        </ConstraintWidth>
      </SidePadding>
      <style jsx>{`
        .footer {
          /* background-color: var(--header); */
          /* color: #fff; */
        }

        .social-links-offset {
          position: relative;
          left: -5px;
        }

        .social-link {
          box-shadow: none;
          padding: 5px;
          opacity: 0.8;
        }

        .social-link + .social-link {
          margin-left: 10px;
        }

        .social-link:hover {
          opacity: 1;
        }

        .socialSvg {
          vertical-align: top;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
