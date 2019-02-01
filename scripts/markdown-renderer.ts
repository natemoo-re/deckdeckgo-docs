import marked from 'marked';

export function changeCodeCreation(renderer: marked.Renderer) {
  renderer.code = (code, lang, _escaped) => {
    return `<deckgo-highlight-code language="${lang}">
      <code slot="code">${code}</code>
    </deckgo-highlight-code>`;
  };
}
