# @mjamsek/ngx-swagger

## Usage

Install library:

```bash
npm install --save @mjamsek/ngx-swagger swagger-ui-dist
```

Include styles:

* Either in `angular.json`:
```json
{
...
    "assets": [
        "src/favicon.ico",
        "src/assets"
    ],
    "styles": [
        "src/styles.scss",
        "node_modules/swagger-ui-dist/swagger-ui.css"
    ],
    "scripts": [],
...
}
```

* Or in global styles.scss:

```scss
@import "~swagger-ui-dist/swagger-ui.css";
```

And then use component:
```html
<ngx-swagger-ui url="http://localhost:8080/api-specs/v1/openapi.json"></ngx-swagger-ui>
```
