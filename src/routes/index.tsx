import { createFileRoute } from "@tanstack/react-router";
import Portfolio from "@/components/Portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ahmad Sodik — Android & Web Developer Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Ahmad Sodik, a full-stack developer from South Sumatra building Android apps with Kotlin and web apps with React & TypeScript.",
      },
      { property: "og:title", content: "Ahmad Sodik — Android & Web Developer" },
      {
        property: "og:description",
        content:
          "Turning ideas into beautiful digital experiences. Android, Web, and Full-Stack development.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://avatars.githubusercontent.com/u/97650775?v=4" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Unbounded:wght@400;500;600;700;800&family=Outfit:wght@300;400;500;600;700&display=swap",
      },
    ],
  }),
  component: Portfolio,
});
