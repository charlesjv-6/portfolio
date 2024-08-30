import { useSpeechSynthesis } from 'react-speech-kit';
const { useState, useEffect } = require("react");

const trashTalkOnLoss = [
    "You’re really terrible at this!",
    "Is this your idea of a challenge?",
    "I’ve seen better moves from a toddler!",
    "Maybe stick to something simpler!",
    "Are you even trying?",
    "Pathetic! Is this all you’ve got?",
    "I didn’t realize I was playing with a rookie!",
    "You just made losing look easy!",
    "You might want to quit while you’re behind!",
    "I could beat you with my eyes closed!"
];

const trashTalkOnDraw = [
    "A draw? Really? How pathetic!",
    "Looks like neither of us could win, how disappointing!",
    "Congrats on your mediocrity!",
    "Even in a draw, you still manage to be a letdown!",
    "A draw? That’s the best you’ve got?",
    "Well, that was a waste of time!",
    "A tie is just another way to say ‘not good enough’!",
    "Draws are for losers who can’t win!",
    "If a draw was a victory, you’d be a champion!",
    "A draw? More like a total failure!"
];

const trashTalkOnWin = [
    "Looks like you actually pulled off a win. Impressive… barely.",
    "You won? Must have been a fluke!",
    "Wow, you won! Hope you’re not too proud of that.",
    "Congrats, you managed to beat me. Don’t get used to it!",
    "Winning once doesn’t make you a champ!",
    "You got lucky this time. Enjoy it while it lasts!",
    "A win? I hope you’re not getting too cocky.",
    "Great job, but don’t expect this to happen again!",
    "You won, but it hardly feels like a victory.",
    "Well, you won. But don’t let it go to your head!"
];

function TicTacToe() {
    //const { speak } = useSpeechSynthesis();
    const emptyGrid = ["", "", "", "", "", "", "", "", ""];
    const [gridData, setGridData] = useState(emptyGrid);
    const [turn, setTurn] = useState("✕");
    const [winner, setWinner] = useState(null);
    let currentUtterance = null;
    let selectedVoice = null;

    const [score, setScore] = useState(() => {
        const savedScore = localStorage.getItem("score");
        return savedScore ? JSON.parse(savedScore) : { you: 0, me: 0 };
    });

    function getRandomMessage(arr) {
        const randomIndex = Math.floor(Math.random() * arr.length);
        return arr[randomIndex];
    }

    function displayAndSpeak(option) {
        let text;
        switch(option) {
            case "win":
                text = getRandomMessage(trashTalkOnWin);
                break;
            case "lose":
                text = getRandomMessage(trashTalkOnLoss);
                break;
            default:
                text = getRandomMessage(trashTalkOnDraw);
                break;
        }
    
        speak(text);
        return text;
    }

    function loadVoices() {
        const voices = speechSynthesis.getVoices();
        selectedVoice = voices.find(voice => voice.name === "Microsoft Liam Online (Natural) - English (Canada)");
    }
    loadVoices();

    function speak(text) {
        if (currentUtterance) {
            speechSynthesis.cancel();
        }
    
        currentUtterance = new SpeechSynthesisUtterance(text);
        currentUtterance.voice = selectedVoice;
        currentUtterance.onend = () => {
            currentUtterance = null;
        };
    
        if (speechSynthesis.speaking) {
            speechSynthesis.cancel();
        }
        speechSynthesis.speak(currentUtterance);
    }

    useEffect(() => {
        const result = checkWinner(gridData);
        if (result) {
            result === "○" ? setScore(prevScore => ({ ...prevScore, me: prevScore.me + 1 })) : setScore(prevScore => ({ ...prevScore, you: prevScore.you + 1 }));
            localStorage.setItem("score", JSON.stringify(score));
            setWinner(result);
        } else if (turn === "○" && !winner) {
            playComputerTurn();
        }
    }, [gridData, turn]);

    const isDraw = () => gridData.every(box => box !== "");

    const handleClick = (index) => {
        if (gridData[index] !== "" || winner || turn === "○") return; // Prevent further moves if there's a winner or it's not the player's turn
        const newGridData = [...gridData];
        newGridData[index] = turn;
        setGridData(newGridData);
        setTurn(turn === "○" ? "✕" : "○");
    };

    const playComputerTurn = () => {
        setTimeout(() => {
            const newGridData = [...gridData];
            const bestMove = findBestMove(newGridData);
            if (bestMove !== -1) {
                newGridData[bestMove] = "○";
                setGridData(newGridData);
                setTurn("✕");
            }
        }, 500); // 500ms delay for realism
    };
    
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

    function checkWinner(gridData) {
        const winningCombinations = [
            [0, 1, 2], // Top row
            [3, 4, 5], // Middle row
            [6, 7, 8], // Bottom row
            [0, 3, 6], // Left column
            [1, 4, 7], // Middle column
            [2, 5, 8], // Right column
            [0, 4, 8], // Diagonal from top-left
            [2, 4, 6]  // Diagonal from top-right
        ];
    
        for (let combination of winningCombinations) {
            const [a, b, c] = combination;
            if (gridData[a] && gridData[a] === gridData[b] && gridData[a] === gridData[c]) {
                return gridData[a];
            }
        }
    
        return null;
    }    

    function handleRestart() {
        setGridData(emptyGrid);
        setWinner(null);
        localStorage.setItem("score", JSON.stringify(score));
    }

    return (
        <div className="tic-tac-toe flex-column center-child padded">
            <header>
                <h1>Let's Play!</h1>
                <div className="score flex-row center-child gapped">
                    <span>[YOU ✕] {score.you}</span>
                    :
                    <span>{score.me} [○ ME]</span>
                </div>
                <div className="turn flex-row center-child gapped">
                    {!isDraw() ? (turn === "○" ? (winner === "✕" ? displayAndSpeak("win") : "MY TURN") : (winner === "○" ? displayAndSpeak("lose") : "YOUR TURN")) : displayAndSpeak("draw")}
                </div>
            </header>
            <div className="box-grid padded">
                {gridData.map((d, i) => (
                    <div key={i} className="box center-child flex-column" onClick={() => handleClick(i)}>
                        {d}
                    </div>
                ))}
            </div>
            <div className={`padded ${(winner || isDraw()) ? "" : "no-display"} flex-row center-child`}>
                <svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18.2577 3.50828C18.538 3.62437 18.7207 3.89785 18.7207 4.20119V8.44383C18.7207 8.85805 18.3849 9.19383 17.9707 9.19383H13.728C13.4247 9.19383 13.1512 9.0111 13.0351 8.73085C12.9191 8.45059 12.9832 8.128 13.1977 7.9135L14.8007 6.3105C12.1674 5.20912 9.01606 5.7309 6.87348 7.87348C4.04217 10.7048 4.04217 15.2952 6.87348 18.1265C9.70478 20.9578 14.2952 20.9578 17.1265 18.1265C18.7727 16.4803 19.4622 14.2401 19.1935 12.0937C19.142 11.6827 19.4335 11.3078 19.8445 11.2563C20.2555 11.2049 20.6304 11.4963 20.6819 11.9073C21.0057 14.4934 20.1746 17.1997 18.1872 19.1872C14.7701 22.6043 9.2299 22.6043 5.81282 19.1872C2.39573 15.7701 2.39573 10.2299 5.81282 6.81282C8.55119 4.07444 12.6515 3.5312 15.9309 5.18028L17.4404 3.67086C17.6549 3.45637 17.9774 3.3922 18.2577 3.50828Z"></path> </g></svg>
                <input type="button" className="padded radius-full transparent no-border" onClick={()=> handleRestart()} value="PLAY AGAIN"/>
            </div>
        </div>
    );
}

export default TicTacToe;
