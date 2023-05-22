import Alpine from "alpinejs";

// import widget template
import widgetHTML from "./../widget.html";

const initAlpine = () => {
  document.addEventListener("DOMContentLoaded", function () {
    // If Alpine doesn't exist, start it up/
    if (!window.Alpine) {
      window.Alpine = Alpine;
      Alpine.start();
    }
  });

  // #yuno-widget is a div that we're going to inject our markup into
  document.getElementById("yuno-widget").innerHTML = widgetHTML;
};

export default initAlpine;
