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
    "flex-container": {
        "display": "flex",
        "flexWrap": "nowrap",
        "alignItems": "stretch"
    },
    "aside": {
        "flex": "0 0 230px",
        "backgroundColor": "#EDEDED",
        "minHeight": 88 * vh
    },
    "article": {
        "paddingTop": 25,
        "paddingRight": 25,
        "paddingBottom": 25,
        "paddingLeft": 25
    }
});