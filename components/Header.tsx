import React from "react";
import Link from "next/link";

import Avatar from "./Avatar";
import UnorderedList from "./UnorderedList";
import ListItem from "./ListItem";
import SidePadding from "./SidePadding";
import ConstraintWidth from "./layout/ConstraintWidth";
import PrimaryButton from "./buttons/PrimaryButton";

interface Props {}

const Header: React.FC<Props> = () => (
  <header className="header">
    <SidePadding>
      <ConstraintWidth maxWidth={820}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ position: "relative" }}>
            <Link href="/" passHref>
              <a
                style={{
                  color: "#fff",
                  textDecoration: `none`,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <div style={{ marginRight: 15 }}>
                  <Avatar />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    position: "relative",
                  }}
                >
                  <div className="title">Marlies Gish</div>
                </div>
              </a>
            </Link>
          </div>
          <nav>
            <UnorderedList>
              <ListItem>
                <PrimaryButton href="/" type="light">
                  Blog
                </PrimaryButton>
              </ListItem>
              <ListItem style={{ marginLeft: 10, padding: 0 }}>
                <PrimaryButton href="/" type="light">
                  About
                </PrimaryButton>
              </ListItem>
            </UnorderedList>
          </nav>
        </div>
      </ConstraintWidth>
    </SidePadding>
    <style jsx>{`
      .header {
        background-color: #22b14d;
        padding-top: 1.45rem;
        padding-bottom: calc(1.45rem + 30px);
      }

      .title {
        color: #fff;
        font-size: 24px;
        font-weight: 500;
      }

      .nav {
      }

      .list {
        margin-left: 0;
        margin-bottom: 0;
        list-style: none;

        display: flex;
      }

      .listItem {
        color: #000;
      }

      .listItem + .listItem {
        margin-left: 30px;
      }

      .navLink {
        text-decoration: none;
        color: #fff;
        font-size: 18px;
        font-weight: 500;
        box-shadow: none;
        background-color: rgba(255, 255, 255, 0);
        border-radius: 7px;
        padding: 7px 14px;
        transition: background-color 0.2s;
        background-color: rgba(255, 255, 255, 0.1);
      }

      .navLink:hover {
        /* box-shadow: 0 2px 0 0 currentColor; */
        /* text-decoration: none; */
        color: #fff !important;
        text-decoration: none;
      }
    `}</style>
  </header>
);

export default Header;
