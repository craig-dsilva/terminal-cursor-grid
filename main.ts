import prompt from 'prompt';

prompt.start();

const promptsAllowed = ['u', 'd', 'l', 'r', 'p', 'e'];

const promptSchema = {
    properties: {
        input: {
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
    console.log(result.input);
});