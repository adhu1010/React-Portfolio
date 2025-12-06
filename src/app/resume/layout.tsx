import type { Metadata } from "next";
import { resumeKeywords } from "@/constant";
import { generateResumeStructuredData } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Resume - Adhwaith K P",
  description:
    "View and download Adhwaith's professional resume. Student developer with expertise in React, Next.js, AI, and full-stack development.",
  keywords: resumeKeywords,
  openGraph: {
    title: "Resume - Adhwaith K P",
    description:
      "View and download Adhwaith's professional resume featuring his experience and skills as a student developer.",
    url: "https://adhwaith.vercel.app/resume",
    siteName: "Adhwaith K P",
    images: [
      {
        url: "/images/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Adhwaith K P Resume",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Resume - Adhwaith k p",
    description:
      "View Adhwaith K P's professional resume and experience as a student developer.",
    images: ["/images/thumbnail.png"],
  },
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const resumeStructuredData = generateResumeStructuredData();

  return (
    <>
      <link
        rel="preload"
        href="/docs/Adhwaith_K_P_Resume.pdf"
        as="fetch"
        type="application/pdf"
        crossOrigin="anonymous"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(resumeStructuredData),
        }}
      />
      {children}
    </>
  );
}
