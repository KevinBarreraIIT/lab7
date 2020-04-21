function init(){
    var input;
    var button = document.getElementById("entrybutton");
    var h2 = document.getElementById("textoutput");
    button.addEventListener("click", function()
    {
      input = document.getElementById("entryinput").value;
      alert("Kevin Barrera: " + input);
      h2.innerHTML = input;
    });
  }

window.addEventListener('load', init);