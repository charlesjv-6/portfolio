import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    :root {
        --backgroud: ${({ theme }) => theme.background};
        --primary: ${({ theme }) => theme.primary};
        --secondary: ${({ theme }) => theme.secondary};
        --accent: ${({ theme }) => theme.accent};
        --text: ${({ theme }) => theme.text};
        --text-received: ${({ theme }) => theme.textReceived};
        --chat-sent: ${({ theme }) => theme.chatSent};
        --chat-received: ${({ theme }) => theme.chatReceived};
    }
    body {
        background-color: ${({ theme }) => theme.backgroundSecondary};
        color: ${({ theme }) => theme.text};
    }
    main, .question, .table-title, .card  {
        background-color: ${({ theme }) => theme.backgroundSecondary};
        color: ${({ theme }) => theme.text};
    }
    header {
        background-color: ${({ theme }) => theme.backgroundAccent};
    }
    input {
        background-color: ${({ theme }) => theme.backgroundPrimary};
        color: ${({ theme }) => theme.text};
    }
    a {
        color: ${({ theme }) => theme.text};
    }
    .website-info a, .card a, .card-title, .code-view button {
        background-color: ${({ theme }) => theme.text};
        color: ${({ theme }) => theme.backgroundPrimary};
    }
    .selected, .tools-table, .profile-image {
        background-color: ${({ theme }) => theme.backgroundPrimary} !important;
    }
    .input-container {
        background-color: ${({ theme }) => theme.backgroundAccent};
    }
    .side-panel, .section-container {
        background-color: ${({ theme }) => theme.backgroundAccent};
        color: ${({ theme }) => theme.text};
    }
    .screen-overlay, .answer {
        background-color: ${({ theme }) => theme.background};
    }
    .line, .separator-x, .separator-y {
        background-color: ${({ theme }) => theme.chatSent};
    }
    .line::after {
        border-left: 10px solid ${({ theme }) => theme.chatSent};  
    }
    .profile-image, #coloringCanvas {
        border: 4px solid ${({ theme }) => theme.chatSent};  
    }
    th {
        border-bottom: 2px solid ${({ theme }) => theme.chatSent};  
    }
    svg {
        fill: ${({ theme }) => theme.text};
    }
    .card svg, .code-view svg {
        fill: ${({ theme }) => theme.backgroundPrimary};
    }
    ::-webkit-scrollbar-track {
        background: ${({ theme }) => theme.backgroundSecondary};
        border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.chatSent};
        border-radius: 10px;
    }
    .code-view > pre {
        background-color: ${({ theme }) => theme.codeBackground};
        color: ${({ theme }) => theme.text};
    }
    .code-view header {
        background-color: ${({ theme }) => theme.text};
        color: ${({ theme }) => theme.codeBackground};
    }
    .reserved {
        color: ${({ theme }) => theme.reserved} !important;
    }
    .reserved-2 {
        color: ${({ theme }) => theme.reserved2} !important;
    }
    .reserved-3 {
        color: ${({ theme }) => theme.reserved3} !important;
    }
    .reserved-4 {
        color: ${({ theme }) => theme.reserved4} !important;
    }
    .reserved-5 {
        color: ${({ theme }) => theme.reserved5} !important;
    }
    .reserved-6 {
        color: ${({ theme }) => theme.reserved6} !important;
    }
`;
