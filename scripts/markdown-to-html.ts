import glob from 'glob';
import {promisify} from 'util';
import fs from 'fs';

import marked from 'marked';
import {changeCodeCreation} from './markdown-renderer';

const readFile = promisify(fs.readFile);
// const writeFile = promisify(fs.writeFile);
const globAsync = promisify(glob);

(async function () {
  console.log('running glob: ./src/**/*.tsx');

  const tsxFiles: string[] = await globAsync('./src/**/*.tsx', {});
  const markdownFiles: string[] = await globAsync('./docs/**/*.md', {});

  if (!tsxFiles && tsxFiles.length <= 0) {
    console.log('no components found');
    return;
  }

  if (!markdownFiles && markdownFiles.length <= 0) {
    console.log('no markdown files found');
    return;
  }

  const filePromises = markdownFiles.map(async (file: string) => {
    const dest: string = file.replace('./docs/', './src/app/pages/docs/').replace('.md', '.tsx');

    if (tsxFiles.indexOf(dest) === -1) {
      return Promise.resolve();
    }

    try {
      const markdownContents: string = await readFile(file, {encoding: 'utf8'});

      const renderer = new marked.Renderer();
      changeCodeCreation(renderer);

      const htmlContents = marked(markdownContents, {
        renderer,
        headerIds: true
      });

      console.log(htmlContents);
    } catch (err) {
      console.error(file);
      throw err;
    }

  });

  await Promise.all(filePromises);

  console.log(`successfully converted ${filePromises.length} files`);
})();
