const fs = require('fs');
const { text } = require('micro');
const _ = require('lodash');
const { spawn } = require('child_process');

const html = content => `
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title></title>
  <meta name="author" content="">
  <meta name="description" content="">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
    .codeflask__flatten { white-space: pre-wrap !important }
  </style>
</head>

<body>

  <div id="editor" style="white-space: pre-wrap">${_.escape(content)}</div>

  <script src="https://unpkg.com/codeflask/build/codeflask.min.js"></script>
  <script>
    const code = document.getElementById("editor").textContent;
    const flask = new CodeFlask('#editor', {});
    flask.updateCode(code);
    flask.onUpdate((code) => {
      console.log('saving');
      fetch('/', { method: 'POST', body: code });
    });
  </script>
</body>

</html>
`;

const filename = process.argv[3];
const content = fs.readFileSync(filename).toString('utf-8');

module.exports = async (req, res) => {
  const data = await text(req);
  if (data) {
    fs.writeFileSync(filename, data, 'utf-8');
    console.log('saved');
    res.end('');
  } else res.end(html(content));
};

spawn('open', ['http://localhost:3000']);
