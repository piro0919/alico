import queryString from "query-string";

export default function getYouTubeId({ url }: { url: string }): string {
  const {
    query: { v },
  } = queryString.parseUrl(url);

  if (typeof v !== "string") {
    throw new Error("v is not a string");
  }

  return v;
}
