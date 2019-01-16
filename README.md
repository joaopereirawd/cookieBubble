<img src="https://github.com/joaopereirawd/cookieBubble/blob/master/img/cookieBubble.gif">


# cookie-bubble 
The cookieBubble is a jQuery plugin cookie consent and compliance in agreement with EU laws</br>
<a href="https://joaopereirawd.github.io/cookieBubble/" target="blank">Check out the Demo</a></br>
<a href="https://codepen.io/joaopereirawd/pen/pKpYpE" target="blank">Codepen</a>


## Instalation
```
npm i cookie-bubble
or
yarn add cookie-bubble
```
Include cookieBubble.min.css somewhere in your head tag 
```css
<link rel="stylesheet" href="path/dist/cookieBubble.min.css"></link>
```

Include **cookieBubble.min.js** at the bottom of your body tag
```js
<script src="/path/dist/cookieBubble.min.js"></script>
```

## Usage
```js
<script>
    (function ($) {
        $.cookieBubble();
    })(jQuery);
</script>
```


## Options 
Options | Default |Description | Available Options
--- | --- | --- | --- 
cookieMaxAge                | 30                              | Expiring Days| (Number)
messageText                 | 'We use cookies to personalize your experience. By continuing to visit this website </br> you agree to our use of cookies.'     | 'Your personal message'   | (String)
messageTextColor            | '#000'                          | Message text color| hex, rgb, rgba
messageFontSize             | '18px'                          | Message text font-size      | px, em, rem
buttonText                  | 'Got it'                        | Button text                 | (String)
buttonColor                 | '#00a4ff'                       | Button background-color     | hex, rgb, rgba 
buttonFontSize              | '18px'                          | Button text font-size       | px, em, rem 
iconColor                   | '#00a4ff'                       | Icon color                  | hex, rgb, rgba
iconVisibility              | true                            | Icon Visibility             | (Bool)
cookiePolicyButtonText      | 'Read Our Cookie Policy'        | Cookie policy button text   | (String)
cookiePolicyButtonTextColor | '#000'                          | Cookie policy button color  | hex, rgb, rgba
cookiePolicyButtonUrl       | 'http://allaboutcookies.org/'   | Cookie policy page url      | url
cookiePolicyButtonTarget    | '_blank'                        | Cookie policy target        | _self
boxAppearDelay              | 1000                            | Delay time (ms)             | (Number)
    

 
 

