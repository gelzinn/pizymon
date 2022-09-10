import { css } from "styled-components";

export const Variables = css`
  :root {
    // Font
    --font-main: "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;

    // Colors
    --background: #141214;
    --background-navbar: rgba(18, 18, 20, 0.75);

    --white: #fff;
    --black: #000;
    --lavander-gray: #c7bdc7;
    --heliotrope-gray: #b4a7b4;
    --black-coffee: #372f37;
    --raisin-black: #221e22;
    --english-violet: #44355b;
    --english-violet-50: #44355b50;
    --dark-purple: #31263e;
    --marigold: #eca72c;
    --flame: #ee5622;

    --gray: #e1e1e6;
    --text: #a8a8b3;
    --base-text: #c4c4cc;
    --support: #737380;
    --shape: #202024;
    --shape-light: #28282d;
    --shape-light-lowopacity: #28282d50;
    --shape-dark: #3c3c42;
    --shape-dark-lowopacity: #3c3c4225;
    --shape-hover: #29292e;
    --icons: #41414d;
    --attention: #fd951f;
    --borders: #323238;
    --success: #1a8e28;
    --success-lowopacity: #1a8e2820;
    --error: #b63535;
    --error-lowopacity: #b6353520;
    --primary: #8257e5;
    --primary-hover: #8257e570;
    --primary-lowopacity: #8257e520;
    --secondary: #996dff;
    --secondary-hover: #996dff70;
    --secondary-lowopacity: #996dff20;
    --tertiary: #8e37d7;
    --tertiary-hover: #8e37d770;
    --tertiary-lowopacity: #8e37d720;
    --quartenary: #ea4c89;
    --pizy-yellow: #f6f884;
    --pizy-yellow-lowopacity: #f6f88450;

    // Rarity
    --legendary: #b5a44b;
    --epic: #a725e4;
    --rare: #3f52fc;

    // Other Values
    --max-width: 900px;
    --transition: 0.2s ease;
    --transition-medium: 0.35s ease-in-out;
    --transition-low: 0.5s ease;
    --transition-turtle: 0.75s ease;
    --transition-slowest: 3s ease-in-out;
  }
`;
