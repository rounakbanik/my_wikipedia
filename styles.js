import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "*": {
        "fontFamily": "'Montserrat', sans-serif"
    },
    "body": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "flex-container": {
        "display": "flex",
        "flexWrap": "nowrap",
        "alignItems": "stretch"
    },
    "header": {
        "textAlign": "center",
        "backgroundColor": "#112C3B",
        "paddingTop": 8,
        "paddingRight": 8,
        "paddingBottom": 8,
        "paddingLeft": 8,
        "color": "white"
    },
    "header h1": {
        "fontWeight": "700",
        "textAlign": "center",
        "flex": 1
    },
    "header hamburger": {
        "fontSize": 2,
        "marginTop": 0.67,
        "marginRight": 0.67,
        "marginBottom": 0.67,
        "marginLeft": 0.67,
        "cursor": "pointer",
        "display": "none"
    },
    "aside": {
        "flex": "0 0 230px",
        "backgroundColor": "#EDEDED",
        "minHeight": 88 * vh,
        "paddingTop": 0,
        "paddingRight": 20,
        "paddingBottom": 0,
        "paddingLeft": 20
    },
    "aside form": {
        "marginTop": 85,
        "textAlign": "center"
    },
    "aside form input": {
        "width": "90%",
        "height": 24,
        "marginTop": 10,
        "marginRight": 0,
        "marginBottom": 10,
        "marginLeft": 0,
        "border": "1px solid #ccc",
        "borderRadius": 2,
        "paddingTop": 5,
        "paddingRight": 5,
        "paddingBottom": 5,
        "paddingLeft": 5,
        "backgroundColor": "white"
    },
    "aside form select": {
        "width": "90%",
        "height": 24,
        "marginTop": 10,
        "marginRight": 0,
        "marginBottom": 10,
        "marginLeft": 0,
        "border": "1px solid #ccc",
        "borderRadius": 2,
        "paddingTop": 5,
        "paddingRight": 5,
        "paddingBottom": 5,
        "paddingLeft": 5,
        "backgroundColor": "white"
    },
    "aside form button": {
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "backgroundColor": "#112C3B",
        "border": 0,
        "borderRadius": 3,
        "color": "white",
        "width": 100,
        "marginTop": 10,
        "marginRight": 0,
        "marginBottom": 10,
        "marginLeft": 0,
        "cursor": "pointer"
    },
    "aside form button:hover": {
        "backgroundColor": "orange",
        "transitionDuration": "0.3s"
    },
    "article": {
        "paddingTop": 25,
        "paddingRight": 25,
        "paddingBottom": 25,
        "paddingLeft": 25
    },
    "article-text": {
        "marginTop": 80,
        "marginRight": 30,
        "marginBottom": 30,
        "marginLeft": 30,
        "fontSize": 18,
        "lineHeight": 1.5
    }
});