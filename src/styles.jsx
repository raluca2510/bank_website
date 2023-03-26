import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
        // Gradients
        --bg-black-gradient: linear-gradient(
            144.39deg,
            #ffffff -278.56%,
            #6d6d6d -78.47%,
            #11101d 91.61%
        );

        --text-gradient: radial-gradient(
              64.18% 64.18% at 71.16% 35.69%,
              #def9fa 0.89%,
              #bef3f5 17.23%,
              #9dedf0 42.04%,
              #7de7eb 55.12%,
              #5ce1e6 71.54%,
              #33bbcf 100%
            );
          
        --bg-blue-gradient: linear-gradient(
              157.81deg,
              #def9fa -43.27%,
              #bef3f5 -21.24%,
              #9dedf0 12.19%,
              #7de7eb 29.82%,
              #5ce1e6 51.94%,
              #33bbcf 90.29%
            );
          
        --bg-black-gradient: linear-gradient(
              144.39deg,
              #ffffff -278.56%,
              #6d6d6d -78.47%,
              #11101d 91.61%
            );
          
        --bg-black-gradient-2: linear-gradient(
              -168.39deg,
              #ffffff -278.56%,
              #6d6d6d -78.47%,
              #11101d 91.61%
            );
          
        --bg-gray-gradient: linear-gradient(
              153.47deg,
              rgba(255, 255, 255, 0) -341.94%,
              #14101d 95.11%
            );

        --bg-discount-gradient: linear-gradient(125.17deg, #272727 0%, #11101d 100%);

        --blue-gradient: linear-gradient(180deg, rgba(188, 165, 255, 0) 0%, #214d76 100%);
          
        --pink-gradient: linear-gradient(90deg, rgb(244, 195, 243) 0%, rgba(252, 103, 250, 0.5) 100%);

        // --white-gradient: rgba(255, 255, 255, 0.3);
        --white-gradient: linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.3) 50%, rgba(255, 255, 255, 0.5) 100%);

        // Shadow
        --card-shadow: 0px 20px 100px -10px rgba(66, 71, 91, 0.1);
        --box-shadow: 0px 20px 100px -10px rgba(66, 71, 91, 0.1);

        // Font family
        --font-family: 'Poppins', sans-serif;
        
        // Padding
        --paddingX: 0.4rem;
        --paddingX-sm: 1rem;
        --paddingY: 0.4rem;
        --paddingY-sm: 1rem;
        --padding: 0.4rem;
        --padding-sm: 1rem;

        --padding-2: 1.5rem;
        --padding-3: 2rem;
        
        // Margin
        --marginX: 0.4rem;
        --marginX-sm: 1rem;
        --marginY: 0.4rem;
        --marginY-sm: 1rem;
        --margin: 0.4rem;
        --margin-sm: 1rem;

        --margin-2: 1.5rem;
        --margin-3: 2rem;
        --margin-4: 3rem;
        --margin-5: 4rem;
        
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
        scroll-behavior: smooth;
    }
    
    body {
        margin: 0;
        padding: 0;
        font-family: var(--font-family);
        color: var(--text-dimwhite);
        // overflow-x: hidden;
    }
`;
