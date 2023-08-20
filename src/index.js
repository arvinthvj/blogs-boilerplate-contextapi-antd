import { createRoot } from "react-dom/client";

import App from "./App";
import { PostProvider } from "./ContextStore/postStore";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <PostProvider>
    <App />
  </PostProvider>
);
