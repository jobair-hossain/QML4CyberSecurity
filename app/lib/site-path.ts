const configuredBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const basePath =
  configuredBasePath === "/"
    ? ""
    : configuredBasePath.replace(/\/+$/, "");

/**
 * Prefix an application-local URL for hosts that publish the site below a
 * repository path, such as GitHub Pages.
 */
export function siteHref(path: string): string {
  if (!path.startsWith("/")) return path;
  return `${basePath}${path}`;
}
