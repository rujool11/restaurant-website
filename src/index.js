import { renderContact } from './contact'
import { renderHome } from './home'
import { renderAbout } from './about'

const main = document.querySelector("#main");
const header = document.createElement("header");
const content = document.querySelector("#content"); 
header.classList.add("nav");

header.innerHTML = `
<button>Home</button>
<button>About</button>
<button>Contact</button>
`;

main.insertBefore(header,content);
const tabs = document.querySelectorAll("button");

tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        let target = tab.innerText;
        switch(target){
            case 'Home':
                renderHome();
                break;
            case 'About':
                renderAbout();
                break;
            case 'Contact':
                renderContact();
                break;
            default:
                alert('something is wrong');
                break;
        }
    });
});

