import { selfData, skillsData } from "@/constant";

export function generatePersonStructuredData() {
  const skills = skillsData.flatMap((category) =>
    category.data.map((skill) => skill.title)
  );

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: selfData.name,
    givenName: selfData.first_name,
    familyName: selfData.last_name,
    jobTitle: selfData.jobTitle,
    worksFor: {
      "@type": "Organization",
      name: selfData.workFor,
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Kerala Technological University",
    },
    email: selfData.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: selfData.current_location.city,
      addressRegion: selfData.current_location.state,
      addressCountry: selfData.current_location.country,
    },
    sameAs: [
      `https://github.com/${selfData.socials_username.github}`,
      `https://linkedin.com/in/${selfData.socials_username.linkedin}`,
      `https://twitter.com/${selfData.socials_username.twitter}`,
      `https://instagram.com/${selfData.socials_username.instagram}`,
    ],
    url: "https://adhwaith.vercel.app",
    description: selfData.bio,
    knowsAbout: skills,
  };
}

export function generateWebsiteStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Adhwaith K P - Portfolio",
    url: "https://adhwaith.vercel.app",
    description:
      "Adhwaith's portfolio featuring projects in React, Next.js, and modern web development",
    author: {
      "@type": "Person",
      name: selfData.name,
    },
    publisher: {
      "@type": "Person",
      name: selfData.name,
    },
    inLanguage: "en-US",
    copyrightYear: new Date().getFullYear(),
    copyrightHolder: {
      "@type": "Person",
      name: selfData.name,
    },
  };
}

export function generateOrganizationStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: selfData.name,
    url: "https://adhwaith.vercel.app",
    logo: "https://adhwaith.vercel.app/images/logo.png",
    description: selfData.bio,
    founder: {
      "@type": "Person",
      name: selfData.name,
    },
    sameAs: [
      `https://github.com/${selfData.socials_username.github}`,
      `https://linkedin.com/in/${selfData.socials_username.linkedin}`,
      `https://twitter.com/${selfData.socials_username.twitter}`,
      `https://instagram.com/${selfData.socials_username.instagram}`,
    ],
  };
}

export function generateResumeStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "DigitalDocument",
    name: "Adhwaith K P Resume",
    description:
      "Professional resume of Adhwaith K P - Student Developer specializing in Full-Stack Web Development",
    url: "https://adhwaith.vercel.app/resume",
    author: {
      "@type": "Person",
      name: selfData.name,
      email: selfData.email,
      jobTitle: selfData.jobTitle,
      worksFor: {
        "@type": "Organization",
        name: selfData.workFor,
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: selfData.current_location.city,
        addressRegion: selfData.current_location.state,
        addressCountry: selfData.current_location.country,
      },
      sameAs: [
        `https://github.com/${selfData.socials_username.github}`,
        `https://linkedin.com/in/${selfData.socials_username.linkedin}`,
      ],
    },
    dateModified: new Date().toISOString(),
    fileFormat: "application/pdf",
    contentUrl: "https://adhwaith.vercel.app/docs/MyResume.pdf",
    downloadUrl: "https://adhwaith.vercel.app/docs/MyResume.pdf",
    keywords: [
      "Software Developer",
      "Full Stack Developer",
      "React Developer",
      "Next.js Developer",
      "JavaScript Developer",
      "TypeScript Developer",
      "Student Developer",
      "Computer Science",
      "Kerala Technological University",
      "Thrissur",
      "Kerala,",
      "India",
    ],
  };
}
