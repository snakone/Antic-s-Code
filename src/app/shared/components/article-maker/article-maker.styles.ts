export const ARTICLE_STYLES = `

* { user-select: text }

code {
  font-size: 1em !important;
  padding: 20px;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  border-top: 0;
  box-sizing: border-box;
  cursor: pointer;
  font-weight: bold;
}

code::-webkit-scrollbar {
  height: 10px;
  display: block;
}

code::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 3px rgba(0,0,0,0.3);
  border-radius: 5px;
}

code::-webkit-scrollbar-thumb {
  border-radius: 5px;
  -webkit-box-shadow: inset 0 0 3px var(--primary-color);
}

.code-box { margin: 30px auto }

.copy {
  padding: 8px 20px;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  background: #a4a7b2;
}

.code-description {
  border-bottom: 2px solid var(--section-border-color);
  margin-bottom: 2.2rem;
}

.description {
  margin-top: 0;
  margin-bottom: 12px;
}

.code-tags {
  margin-top: 15px;
  margin-bottom: -18px;
}

.btn {
  color: #1C1D21;
  cursor: pointer
}

.btn:hover {
  transform: scale(1.1);
  transition: .2s transform ease-in;
}

.code-box span {
  color: #1C1D21;
}

pre { margin: 0 }

p {
  color: var(--p-color);
  line-height: 1.5rem;
 }

p.first::first-letter {
  font-size: 2rem;
  color: var(--primary-color);
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

.copied {
  position: absolute;
  margin: 0;
  right: 15px;
  margin-top: -45px;
  padding: 1px 16px;
  padding-bottom: 3px;
  border-radius: 10%;
  font-weight: bold;
  color: var(--light-color);
  background: var(--tag-color);
}

@media(max-width: 550px) {
  .copied { right: 0 }
}

.copied:after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: 13px;
  border-width: 6px;
  border-style: solid;
  border-color: var(--tag-color) transparent transparent transparent;
}

h3 {
  font-size: 1.3rem;
  margin-top: 2rem;
  margin-bottom: .6667rem;
}

h4 {
  margin-top: 3rem;
  margin-bottom: 1rem;
  font-size: 1.3rem;
  @media(max-width: 650px) { font-size: 1.1rem }
}

.normal {
  font-weight: normal;
  font-size: 1.3rem;
 }

ol {
  padding-left: 20px;
  margin: 1.5rem auto;
}
`;
