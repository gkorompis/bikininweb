import { createContext } from "react";

const pallateHex = {
    // bikinin: ["#EEEEEE","#76ABAE", "#31363F", "#222831",     "", "", "#31363f62", "#31363f62"],
     bikinin: ["#fff","#76ABAE", "#31363F", "#222831",     "", "", "#31363f62", "#31363f62"],
    aquaDark: ["#222831","#31363F", "#76ABAE", "#EEEEEE",     "", "", "#76abae52", "#76abae52"],
    brownMeat: ["#3E3232","#503C3C", "#7E6363", "#A87C7C",     "", "",  "#a87c7c54", "#a87c7c54"],
    vanillaTaro: ["#352F44","#5C5470", "#B9B4C7", "#FAF0E6",     "", "", "#b9b4c729", "#faf0e653"],
    pinkBerry: ["#FED9ED","#E7BCDE","#BB9CC0", "#67729D",     "", "", "#bb9cc081", "#bb9cc081"],
    coffeeEarth: ["#607274","#FAEED1","#DED0B6", "#B2A59B",     "", "", "#b2a59b51", "#b2a59b51"],
    sunkissNoon: ["#FFFBDA","#FFEC9E","#FFBB70", "#ED9455",    "", "", "#ed94554f", "#ed94554f"],
    cakeRetro: ["#F5F5F5","#F05454","#30475E", "#121212",    "", "", "#12121257", "#12121257"],
    milkTaro: ["#FEFBF6","#A6D1E6","#7F5283", "#3D3C42",    "", "", "#3d3c4250", "#3d3c4250"],
} as any;

const pallateNames = Object.keys(pallateHex) || [];

const pallateObject = {} as any;

for (let name of pallateNames) {
    pallateObject[name] = 
    {
        pallateName: name,
        body: {
            backgroundColor: pallateHex[name][0]
        },
        appNavbar: {
            backgroundColor: pallateHex[name][0],
            // boxShadow: `2px 2px 3px ${pallateHex[name][6]}`,
        },
        appNavbarFixed: {
            backgroundColor: pallateHex[name][0],
            boxShadow: `2px 2px 3px ${pallateHex[name][6]}`,
        },
        appNavbarInput: {
            
            backgroundColor: pallateHex[name][0],
            // level 3 reduced opacity to pink level
            border: `0.7px solid ${pallateHex[name][6]}`,
            boxShadow: `2px 2px 0px #76abae00`,
            color: pallateHex[name][3]
        },
        appNavbarInputCentered: {
            backgroundColor: pallateHex[name][0],
            border: `0.7px solid ${pallateHex[name][6]}`,
            boxShadow: `2px 2px 3px ${pallateHex[name][6]}`,
            color: pallateHex[name][3],
            transition: '1.5s'
        },
        appNavbarTitle: {
            color: pallateHex[name][3]
        },
        appNavbarAnchors: {
            color: pallateHex[name][3]
        },
        appNavbarBurger: {
            color: pallateHex[name][0],
            backgroundColor: pallateHex[name][2]
        },
        // level 4 reduced opacity to dark blue level
        appNavbarInputPlaceholder: `{color: ${pallateHex[name][7]};}`,
        appNavbarInputButton: {
            color: pallateHex[name][0],
            backgroundColor: pallateHex[name][2]
        },
        appNavbarInputButtonHover: {
            color: pallateHex[name][3],
            backgroundColor: pallateHex[name][1]
        },
        sectionTitle: {
            color: pallateHex[name][3]
        },
        conveyorItem: {
            border: `4px dashed ${pallateHex[name][7]}`
        },
        conveyorItemFontP: {
            color: pallateHex[name][3]
        },
        layer1: {
            backgroundColor: pallateHex[0]
        },
        layer2: {
            backgroundColor: pallateHex[1]
        },
        layer3: {
            backgroundColor: pallateHex[2]
        },
        layer4: {
            backgroundColor: pallateHex[3]
        }
    }
}

const GlobalContext = createContext(null);

const globalStates =  {
    globalPallateObject: pallateObject,
    golbalPallateNames: pallateNames,
    globalPallateHex: pallateHex,
    globalContext: GlobalContext
}



export default globalStates as any;