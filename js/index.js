const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// header

const allLinks = document.querySelectorAll('a')

allLinks[0].textContent = siteContent["nav"]["nav-item-1"]
allLinks[1].textContent = siteContent["nav"]["nav-item-2"]
allLinks[2].textContent = siteContent["nav"]["nav-item-3"]
allLinks[3].textContent = siteContent["nav"]["nav-item-4"]
allLinks[4].textContent = siteContent["nav"]["nav-item-5"]
allLinks[5].textContent = siteContent["nav"]["nav-item-6"]

// use map method above to redo this^^

// cta

const ctaText = document.querySelector('.cta-text')

const ctaTitle = ctaText.querySelector("h1")
ctaTitle.textContent = siteContent["cta"]["h1"]

const ctaButton = ctaText.querySelector('button')
ctaButton.textContent = siteContent['cta']['button']

const ctaImg = document.getElementById("cta-img")
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])

// main

//top
const topContent = document.querySelector(".top-content")
const features = topContent.querySelector('.text-content')

const featuresTitle = features.querySelector("h4")
featuresTitle.textContent = siteContent['main-content']['features-h4']

const featuresText = features.querySelector('p')
featuresText.textContent = siteContent["main-content"]["features-content"]

const about = features.nextElementSibling

const aboutTitle = about.querySelector("h4")
aboutTitle.textContent = siteContent["main-content"]["about-h4"]

const aboutText = about.querySelector("p")
aboutText.textContent = siteContent["main-content"]["about-content"]


const middleImg = document.getElementById("middle-img")
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

//bottom

const bottomContent = document.querySelector(".bottom-content")
const services = bottomContent.querySelector(".text-content")

const servicesTitle = services.querySelector("h4")
servicesTitle.textContent = siteContent["main-content"]["services-h4"]

const servicesText = services.querySelector("p")
servicesText.textContent = siteContent["main-content"]["services-content"]

const product = services.nextElementSibling

const productTitle = product.querySelector("h4")
productTitle.textContent = siteContent["main-content"]["product-h4"]

const productText = product.querySelector("p")
productText.textContent = siteContent["main-content"]["product-content"]


const vision = product.nextElementSibling

const visionTitle = vision.querySelector("h4")
visionTitle.textContent = siteContent["main-content"]["vision-h4"]

const visionText = vision.querySelector("p")
visionText.textContent = siteContent["main-content"]["vision-content"]


// contact

const contactSection = document.querySelector('.contact')

const contactTitle = contactSection.querySelector("h4")
contactTitle.textContent = siteContent["contact"]["contact-h4"]

const contactAddress = contactSection.querySelector("p")
contactAddress.textContent = siteContent["contact"]["address"]

const contactPhone = contactAddress.nextElementSibling
contactPhone.textContent = siteContent["contact"]["phone"]

const contactEmail = contactPhone.nextElementSibling
contactEmail.textContent = siteContent["contact"]["email"]

// footer

const foot = document.querySelector('footer')
foot.textContent = siteContent["footer"]["copyright"]

// adding content

allLinks.forEach(link =>{
  link.style.color = 'green'
})