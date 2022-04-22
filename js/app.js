/**
 * declaration of global variables
 * and getting element on our HTML page
 */
let sections = Array.from(document.querySelectorAll('section'));

const navList = document.querySelector('#navbar__list');



//function to create Link Anchor 
function createAnchor() {
    // a for loop that runs through the variable sections to create a list of anchor for each section
    for (a = 0; a <= sections.length - 1; a++) {
        //dynamically creating an anchor
        const anchor = document.createElement('a');
        //adding a class Menu__link to created Anchor
        anchor.classList.add('menu__link');
        //getting the attribute of ID from each section
        let link = sections[a].getAttribute('id');
        //giving the section ID attribute to the Anchor
        anchor.href = '#' + link;
        //geeting the text value
        anchor.innerText = sections[a].getAttribute('data-nav');
        // creating a list element
        let list = document.createElement('li');
        //appending the Anchor as a child to the created list
        list.appendChild(anchor);
        // An event listener for window scrolling
        window.addEventListener('scroll', function() {
            onScroll(anchor);

        })

        // Appending the list as the ul child
        navList.appendChild(list)
    }



}

// running the function
createAnchor();

//function to get the view port and to add your-active-class  to the section visible in the viewport
let onScroll = function(anchor) {
    sections.forEach(section => {
        let rect = section.getBoundingClientRect();
        console.log(rect);
        if (rect.top >= -17 && rect.left >= 0 && rect.right <= window.innerWidth && rect.bottom <= window.innerHeight) {
            section.classList.add('your-active-class');

        } else { section.classList.remove('your-active-class') }

    })
}