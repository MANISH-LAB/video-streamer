// Function to generate a random name
export const generateRandomName = () => {
    const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eva', 'Frank', 'Grace', 'Hank', 'Ivy', 'Jack'];
    const randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex];
};

// Function to generate a random message
export const generateRandomMessage = () => {
    const messages = [
        'Hello!',
        'How are you?',
        'What are you up to?',
        'I like programming.',
        'Have a great day!',
        'This is a random message.',
        'What is your favorite color?',
        'Coding is fun!',
        'Sending random vibes.',
        'Let\'s chat!'
    ];
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
};
