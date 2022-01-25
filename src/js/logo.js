(() => {
  const logo = new Image();

  logo.onload = () => {
    document.getElementById("logo-bg").style.opacity = 1;
  };

  logo.src = "./res/edulogo.svg";
})();
