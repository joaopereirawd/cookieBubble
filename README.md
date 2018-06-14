# cookieBubble 🍪
This is the cookieBubble, a jQuery plugin to fight against the ugly cookie messages.</br>
<a href="https://joaopereirawd.github.io/cookieBubble/" target="blank">Check out the Demo</a>
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

Basic init
```js
<script>
    $(document).ready(function(){
        $('.cookieBubble').cookieBubble();
    });
</script>
```

## Options 
Options | Default |Description | Available Options
--- | --- | --- | --- 
cookieMaxAge:    | *'30'*    | Expiring Days| whatever you want
icon:            | *'true'* | Chose your cookie icon  | true or false</br>  **More icons is comming 🚀"**
iconColor:       | *'false'* | specify what the color you want | **Example:**</br> orange', '#ffa500'
buttonColor:     | *'false'* | specify what the color you want | **Example:**</br>'orange', '#ffa500'
buttonTextColor: | *'false'* | specify what the color you want  | **Example:**</br>'white', '#ffffff'
buttonRadius:    | *'false'* | border radius | **Example:**</br> '3px'


🔜🔜🔜DOCUMENTATION IN PROGRESS 🔜🔜🔜
