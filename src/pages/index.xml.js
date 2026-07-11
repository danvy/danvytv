import { feed } from "../feed";

// Hugo published the feed here. Serve the real thing rather than redirecting:
// feed readers don't follow the HTML meta-refresh that a static redirect emits.
export const GET = (context) => feed(context);
