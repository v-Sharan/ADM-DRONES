import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products Details",
  description: "Product Details for frame",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
