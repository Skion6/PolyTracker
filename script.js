function popup_no() {
    window.open('', '_self');
    window.close();
}

function popup_yes() {
    document.getElementById("popup").style.display = "none";
}

async function checkInput2() {
    let input = document.getElementById("pw2").value;

    const response = await fetch("https://api.jsonbin.io/v3/b/67e2ec6e8a456b79667c6a22/latest", {
        headers: { "X-Master-Key": "$2a$10$w2LBLzmtULmc09Io4xUYkuU9oBF.BvfpD8jHdCpOVhz0HczU7NCbW" }  // Use your actual secret key here
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