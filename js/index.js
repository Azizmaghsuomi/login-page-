function getCookie(cookieName) {
    let cookiesArray = document.cookie.split(";");
  
    let mainCookie = null;
  
    cookiesArray.some((cookie) => {
      if (cookie.includes(cookieName)) {
        mainCookie = cookie.substring(cookie.indexOf("=") + 1);
        return true;
      }
    });
  
    return mainCookie;
  }
  
window.addEventListener("load", () => {
    let islogin = getCookie("login-token");
  
    if(!islogin){

        location.href = "http://127.0.0.1:5500/login.html"
    }
  });
  