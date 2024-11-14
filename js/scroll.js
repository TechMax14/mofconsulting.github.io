window.addEventListener('scroll', function () {
    var sections = document.querySelectorAll('section');
    var currentSection = null;

    // loop through each section to find the one in view
    for (var i = 0; i < sections.length; i++) {
        var section = sections[i];

        // get the top and bottom position of the section
        var rect = section.getBoundingClientRect();
        var top = rect.top + window.scrollY;
        var bottom = rect.bottom + window.scrollY;

        // check if the section is in view
        if (top <= window.scrollY && bottom > window.scrollY) {
            currentSection = section;
            break;
        }
    }

    // update the URL based on the current section
    if (currentSection) {
        var id = currentSection.getAttribute('id');
        var url = window.location.pathname + '#' + id;

        if (id) {
            url = window.location.pathname + '#' + id;
        } else {
            url = window.location.pathname;
        }

        window.history.pushState({}, '', url);
    }
});



// document.querySelectorAll('[data-scroll]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();

//         document.querySelector(this.getAttribute('data-scroll')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });