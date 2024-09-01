import React from "react";
import Main from "../components/profile/main";
import Skill from "../components/profile/skills";
import QuickContact from "../components/profile/contact/quick-contact";
import TicTacToe from "../components/tic-tac-toe";
import CodeViewer from "../components/code-view";

const codeString = `
function findBestMove(grid) {
    let bestVal = -Infinity;
    let bestMove = -1;

    for (let i = 0; i < grid.length; i++) {
        if (grid[i] === "") {
            grid[i] = "○";
            let moveVal = minimax(grid, 0, false);
            grid[i] = "";
            if (moveVal > bestVal) {
                bestMove = i;
                bestVal = moveVal;
            }
        }
    }
    return bestMove;
}

function minimax(grid, depth, isMaximizing) {
    const score = evaluate(grid);

    if (score === 10) return score - depth;
    if (score === -10) return score + depth;
    if (!grid.includes("")) return 0;

    if (isMaximizing) {
        let best = -Infinity;
        for (let i = 0; i < grid.length; i++) {
            if (grid[i] === "") {
                grid[i] = "○";
                best = Math.max(best, minimax(grid, depth + 1, false));
                grid[i] = "";
            }
        }
        return best;
    } else {
        let best = Infinity;
        for (let i = 0; i < grid.length; i++) {
            if (grid[i] === "") {
                grid[i] = "✕";
                best = Math.min(best, minimax(grid, depth + 1, true));
                grid[i] = "";
            }
        }
        return best;
    }
}

function evaluate(grid) {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let combination of winningCombinations) {
        const [a, b, c] = combination;
        if (grid[a] === grid[b] && grid[b] === grid[c]) {
            if (grid[a] === "○") return 10;
            else if (grid[a] === "✕") return -10;
        }
    }

    return 0;
}
`;
const codeStringFormatted = `

    <span class="reserved">function</span> <span class="reserved-3">findBestMove</span>(<span class="reserved-4">grid</span>) {
        <span class="reserved">let</span> <span class="reserved-4">bestVal</span> = -<span class="reserved">Infinity</span>;
        <span class="reserved">let</span> <span class="reserved-4">bestMove</span> = <span class="reserved-6">-1</span>;

        <span class="reserved-2">for</span> (<span class="reserved">let</span> <span class="reserved-4">i</span> = <span class="reserved-6">0</span>; <span class="reserved-4">i</span> < <span class="reserved-4">grid</span>.<span class="reserved-4">length</span>; <span class="reserved-4">i</span>++) {
            <span class="reserved-2">if</span> (<span class="reserved-4">grid</span>[<span class="reserved-4">i</span>] === <span class="reserved-5">""</span>) {
                <span class="reserved-4">grid</span>[<span class="reserved-4">i</span>] = <span class="reserved-5">"○"</span>;
                <span class="reserved">let</span> <span class="reserved-4">moveVal</span> = <span class="reserved-3">minimax</span>(<span class="reserved-4">grid</span>, <span class="reserved-6">0</span>, <span class="reserved">false</span>);
                <span class="reserved-4">grid</span>[<span class="reserved-4">i</span>] = <span class="reserved-5">""</span>;
                <span class="reserved-2">if</span> (<span class="reserved-4">moveVal</span> > <span class="reserved-4">bestVal</span>) {
                    <span class="reserved-4">bestMove</span> = <span class="reserved-4">i</span>;
                    <span class="reserved-4">bestVal</span> = <span class="reserved-4">moveVal</span>;
                }
            }
        }
        <span class="reserved-2">return</span> <span class="reserved-4">bestMove</span>;
    }

    <span class="reserved">function</span> <span class="reserved-3">minimax</span>(<span class="reserved-4">grid</span>, <span class="reserved-4">depth</span>, <span class="reserved-4">isMaximizing</span>) {
        <span class="reserved">const</span> <span class="reserved-4">score</span> = <span class="reserved-3">evaluate</span>(<span class="reserved-4">grid</span>);

        <span class="reserved-2">if</span> (<span class="reserved-4">score</span> === <span class="reserved-6">10</span>) <span class="reserved-2">return</span> <span class="reserved-4">score</span> - <span class="reserved-4">depth</span>;
        <span class="reserved-2">if</span> (<span class="reserved-4">score</span> === <span class="reserved-6">-10</span>) <span class="reserved-2">return</span> <span class="reserved-4">score</span> + <span class="reserved-4">depth</span>;
        <span class="reserved-2">if</span> (!<span class="reserved-4">grid</span>.<span class="reserved-3">includes</span>(<span class="reserved-5">""</span>)) <span class="reserved-2">return</span> <span class="reserved-6">0</span>;

        <span class="reserved-2">if</span> (<span class="reserved-4">isMaximizing</span>) {
            <span class="reserved">let</span> <span class="reserved-4">best</span> = -<span class="reserved">Infinity</span>;
            <span class="reserved-2">for</span> (<span class="reserved">let</span> <span class="reserved-4">i</span> = <span class="reserved-6">0</span>; <span class="reserved-4">i</span> < <span class="reserved-4">grid</span>.<span class="reserved-4">length</span>; <span class="reserved-4">i</span>++) {
                <span class="reserved-2">if</span> (<span class="reserved-4">grid</span>[<span class="reserved-4">i</span>] === <span class="reserved-5">""</span>) {
                    <span class="reserved-4">grid</span>[<span class="reserved-4">i</span>] = <span class="reserved-5">"○"</span>;
                    <span class="reserved-4">best</span> = <span class="reserved-3">Math.max</span>(<span class="reserved-4">best</span>, <span class="reserved-3">minimax</span>(<span class="reserved-4">grid</span>, <span class="reserved-4">depth</span> + <span class="reserved-6">1</span>, <span class="reserved">false</span>));
                    <span class="reserved-4">grid</span>[<span class="reserved-4">i</span>] = <span class="reserved-5">""</span>;
                }
            }
            <span class="reserved-2">return</span> <span class="reserved-4">best</span>;
        } <span class="reserved-2">else</span> {
            <span class="reserved">let</span> <span class="reserved-4">best</span> = <span class="reserved">Infinity</span>;
            <span class="reserved-2">for</span> (<span class="reserved">let</span> <span class="reserved-4">i</span> = <span class="reserved-6">0</span>; <span class="reserved-4">i</span> < <span class="reserved-4">grid</span>.<span class="reserved-4">length</span>; <span class="reserved-4">i</span>++) {
                <span class="reserved-2">if</span> (<span class="reserved-4">grid</span>[<span class="reserved-4">i</span>] === <span class="reserved-5">""</span>) {
                    <span class="reserved-4">grid</span>[<span class="reserved-4">i</span>] = <span class="reserved-5">"✕"</span>;
                    <span class="reserved-4">best</span> = <span class="reserved-3">Math.min</span>(<span class="reserved-4">best</span>, <span class="reserved-3">minimax</span>(<span class="reserved-4">grid</span>, <span class="reserved-4">depth</span> + <span class="reserved-6">1</span>, <span class="reserved">true</span>));
                    <span class="reserved-4">grid</span>[<span class="reserved-4">i</span>] = <span class="reserved-5">""</span>;
                }
            }
            <span class="reserved-2">return</span> <span class="reserved-4">best</span>;
        }
    }

    <span class="reserved">function</span> <span class="reserved-3">evaluate</span>(<span class="reserved-4">grid</span>) {
        <span class="reserved">const</span> <span class="reserved-4">winningCombinations</span> = [
            [<span class="reserved-6">0</span>, <span class="reserved-6">1</span>, <span class="reserved-6">2</span>],
            [<span class="reserved-6">3</span>, <span class="reserved-6">4</span>, <span class="reserved-6">5</span>],
            [<span class="reserved-6">6</span>, <span class="reserved-6">7</span>, <span class="reserved-6">8</span>],
            [<span class="reserved-6">0</span>, <span class="reserved-6">3</span>, <span class="reserved-6">6</span>],
            [<span class="reserved-6">1</span>, <span class="reserved-6">4</span>, <span class="reserved-6">7</span>],
            [<span class="reserved-6">2</span>, <span class="reserved-6">5</span>, <span class="reserved-6">8</span>],
            [<span class="reserved-6">0</span>, <span class="reserved-6">4</span>, <span class="reserved-6">8</span>],
            [<span class="reserved-6">2</span>, <span class="reserved-6">4</span>, <span class="reserved-6">6</span>]
        ];

        <span class="reserved-2">for</span> (<span class="reserved">let</span> <span class="reserved-4">combination</span> of <span class="reserved-4">winningCombinations</span>) {
            <span class="reserved">const</span> [<span class="reserved-4">a</span>, <span class="reserved-4">b</span>, <span class="reserved-4">c</span>] = <span class="reserved-4">combination</span>;
            <span class="reserved-2">if</span> (<span class="reserved-4">grid</span>[<span class="reserved-4">a</span>] === <span class="reserved-4">grid</span>[<span class="reserved-4">b</span>] && <span class="reserved-4">grid</span>[<span class="reserved-4">b</span>] === <span class="reserved-4">grid</span>[<span class="reserved-4">c</span>]) {
                <span class="reserved-2">if</span> (<span class="reserved-4">grid</span>[<span class="reserved-4">a</span>] === <span class="reserved-5">"○"</span>) <span class="reserved-2">return</span> <span class="reserved-6">10</span>;
                <span class="reserved-2">else if</span> (<span class="reserved-4">grid</span>[<span class="reserved-4">a</span>] === <span class="reserved-5">"✕"</span>) <span class="reserved-2">return</span> <span class="reserved-6">-10</span>;
            }
        }

        <span class="reserved-2">return</span> <span class="reserved-6">0</span>;
    }

`;


function Home() {
    return (
        <section id="home" className="radius-full padded">
            <Main />
            <QuickContact />
            <div className="separator-x"/>
            <div className="game-container padded">
                <TicTacToe />
                <CodeViewer code={codeString} formattedCode={codeStringFormatted}/>
            </div>
            <div className="separator-x"/>
            <Skill />
        </section>
    );
}

export default Home;
