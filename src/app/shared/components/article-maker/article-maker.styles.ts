export const ARTICLE_STYLES = `
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

  .code-box {
    margin: 30px auto;
  }

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

  pre {
    margin: 0;
  }

  img {
    display: block;
    margin: auto;
  }

  p { color: var(--p-color) }

  .image {
    max-width: 100%;
    display: block;
    margin: 20px auto;
    border-radius: 4px;
  }

  .copied {
    position: relative;
    margin: 0;
    font-weight: bold;
    color: var(--light-color);
  }
`;
