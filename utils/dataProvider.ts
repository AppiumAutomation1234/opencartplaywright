import fs from 'fs';
import { parse } from 'csv-parse/sync';

export class DataProvider {

    static async getTestDataFromJson(filePath: string) {
        let data: any = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
        return data;
    }
}