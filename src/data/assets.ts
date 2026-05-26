export function assetUrl(path: string) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
}

export function routeUrl(path: string) {
  const clean = path.replace(/^\/+/, "");
  return clean ? `${import.meta.env.BASE_URL}${clean}` : import.meta.env.BASE_URL;
}
