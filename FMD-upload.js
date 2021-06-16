function realclickphoto() {
  $("#realphotoupload").trigger("click");
};

function realclickvideo() {
  $("#realvideoupload").trigger("click");
};

var i = 0,
    j = 1;
document.getElementById("realphotoupload").addEventListener("change", 
function () {
    for (i; i < this.files.length; i++) {
      document.getElementById("previewbox1").innerHTML +=
        '<div><img id="img' +
        i +
        '" class = "previewimg"/> <p><b>image ' +
        j +
        "</b></p> </div>";
      document.getElementById("img" + i).src = window.URL.createObjectURL(
        this.files[i]
      );
      j++;
    }
  });

document
  .getElementById("realvideoupload").addEventListener("change", 
function () {
    var leng = this.files.length;
    url = URL.createObjectURL(new Blob([this.files[0]]));
    //To handle video preview
    $(".previewv")
      .html("")
      .append($('<video controls src="' + url + '">'));
    document.getElementById("previewbox2").innerHTML +=
      "<p>Totally <b> " + leng + " videos </b></p></div>";
  });

function logout() {
  window.location.href = "FMD-main.html"; // = index.html in github
};
