import marked from 'marked';

export function changeCodeCreation(renderer: marked.Renderer) {
  renderer.code = function (code, lang, escaped) {
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
      .join('\n');

    return `<deckgo-highlight-code language="${escape(lang)}">
      <code slot="code">${(escaped ? code : escape(code))}</code>
    </deckgo-highlight-code>`;
  };
}
