export const ARTICLE_STYLES = `

* { user-select: text }

code {
  font-size: 1em !important;
  padding: 20px;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  border: 1px solid #e3e6ef;
  border-top: 0;
  box-sizing: border-box;
  cursor: pointer;
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
}

.btn {
  color: var(--light-color);
  cursor: pointer
}

.code-box span {
  color: var(--light-color);
  font-weight: bold;
  font-size: 1.2rem;
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
  position: relative;
  margin: 0;
  font-weight: bold;
  color: var(--light-color);
}

h4 {
  margin-top: 3rem;
  margin-bottom: 1rem;
  font-size: 1.3rem;
  @media(max-width: 650px) { font-size: 1.1rem }
}

ol {
  padding-left: 20px;
  margin: 1.5rem auto;
}
`;
