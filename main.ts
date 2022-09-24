import prompt from "prompt";
import chalk from "chalk";

const promptsAllowed = ["u", "d", "l", "r", "p", "e"];

const promptSchema = {
    properties: {
        direction: {
            description: "Provide an input",
            enum: promptsAllowed,
            message: "Unknown input. Try again.",
            required: true,
        },
    },
};

// Array for positioning the cursor
const arr: string[][] = [];

// Loops to populate the array
for (let i = 0; i < 10; i++) {
    arr[i] = [];
    for (let j = 0; j < 10; j++) {
        arr[i][j] = "";
    }
}

// Position of the cursor
const POS = { x: 0, y: 0 };

// Variable to kill the app
let running = true;

const boardControl = async () => {
    const input = await prompt.get(promptSchema);

    // Removes the cursor from the board
    arr[POS.y][POS.x] = "";

    // Directions
    if (input.direction === "u" && POS.y > 0) {
        POS.y -= 1;
    }

    if (input.direction === "d" && POS.y < 9) {
        POS.y += 1;
    }

    if (input.direction === "l" && POS.x > 0) {
        POS.x -= 1;
    }

    if (input.direction === "r" && POS.x < 9) {
        POS.x += 1;
    }

    // Adds the cursor to the board 
    arr[POS.y][POS.x] = "C";

    // Prints the output
    if (input.direction === "p") {
        for (let i = 0; i < arr.length; i++) {
            console.log(`
        ${arr[i].map(y => {
                if (y === 'C') {
                    return chalk.bgGray(" ")
                }
                else {
                    return chalk.bgBlack(" ")
                }
            }).join(" ")
                }
        `)
        }
    }

    // Closes the app using the while condition below
    if (input.direction === "e") {
        running = false;
    }
};

const main = async () => {
    do {
        await boardControl();
    } while (running);
};

main();
