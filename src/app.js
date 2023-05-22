console.log("James' Widget");

let openedWidget = false;
function openIframe() {
  var x = document.getElementById("yunoBg");
  x.style.display === "none"
    ? (x.style.display = "flex")
    : (x.style.display = "none");
  document.getElementById("yunoMessageBubble").style.display = "none";
  document.getElementById("yunoBubbleTip").style.display = "none";
}

const widgetHTML = `
    <style>
      #yunoBg {
        z-index: 999999 !important;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.6);
        position: fixed;
        top: 0px;
        left: 0px;
      }
      #yunoIframe {
        width: 100%;
        height: 100%;
      }
      #yunoWidget {
        z-index: 999999 !important;
        position: fixed;
        bottom: 16px;
        right: 50%;
        transform: translateX(50%);
        height: 60px;
        width: 60px;
        background-color: #4eaea5;
        display: flex;
        border-radius: 3rem;
        justify-content: center;
        align-items: center;
        transition: all 100ms ease-in-out 0s;
        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.6);
      }
      #yunoWidget:hover {
        cursor: pointer;
        width: 65px;
        height: 65px;
        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.9);
      }
      #yunoWidget > svg {
        width: 15px;
        height: 8px;
        position: absolute;
        bottom: 54px;
        z-index: 999999999 !important;
      }
      #yunoContainer {
        z-index: 9999999 !important;
        position: fixed;
        display: flex;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        width: 90%;
        height: 80vh;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
        padding: 2rem 3px 8px 3px;
        border-radius: 2px;
        background-color: #4eaea5;
      }
      #yunoCross {
        position: fixed;
        top: 0rem;
        right: 0.5rem;
        padding: 0.3rem;
        margin: 0px;
      }
      #yunoCross:hover {
        cursor: pointer;
      }
      #yunoMessageBubble {
        display: flex;
        flex-direction: column;
        position: absolute;
        bottom: 60px;
        width: max-content;
        border-radius: 0.5rem;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
        background-color: #fff;
        padding: 1rem;
      }
      #yunoBubbleTitle {
        font-size: larger;
        margin: 0px;
      }
      #yunoBubbleText {
          padding-top: 5px;
        font-size: medium;
        margin: 0px;
      }
    </style>

    <div id="yunoBg" style="display: none" onClick="openIframe()">
      <div id="yunoContainer">
        <p id="yunoCross">&#10006;</p>
        <iframe id="yunoIframe" src="https://hmo.goyuno.com"></iframe>
      </div>
    </div>
    <div id="yunoWidget" onclick="openIframe()">
      <svg id="yunoBubbleTip" width="28" height="6">
        <path
          fill="#fff"
          d="M14.071.485c.891 0 1.337 1.077.707 1.707l-6.07 6.071a1 1 0 0 1-1.415 0l-6.071-6.07c-.63-.63-.184-1.708.707-1.708H14.07Z"
        />
      </svg>
      <div id="yunoMessageBubble">
        <h1 id="yunoBubbleTitle"></h1>
        <p id="yunoBubbleText"></p>
      </div>
      <img
        src="https://yuno-assets.s3.eu-west-2.amazonaws.com/YunoWidget.gif"
        height="50px"
        width="50px"
      />
    </div>
`;
const htmlWidget = document.getElementById("yuno-widget");
htmlWidget.innerHTML = widgetHTML;
const widgetAttributes = htmlWidget.attributes;
document.getElementById("yunoBubbleTitle").innerText =
  widgetAttributes.getNamedItem("title").value;
document.getElementById("yunoBubbleText").innerText =
  widgetAttributes.getNamedItem("text").value;
