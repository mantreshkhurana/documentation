import { useTheme } from "nextra-theme-docs";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";
import Link from "next/link";

const useDark = () => {
  const { resolvedTheme } = useTheme();
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    setIsDark(resolvedTheme === "dark");
    return () => {
      false;
    };
  }, [resolvedTheme]);
  return isDark;
};

const config = {
  docsRepositoryBase: "https://github.com/Spyxpo/documentation/blob/stable/",
  navigation: { next: true, prev: true },
  darkMode: true,
  // banner: {
  //   text: () => {
  //     return (
  //       <Link
  //         href="https://www.spyxpo.com/"
  //         target="_blank"
  //         title="Website under development"
  //       >
  //         Spyxpo →
  //       </Link>
  //     );
  //   },
  //   key: "Spyxpo new release",
  // },
  footer: {
    text: () => {
      return (
        <p>
          Copyright © 2023 Spyxpo. All rights reserved.
        </p>
      );
    },
  },
  logo: () => {
    return (
      <>
        <img
          src={"http://storage.spyxpo.com/assets/images/logo_rounded_square.png"}
          width="30"
          height="30"
          alt="Spyxpo"
          style={{ marginRight: "10px" }}
        />
        <span style={{ fontWeight: "600" }}>Documentation</span>
      </>
    );
  },
  useNextSeoProps() {
    const { route } = useRouter();
    if (route !== "/") {
      return {
        titleTemplate: "%s | Spyxpo Docs",
      };
    }
    return { titleTemplate: "Spyxpo Docs" };
  },
  head: () => {
    const { asPath } = useRouter();
    const { route } = useRouter();
    const { title, ...meta } = useConfig().frontMatter;

    return (
      <>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="canonical" href="https://docs.spyxpo.com" />
        <meta property="og:url" content={`https://docs.spyxpo.com${asPath}`} />
        <meta property="og:site_name" content="spyxpo" />
        <meta name="og:title" content="Spyxpo Docs" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="viewport" content="width=device-width" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="Spyxpo" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta
          name="keywords"
          content="spyxpo, documentation, software, flutter, fuchsia, linux, jOS, computer, operating system, os, system, kernel, dart, open source, material, design, zircon, go, rust"
        />
        <meta
          property="description"
          content={
            meta.description ||
            "Spyxpo's official documentation, learn how to use our products and services."
          }
        />
        <meta
          property="og:description"
          content={
            meta.description ||
            "Spyxpo's official documentation, learn how to use our products and services."
          }
        />

        <meta
          property="twitter:card"
          content={meta.image ? "summary_large_image" : "summary"}
        />
        <meta property="twitter:site" content="@spyxpo" />
        {route === "/" ? (
          <meta property="twitter:title" content="Spyxpo Docs" />
        ) : (
          <meta property="twitter:title" content={`${title} - Spyxpo Docs`} />
        )}
        <meta property="twitter:description" content={meta.description} />
        <meta
          property="twitter:url"
          content={`https://docs.spyxpo.io${asPath}`}
        />

      </>
    );
  },
};

export default config;
