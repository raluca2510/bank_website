import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
:root {
    --black-gradient: linear-gradient(
        144.39deg,
        #ffffff -278.56%,
        #6d6d6d -78.47%,
        #11101d 91.61%
      );
    --card-shadow: 0px 20px 100px -10px rgba(66, 71, 91, 0.1);
    --font-family: 'Poppins', sans-serif;

    // sm	640px	@media (min-width: 640px) { ... }
    // md	768px	@media (min-width: 768px) { ... }
    // lg	1024px	@media (min-width: 1024px) { ... }
    // xl	1280px	@media (min-width: 1280px) { ... }
    // 2xl	1536px	@media (min-width: 1536px) { ... }
}

body {
    margin: 0;
    font-family: var(--font-family);
    overflow: hidden;
}
`;