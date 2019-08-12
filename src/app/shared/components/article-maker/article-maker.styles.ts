export const ARTICLE_STYLES = `

* { user-select: text }

code {
  font-size: 1em !important;
  padding: 20px;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  border: 1px solid var(--section-border-color);
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
  background: #e5ddec !important;
}

.btn {
  color: var(--p-color);
  cursor: pointer
}

.btn:hover {
  transform: scale(1.1);
  transition: .2s transform ease-in;
}

.code-box span {
  color: var(--p-color);
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
  color: var(--p-color);
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
