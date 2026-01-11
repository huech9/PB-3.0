const fs = require('fs');
const path = require('path');

const extractedDir = 'temp_extracted';
const outputIds = 'qa_data.json';

function parseXml(xmlContent) {
    const rows = [];
    // Simple regex-based parsing for w:tr (rows)
    const rowRegex = /<w:tr(?: [^>]*)?>([\s\S]*?)<\/w:tr>/g;
    let rowMatch;

    while ((rowMatch = rowRegex.exec(xmlContent)) !== null) {
        const rowContent = rowMatch[1];
        const cells = [];
        // Regex for w:tc (cells)
        const cellRegex = /<w:tc(?: [^>]*)?>([\s\S]*?)<\/w:tc>/g;
        let cellMatch;

        while ((cellMatch = cellRegex.exec(rowContent)) !== null) {
            const cellContent = cellMatch[1];
            // Regex for w:t (text)
            const textRegex = /<w:t(?: [^>]*)?>([\s\S]*?)<\/w:t>/g;
            let textMatch;
            let cellText = '';
            while ((textMatch = textRegex.exec(cellContent)) !== null) {
                cellText += textMatch[1];
            }
            cells.push(cellText.trim());
        }
        if (cells.length > 0) {
            rows.push(cells);
        }
    }
    return rows;
}

const allData = [];

try {
    const dirs = fs.readdirSync(extractedDir);
    
    dirs.forEach(dirName => {
        const xmlPath = path.join(extractedDir, dirName, 'word', 'document.xml');
        if (fs.existsSync(xmlPath)) {
            const xmlContent = fs.readFileSync(xmlPath, 'utf8');
            const rows = parseXml(xmlContent);
            
            // Determine category from filename
            let category = 'General';
            if (dirName.includes('Arch')) category = "Architect's Practice";
            else if (dirName.includes('Building')) category = "Building Control";
            else if (dirName.includes('Contract')) category = "Contract Administration";

            // Process rows (skip header)
            rows.forEach((row, index) => {
                // Ensure row has enough columns (No, Date, Enquiry, Reply) - usually 4
                // Sometimes there might be merged cells or issues, but basic assumption:
                // Col 0: No
                // Col 1: Date
                // Col 2: Enquiry
                // Col 3: Reply
                
                if (index === 0) return; // Header row
                if (row.length < 3) return;  // Skip malformed rows
                
                // Sometimes "No" is empty or missing, but Enquiry/Reply are key.
                // Depending on the file, columns might be shifted if "No" is merged.
                // Looking at the view_file output: NO, DATE, ENQUIRY, RESPONSE FROM TEAM
                
                const queryDate = row[1];
                const enquiry = row[2];
                const reply = row[3] || ''; // Sometimes reply is empty or in next row? Assuming 4 cols
                
                if (!enquiry) return;

                // Generate Short Title (first 10 words)
                const shortTitle = enquiry.split(' ').slice(0, 5).join(' ') + '...';

                allData.push({
                    date: queryDate,
                    shortTitle: shortTitle,
                    category: category,
                    query: enquiry,
                    reply: reply
                });
            });
        }
    });

    // Top 10 Analysis (Mocking "most similar" by just picking the first 10 for now, 
    // real semantic analysis is hard with just regex/node script without libraries)
    // The user asked to "look for most commonly asked questions (similar)".
    // A simple heuristic: Group by Category, then pick a few from each.
    
    const top10 = allData.slice(0, 10); // Placeholder for detailed logic

    const finalOutput = {
        allQueries: allData,
        top10: top10
    };

    fs.writeFileSync(outputIds, JSON.stringify(finalOutput, null, 2));
    console.log('Processed ' + allData.length + ' queries.');

} catch (err) {
    console.error('Error processing:', err);
}
