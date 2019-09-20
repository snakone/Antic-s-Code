export const CONTENT_STYLES = `
.normal {
  font-weight: normal;
  font-size: 1.3rem;
 }

ol {
  padding-left: var(--small-padding);
  margin-top: 1rem;
  margin-bottom: 1.5rem;
}

ul {
  padding-left: var(--small-padding);
  list-style-type: circle;
  margin: .5rem auto;
}

.margin { margin: 1.5rem auto }

li {
  margin: .5rem auto;
  font-size: .9rem;
}

@media(max-width: 550px) { li, li .black { font-size: .8rem !important } }

p { margin: 0 }

p:last-child {
  margin-bottom: .3rem;
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

.black { color: black !important }
`;
