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
        anchor.setAttribute('class',
            'menu__link ');
        //getting the attribute of ID from each section
        let link = sections[a].getAttribute('id');
        //giving the section ID attribute to the Anchor

        //getting the text value and setting it to the anchor
        anchor.innerText = sections[a].getAttribute('data-nav');
        // creating a list element
        let list = document.createElement('li');
        //sect class attribute for the List items
        list.setAttribute('class', link);
        //sect data_link attribute for the List items
        list.setAttribute('data_link', link);
        //appending the Anchor as a child to the created list
        list.appendChild(anchor);
        // An event listener for window scrolling
        document.addEventListener('scroll', function() {
            onScroll();


        });

        // Appending the list as the ul child
        navList.appendChild(list);

    }


    //function to get the view port and to add your-active-class  to the section visible in the viewport and a menu_active link to active link
    let lists = Array.from(document.querySelectorAll('li'))
    console.log(lists);
    let onScroll = function(anchor) {

        let active = "";
        //for Each method to check f asection is in viewport
        sections.forEach(section => {

            let rect = section.getBoundingClientRect();

            if (rect.top >= -20 && rect.left >= 0 && rect.right <= window.innerWidth && rect.bottom <= window.innerHeight) {
                //setting an active class to the section visible in the view port
                section.classList.add('your-active-class');
                active = section.getAttribute('id')



            } else { section.classList.remove('your-active-class') }

        });
        //setting a menu_active link to a active link.
        lists.forEach(list => {
            list.classList.remove('menu__active');
            if (list.classList.contains(active)) {
                list.classList.add('menu__active');
            }
            // an eventlistener on the list item to Scroll to section
            list.addEventListener('click', () => {
                const scr = document.getElementById(list.getAttribute('data_link'));

                scr.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });


        });


    }


}
createAnchor();
// running the function*/