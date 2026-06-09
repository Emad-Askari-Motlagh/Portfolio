import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import { useTranslation } from "@/hooks/useTranslation";
import styles from "./contact.module.scss";

const schema = Yup.object({
  name: Yup.string().min(2).max(50).required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  message: Yup.string().min(20).required("Required"),
});

export default function ContactScreen() {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const formik = useFormik({
    initialValues: { name: "", email: "", message: "" },
    validationSchema: schema,
    validateOnChange: false,
    onSubmit: async (values) => {
      setError(false);
      try {
        const mailtoLink = `mailto:emad.askari@gmail.com?subject=Portfolio kontakt från ${encodeURIComponent(values.name)}&body=${encodeURIComponent(`Namn: ${values.name}\nE-post: ${values.email}\n\n${values.message}`)}`;
        window.location.href = mailtoLink;
        setSubmitted(true);
      } catch {
        setError(true);
      }
    },
  });

  return (
    <section className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.hero}>
          <h1>{t("contact.title")}</h1>
          <p>{t("contact.subtitle")}</p>
        </div>

        <div className={styles.grid}>
          <div className={styles.info}>
            <h2>Kontaktuppgifter</h2>
            <a href="mailto:emad.askari@gmail.com" className={styles.infoItem}>
              <FaEnvelope />
              <div>
                <span className={styles.label}>E-post</span>
                <span>emad.askari@gmail.com</span>
              </div>
            </a>
            <a href="tel:+46730565960" className={styles.infoItem}>
              <FaPhone />
              <div>
                <span className={styles.label}>Telefon</span>
                <span>073-056 59 60</span>
              </div>
            </a>
            <div className={styles.infoItem}>
              <FaMapMarkerAlt />
              <div>
                <span className={styles.label}>Plats</span>
                <span>Göteborg, Sverige</span>
              </div>
            </div>

            <div className={styles.social}>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
            </div>
          </div>

          <div className={styles.formCard}>
            {!submitted ? (
              <>
                <h2>{t("contact.form_title")}</h2>
                <p>{t("contact.form_subtitle")}</p>

                <form onSubmit={formik.handleSubmit} className={styles.form}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name">{t("contact.name")} *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      className={formik.errors.name ? styles.inputError : ""}
                    />
                    {formik.errors.name && <span className={styles.error}>{formik.errors.name}</span>}
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="email">{t("contact.email")} *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      className={formik.errors.email ? styles.inputError : ""}
                    />
                    {formik.errors.email && <span className={styles.error}>{formik.errors.email}</span>}
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="message">{t("contact.message")} *</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formik.values.message}
                      onChange={formik.handleChange}
                      className={formik.errors.message ? styles.inputError : ""}
                    />
                    {formik.errors.message && <span className={styles.error}>{formik.errors.message}</span>}
                  </div>

                  {error && <p className={styles.errorMsg}>{t("contact.error")}</p>}

                  <button type="submit" className={styles.submit}>
                    {t("contact.submit")}
                  </button>
                </form>
              </>
            ) : (
              <div className={styles.success}>
                <h2>{t("contact.success")}</h2>
                <button type="button" onClick={() => setSubmitted(false)} className={styles.submit}>
                  Skicka nytt meddelande
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
