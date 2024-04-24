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
  docsRepositoryBase: "https://github.com/mantreshkhurana/documentation/blob/main/",
  navigation: { next: true, prev: true },
  darkMode: true,
  // banner: {
  //   text: () => {
  //     return (
  //       <Link
  //         href="https://www.mantreshkhurana.com/"
  //         target="_blank"
  //         title="Website under development"
  //       >
  //         Mantresh Khurana →
  //       </Link>
  //     );
  //   },
  //   key: "Mantresh's new release",
  // },
  footer: {
    text: () => {
      return (
        <p>
          Copyright © 2024 Mantresh Khurana. All rights reserved.
        </p>
      );
    },
  },
  logo: () => {
    return (
      <>
        {/* <img
          src={"https://www.mantreshkhurana.com/assets/img/logo.png"}
          width="30"
          height="30"
          alt="Mantresh Khurana"
          style={{ marginRight: "10px" }}
        /> */}
        <span style={{ fontWeight: "600" }}><b>Mantresh's</b> Documentation</span>
      </>
    );
  },
  useNextSeoProps() {
    const { route } = useRouter();
    if (route !== "/") {
      return {
        titleTemplate: "%s | Mantresh's Docs",
      };
    }
    return { titleTemplate: "Mantresh's Docs" };
  },
  head: () => {
    const { asPath } = useRouter();
    const { route } = useRouter();
    const { title, ...meta } = useConfig().frontMatter;

    return (
      <>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="canonical" href="https://documentation.mantreshkhurana.com" />
        <meta property="og:url" content={`https://documentation.mantreshkhurana.com${asPath}`} />
        <meta property="og:site_name" content="mantreshkhurana" />
        <meta name="og:title" content="Mantresh's Docs" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="viewport" content="width=device-width" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="Mantresh Khurana" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta
          name="keywords"
          content="mantresh, mantresh khurana, spyxpo, documentation, software, flutter, fuchsia, linux, jOS, computer, operating system, os, system, kernel, dart, open source, material, design, zircon, go, rust"
        />
        <meta
          property="description"
          content={
            meta.description ||
            "Mantresh's official documentation, learn how to use our products and services."
          }
        />
        <meta
          property="og:description"
          content={
            meta.description ||
            "Mantresh's official documentation, learn how to use our products and services."
          }
        />

        <meta
          property="twitter:card"
          content={meta.image ? "summary_large_image" : "summary"}
        />
        <meta property="twitter:site" content="@mantreshkhurana" />
        {route === "/" ? (
          <meta property="twitter:title" content="Mantresh's Docs" />
        ) : (
          <meta property="twitter:title" content={`${title} - Mantresh's Docs`} />
        )}
        <meta property="twitter:description" content={meta.description} />
        <meta
          property="twitter:url"
          content={`https://documentation.mantreshkhurana.io${asPath}`}
        />

      </>
    );
  },
};

export default config;
