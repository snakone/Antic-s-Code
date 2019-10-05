export const CONTENT_STYLES = `
* { margin: 0; padding: 0 }

p {
  margin-top: 30px;
  font-size: 17px;
  line-height: 1.7;
  max-width: 42em;
  color: black;
}

p:first-child { margin-top: 20px }
p.last { margin-bottom: 3rem }

strong {
  font-size: 17px;
}

hr {
  height: 1px;
  margin-bottom: -1px;
  border: none;
  border-bottom: 1px solid #ececec;
  margin-top: 30px;
  box-sizing: content-box;
}

ul {
  margin-top: 20px;
  font-size: 16px;
  color: #1a1a1a;
  padding-left: 20px;
  list-style: disc;
  margin-left: 0;
  margin-bottom: 10px;
}

ul li {
  margin-top: 10px;
  margin-bottom: 0;
}

a {
  background-color: rgba(187,239,253,0.3);
  border-bottom: 1px solid rgba(0,0,0,0.2);
  color: #1a1a1a;
}

a:hover {
  background-color: #bbeffd;
  border-bottom-color: #1a1a1a;
}

.code {
  padding: 0 3px;
  font-size: 0.94rem;
  word-break: break-word;
  background: rgba(255,229,100,0.2);
  color: #1a1a1a;
  font-family: source-code-pro,Menlo,Monaco,Consolas,Courier New,monospace;
}

h2 {
  line-height: 1.2;
  font-size: 24px;
}

h2:before {
  content: " ";
  display: block;
  border-bottom: 1px solid #ececec;
  padding-top: 44px;
  margin-bottom: 40px;
  box-sizing: inherit;
}

h3 { font-size: 1.17rem }

h3:before {
  content: " ";
  display: block;
  padding-top: 90px;
  margin-top: -45px;
  box-sizing: inherit;
}

blockquote {
  background-color: rgba(255,229,100,0.3);
  border-left-color: #ffe564;
  border-left-width: 9px;
  border-left-style: solid;
  padding: 20px 45px 20px 26px;
  margin-bottom: 30px;
  margin-top: 20px;
}

pre {
  font-size: 14px;
  line-height: 20px;
  white-space: pre-wrap;
  word-break: break-word;
  height: auto !important;
  margin: 1rem;
}

blockquote p, blockquote p:first-child { margin-top: 0 }

@media(max-width: 550px) {
  p:first-child { margin-top: 10px }
}

@media(max-width: 992px) {
  p {
    font-size: 1rem;
    margin-top: 25px;
  }
}

@media(min-width: 1280px) {
  h2 { font-size: 35px }
  h3 { font-size: 25px }
}

img {
  max-width: 100%;
  display: block;
  margin: 1.5rem auto;
  border-radius: 4px;
}

img.inline {
  width: 50%;
  display: inline-block;
}

`;
