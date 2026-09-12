import type { Technology } from "../types/technology";

export const technologiesPromise: Promise<Technology[]> = fetch("/technologies.json").then((response) =>
  response.json(),
);
