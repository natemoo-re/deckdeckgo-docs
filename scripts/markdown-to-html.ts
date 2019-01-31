import glob from 'glob';
import {promisify} from 'util';

import {MarkdownRenderer} from './markdown-renderer';

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

    const renderer: MarkdownRenderer = new MarkdownRenderer();
    const markdownHtmlContents: string = await renderer.parse(file);

    console.log(markdownHtmlContents);

  });

  await Promise.all(filePromises);

  console.log(`successfully converted ${filePromises.length} files`);
})();
