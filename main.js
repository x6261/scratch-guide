function showPage(pageId) {
    // hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => p.classList.remove('active'));

    // show selected page
    document.getElementById(pageId).classList.add('active');
}
