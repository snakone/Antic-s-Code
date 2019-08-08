export const ARTICLE_STYLES = `
  code {
    font-size: .7em;
    padding: 22px 15px 22px 15px;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  code::-webkit-scrollbar {
    height: 8px;
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
    margin-top: -8px;
    margin-bottom: 20px;
  }

  .copy {
    position: relative;
    background: #4c4e52;
    padding: 4px;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
  }

  .btn {
    position: relative;
    right: 7px; top: 1px;
    font-size: 1.3em;
  }

  .code-box span {
    position: relative;
    left: 14px;
    top: 25px;
    z-index: 100;
    font-size: .8em;
    font-weight: bold;
  }

  pre {
    margin: 0;
  }

  .code-img {
    max-width: 100%;
    display: block;
    margin: 10px auto;
  }

  img {
    display: block;
    margin: auto;
  }

  .image {
    max-width: 100%;
    display: block;
    margin: 20px auto;
    border-radius: 4px;
  }

  .favorites {
    margin: 25px auto;
    text-align: center;
  }

  .favorites img {
      width: 60px;
      display: inline-block;
      margin: auto 15px;
      border-radius: 5px;
  }

  p, strong {
    font-size: .8em;
  }

  ion-item {
    --padding-start: 0 !important;
    font-size: .9em
  }

  ion-list {
    margin-bottom: 20px;
  }

  ion-icon:hover {
    cursor: pointer;
  }

  .youtube-list {
    margin-top: -15px;
    margin-bottom: 0;
  }

  ion-item-divider {
    border-bottom: 0;
    font-size: 1.15em;
    margin: 30px auto 15px -15px;
  }

  @media (max-width: 600px) {
    ion-item-divider {
      font-size: 1em;
    }
  }

  ion-item-divider:before {
    content: "";
    background-image: url('https://image.flaticon.com/icons/svg/60/60758.svg');
    display: inline-block;
    margin-right: 10px;
    width: 15px;
    height: 15px;
    background-size: 100% 100%;
  }

  .copied {
    position: absolute;
    margin: 0;
    right: 48px;
    top: 8px;
    font-size: .8em;
    font-weight: bold;
    color: var(--success-color);
  }

  .mt-15 {
    margin-top: 15px;
  }

  .mt-20 {
    margin-top: 20px;
  }

  .mt-25 {
    margin-top: 25px;
  }

  .m-20 {
    margin: 20px auto;
  }

  .mb-20 {
    margin-bottom: 20px;
  }

  .mb-25 {
    margin-bottom: 25px;
  }

  .mb-35 {
    margin-bottom: 35px;
  }

  iframe {
    display: block;
    margin: 10px auto;
    margin-bottom: 20px;
    max-width: 100%;
  }

  @media (max-width: 5
    50px) {
    iframe {
      height: 235px !important;
    }
  }

  @media (min-width: 767px) and (max-width: 900px) {
    iframe {
      height: 235px !important;
    }
  }

  .center {
    text-align: center;
  }

  .margin-v {
    margin: 15px auto;
    margin-bottom: 0;
  }

  .youtube-icon {
    width: 40px;
    height: 47px;
    padding: 3px 0;
  }

  .yt-btn {
    height: 56px;
  }

  ol {
    counter-reset: my-awesome-counter;
    list-style: none;
    padding-left: 42px;
    margin-top: 25px;
    margin-bottom: 30px;
  }

  ol li {
    margin: 0 0 1.3rem 0;
    counter-increment: my-awesome-counter;
    position: relative;
    font-size: .8em;
  }

  ol li::before {
    content: counter(my-awesome-counter);
    color: var(--primary-color);
    font-size: 1rem;
    font-weight: bold;
    position: absolute;
    padding: 3px;
    margin-top: -5px;
    --size: 18px;
    left: calc(-1 * var(--size) - 22px);
    line-height: var(--size);
    width: var(--size);
    height: var(--size);
    top: 0;
    transform: rotate(-10deg);
    background: black;
    border-radius: 50%;
    text-align: center;
    box-shadow: 1px 1px 0 #999;
  }
  `;
