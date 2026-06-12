import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import HeroScreen from "@/screens/HeroScreen";
import AboutScreen from "@/screens/AboutScreen";
import SkillsScreen from "@/screens/SkillsScreen";
import ExperienceScreen from "@/screens/ExperienceScreen";
import ProjectsScreen from "@/screens/ProjectsScreen";
import TechnologiesScreen from "@/screens/TechnologiesScreen";
import EducationScreen from "@/screens/EducationScreen";
import LanguagesScreen from "@/screens/LanguagesScreen";
import CtaScreen from "@/screens/CtaScreen";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    if (router.asPath.includes("#")) {
      const id = router.asPath.split("#")[1];
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [router.asPath]);

  return (
    <>
      <Head>
        <title>Emad Askareimotlagh | Fullstackutvecklare</title>
        <meta
          name="description"
          content="Portfolio för Emad Askareimotlagh – fullstackutvecklare med erfarenhet av React, Next.js, Node.js och moderna webbteknologier."
        />
        <meta property="og:title" content="Emad Askareimotlagh | Fullstackutvecklare" />
        <meta
          property="og:description"
          content="Fullstackutvecklare med cirka 4 års erfarenhet. React, Next.js, Node.js, TypeScript och mer."
        />
      </Head>

      <HeroScreen />
      <AboutScreen />
      <SkillsScreen />
      <ExperienceScreen />
      <ProjectsScreen />
      <TechnologiesScreen />
      <EducationScreen />
      <LanguagesScreen />
      <CtaScreen />
    </>
  );
}

Home.Layout = Layout;
