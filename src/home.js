const renderHome = () => {
    const content = document.querySelector("#content");
    const homeContent = document.createElement('div');
    content.innerHTML = '';

    homeContent.innerHTML = `<h1>This is the home page</h1>`
    content.appendChild(homeContent);
};

export { renderHome };