import { MoreVertical, BookOpen, ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { getTranslations, setRequestLocale } from "next-intl/server";
import BreadcrumbSchema from "@/components/site/utils/BreadcrumbScripts";

export async function getBlogMetadata(locale: "en" | "es"): Promise<Metadata> {
  const isEs = locale === "es";
  const t = await getTranslations({ locale, namespace: "Blog.meta" });

  const canonicalUrl = isEs
    ? "https://www.myloandesk.com/es/blog/"
    : "https://www.myloandesk.com/blog/";

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: "https://www.myloandesk.com/blog/",
        es: "https://www.myloandesk.com/es/blog/",
        "x-default": "https://www.myloandesk.com/blog/",
      },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      type: "website",
      url: canonicalUrl,
      siteName: "MyLoanDesk",
      locale: isEs ? "es_US" : "en_US",
      images: [
        {
          url: "/og-image.jpeg",
          width: 1200,
          height: 630,
          alt: "MyLoanDesk Blog - Mortgage Insights",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: ["/og-image.jpeg"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default async function BlogView({ locale }: { locale: "en" | "es" }) {
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "Blog" });
  const isEs = locale === "es";

  const homeHref = isEs ? "/es" : "/";
  const blogHref = isEs ? "/es/blog" : "/blog";
  const pageUrl = isEs
    ? "https://www.myloandesk.com/es/blog/"
    : "https://www.myloandesk.com/blog/";

  const breadcrumbItems = [
    { name: t("breadcrumbs.home"), url: homeHref },
    { name: t("breadcrumbs.blog"), url: blogHref },
  ];

  const posts = [
    {
      id: 1,
      title: t("posts.post_1.title"),
      excerpt: t("posts.post_1.excerpt"),
      date: t("posts.post_1.date"),
      readTime: t("posts.post_1.read_time"),
      image:
        "https://static.wixstatic.com/media/ba713e_c93c5ee1064d459cb722f27754eb9120~mv2.png/v1/fill/w_1678,h_1260,fp_0.50_0.50,q_95,enc_avif,quality_auto/ba713e_c93c5ee1064d459cb722f27754eb9120~mv2.png",
    },
    {
      id: 2,
      title: t("posts.post_2.title"),
      excerpt: t("posts.post_2.excerpt"),
      date: t("posts.post_2.date"),
      readTime: t("posts.post_2.read_time"),
      image:
        "https://static.wixstatic.com/media/ba713e_08a689363acb4318a8d3aa67edf3101b~mv2.png/v1/fill/w_1678,h_1260,fp_0.50_0.50,q_95,enc_avif,quality_auto/ba713e_08a689363acb4318a8d3aa67edf3101b~mv2.png",
    },
  ];

  const blogListSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: t("meta.title"),
        description: t("meta.description"),
        isPartOf: {
          "@id": "https://www.myloandesk.com/#website",
        },
        publisher: {
          "@id": "https://www.myloandesk.com/#organization",
        },
      },
      {
        "@type": "ItemList",
        "@id": `${pageUrl}#itemlist`,
        name: t("heading"),
        itemListElement: posts.map((post, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: `${pageUrl}${post.id}`,
          name: post.title,
        })),
      },
    ],
  };

  return (
    <main className="min-h-screen bg-primary-bg pt-32 pb-24">
      <BreadcrumbSchema items={breadcrumbItems} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogListSchema),
        }}
      />

      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        {/* Page Header */}
        <div className="mb-16 lg:mb-20">
          <div className="text-[10px] uppercase tracking-[0.25em] text-brand-orange font-semibold mb-5 flex items-center gap-2">
            <BookOpen size={14} strokeWidth={2.5} />
            {t("badge")}
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display text-ink leading-[1.05] tracking-tight mb-6">
            {t("heading")}
          </h1>
          <p className="text-lg text-ink-2 leading-relaxed max-w-2xl">
            {t("subheading")}
          </p>
        </div>

        {/* Blog Posts List */}
        <div className="flex flex-col gap-8">
          {posts.map((post) => {
            const articleHref = `${blogHref}/${post.id}`;

            return (
              <article
                key={post.id}
                className="group flex flex-col md:flex-row bg-primary-bg border border-line rounded-2xl overflow-hidden transition-all duration-300 hover:border-moss-deep/30 hover:shadow-[0_20px_50px_-20px_rgba(15,61,46,0.15)]"
              >
                {/* Image Section (Left) */}
                <Link
                  href={articleHref}
                  className="block w-full md:w-5/12 lg:w-[45%] relative h-64 md:h-auto overflow-hidden focus-ring"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </Link>

                {/* Content Section (Right) */}
                <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center flex-1 relative">
                  {/* Meta Row: Date & Read Time */}
                  <div className="flex items-center justify-between text-xs text-ink-2 font-medium mb-4">
                    <div className="flex items-center gap-2">
                      <span>{post.date}</span>
                      <span className="w-1 h-1 rounded-full bg-line"></span>
                      <span>{post.readTime}</span>
                    </div>
                    <button
                      className="text-ink-2 hover:text-ink transition-colors p-1 rounded focus-ring"
                      aria-label="More options"
                    >
                      <MoreVertical size={16} />
                    </button>
                  </div>

                  {/* Title & Excerpt */}
                  <Link
                    href={articleHref}
                    className="block focus-ring rounded-lg"
                  >
                    <h2 className="text-2xl font-bold lg:text-3xl font-display text-ink mb-3 group-hover:text-moss-deep transition-colors leading-tight">
                      {post.title}
                    </h2>
                    <p className="text-sm md:text-base text-ink-2 leading-relaxed line-clamp-3 mb-6">
                      {post.excerpt}
                    </p>
                  </Link>

                  {/* 'Read More' Link */}
                  <Link
                    href={articleHref}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-moss-deep w-fit hover:text-brand-orange transition-colors focus-ring"
                  >
                    {t("read_article")}
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        {/* Pagination / Load More */}
        <div className="mt-16 flex justify-center">
          <button className="px-6 py-3 border border-line rounded-full text-sm font-medium text-ink hover:border-moss-deep hover:text-moss-deep transition-colors focus-ring">
            {t("load_more")}
          </button>
        </div>
      </div>
    </main>
  );
}
