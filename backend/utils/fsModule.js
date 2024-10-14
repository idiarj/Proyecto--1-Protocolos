import fs from 'fs';


export async function appendToFile(filePath, data) {
    try {
        await fs.appendFileSync(filePath, data + '\n');
        return true;
    } catch (error) {
        return {success: false, error: error.message};
    }
}