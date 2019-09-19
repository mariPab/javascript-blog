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
    console.log('clicked element: ' + clickedElement);
    console.log('clicked element: ', clickedElement);

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

    const correctArticle = document.querySelector(hrefAttribute);
    console.log(correctArticle);

    /* add class 'active' to the correct article */

    correctArticle.classList.add('active');

  };

  const optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles',
    optArticleTagsSelector = '.post-tags .list';

  const generateTitleLinks = function (customSelector = '') {

    /* remove content of the titleList */

    const titleList = document.querySelector(optTitleListSelector + customSelector);
    console.log(titleList);
    titleList.innerHTML = '';

    let html = '';

    /* for each article */

    const articles = document.querySelectorAll(optArticleSelector);
    console.log(articles);
    for (let article of articles ) {

      /* get article id */
      const articleId = article.getAttribute('id');
      console.log(articleId);

      /* find title element, get title from title element */
      const articleTitle = article.querySelector(optTitleSelector).innerHTML;
      console.log(articleTitle);

      /* create HTML code of link */
      const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
      console.log(linkHTML);

      /* insert created link to titleList */
      html = html + linkHTML;
      console.log(html);

    /*
      titleList.insertAdjacentHTML('beforeend', linkHTML);
      console.log(titleList);
    */
    }
    titleList.innerHTML = html;

    const links = document.querySelectorAll('.titles a');
    console.log(links);
    for (let link of links) {
      link.addEventListener('click', titleClickHandler);
    }
  };

  generateTitleLinks();
  console.log();

  function generateTags () {
    /* find all articles */
    const articles = document.querySelectorAll(optArticleSelector);
    console.log(articles);
    /* START LOOP: for every article */
    for (let article of articles) {
      /* find tags wrapper */
      const tagsWrapper = article.querySelector(optArticleTagsSelector);
      console.log(tagsWrapper);
      /* make html variable with empty string */
      let html = '';
      /* get tags from data-tags attribute */
      const articleTags = article.getAttribute('data-tags');
      console.log(articleTags);
      /* split tags into array */
      const articleTagsArray = articleTags.split(' ');
      console.log(articleTagsArray);
      /* START LOOP: for each tag */
      for (let tag of articleTagsArray) {
        console.log(tag);
        /* generate HTML of the link */
        const linkHTML = '<li><a href="#tag-' + tag + '">' + tag  + '</a></li>';
        console.log(linkHTML);
        /* add generated code to html variable */
        html = html + linkHTML;
        console.log(html);
      /* END LOOP: for each tag */
      }
      /* insert HTML of all the links into the tags wrapper */
      tagsWrapper.innerHTML = html;
      console.log(tagsWrapper);
    /* END LOOP: for every article */
    }
  }
  generateTags();

  const tagClickHandler = function (event) {
    /* prevent default action for this event */
    event.preventDefault();
    /* make new constant named "clickedElement" and give it the value of "this" */
    const clickedElement = this;
    /* make a new constant "hrefAttribute" and read the attribute href of the clicked element */
    const hrefAttribute = clickedElement.getAttribute('href');
    console.log(hrefAttribute);
    /* make a new constant "tag" and extract tag from the "href" constant */
    const tag = hrefAttribute.replace('#tag-', '');
    console.log(tag);
    /* find all tag links with class active */
    const activeTags = document.querySelectorAll('.active');
    console.log(activeTags);
    /* START LOOP: for each active tag link */
    for (let activeTag of activeTags) {
      /* remove class active */
      activeTag.classList.remove('active');
    /* END LOOP: for each active link */
    }
    /* find all tag links with "href" attribute equal to the "hrefAttribute" constant */
    const tagLinksWithEqualHrefAttribute = document.querySelectorAll('a[href="' + hrefAttribute + '"]');
    console.log(tagLinksWithEqualHrefAttribute);
    /* START LOOP: for each found tag link*/
    for (let foundLink of tagLinksWithEqualHrefAttribute) {
      /* add class active */
      foundLink.classList.add('active');
    /* END LOOP: for each found tag link */
    }
    /* execute function "generateTitleLinks" with article selector as argument */
    generateTitleLinks('[data-tags~="' + tag + '"]');
  }

  function addClickListenersToTags () {
    /* find all links to tags */

    /* START LOOP: for each link */

      /* add tagClickHandler as event listener for that link */

    /* END LOOP: for each link */

  }

  addClickListenersToTags();
}
