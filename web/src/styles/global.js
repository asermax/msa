import './fontawesome'
import { css } from '@emotion/core'
import { colors } from './util'

export const globalStyles = css`
  /*!
 * Milligram v1.3.0
 * https://milligram.github.io
 *
 * Copyright (c) 2017 CJ Patoilo
 * Licensed under the MIT license
 */

  *,
  *:after,
  *:before {
    box-sizing: inherit;
  }

  html {
    height: 100vh;
    box-sizing: border-box;
    font-size: 62.5%;
  }

  body {
    height: 100vh;
    margin: 0;
    color: #606c76;
    font-family: "Roboto", "Helvetica Neue", "Helvetica", "Arial",
      sans-serif;
    font-size: 1.6em;
    font-weight: 300;
    letter-spacing: 0.01em;
    line-height: 1.6;
  }

  #root {
    height: 100vh;
  }

  blockquote {
    border-left: 0.3rem solid ${colors.borderGray};
    margin-left: 0;
    margin-right: 0;
    padding: 1rem 1.5rem;
  }

  blockquote *:last-child {
    margin-bottom: 0;
  }

  button,
  input[type="button"],
  input[type="reset"],
  input[type="submit"] {
    background-color: #9b4dca;
    border: 0.1rem solid #9b4dca;
    border-radius: 0.4rem;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    font-size: 1.1rem;
    font-weight: 700;
    height: 3.8rem;
    letter-spacing: 0.1rem;
    line-height: 3.8rem;
    padding: 0 3rem;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    white-space: nowrap;
  }

  button:focus,
  button:hover,
  input[type="button"]:focus,
  input[type="button"]:hover,
  input[type="reset"]:focus,
  input[type="reset"]:hover,
  input[type="submit"]:focus,
  input[type="submit"]:hover {
    background-color: #606c76;
    border-color: #606c76;
    color: #fff;
    outline: 0;
  }

  button[disabled],
  input[type="button"][disabled],
  input[type="reset"][disabled],
  input[type="submit"][disabled] {
    cursor: default;
    opacity: 0.5;
  }

  button[disabled]:focus,
  button[disabled]:hover,
  input[type="button"][disabled]:focus,
  input[type="button"][disabled]:hover,
  input[type="reset"][disabled]:focus,
  input[type="reset"][disabled]:hover,
  input[type="submit"][disabled]:focus,
  input[type="submit"][disabled]:hover {
    background-color: #9b4dca;
    border-color: #9b4dca;
  }

  code {
    background: #f4f5f6;
    border-radius: 0.4rem;
    font-size: 86%;
    margin: 0 0.2rem;
    padding: 0.2rem 0.5rem;
    white-space: nowrap;
  }

  pre {
    background: #f4f5f6;
    border-left: 0.3rem solid #9b4dca;
    overflow-y: hidden;
  }

  pre > code {
    border-radius: 0;
    display: block;
    padding: 1rem 1.5rem;
    white-space: pre;
  }

  hr {
    border: 0;
    border-top: 0.1rem solid #f4f5f6;
    margin: 3rem 0;
  }

  select {
    background: url('data:image/svg+xml;utf8,
    <svg xmlns="http://www.w3.org/2000/svg" height="14" viewBox="0 0 29 14" width="29">
    <path fill="${colors.borderGray}" d="M9.37727 3.625l5.08154 6.93523L19.54036 3.625"/>
    </svg>');
      center right no-repeat;
    padding-right: 3rem;
  }

  select:focus {
    background-image: url('data:image/svg+xml;utf8,
    <svg xmlns="http://www.w3.org/2000/svg" height="14" viewBox="0 0 29 14" width="29">
    <path fill="#9b4dca" d="M9.37727 3.625l5.08154 6.93523L19.54036 3.625"/>
    </svg>');
  }

  textarea {
    min-height: 6.5rem;
  }

  label,
  legend {
    display: block;
    font-size: 1.6rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  fieldset {
    border-width: 0;
    padding: 0;
  }

  input[type="checkbox"],
  input[type="radio"] {
    display: inline;
  }

  a {
    color: #9b4dca;
    text-decoration: none;
  }

  a:focus,
  a:hover {
    color: #606c76;
  }

  dl,
  ol,
  ul {
    list-style: none;
    margin-top: 0;
    padding-left: 0;
  }

  dl dl,
  dl ol,
  dl ul,
  ol dl,
  ol ol,
  ol ul,
  ul dl,
  ul ol,
  ul ul {
    font-size: 90%;
    margin: 1.5rem 0 1.5rem 3rem;
  }

  ol {
    list-style: decimal inside;
  }

  ul {
    list-style: circle inside;
  }

  button,
  dd,
  dt,
  li {
    margin-bottom: 1rem;
  }

  blockquote,
  dl,
  figure,
  form,
  ol,
  p,
  pre,
  table,
  ul {
    margin-bottom: 2.5rem;
  }

  table {
    border-spacing: 0;
    width: 100%;
  }

  td,
  th {
    border-bottom: 0.1rem solid #e1e1e1;
    padding: 1.2rem 1.5rem;
    text-align: left;
  }

  b,
  strong {
    font-weight: bold;
  }

  p {
    margin-top: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 300;
    letter-spacing: -0.1rem;
    margin-bottom: 2rem;
    margin-top: 0;
  }

  h1 {
    font-size: 4.6rem;
    line-height: 1.2;
  }

  h2 {
    font-size: 3.6rem;
    line-height: 1.25;
  }

  h3 {
    font-size: 2.8rem;
    line-height: 1.3;
  }

  h4 {
    font-size: 2.2rem;
    letter-spacing: -0.08rem;
    line-height: 1.35;
  }

  h5 {
    font-size: 1.8rem;
    letter-spacing: -0.05rem;
    line-height: 1.5;
  }

  h6 {
    font-size: 1.6rem;
    letter-spacing: 0;
    line-height: 1.4;
  }

  img {
    max-width: 100%;
  }
`
