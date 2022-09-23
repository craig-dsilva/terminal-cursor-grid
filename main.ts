import prompt from 'prompt';

prompt.start();

prompt.get(['input'], (err, result) => {
    console.log(result.input);
});