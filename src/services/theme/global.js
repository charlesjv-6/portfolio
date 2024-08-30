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
    main, .question, .table-title  {
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
    .selected, .tools-table {
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
    ::-webkit-scrollbar-track {
        background: ${({ theme }) => theme.backgroundSecondary};
        border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.chatSent};
        border-radius: 10px;
    }
`;
