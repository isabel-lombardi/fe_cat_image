const form = document.querySelector(".select__area__form");
let urls = [];

function previewFiles() {
  var preview = document.querySelector("#preview");
  var files = document.querySelector("input[type=file]").files;

  function readAndPreview(file) {
    // Make sure `file.name` matches our extensions criteria
    if (/\.(jpe?g|png)$/i.test(file.name)) {
      var reader = new FileReader();

      reader.addEventListener(
        "load",
        function () {
          var image = new Image();
          image.height = 100;
          image.title = file.name;
          image.src = this.result;
          image.className = "preview__thumb";
          var base64result = this.result.split(";base64,")[1];
          urls.push(base64result);
          image.style.margin = "10px 10px";
          preview.appendChild(image);
        },
        false
      );
      reader.readAsDataURL(file);
    }
  }
  if (files) {
    [].forEach.call(files, readAndPreview);
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  fetch("https://cat-image-t2.herokuapp.com/upload", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(Object.assign({}, urls)),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data.result);
      output(data.result);
    })
    .catch((error) => {
      console.log("Request failed", error);
    });
});

//output datas
function output(data) {
  let ul = document.createElement("ul");
  const startPoint = document.querySelectorAll(".preview__thumb");
  startPoint[0].appendChild(ul);
  for (let i = 0; i < startPoint.length; i++) {
    let li = document.createElement("li");
    li.innerHTML = "prova";
    ul.appendChild(li);
  }
  console.log(ul);
}
