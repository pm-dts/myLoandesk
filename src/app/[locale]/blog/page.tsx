import { MoreVertical, BookOpen, ArrowRight } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import BreadcrumbSchema from "@/components/site/utils/BreadcrumbScripts";

export const metadata: Metadata = {
  title: "Mortgage Insights & Market Updates | MyLoanDesk Blog",
  description:
    "Stay informed with MyLoanDesk's blog. Explore Florida housing market updates, winning multi-offer strategies, and FHA vs. conventional mortgage comparisons.",
  alternates: {
    canonical: "https://www.myloandesk.com/blog/",
  },
  openGraph: {
    title: "Mortgage Insights & Market Updates | MyLoanDesk Blog",
    description:
      "Stay informed with MyLoanDesk's blog. Explore market updates, negotiation strategies, and mortgage insights to navigate the housing market with confidence.",
    type: "website",
    url: "https://www.myloandesk.com/blog/",
    siteName: "MyLoanDesk",
    locale: "en_US",
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
    title: "Mortgage Insights & Market Updates | MyLoanDesk Blog",
    description:
      "Stay informed with MyLoanDesk's blog. Explore market updates, negotiation strategies, and mortgage insights to navigate the housing market with confidence.",
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

const blogListSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://www.myloandesk.com/blog/#webpage",
      url: "https://www.myloandesk.com/blog/",
      name: "MyLoanDesk Blog | Mortgage Insights & Market Updates",
      description:
        "Market updates, negotiation strategies, and transparent mortgage breakdowns to help you navigate the housing market with confidence.",
      isPartOf: {
        "@type": "WebSite",
        "@id": "https://www.myloandesk.com/#website",
      },
      publisher: {
        "@id": "https://www.myloandesk.com/#organization",
      },
    },
    {
      "@type": "ItemList",
      "@id": "https://www.myloandesk.com/blog/#itemlist",
      name: "Latest Mortgage & Market Articles",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          url: "https://www.myloandesk.com/blog/1",
          name: 'Winning the "Multi-Offer" War in Florida',
        },
        {
          "@type": "ListItem",
          position: 2,
          url: "https://www.myloandesk.com/blog/2",
          name: "FHA vs. Conventional in the Florida Market",
        },
      ],
    },
  ],
};

export default function Blog() {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
  ];

  // Mock data based on the provided image and mortgage theme
  const posts = [
    {
      id: 1,
      title: 'Winning the "Multi-Offer" War in Florida',
      excerpt:
        "Using a high-trust pre-approval as a weapon in competitive markets. If you've looked at a home in Tampa, Orlando, or South Florida recently, you know the reality: you aren't the only buyer putting in an offer. Here is how to make yours stand out.",
      date: "May 26",
      readTime: "1 min read",
      image:
        "https://static.wixstatic.com/media/ba713e_c93c5ee1064d459cb722f27754eb9120~mv2.png/v1/fill/w_1678,h_1260,fp_0.50_0.50,q_95,enc_avif,quality_auto/ba713e_c93c5ee1064d459cb722f27754eb9120~mv2.png",
    },
    {
      id: 2,
      title: "FHA vs. Conventional in the Florida Market ",
      excerpt:
        "A comparison to help local buyers choose the right path. When you're ready to make a move, one of the first technical forks in the road is deciding between an FHA...",
      date: "May 25",
      readTime: "3 min read",
      image:
        "https://static.wixstatic.com/media/ba713e_08a689363acb4318a8d3aa67edf3101b~mv2.png/v1/fill/w_1678,h_1260,fp_0.50_0.50,q_95,enc_avif,quality_auto/ba713e_08a689363acb4318a8d3aa67edf3101b~mv2.png",
    },
  ];

  return (
    <main className="min-h-screen bg-primary-bg pt-32 pb-24">
      {/* Structural SEO Breadcrumbs & Schema */}
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
            Resources &amp; Insights
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display text-ink leading-[1.05] tracking-tight mb-6">
            MyLoanDesk.com Blog
          </h1>
          <p className="text-lg text-ink-2 leading-relaxed max-w-2xl">
            Market updates, negotiation strategies, and transparent mortgage
            breakdowns to help you navigate the housing market with confidence.
          </p>
        </div>

        {/* Blog Posts List */}
        <div className="flex flex-col gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="group flex flex-col md:flex-row bg-primary-bg border border-line rounded-2xl overflow-hidden transition-all duration-300 hover:border-moss-deep/30 hover:shadow-[0_20px_50px_-20px_rgba(15,61,46,0.15)]"
            >
              {/* Image Section (Left) */}
              <Link
                href={`/blog/${post.id}`}
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
                  href={`/blog/${post.id}`}
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
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-moss-deep w-fit hover:text-brand-orange transition-colors focus-ring"
                >
                  Read article
                  <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination / Load More */}
        <div className="mt-16 flex justify-center">
          <button className="px-6 py-3 border border-line rounded-full text-sm font-medium text-ink hover:border-moss-deep hover:text-moss-deep transition-colors focus-ring">
            Load more articles
          </button>
        </div>
      </div>
    </main>
  );
}
