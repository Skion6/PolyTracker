function popup_no() {
    window.open('', '_self');
    window.close();
}

function popup_yes() {
    document.getElementById("popup").style.display = "none";
}

function checkInput2() {
    let input = document.getElementById("pw2").value;
    let correctValue = "TiC!"; 

    if (input === correctValue) {
        document.getElementById("popup").style.display = "none";
    } else {
        let inputElement = document.getElementById("pw2");
        document.getElementById("pw2").value = "";
        document.getElementById("pw2").placeholder = "Incorrect";
        inputElement.classList.add("red-placeholder");
        console.log(Incorrect)
    }
}

function secret() {
    document.getElementById(scrt).innerText = "680135"
}

function copyText() {
    const text = document.getElementById("cText").innerText;
    navigator.clipboard.writeText(text).then(function() {
      alert("Text copied to clipboard!");
    }).catch(function(err) {
      alert("Failed to copy text: " + err);
    });
  }