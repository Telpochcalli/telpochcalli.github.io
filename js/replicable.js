// Navigation Data
var navigationData = [
    {
      title: "About Us",
      href: "about-us.html",
      target: "_self"
    },
    {
      title: "Support us",
      href: "sponsors.html",
      target: "_self"
    },
    {
      title: "Blog",
      href: "blog.html",
      target: "_self"
    },
    {
      title: "Become a member",
      href: "newMember.html",
      target: "_self"
    },
    {
      title: "Contact Us",
      href: "contact.html",
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
        newA.target = "_self";
        navigation.appendChild(newA);
    });
}

window.onload = loadReplicables;
