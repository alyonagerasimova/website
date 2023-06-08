let sections = document.querySelectorAll('section'),
    nav = document.querySelector('nav'),
    nav_height = nav.offsetHeight,
    scrollToTopBtn = document.querySelector(".scrollToTopBtn"),
    rootElement = document.documentElement,
    target = document.querySelector("footer"),
    icon = document.querySelector(".icon");

function callback(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            scrollToTopBtn.classList.add("showBtn");
        } else {
            scrollToTopBtn.classList.remove("showBtn");
        }
    });
}

function onSection(entries) {
    entries.forEach(entry => {
        let el = nav.querySelector('a[href="#' + entry.target.getAttribute('id') + '"]');
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            el?.classList?.add('active');
        } else {
            entry.target.classList.remove('active');
            el?.classList?.remove('active');
        }
    });
}

const options = {
    threshold: 0.7
}
let observerSection = new IntersectionObserver(onSection, options);
let observer = new IntersectionObserver(callback);
observer.observe(target);

function handleScroll() {
    for (let section of sections) {
        observerSection.observe(section);
    }
    // document.querySelector('nav a').classList.remove('active');
    // let cur_pos = this.scrollY;
    // sections.forEach((section) => {
    // let top = section.offsetTop - nav_height - 180, //180 в данном коде - это произвольное значение, позволяющее переключиться на нижнюю секцию немного раньше, чем она дойдет до фиксированного меню
    //     bottom = top + section.offsetHeight;
    // let el = nav.querySelector('a[href="#' + section.getAttribute('id') + '"]');
    // if (cur_pos >= top && cur_pos <= bottom) {
    //     section.classList.add('active');
    //     el?.classList?.add('active');
    // } else {
    //     section.classList.remove('active');
    //     el?.classList?.remove('active');
    // }
    // });

    // let scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
    // if (rootElement.scrollTop / scrollTotal > 0.8) {
    //     scrollToTopBtn.classList.add("showBtn");
    // } else {
    //     scrollToTopBtn.classList.remove("showBtn");
    // }
}

function scrollToTop() {
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

scrollToTopBtn.addEventListener("click", scrollToTop);
window.addEventListener("scroll", handleScroll);
icon.addEventListener("click", myFunction);

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// nav.querySelectorAll('a').forEach(el =>
//     el.addEventListener('click', () => {
//         let id = el.getAttribute('href');
//         let num = document.querySelector(id).offsetTop- nav_height;
//         document.body.animate({
//             scrollTop: num
//         }, 600);
//         return false;
//     }));