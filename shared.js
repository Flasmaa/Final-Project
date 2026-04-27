const sharedHtml = `
<div id="menu-placeholder"></div>
<link rel="icon" type="image/x-icon" href="thumbs up.ico">
<link rel="stylesheet" href="styles.css">
<div id="header-placeholder"></div>
`;

document.getElementById('shared-placeholder').innerHTML = sharedHtml;
/* pang ayos ng code sabi ni youtube */
const load = (src) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = false;
        document.body.appendChild(script);
};

load('shared/menu.js');
load('shared/header.js');
load('shared/footer.js');
load('shared/list.js');