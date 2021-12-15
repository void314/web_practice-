'use strict';
function openCours(x) {
    switch (x) {
        case 1:
          document.getElementById("cours1").className = "show-modal";
          break;
    }
}

function closeButton() {
    document.getElementById("cours1").className = "modal";
}

function OpenContent(x,a) {
    if (a.className === "cours-btn") {
        a.className = "cours-btn-close";
        switch (x) {
            case 1:
              document.getElementById("content1").style.display = "flex";
              break;
        }
    } else {
        a.className = "cours-btn";
        switch (x) {
            case 1:
              document.getElementById("content1").style.display = "none";
              break;
        }
    }
}