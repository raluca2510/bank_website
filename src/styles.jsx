import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root {
    --black-gradient: linear-gradient(
        144.39deg,
        #ffffff -278.56%,
        #6d6d6d -78.47%,
        #11101d 91.61%
        );
        --card-shadow: 0px 20px 100px -10px rgba(66, 71, 91, 0.1);
        --font-family: 'Poppins', sans-serif;
        
        // Padding
        --paddingX: 0.4rem;
        --paddingX-sm: 1rem;
        --paddingY: 0.4rem;
        --paddingY-sm: 1rem;
        --padding: 0.4rem;
        --padding-sm: 1rem;
        
        // Margin
        --marginX: 0.4rem;
        --marginX-sm: 1rem;
        --marginY: 0.4rem;
        --marginY-sm: 1rem;
        --margin: 0.4rem;
        --margin-sm: 1rem;
        
        // Paragraph
        --p-font-size: 1.125rem;
        --p-line-height: 2rem;
        
        // Heading2
        --h2-font-size: 2.5rem;
        --h2-font-size-sm: 3rem;
        --h2-line-height: 4.2rem;
        --h2-line-height-sm: 4.8rem;
        
        // Text color
        --text-white: #fff;
        --text-dimwhite:  rgba(255, 255, 255, 0.7);
        
        // Background color
        --bg-main: rgb(0, 4, 15);
        
        // Box width
        --box-width-max: 1280px;
        
        // sm	640px	@media (min-width: 640px) { ... }
        // md	768px	@media (min-width: 768px) { ... }
        // lg	1024px	@media (min-width: 1024px) { ... }
        // xl	1280px	@media (min-width: 1280px) { ... }
        // 2xl	1536px	@media (min-width: 1536px) { ... }
    }
    
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    
    body {
        margin: 0;
        padding: 0;
        font-family: var(--font-family);
        color: var(--text-dimwhite);
        overflow: hidden;
    }
`;