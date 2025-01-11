// Smooth scrolling for menu links
document.querySelectorAll('.menu a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Fixed CTA button behavior
const headerCta = document.querySelector('.header-cta');
const hero = document.querySelector('.hero');
const transitionPoint = hero.offsetHeight / 3;

window.addEventListener('scroll', () => {
    if (window.scrollY > transitionPoint) {
        headerCta.classList.add('scrolled');
    } else {
        headerCta.classList.remove('scrolled');
    }
});

// Toggle Button Functionality for Pricing
function showDoctors() {
    document.getElementById('doctors-section').style.display = 'block';
    document.getElementById('programs-section').style.display = 'none';
    document.querySelectorAll('.option-button').forEach(button => button.classList.remove('active'));
    document.querySelector('.option-button:first-child').classList.add('active');
}

function showPrograms() {
    document.getElementById('doctors-section').style.display = 'none';
    document.getElementById('programs-section').style.display = 'block';
    document.querySelectorAll('.option-button').forEach(button => button.classList.remove('active'));
    document.querySelector('.option-button:last-child').classList.add('active');
}

// Card data
const cardsData = [
    {
        title: "Cardiology",
        topics: "37 topics, 800 questions",
        date: "Up to date as of 01/2025",
        icon: "assets/cards/cardiology-icon.png", // Updated icon path
        thumbnail: "file-thumbnail.png",
        pdf: "assets/cardiology-preview.pdf", // Updated preview file
    },
    {
        title: "Neurology",
        topics: "45 topics, 900 questions",
        date: "Up to date as of 01/2025",
        icon: "assets/cards/neurology-icon.png", // Updated icon path
        thumbnail: "file-thumbnail.png",
        pdf: "assets/neurology-preview.pdf", // Updated preview file
    },
    {
        title: "Pulmonology",
        topics: "30 topics, 700 questions",
        date: "Up to date as of 01/2025",
        icon: "assets/cards/pulmonology-icon.png", // Updated icon path
        thumbnail: "file-thumbnail.png",
        pdf: "assets/pulmonology-preview.pdf", // Updated preview file
    },
];

// Function to create a card
function createCard(data) {
    const card = document.createElement("div");
    card.classList.add("carousel-card");

    const background = document.createElement("div");
    background.classList.add("card-background");
    background.style.backgroundImage = `url(${data.icon})`;

    const content = document.createElement("div");
    content.classList.add("card-content");

    const title = document.createElement("h3");
    title.textContent = data.title;

    const topics = document.createElement("p");
    topics.innerHTML = `<strong>${data.topics}</strong>`;

    const date = document.createElement("p");
    date.textContent = data.date;

    const download = document.createElement("div");
    download.classList.add("download-sample");

    const thumbnail = document.createElement("img");
    thumbnail.src = data.thumbnail;
    thumbnail.alt = "Sample Topic";
    thumbnail.classList.add("file-thumbnail");

    // Add click event to open modal
    thumbnail.addEventListener("click", () => {
        const modal = document.getElementById("pdfModal");
        const pdfViewer = document.getElementById("pdfViewer");
        const pdfDownload = document.getElementById("pdfDownload");

        pdfViewer.src = data.pdf; // Set PDF source dynamically
        pdfDownload.href = data.pdf; // Set download link dynamically
        modal.style.display = "flex"; // Show modal
    });

    const downloadText = document.createElement("span");
    downloadText.textContent = "Download sample topic";

    download.appendChild(thumbnail);
    download.appendChild(downloadText);

    content.appendChild(title);
    content.appendChild(topics);
    content.appendChild(date);
    content.appendChild(download);

    card.appendChild(background);
    card.appendChild(content);

    return card;
}

// Function to initialize the carousel
function initCarousel() {
    const carouselTrack = document.querySelector(".carousel-track");

    // Add cards to the track
    cardsData.forEach((data) => {
        const card = createCard(data);
        carouselTrack.appendChild(card);
    });

    // Clone cards for seamless looping
    const cards = document.querySelectorAll(".carousel-card");
    cards.forEach((card) => {
        const clone = card.cloneNode(true);
        carouselTrack.appendChild(clone);
    });
}

// Initialize the carousel
initCarousel();

// Modal functionality
const modal = document.getElementById("pdfModal");
const modalClose = document.getElementById("modalClose");

// Close modal when clicking the close button
modalClose.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close modal when clicking outside the modal content
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// Scroll-triggered animation for "Why Choose" features
const features = document.querySelectorAll('.why-choose .feature');

window.addEventListener('scroll', () => {
    features.forEach(feature => {
        const featurePosition = feature.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3; // Adjust trigger point as needed

        if (featurePosition < screenPosition) {
            feature.classList.add('animate'); // Add a class to trigger the animation
        }
    });
});