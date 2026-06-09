import { useState, useEffect } from "react";
import Image from "next/image";
import { X } from "react-feather";
import { useTranslation } from "@/hooks/useTranslation";
import { getProjectGallery } from "@/data/projectGalleries";
import styles from "./projects.module.scss";

export default function ProjectsScreen() {
  const { t } = useTranslation();
  const projects = t("projects.items");
  const [activeProject, setActiveProject] = useState(null);

  const openGallery = (project) => {
    const images = getProjectGallery(project.id);
    if (images.length > 0) {
      setActiveProject({ ...project, images });
    }
  };

  const closeGallery = () => setActiveProject(null);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") closeGallery();
    };
    if (activeProject) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEscape);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [activeProject]);

  return (
    <section id="projects" className={`section ${styles.projects}`}>
      <div className={styles.container}>
        <div className="sectionHeader">
          <h2 className="sectionTitle">{t("projects.title")}</h2>
          <p className="sectionSubtitle">{t("projects.subtitle")}</p>
        </div>

        <div className={styles.grid}>
          {Array.isArray(projects) &&
            projects.map((project, index) => {
              const hasUrl = project.url && project.url.length > 0;
              const hasGallery = getProjectGallery(project.id).length > 0;

              return (
                <article key={index} className={styles.card}>
                  <button
                    type="button"
                    className={styles.cardImageBtn}
                    onClick={() => openGallery(project)}
                    disabled={!hasGallery}
                    aria-label={`${t("projects.view_gallery")}: ${project.title}`}
                  >
                    <div
                      className={styles.cardImage}
                      style={!project.image && project.gradient ? { background: project.gradient } : undefined}
                    >
                      {project.image ? (
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={400}
                          height={250}
                          className={styles.image}
                        />
                      ) : (
                        <div className={styles.gradientTitle}>{project.title}</div>
                      )}

                      {hasGallery && (
                        <div className={styles.cardOverlay}>
                          <span className={styles.category}>{project.category}</span>
                          <span className={styles.galleryHint}>{t("projects.view_gallery")}</span>
                        </div>
                      )}
                    </div>
                  </button>

                  <div className={styles.cardBody}>
                    <div className={styles.titleRow}>
                      <h3 className={styles.cardTitle}>{project.title}</h3>
                      {project.role && <span className={styles.roleBadge}>{project.role}</span>}
                    </div>
                    <p>{project.description}</p>
                    <div className={styles.techStack}>
                      {project.tech.map((tech) => (
                        <span key={tech} className={styles.techTag}>{tech}</span>
                      ))}
                    </div>
                    <div className={styles.cardFooter}>
                      <span className={styles.endpoint}>{project.endpoint}</span>
                      {hasUrl ? (
                        <a href={project.url} target="_blank" rel="noopener noreferrer" className={styles.link}>
                          {t("projects.visit_site")}
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                            <polyline points="15,3 21,3 21,9" />
                            <line x1="10" y1="14" x2="21" y2="3" />
                          </svg>
                        </a>
                      ) : hasGallery ? (
                        <button type="button" className={styles.linkBtn} onClick={() => openGallery(project)}>
                          {t("projects.view_gallery")}
                        </button>
                      ) : null}
                    </div>
                  </div>
                </article>
              );
            })}
        </div>
      </div>

      {activeProject && (
        <div className={styles.modalBackdrop} onClick={closeGallery} role="presentation">
          <div
            className={styles.modal}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={activeProject.title}
          >
            <div className={styles.modalHeader}>
              <div>
                <h3>{activeProject.title}</h3>
                <p>{activeProject.category}</p>
              </div>
              <button type="button" className={styles.closeBtn} onClick={closeGallery} aria-label="Close">
                <X size={22} />
              </button>
            </div>

            <div className={styles.galleryScroll}>
              {activeProject.images.map((src, i) => (
                <div key={src} className={styles.galleryItem}>
                  <img src={src} alt={`${activeProject.title} ${i + 1}`} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
