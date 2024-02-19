const stillImage_customerIds = [34];

function openYunoIframe() {
  var x = document.getElementById("yunoBg");
  x.style.display === "none"
    ? (x.style.display = "flex")
    : (x.style.display = "none");
  var x = document.getElementById("yunoWidgetAlt");
  x.style.display === "none"
    ? (x.style.display = "flex")
    : (x.style.display = "none");
  var x = document.getElementById("yunoWidgetImg");
  x.style.display === "none"
    ? (x.style.display = "flex")
    : (x.style.display = "none");
  document.getElementById("yunoMessageBubble").style.display = "none";
  document.getElementById("yunoBubbleTip").style.display = "none";
}

const widgetHTML = `
  <style>
    :root {
      --yunoWidgetPrimaryColor: #4EAEA5;
    }
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
      background-color: var(--yunoWidgetPrimaryColor);
      display: flex;
      border-radius: 3rem;
      justify-content: center;
      flex-direction: column;
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
    #yunoBubbleTipContainer {
      display: flex;
      justify-content: center;
    }
    #yunoBubbleTipContainer > svg {
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
      background-color: var(--yunoWidgetPrimaryColor);
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
      max-width: 70vw;
    }
    #yunoBubbleTitle {
      font-size: larger;
      margin: 0px;
      padding: 0px;
    }
    #yunoBubbleText {
        padding-top: 5px;
      font-size: medium;
      margin: 0px;
    }
    #bubbleTitleContainer {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    #bubbleTitleContainer > svg {
        padding-right: 4px;
        height: 24px;
        width: 24px;
    }
    #yunoCloseMessage {
        position: absolute;
        z-index: 10000000 !important;
        top: -16px;
        width: 32px;
        height: 32px;
        right: -12px;
        background-color: var(--yunoWidgetPrimaryColor);
        border-radius: 32px;
    }
    #yunoWidgetAlt {
      width: 64px;
      height: 64px;
      position: absolute;
    }
  </style>

  <div id="yunoBg" style="display: none" onClick="openYunoIframe()">
    <div id="yunoContainer">
      <p id="yunoCross">&#10006;</p>
      <iframe id="yunoIframe" src="https://app.goyuno.com"></iframe>
    </div>
  </div>
  <div id="yunoWidget" onclick="openYunoIframe()">
    <div id="yunoBubbleTipContainer">
      <svg id="yunoBubbleTip" width="28" height="6">
        <g filter="url(#a)">
          <path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="m37.5 22.5-15 15m0-15 15 15"/>
        </g>
        <defs>
          <filter id="a" width="60" height="60" x="-2" y="-1" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
            <feOffset dy="1"/>
            <feGaussianBlur stdDeviation="1"/>
            <feColorMatrix values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0"/>
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_11100_61637"/>
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_11100_61637" result="shape"/>
          </filter>
        </defs>
      </svg>
    </div>
    <div id="yunoMessageBubble">
      <div onClick="yunoClose(event)">    
          <svg id="yunoCloseMessage" onClick="yunoClose(event)" xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="none" viewBox="0 0 64 64">
            <g filter="url(#a)">
              <path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="m37.5 22.5-15 15m0-15 15 15"/>
            </g>
            <defs>
              <filter id="a" width="60" height="60" x="0" y="0" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                <feOffset dy="1"/>
                <feGaussianBlur stdDeviation="1"/>
                <feColorMatrix values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0"/>
                <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_11100_61637"/>
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_11100_61637" result="shape"/>
              </filter>
            </defs>
          </svg>
      </div>
      <div id="bubbleTitleContainer">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
              <path stroke="#344054" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14 11.867V7.044c0-.383 0-.574-.05-.75a1.332 1.332 0 0 0-.211-.434c-.11-.147-.26-.265-.563-.5h0L8.655 1.843c-.234-.182-.351-.273-.48-.308a.667.667 0 0 0-.35 0c-.129.035-.246.126-.48.308L2.824 5.36c-.303.235-.454.353-.563.5-.096.13-.168.277-.212.433C2 6.47 2 6.661 2 7.043v4.824c0 .747 0 1.12.145 1.405.128.251.332.455.583.583.285.146.659.146 1.405.146h7.734c.746 0 1.12 0 1.405-.146.25-.128.455-.332.583-.582.145-.286.145-.66.145-1.406ZM8 6v2.667m0 2.666h.007"/>
          </svg>
          <h1 id="yunoBubbleTitle"></h1>
      </div>
      <p id="yunoBubbleText"></p>
    </div>
    <img
      id="yunoWidgetImg"
      src="https://yuno-assets.s3.eu-west-2.amazonaws.com/YunoWidget.gif"
      height="50px"
      width="50px"
    />
    <svg id="yunoWidgetAlt" style="display: none;" xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="none" viewBox="0 0 64 64">
      <g filter="url(#a)">
        <path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="m37.5 22.5-15 15m0-15 15 15"/>
      </g>
      <defs>
        <filter id="a" width="64" height="64" x="-2" y="-1" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
          <feOffset dy="1"/>
          <feGaussianBlur stdDeviation="1"/>
          <feColorMatrix values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0"/>
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_11100_61637"/>
          <feBlend in="SourceGraphic" in2="effect1_dropShadow_11100_61637" result="shape"/>
        </filter>
      </defs>
  </svg>
  </div>
`;

const executeCode = () => {
  const htmlWidget = document.getElementById("yuno-widget");
  htmlWidget.innerHTML = widgetHTML;
  const widgetAttributes = htmlWidget.attributes;
  document.getElementById("yunoBubbleTitle").innerText =
    widgetAttributes.getNamedItem("title").value;
  document.getElementById("yunoBubbleText").innerText =
    widgetAttributes.getNamedItem("text").value;

  const widgetImg = document.getElementById("yunoWidgetImg");

  const widgetUrl = widgetAttributes.getNamedItem("url").value;

  document.getElementById("yunoIframe").setAttribute("src", widgetUrl);

  const getColours = async (url) => {
    const response = await fetch(
      `https://api.uat.goyuno.com/customers/${encodeURIComponent(url)}`,
      {
        headers: {
          Origin: url,
        },
      }
    );
    const {
      data: { primaryColour, secondaryColour, customerId },
    } = await response.json();

    if (stillImage_customerIds.includes(customerId)) {
      widgetImg.setAttribute(
        "src",
        "https://yuno-assets.s3.eu-west-2.amazonaws.com/YunoWidgetStill.gif"
      );
    }

    let r = document.querySelector(":root");
    if (primaryColour) {
      r.style.setProperty("--yunoWidgetPrimaryColor", primaryColour);
    }
  };

  getColours(widgetUrl);
};

function yunoClose(e) {
  e.stopPropagation();
  document.getElementById("yunoMessageBubble").style.display = "none";
  document.getElementById("yunoBubbleTip").style.display = "none";
}

if (document.readyState !== "loading") {
  executeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    executeCode();
  });
}
