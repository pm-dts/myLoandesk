import BlogView, { getBlogMetadata } from "@/views/BlogView";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata() {
  return getBlogMetadata("en");
}

export default function EnglishBlogPage() {
  setRequestLocale("en");
  return <BlogView locale="en" />;
}
