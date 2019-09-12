{ 
    'use strict';

    /* 
    document.getElementById('test-button').addEventListener('click', function() {
        const links = document.querySelectorAll('.titles a');
        console.log('links:', links);
    });

    */

    const titleClickHandler = function () {
        event.preventDefault();
        const clickedElement = this;
        console.log('link was clicked!');

    /* [DONE] remove class 'active' from all article links */

    const activeLinks = document.querySelectorAll('.titles a.active');
    for (let activeLink of activeLinks) {
        activeLink.classList.remove('active');
    }

    /* [DONE] add class 'active' to the clicked link */

    clickedElement.classList.add('active');
    console.log('clickedElement: ', clickedElement);

    /* [DONE] remove class 'active' from all articles */

    const activeArticles = document.querySelectorAll('.posts .post.active');
    for (let activeArticle of activeArticles) {
        activeArticle.classList.remove('active');
    }

    /* get 'href' attribute from the clicked link */
    
    const hrefAttribute = clickedElement.getAttribute('href');

    /* find the correct article using the selector (value of 'href' attribute) */

    /* add class 'active' to the correct article */

    }

    const links = document.querySelectorAll('.titles a');
    for (let link of links) {
        link.addEventListener('click', titleClickHandler);
    }

}