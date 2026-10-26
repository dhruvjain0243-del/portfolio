const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#primary-navigation");

if (menuButton && navigation) {
    const closeMenu = () => {
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Open navigation menu");
        navigation.classList.remove("is-open");
    };

    menuButton.addEventListener("click", () => {
        const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
        menuButton.setAttribute("aria-expanded", String(!isExpanded));
        menuButton.setAttribute("aria-label", isExpanded ? "Open navigation menu" : "Close navigation menu");
        navigation.classList.toggle("is-open", !isExpanded);
    });

    navigation.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", closeMenu);
    });
}

const revealItems = document.querySelectorAll("[data-reveal]");

if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.documentElement.classList.add("js-enabled");

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    revealItems.forEach((item) => revealObserver.observe(item));
} else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
}
