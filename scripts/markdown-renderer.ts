import marked from 'marked';

export function changeCodeCreation(renderer: marked.Renderer) {
  renderer.code = (code, lang, _escaped) => {
    const hcl = [];
    code = code
      .split('\n')
      .map((line, index) => {
        if (line.charAt(0) === '|') {
          hcl.push(index + 1);
          return line.substring(1);
        }
        return line;
      })
      .join('<br/>');

    return `<deckgo-highlight-code language="${lang}">
      <code slot="code">${code}</code>
    </deckgo-highlight-code>`;
  };
}
