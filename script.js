function popup_no() {
    window.open('', '_self');
    window.close();
}

function popup_yes() {
    document.getElementById("popup").style.display = "none";
}

async function checkInput2() {
    let input = document.getElementById("pw2").value;

    const response = await fetch("https://api.jsonbin.io/v3/b/67f3f7068960c979a57ff95b/latest", {
        headers: { "X-Access-Key": "SECRETPASS" }  // Use your actual secret key here
    });

    const data = await response.json();
    const correctPassword = data.record.password;  

    if (input === correctPassword) {
        document.getElementById("popup").style.display = "none";
    } else {
        document.getElementById("pw2").value = "";
        document.getElementById("pw2").placeholder = "Incorrect";
        document.getElementById("pw2").classList.add("red-placeholder");
    }
}



function copyText() {
    const text = document.getElementById("cText").innerText;
    navigator.clipboard.writeText(text).then(function() {
      alert("Text copied to clipboard!");
    }).catch(function(err) {
      alert("Failed to copy text: " + err);
    });
}

function copyText2() {
    const text = document.getElementById("cText2").innerText;
    navigator.clipboard.writeText(text).then(function() {
      alert("Text copied to clipboard!");
    }).catch(function(err) {
      alert("Failed to copy text: " + err);
    });
}

function copyText3() {
    const text = document.getElementById("cText3").innerText;
    navigator.clipboard.writeText(text).then(function() {
      alert("Text copied to clipboard!");
    }).catch(function(err) {
      alert("Failed to copy text: " + err);
    });
}

function copyText4() {
    const text = document.getElementById("cText4").innerText;
    navigator.clipboard.writeText(text).then(function() {
      alert("Text copied to clipboard!");
    }).catch(function(err) {
      alert("Failed to copy text: " + err);
    });
}

function copyText5() {
    const text = document.getElementById("cText5").innerText;
    navigator.clipboard.writeText(text).then(function() {
      alert("Text copied to clipboard!");
    }).catch(function(err) {
      alert("Failed to copy text: " + err);
    });
}
