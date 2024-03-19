import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
    }

    :root {
        --primary-color: #007bff;
        --primary-color2: 'color: rgba(0, 123, 255, 0.5)';
        --primary-color3: 'color: rgba(0, 123, 255, 0.1)';
        --color-green: #28a745;
        --color-grey: #6c757d;
        --color-accent: #17a2b8;
        --color-delete: #dc3545;
    }
    body {
        font-family: 'Nunito', sans-serif;
        background-color: #f4f4f4;
    }
`;