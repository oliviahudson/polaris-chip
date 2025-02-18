import { LitElement, html, css } from 'lit';
import "@haxtheweb/meme-maker/meme-maker.js";

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "Eagles";
    this.image = "https://seeklogo.com/images/P/philadelphia-eagles-logo-D89E5A4457-seeklogo.com.png"
    this.link = "https://www.philadelphiaeagles.com/"
    this.description = "The Philadelphia Eagles are a professional American football team based in Philadelphia. The Eagles compete in the National Football League as a member club of the league's National Football Conference East division."
    this.fancy = false;
    console.log(this.fancy)
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }

      :host([fancy]) {
        display: block;
        background-color: pink;
        border: 2px solid fuchsia;
        box-shadow: 10px 5px 5px red;
      }

      .card.toggled {
        background-color: blue;
        color: black;
      }

      .card { 
        background-color: white;
        width: 400px;
        text-align: center;
        border-radius: 10px;
        padding: 16px;
        border: 2px solid #ddd;
        padding: 16px;
        margin: 20px;
      }

      .cardTitle { 
        font-size: 24px;
        margin-top: 12px;
      }

      .cardImage {
        width: 100%;
        height: auto;
        border-radius: 8px;
      }

      .cardDescription {
        font-size: 16px;
        margin-top: 16px;
      }

      .detailsBtn, .control-wrapper button {
        background-color:rgb(36, 144, 40);
        color: white;
        padding: 10px 15px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s;
      }
      
      .detailsBtn:hover, .control-wrapper button:hover{
        background-color: #006400;
      }

      .detailsBtn a {
        color: white;
        text-decoration: none;
      }

      .control-wrapper
      {
        margin-bottom: 20px;
      }

      .control-wrapper button
      {
        margin: 5px;
      }

      .fancy 
      {
        background-color: #90EE90;
      }

    `;
  }

  // put this anywhere on the MyCard class; just above render() is probably good
  openChanged(e) {
    console.log(e.newState);
    if (e.newState === "open") {
      this.fancy = true;
    }
    else {
      this.fancy = false;
    }
  }

  render() {
    return html`
      <div class = "card">
        <h1 class="cardTitle">${this.title}</h1>
        <img class="cardImage" src="${this.image}" alt="">
        <details ?open="${this.fancy}" @toggle="${this.openChanged}">
          <summary>Description</summary>
          <div>
            <p class="cardDescription">${this.description}</p>
            <a href =${this.link} target="_blank">
              <button class="detailsBtn"><em>Link for More Info</em></button>
            </a>
          </div>
        </details>
      </div>`;
  }

  static get properties() {
    return {
      title: { type: String },
      image: { type: String },
      link: { type: String },
      description: { type: String },
      fancy: { type: Boolean, reflect: true}
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
