const renderContact = () => {
    const content = document.querySelector("#content");
    const contactContent = document.createElement('div');
    content.innerHTML = '';

    contactContent.innerHTML = `<h1>This is the contact page</h1>`
    content.appendChild(contactContent);
};

export { renderContact };