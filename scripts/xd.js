document.addEventListener("DOMContentLoaded", () => {
    let d = new Date();
    document.getElementById("currentYear").innerHTML = `&copy; ${d.getFullYear()}`;
    document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

    const hambutton = document.querySelector("#hambutton");
    const mainnav = document.querySelector("#navmenu");

    hambutton.addEventListener('click', () => {
        mainnav.classList.toggle('show');
        hambutton.classList.toggle('show');
    });

    const temples = [
        {
            templeName: "Aba Nigeria",
            location: "Aba, Nigeria",
            dedicated: "2005, August, 7",
            area: 11500,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
        },
        {
            templeName: "Manti Utah",
            location: "Manti, Utah, United States",
            dedicated: "1888, May, 21",
            area: 74792,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
        },
        {
            templeName: "Payson Utah",
            location: "Payson, Utah, United States",
            dedicated: "2015, June, 7",
            area: 96630,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
        },
        {
            templeName: "Yigo Guam",
            location: "Yigo, Guam",
            dedicated: "2020, May, 2",
            area: 6861,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
        }
    ];

    function createTempleCard(filteredTemples) {
        const grid = document.querySelector(".res-grid");
        grid.innerHTML = "";

        filteredTemples.forEach(temple => {
            let card = document.createElement("section");
            let name = document.createElement("h3");
            let location = document.createElement("p");
            let dedication = document.createElement("p");
            let area = document.createElement("p");
            let img = document.createElement("img");

            name.textContent = temple.templeName;
            location.innerHTML = `<strong>Location:</strong> ${temple.location}`;
            dedication.innerHTML = `<strong>Dedicated:</strong> ${temple.dedicated}`;
            area.innerHTML = `<strong>Size:</strong> ${temple.area} sq ft`;
            img.setAttribute("src", temple.imageUrl);
            img.setAttribute("alt", `${temple.templeName} Temple`);
            img.setAttribute("loading", "lazy");

            card.appendChild(name);
            card.appendChild(location);
            card.appendChild(dedication);
            card.appendChild(area);
            card.appendChild(img);

            grid.appendChild(card);
        });
    }

    createTempleCard(temples);

    document.querySelector("#home").addEventListener("click", () => {
        createTempleCard(temples);
    });

    document.querySelector("#nonutah").addEventListener("click", () => {
        createTempleCard(temples.filter((temple) => !temple.location.includes("Utah")));
    });

    document.querySelector("#new").addEventListener("click", () => {
        createTempleCard(temples.filter((temple) => parseInt(temple.dedicated.split(",")[0]) > 2000));
    });

    document.querySelector("#large").addEventListener("click", () => {
        createTempleCard(temples.filter((temple) => temple.area > 90000));
    });

    document.querySelector("#small").addEventListener("click", () => {
        createTempleCard(temples.filter((temple) => temple.area < 10000));
    });
});

