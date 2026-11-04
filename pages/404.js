import Link from "next/link";
import { useRouter } from "next/router";

export default function Custom404() {
  const router = useRouter();
  const isSwedish = router.locale === "sv";

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #f8fafc 0%, #eef2ff 100%)",
        padding: "2rem",
      }}
    >
      <div
        style={{
          maxWidth: "560px",
          width: "100%",
          background: "#ffffff",
          borderRadius: "24px",
          boxShadow: "0 30px 80px rgba(15, 23, 42, 0.12)",
          border: "1px solid #e2e8f0",
          padding: "2.5rem",
          textAlign: "center",
        }}
      >
        <p
          style={{
            margin: 0,
            fontSize: "0.75rem",
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#4f46e5",
          }}
        >
          {isSwedish ? "404" : "404"}
        </p>
        <h1
          style={{
            margin: "0.75rem 0 1rem",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            color: "#0f172a",
          }}
        >
          {isSwedish ? "Sidan hittades inte" : "Page not found"}
        </h1>
        <p
          style={{
            margin: "0 0 2rem",
            fontSize: "1rem",
            lineHeight: 1.6,
            color: "#475569",
          }}
        >
          {isSwedish
            ? "Länken du försökte öppna finns inte eller har flyttats."
            : "The page you were trying to open does not exist or has been moved."}
        </p>
        <Link
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#4f46e5",
            color: "#ffffff",
            textDecoration: "none",
            borderRadius: "999px",
            padding: "0.85rem 1.5rem",
            fontWeight: 700,
          }}
        >
          {isSwedish ? "Tillbaka till startsidan" : "Back to homepage"}
        </Link>
      </div>
    </main>
  );
}
