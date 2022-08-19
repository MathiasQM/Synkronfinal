const hamburger = document.querySelector(".hamburger");
const navmenu = document.querySelector(".nav-menu");
const synkron = document.querySelector(".synkron");

const dropdown = document.querySelector("list");



hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navmenu.classList.toggle("active");
    synkron.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.
    addEventListener("click", () => {
        hamburger.classList.remove("active");
        navmenu.classList.remove("active");
        synkron.classList.remove("active");
    }));


document.querySelectorAll(".dropdown-content").forEach(n => n.
    addEventListener("click", () => {

        dropdown.classList.remove("active");
    }))

// dropdown filters
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

//click to copy

const copyMailId = document.querySelectorAll('.mail-text');

copyMailId.forEach(copyText => {
    copyText.addEventListener('click', () => {
        const selection = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(copyText);
        selection.removeAllRanges();
        selection.addRange(range);

        try {
            document.execCommand('copy');
            selection.removeAllRanges();

            const mailId = copyText.textContent;
            copyText.textContent = 'Copied!';
            copyText.classList.add('success');

            setTimeout(() => {
                copyText.textContent = mailId;
                copyText.classList.remove('success');
            }, 1000);
        } catch (e) {
            copyText.textContent = 'Couldn\'t copy, hit Ctrl+C!';
            copyText.classList.add('error');

            setTimeout(() => {
                errorMsg.classList.remove('show');
            }, 1200);
        }
    });
});

// marker nav når efter sektion
var distFromTop = document.querySelector(".featured-project").offsetTop;
var distFromTop2 = document.querySelector(".approach-section").offsetTop -400;
var distFromTop3 = document.querySelector(".contact-text-area").offsetTop - 600;

window.addEventListener("scroll", function () {
    var scroll = this.scrollY;
    if (scroll < distFromTop) {
        document.getElementById("home").style.color = "white"
        document.getElementById("work").style.color = "rgb(187, 186, 186)";
        document.getElementById("approach").style.color = "rgb(187, 186, 186)";
        document.getElementById("contact").style.color = "rgb(187, 186, 186)";
    }
    else if (scroll > distFromTop && scroll < distFromTop2) {
        document.getElementById("work").style.color = "white";
        document.getElementById("home").style.color = "rgb(187, 186, 186)";
        document.getElementById("approach").style.color = "rgb(187, 186, 186)";
        document.getElementById("contact").style.color = "rgb(187, 186, 186)";
    } else if (scroll > distFromTop2 && scroll < distFromTop3) {
        document.getElementById("approach").style.color = "white";
        document.getElementById("contact").style.color = "rgb(187, 186, 186)";
        document.getElementById("work").style.color = "rgb(187, 186, 186)";
        document.getElementById("home").style.color = "rgb(187, 186, 186)";
    } else if (scroll > distFromTop3) {
        document.getElementById("contact").style.color = "white";
        document.getElementById("approach").style.color = "rgb(187, 186, 186)";
        document.getElementById("work").style.color = "rgb(187, 186, 186)";
        document.getElementById("home").style.color = "rgb(187, 186, 186)";

    }
});

/* // Tekst animationer - Fade 
const floatup = document.querySelectorAll('.featured-text-area')
const floatup2 = document.querySelectorAll('.work')
const floatup3 = document.querySelectorAll('.approach-section')
const floatup4 = document.querySelectorAll('.contact-section')

const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
    })
}, {
    threshold: 0.0,
})

floatup.forEach(floatup => {
    observer2.observe(floatup)
})

floatup2.forEach(floatup2 => {
    observer2.observe(floatup2)
})

floatup3.forEach(floatup3 => {
    observer2.observe(floatup3)
})

floatup4.forEach(floatup4 => {
    observer2.observe(floatup4)
}) */

