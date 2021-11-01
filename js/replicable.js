// Navigation Data [to build nav menu]
var navigationData = [
    {
      title: "<img src='media/logo-telpochcalli-2.png' alt='Logo Telpochcalli' class=''>",
      href: "index",
      target: "_self",
      className: "header-logo",
      onclick: ""
    },
    {
      title: "<i class='fa fa-bars'></i>",
      href: "javascript:void(0);",
      target: "_self",
      className: "icon",
      onclick: "responsiveNav()"
    },
    {
      title: "Robomaster",
      href: "https://www.robomaster.com/en-US",
      target: "_blank",
      className: "",
      onclick: ""
    },
    {
      title: "Contacto",
      href: "contact",
      target: "_self",
      className: "",
      onclick: ""
    },
    // New Member Section removed temporarily
    // {
    //   title: "Become a member",
    //   href: "newMember.html",
    //   target: "_self",
    //   className: "",
    //   onclick: ""
    // },
    {
      title: "Patrocinios",
      href: "sponsors",
      target: "_self",
      className: "",
      onclick: ""
    },
    {
      title: "Quiénes Somos",
      href: "about-us",
      target: "_self",
      className: "",
      onclick: ""
    }]
//
function loadReplicables() {
    var navigations = document.getElementsByClassName('navigation');
    for (var i = 0; i < navigations.length; i++) {
        loadNavigation(navigations[i]);
    }
}
//
function loadNavigation(navigation) {
    navigationData.forEach((item, i) => {
        var newA = document.createElement("a");
        newA.innerHTML = item.title;
        newA.href = item.href;
        newA.target = item.target;
        newA.className = item.className;
        newA.setAttribute('onclick', item.onclick);
        navigation.appendChild(newA);
    });
}

window.onload = loadReplicables;
