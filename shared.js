const sharedHtml = `
<!--menu-->
<div id="menu-placeholder"></div>
<!-- -->
<!--ico-->
<link rel="icon" type="image/x-icon" href="thumbs up.ico">
<!---->
<!--ung css-->
<link rel="stylesheet" href="styles.css">
<!-- -->
<!--header-->
<div id="header-placeholder"></div>
<!-- -->
`;

document.getElementById('shared-placeholder').innerHTML = sharedHtml;
<!-- pang ayos ng code sabi ni youtube-->
const load = (src) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = false;
        document.body.appendChild(script);
};

load('shared/menu.js');
load('shared/header.js');
load('shared/footer.js');