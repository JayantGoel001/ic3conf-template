//Slides Storing Name of Images.
const slides = [];
for(let i=0;i<26;i++){
    slides.push(`${i}.jpg`);
}
//name storing Name of person in corresponding image.
const name = [
    "Prof. SC Saxena, Vice-chancellor, JIIT with Prof. Sundaraja Sitharama Iyengar, Program Chair in IC3-2019",
    "Prof. Sartaj Sahni, General Co-Chair, IC3, UFL, USA",
    "Prof. Kavita Bala Cornell University, USA, in IC3-2019.",
    "Prof. Ratnesh Kumar, Iowa State University, USA, in IC3-2019.",
    "Prof. Christos Douligeris, University of Piraeus, Greece, in IC3-2019.",
    "Prof. Sanjay Ranka, University of Florida, USA, in IC3-2019",
    "Prof. Mainak Chaudhuri, IIT Kanpur, India, in IC3-2019.",
    "Prof. Soundar Kumara, Penn State College of Engineering, USA, in IC3-2019.",
    "Prof. Inderjit Dhillon, University of Texas at Austin, USA. in IC3-2019",
    "Sh. Dhanendra Kumar, Chairman, Competition Commission of India",
    "Prof. Shamkant B. Navathe, Georgia Institute Of Technology, Atlanta, in IC3-2018",
    "Prof. Rakesh Agrawal, President and Founder, Data Insights Laboratories, in IC3-2018",
    "Prof. Subhash Bhalla, IIT Delhi, India, in IC3-2018",
    "Prof. Manish Parashar, IEEE fellow, in IC3-2016 ",
    "Prof. Timothy A. Gonsalves,IIT Mandi, in IC3-2016",
    "Prof. K. Gopinath, IISc Banglore, in IC3-2015",
    "Prof. Ramesh Jain ,University of California, in IC3-2015",
    "Prof. Shashi Shekhar,University of Minnesota,in IC3-2015",
    "Prof. Yuanyuan Yang,Stony brook University, in IC3-2015",
    "Prof. H. J. Siegel, Colorado State University, USA, in IC3-2014",
    "Prof. Martin Henson, University of Essex, UK, in IC3-2014",
    "Prof. Dinesh Manocha, Universit y of North Calorina, USA, in IC3-2013",
    "Prof. H. T. Kung, Havard University, in IC3-2012",
    "Prof. Arvind, Massachusetts Institute of Technology, in IC3-2010",
    "Oscar H. Ibarra,University of California, USA, in IC3-2009",
    "Prof. Viktor K. Prasanna, University of southern California, in IC3-2009"
];

//Creating Slideshow of image which moves on its own and change image after 3s. and placing names under image and changing active dot.
let slideIndex = -1;
showSlides();

function showSlides() {
    let i;
    const dots = document.getElementsByClassName("dot");
    slideIndex=(slideIndex + 1)%slides.length;
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    document.getElementById("img-slideshow").src ="images/"+slides[slideIndex];
    document.getElementById("name-slideshow").innerText = name[slideIndex];
    dots[slideIndex].className += " active";
    setTimeout(showSlides, 3000);
}
//Highlighting button after clicking it.(Adding Active Class).
const btns = document.getElementsByClassName("nav-li");

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        const current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}
