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

const link1 = allLinks[0]
const link2 = allLinks[1]
const link3 = allLinks[2]
const link4 = allLinks[3]
const link5 = allLinks[4]
const link6 = allLinks[5]


link1.textContent = siteContent["nav"]["nav-item-1"]
link2.textContent = siteContent["nav"]["nav-item-2"]
link3.textContent = siteContent["nav"]["nav-item-3"]
link4.textContent = siteContent["nav"]["nav-item-4"]
link5.textContent = siteContent["nav"]["nav-item-5"]
link6.textContent = siteContent["nav"]["nav-item-6"]

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

const middleSection = document.getElementsByClassName("text-content")

console.log(middleSection)

const features = middleSection[0]

const featuresTitle = features.querySelector("h4")
featuresTitle.textContent = siteContent['main-content']['features-h4']

const featuresText = features.querySelector('p')
featuresText.textContent = siteContent["main-content"]["features-content"]

const about = middleSection[1]

const aboutTitle = about.querySelector("h4")
aboutTitle.textContent = siteContent["main-content"]["about-h4"]

const aboutText = about.querySelector("p")
aboutText.textContent = siteContent["main-content"]["about-content"]

const middleImg = document.getElementById("middle-img")
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

//bottom

const services = middleSection[2]

const servicesTitle = about.querySelector("h4")
servicesTitle.textContent = siteContent["main-content"]["services-h4"]

const servicesText = about.querySelector("p")
servicesText.textContent = siteContent["main-content"]["services-content"]


const product = middleSection[3]

const productTitle = about.querySelector("h4")
productTitle.textContent = siteContent["main-content"]["product-h4"]

const productText = about.querySelector("p")
productText.textContent = siteContent["main-content"]["product-content"]


const vision = middleSection[4]

const visionTitle = about.querySelector("h4")
visionTitle.textContent = siteContent["main-content"]["vision-h4"]

const visionText = about.querySelector("p")
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