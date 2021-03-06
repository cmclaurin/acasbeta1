Drupal.behaviors.acas = {
  attach: function(context, settings) {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");
    if (msie > 0) {
      jQuery('body').addClass('ie' + parseInt(ua.substring(msie + 5, ua.indexOf(".", msie))));
    }
    setTimeout(searchFocus, 200);
    document.body.style.display="block";
    function searchFocus() {
      document.getElementById("edit-keys").focus();
    }
  }
};

function mainNavigationClasses() {
  var x = document.getElementById("nav-main__topmenu");
  if (x.className === "nav-main__topmenu") {
    x.className += " nav-main__responsive";
  } else {
    x.className = "nav-main__topmenu";
  }
}
