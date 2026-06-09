import Head from "next/head";
import Layout from "@/components/Layout";
import ContactScreen from "@/screens/ContactScreen";

export default function Kontakt() {
  return (
    <>
      <Head>
        <title>Kontakt | Emad Askareimotlagh</title>
        <meta
          name="description"
          content="Kontakta Emad Askareimotlagh för samarbete, konsultation eller anställning."
        />
      </Head>
      <ContactScreen />
    </>
  );
}

Kontakt.Layout = Layout;
