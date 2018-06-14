# cookieBubble 🍪
This is the cookieBubble, a jQuery plugin to fight against the ugly cookie messages.

## Instalation
```
npm i cookie-bubble
or
yarn add cookie-bubble
```
Include default css 
```css
<link rel="stylesheet" href="path/dist/cookieBubble.min.css"></link>
```

Include cookieBubble script 
```js
<script src="/path/dist/cookieBubble.min.js"></script>
```
## Usage
Add this html markup somewhere inside the body tag 
```
<div class="cookieBubble">
    <div class="cb-wrapper">
        <div class="cb-row">
            <div class="cb-message">
                <span>We use cookies to personalize your experience. By continuing to visit this website you agree to our use of cookies. <a href="#" target="_blank">Learn More</a></span> 
                <a href="javascript:void(0)" class="gotit-btn">GOT IT!</a>
            </div>
        </div>
    </div>
</div>  

```

Basic Usage
```js
<script>
    $(document).ready(function(){
        $('.cookieBubble').cookieBubble();
    });
</script>
```


🔜🔜🔜DOCUMENTATION IN PROGRESS 🔜🔜🔜
