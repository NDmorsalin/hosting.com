const nav_toggle = document.querySelector('.nav_toggle')
const nav_container = document.querySelector('.nav_container')

nav_toggle.addEventListener('click', function(e){
    nav_container.classList.toggle('toggle');

    /* if click nav_toggle it remove active class from nav_link */
    removeActiveClass();
})


/* active link class */
const nav_links = document.querySelectorAll('.nav_link')
nav_links.forEach(function(value, index, elements){
   
    value.addEventListener('click',function(e){
        /* == it remove previous 'active' class == */
       removeActiveClass()

/* after removing 'active' class it add new active class */
     e.target.classList.add('active');
    })
})
// console.log(nav_links);


/*
   ====  =====
   remove active class
   ====  =====
*/
function removeActiveClass(){
    nav_links.forEach( function(value, index, elements){
        value.classList.remove('active')
    })
}

