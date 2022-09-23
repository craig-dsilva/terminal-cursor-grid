import prompt from 'prompt';

prompt.start({ noHandleSIGINT: false });

process.on('SIGINT', function () {
    console.log("This will execute when you hit CTRL+C");
    process.exit();
});

const promptsAllowed = ['u', 'd', 'l', 'r', 'p', 'e'];

const promptSchema = {
    properties: {
        input: {
            description: 'Provide an input',
            enum: promptsAllowed,
            message: 'Unknown input. Try again.',
            required: true
        }
    }
}

const arr = [['', '', ''], ['', '', ''], ['', '', '']];
const POS = { x: 0, y: 0 };

arr[POS.y][POS.x] = 'C';

console.log(arr);

prompt.get(promptSchema, (err, result) => {
    arr[POS.y][POS.x] = '';
    const direction = result.input;
    if (direction === 'u') {
        POS.y -= 1;
    }
    if (direction === 'd') {
        POS.y += 1;
    }
    if (direction === 'l') {
        POS.x -= 1;
    }
    if (direction === 'r') {
        POS.x += 1;
    }
    arr[POS.y][POS.x] = 'C';
    console.log(arr);
});