export const ARTICLE_STYLES = `
.normal {
  font-weight: normal;
  font-size: 1.3rem;
 }

ol {
  padding-left: 16px;
  margin-top: .1rem;
  margin-bottom: 1.5rem;
}

li { margin: 10px auto }

@media(max-width: 550px) { li { font-size: .9rem !important } }

p { margin: 0 }

p:last-child {
  margin-bottom: .3rem;
}

img {
  max-width: 100%;
  display: block;
  margin: 2rem auto;
  border-radius: 4px;
}

img.inline {
  width: 50%;
  display: inline-block;
}
`;
