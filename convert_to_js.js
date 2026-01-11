const fs = require('fs');
try {
    const data = fs.readFileSync('qa_data.json', 'utf8');
    // Prepend variable declaration to make it a valid JS script
    const jsContent = `const qaData = ${data};`;
    fs.writeFileSync('qa_data.js', jsContent);
    console.log('Successfully created qa_data.js');
} catch (err) {
    console.error('Error converting JSON to JS:', err);
}
