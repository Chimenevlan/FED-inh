
/***************************/
/* TWEEDE STREEPJES BUTTON */
/***************************/
var tweedeStreepjesButton = document.querySelector("section.streepjes li:nth-of-type(2) button");
tweedeStreepjesButton.onclick = tweedeStreepjesButtonKlik;
function tweedeStreepjesButtonKlik() {
  if (tweedeStreepjesButton.ariaExpanded == "false") {
    tweedeStreepjesButton.ariaExpanded = "true"
  }
  else {
    tweedeStreepjesButton.ariaExpanded = "false"
  }
}

