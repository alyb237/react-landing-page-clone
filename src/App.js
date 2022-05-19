/** @jsxImportSource @emotion/react */
import './App.css';
import { css } from '@emotion/react';

const pageContainer = css`
  line-height: 1.15;
  text-size-adjust: 100%;
  text-rendering: optimizelegibility;
  -webkit-font-smoothing: antialiased;
  color: #37352f;
  font-family: 'Public Sans', sans-serif;
  font-size: 16px;
  box-sizing: inherit;
  padding: 0px;
  margin: 0px;
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
`;
const headerStyles = css`
  line-height: 1.15;
  text-size-adjust: 100%;
  text-rendering: optimizeLegibility;
  color: #37352f;
  font-family: 'Public Sans', sans-serif;
  font-size: 16px;
  box-sizing: inherit;
  margin: 0px;
  height: 60px;
  background-color: rgb(255, 255, 255);
  display: flex;
  box-pack: justify;
  justify-content: space-between;
  box-align: center;
  align-items: center;
  padding: 0px 20px;
  border-bottom: 1px solid transparent;
`;
const accountContainer = css`
  line-height: 1.15;
  text-size-adjust: 100%;
  color: #37352f;
  font-size: 16px;
  box-sizing: inherit;
  padding: 0px;
  margin: 0px;
  flex: 1 1 0%;
  display: flex;
  box-pack: end;
  justify-content: flex-end;
`;
const logoContainer = css`
  font-weight: bold;
  line-height: 1;
  color: #37352f;
  text-decoration: none;

  div {
    box-sizing: inherit;
    padding: 0px;
    margin: 0px;
    font-weight: bold;
    line-height: 1;
    color: #37352f;
    text-decoration: none;
  }

  div > a > img {
    line-height: 1.15;
    text-size-adjust: 100%;
    text-rendering: optimizelegibility;
    -webkit-font-smoothing: antialiased;
    font-family: 'Public Sans', sans-serif;
    font-size: 16px;
    width: 36px;
    aspect-ratio: auto 36 / 32;
    height: 32px;
    box-sizing: inherit;
    padding: 0px;
    margin: 0px;
    border-style: none;
    margin-right: 20px;
  }

  div > a {
    display: flex;
    flex: 1 1 0%;
    -webkit-box-align: center;
    align-items: center;
    text-decoration: none;
  }
`;
const logoNameStyle = css`
  line-height: 1;
  font-weight: bold;
  font-family: 'Public Sans', sans-serif;
  font-size: 16px;
  box-sizing: inherit;
  padding: 0px;
  margin: 0px;
  background-color: transparent;
  display: flex;
  flex: 1 1 0%;
  box-align: center;
  align-items: center;
  text-decoration: none;
`;
const styledContainer = css`
  line-height: 1.15;
  text-size-adjust: 100%;
  text-rendering: optimizeLegibility;
  font-family: 'Public Sans', sans-serif;
  box-sizing: inherit;
  margin: 0px;
  display: inline-flex;
  box-align: center;
  align-items: center;
  box-pack: center;
  justify-content: center;
  height: 32px;
  padding: 0px 12px;
  border: 0px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  color: rgb(68, 68, 68);
  background: rgb(255, 255, 255);
  outline: none;
  transition: color 100ms ease-in 0s;
  text-decoration: none;
  text-align: left;
  white-space: nowrap;
  margin-left: 20px;
`;
const styledForm = css`
  line-height: 1.15;
  text-size-adjust: 100%;
  text-rendering: optimizeLegibility;
  font-family: 'Public Sans', sans-serif;
  box-sizing: inherit;
  margin: 0px;
  display: inline-flex;
  box-align: center;
  align-items: center;
  box-pack: center;
  justify-content: center;
  height: 32px;
  padding: 0px 12px;
  border: 0px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  background: rgb(248, 28, 229);
  outline: none;
  transition: color 100ms ease-in 0s;
  text-decoration: none;
  text-align: left;
  color: rgb(255, 255, 255);
  font-weight: bold;
  white-space: nowrap;
  margin-left: 20px;
`;
const heroStyles = css`
  text-size-adjust: 100%;
  color: #37352f;
  font-family: 'Public Sans', sans-serif;
  font-size: 16px;
  box-sizing: inherit;
  padding: 0px;
  margin: 0px;
  margin-bottom: 40px;
  text-align: center;

  h1 {
    text-align: center;
    box-sizing: inherit;
    padding: 0px;
    margin: 0px 0px 20px;
    font-size: 64px;
    line-height: 1.25;
    color: rgb(0, 0, 0);
    display: block;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
  }
`;
const mainContent = css`
  line-height: 1.15;
  text-size-adjust: 100%;
  text-rendering: optimizeLegibility;
  color: #37352f;
  font-family: 'Public Sans', sans-serif;
  font-size: 16px;
  box-sizing: inherit;
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
  margin: 0px auto;
  width: 1200px;
  padding: 0px 20px;
`;
const heroImageStyles = css`
  span {
    line-height: 1.15;
    text-size-adjust: 100%;
    color: #37352f;
    font-family: 'Public Sans', sans-serif;
    font-size: 16px;
    text-align: center;
    box-sizing: border-box;
    display: block;
    width: initial;
    height: initial;
    background: none;
    opacity: 1;
    border: 0;
    margin: 0;
    padding: 0;
    max-width: 100%;
  }

  img {
    color: #37352f;
    box-sizing: inherit;
    padding: 0px;
    margin: 0px auto;
    max-width: 420px !important;
  }
`;
const paragraphStyles = css`
  text-size-adjust: 100%;
  text-align: center;
  box-sizing: inherit;
  padding: 0px;
  margin: 0px;
  margin-bottom: 40px;
  font-size: 20px;
  line-height: 1.5;
  color: rgb(68, 68, 68);
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;

  em {
    font-style: normal;
    color: rgb(248, 28, 229);
  }
`;
const formButtonStyle = css`
  text-size-adjust: 100%;
  font-family: 'Public Sans', sans-serif;
  text-align: center;
  box-sizing: inherit;
  margin: 0px;
  position: relative;
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  height: 48px;
  padding: 0px 24px;
  border-radius: 8px;
  font-size: 17px;
  font-weight: bold;
  line-height: 1;
  background: rgb(0, 0, 0);
  color: rgb(255, 255, 255);
  text-decoration: none;
  cursor: pointer;
  transition: transform 200ms ease 0s, background 200ms ease 0s;
`;
const signUpStyles = css`
  line-height: 1.15;
  text-size-adjust: 100%;

  -webkit-font-smoothing: antialiased;
  font-family: 'Public Sans', sans-serif;
  box-sizing: inherit;
  padding: 0px;
  margin: 0px;
  margin-top: 10px;
  color: rgb(119, 119, 119);
  font-size: 13px;
  text-align: center;
`;
const headerOne = css`
  display: block;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
`;
function App() {
  return (
    <div>
      <div css={pageContainer}>
        <header css={headerStyles}>
          <div css={logoContainer}>
            <a href="/">
              <img src="/logo.png" alt="Tally" width="36" height="32" />
              <div css={logoNameStyle}>Tally</div>
            </a>
          </div>
          <div css={accountContainer}>
            <a href="https://tally.so/pricing" css={styledContainer}>
              <span>Pricing</span>
            </a>
            <a href="https://tally.so/login" css={styledContainer}>
              <span>Log in</span>
            </a>
            <a href="https://tally.so/signup" css={styledContainer}>
              <span>Sign up</span>
            </a>
            <a href="https://tally.so/create" css={styledForm}>
              <span>Create form</span>
            </a>
          </div>
        </header>
      </div>
      <main css={mainContent}>
        <div css={heroStyles}>
          <div css={heroImageStyles}>
            <span>
              <img alt="Tally forms" src="/forms.png" />
            </span>
            <h1 css={headerOne}>The simplest way to create forms</h1>
            <p css={paragraphStyles}>
              Create forms for all purposes in seconds.
              <br />
              Without knowing how to code, <em>and for free!</em>
            </p>
            <a
              value="Create form"
              href="https://tally.so/create"
              css={formButtonStyle}
            >
              <div>Create form</div>
            </a>
            <div css={signUpStyles}>No signup required</div>
          </div>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <footer>footer</footer>
      </main>
    </div>
  );
}

export default App;
