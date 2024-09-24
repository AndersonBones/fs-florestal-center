import { createStitches } from "@stitches/react";

export const { config,
    styled, globalCss,
    keyframes,
    getCssText,
    theme,

    createTheme } = createStitches({
        media: {
            sm: '(max-width: 35em) ', // 560px
            md: '(max-width: 65em) ', // 1040px
            lg: '(max-width: 72em) ', // 992px
            xl: '(max-width: 80em) ', // 1280px
            '2xl': '(max-width: 96em) ', // 1536px
        },

        theme: {

            colors: {
                white: '#fff',
                yellow_fs:"#F7D21E",
                green_fs:'#1B7754',
                green_light:"#79AB2B"
            },

            fontSizes: {
                sm: '0.80rem',
                md2: '1rem',
                md: '1.125rem',
                lg: '1.25rem',
                lx: '1.5rem',
                '2xl': "2rem"
            },

        }


    })