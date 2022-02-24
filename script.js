const copyButton = document.querySelector('.copy');
const resetButton = document.querySelector('.reset');

const editor = ace.edit('editor');

const editorConfig = {
  inti() {
    ace.require('ace/ext/language_tools');

    editor.setTheme('ace/theme/dracula');
    editor.session.setMode('ace/mode/javascript');

    editor.setOptions({
      enableBasicAutocompletion: true,
      enableSnippets: true,
      enableLiveAutocompletion: true,
    });
  },
};

copyButton.addEventListener('click', () => {
  const doc = editor.getValue();
  console.log('doc', doc);
});

resetButton.addEventListener('click', () => {
  editor.setValue('');
});

editorConfig.inti();
