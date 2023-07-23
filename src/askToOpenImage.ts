import readline from 'readline';

export const askToOpenImage = async (): Promise<boolean> => {
  const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    terminal.question(
      'Do you want to see an image? (0) No, (1) Yes: ',
      (userInput) => {
        terminal.close();
        resolve(userInput === '1');
      },
    );
  });
};
