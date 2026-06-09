const encodePublicPath = (path) =>
  path
    .split("/")
    .map((part, i) => (i === 0 || !part ? part : encodeURIComponent(part)))
    .join("/");

const gallery = (paths) => paths.map(encodePublicPath);

export const projectGalleries = {
  timetrack: gallery([
    "/timetrack/cover.png",
    "/timetrack/Screenshot 2026-06-09 at 20.04.48.png",
    "/timetrack/Screenshot 2026-06-09 at 20.05.18.png",
    "/timetrack/Screenshot 2026-06-09 at 20.06.15.png",
    "/timetrack/Screenshot 2026-06-09 at 20.06.24.png",
    "/timetrack/Screenshot 2026-06-09 at 20.06.30.png",
    "/timetrack/Screenshot 2026-06-09 at 20.06.34.png",
    "/timetrack/Screenshot 2026-06-09 at 20.07.27.png",
  ]),
  securoPortal: gallery([
    "/securoPortal/cover.png",
    "/securoPortal/Screenshot 2026-06-09 at 20.10.44.png",
    "/securoPortal/Screenshot 2026-06-09 at 20.11.19.png",
    "/securoPortal/Screenshot 2026-06-09 at 20.11.29.png",
    "/securoPortal/Screenshot 2026-06-09 at 20.11.48.png",
  ]),
  prevent: [],
  foodieexpress: gallery(["/webp/foodieexpres.webp"]),
  gbgVegan: gallery([
    "/gbgvegan/cover.png",
    "/gbgvegan/Screenshot 2026-06-09 at 20.14.32.png",
    "/gbgvegan/Screenshot 2026-06-09 at 20.14.43.png",
    "/gbgvegan/Screenshot 2026-06-09 at 20.14.50.png",
  ]),
  anbar: gallery(["/anbar/anbar.png"]),
};

export const getProjectGallery = (id) => projectGalleries[id] || [];
