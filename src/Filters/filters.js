window.onload = () => {

    const filters = document.getElementsByTagName("filter");
    const target = document.querySelector("main");
    const selectSize = document.querySelector("section:last-of-type > select");
    const colors = document.querySelector("footer");

    for (let index = 0; index < filters.length; ++index) {
        const paragraph = document.createElement("p");
        paragraph.textContent = filters[index].id;
        paragraph.contentEditable = true;
        paragraph.spellcheck = false;
        paragraph.style.filter = `url(#${filters[index].id})`;
        target.appendChild(paragraph);
    } //loop

    selectSize.onchange = (event) => {
        const selectInstance = event.target;
        for (let paragraph of target.children)
            paragraph.style.fontSize = selectInstance.selectedOptions[0].textContent.replace(" ",'');
    };
    selectSize.focus();

    const colorNames = [`AliceBlue`, `AntiqueWhite`, `Aqua`, `Aquamarine`, `Azure`, `Beige`, `Bisque`, `Black`, `BlanchedAlmond`, `Blue`, `BlueViolet`, `Brown`, `BurlyWood`, `CadetBlue`, `Chartreuse`, `Chocolate`, `Coral`, `CornflowerBlue`, `Cornsilk`, `Crimson`, `Cyan`, `DarkBlue`, `DarkCyan`, `DarkGoldenRod`, `DarkGray`, `DarkGrey`, `DarkGreen`, `DarkKhaki`, `DarkMagenta`, `DarkOliveGreen`, `Darkorange`, `DarkOrchid`, `DarkRed`, `DarkSalmon`, `DarkSeaGreen`, `DarkSlateBlue`, `DarkSlateGray`, `DarkSlateGrey`, `DarkTurquoise`, `DarkViolet`, `DeepPink`, `DeepSkyBlue`, `DimGray`, `DimGrey`, `DodgerBlue`, `FireBrick`, `FloralWhite`, `ForestGreen`, `Fuchsia`, `Gainsboro`, `GhostWhite`, `Gold`, `GoldenRod`, `Gray`, `Grey`, `Green`, `GreenYellow`, `HoneyDew`, `HotPink`, `IndianRed`, `Indigo`, `Ivory`, `Khaki`, `Lavender`, `LavenderBlush`, `LawnGreen`, `LemonChiffon`, `LightBlue`, `LightCoral`, `LightCyan`, `LightGoldenRodYellow`, `LightGray`, `LightGrey`, `LightGreen`, `LightPink`, `LightSalmon`, `LightSeaGreen`, `LightSkyBlue`, `LightSlateGray`, `LightSlateGrey`, `LightSteelBlue`, `LightYellow`, `Lime`, `LimeGreen`, `Linen`, `Magenta`, `Maroon`, `MediumAquaMarine`, `MediumBlue`, `MediumOrchid`, `MediumPurple`, `MediumSeaGreen`, `MediumSlateBlue`, `MediumSpringGreen`, `MediumTurquoise`, `MediumVioletRed`, `MidnightBlue`, `MintCream`, `MistyRose`, `Moccasin`, `NavajoWhite`, `Navy`, `OldLace`, `Olive`, `OliveDrab`, `Orange`, `OrangeRed`, `Orchid`, `PaleGoldenRod`, `PaleGreen`, `PaleTurquoise`, `PaleVioletRed`, `PapayaWhip`, `PeachPuff`, `Peru`, `Pink`, `Plum`, `PowderBlue`, `Purple`, `Red`, `RosyBrown`, `RoyalBlue`, `SaddleBrown`, `Salmon`, `SandyBrown`, `SeaGreen`, `SeaShell`, `Sienna`, `Silver`, `SkyBlue`, `SlateBlue`, `SlateGray`, `SlateGrey`, `Snow`, `SpringGreen`, `SteelBlue`, `Tan`, `Teal`, `Thistle`, `Tomato`, `Turquoise`, `Violet`, `Wheat`, `White`, `WhiteSmoke`, `Yellow`, `YellowGreen`, ];

    for (let index = 0; index < colorNames.length; ++index) {
        const box = document.createElement("div");
        box.style.backgroundColor = colorNames[index];
        box.index = index;
        box.onclick = (event) => {
            for (let paragraph of target.children)
                paragraph.style.color = colorNames[event.target.index];
        };
        colors.appendChild(box);
    } //loop

};
