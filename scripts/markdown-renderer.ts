import {promisify} from 'util';
import fs from 'fs';

const readFile = promisify(fs.readFile);

export class MarkdownRenderer {

  parse(file: string): Promise<string> {
    return new Promise<string>(async (resolve, reject) => {
      try {
        const markdownContents: string = await readFile(file, {encoding: 'utf8'});

        resolve(markdownContents);
      } catch (err) {
        reject(err);
      }
    });
  }

}
