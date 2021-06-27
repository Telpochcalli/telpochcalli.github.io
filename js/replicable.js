// Navigation Data
var navigationData = [{
      title: "Robomaster",
      href: "https://www.robomaster.com/en-US"
    },
    {
      title: "About Us",
      href: "about-us.html"
    },
    {
      title: "Support us",
      href: "sponsors.html"
    },
    {
      title: "Blog",
      href: "blog.html"
    },
    {
      title: "Contact Us",
      href: "contact.html"
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
