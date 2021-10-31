// Navigation Data [to build nav menu]
var navigationData = [
    {
      title: "About Us",
      href: "about-us",
      target: "_self"
    },
    {
      title: "Support us",
      href: "sponsors",
      target: "_self"
    },
    // New Member Section removed temporarily
    // {
    //   title: "Become a member",
    //   href: "newMember.html",
    //   target: "_self"
    // },
    {
      title: "Contact Us",
      href: "contact",
      target: "_self"
    },
    {
        title: "Robomaster",
        href: "https://www.robomaster.com/en-US",
        target: "_blank"
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
        navigation.appendChild(newA);
    });
}

window.onload = loadReplicables;
