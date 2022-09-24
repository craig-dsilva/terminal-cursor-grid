import prompt from 'prompt';

const promptsAllowed = ['u', 'd', 'l', 'r', 'p', 'e'];

const promptSchema = {
    properties: {
        direction: {
            description: 'Provide an input',
            enum: promptsAllowed,
            message: 'Unknown input. Try again.',
            required: true
        }
    }
}

const arr: string[][] = [];
for (let i = 0; i < 10; i++) {
    arr[i] = []
    for (let j = 0; j < 10; j++) {
        arr[i][j] = '';
    }
}
const POS = { x: 0, y: 0 };

let running = true;

const moveCursor = async () => {
    const input = await prompt.get(promptSchema);
    arr[POS.y][POS.x] = '';
    if (input.direction === 'u' && POS.y > 0) {
        POS.y -= 1;
    }
    if (input.direction === 'd' && POS.y < 9) {
        POS.y += 1;
    }
    if (input.direction === 'l' && POS.x > 0) {
        POS.x -= 1;
    }
    if (input.direction === 'r' && POS.x < 9) {
        POS.x += 1;
    }
    arr[POS.y][POS.x] = 'C';
    if (input.direction === 'p') {
        console.log(arr)
    }
    if (input.direction === 'e') {
        running = false
    }

}

const drawBoard = async () => {
    do {
        await moveCursor();
    } while (running)
}

drawBoard();
