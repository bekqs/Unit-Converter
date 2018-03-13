const input = document.getElementById('input');
const output = document.getElementById('output');
let toUnit = document.getElementById('to');
let fromUnit = document.getElementById('from');

let area = {
    sqKilometre() {
        switch (fromUnit.innerHTML == 'Square kilometre') {
            case toUnit.innerHTML == 'Square metre':
            output.value = input.value * 1000;
                break;
            case toUnit.innerHTML == 'Square mile':
            output.value = input.value * 0.386102;
                break;
            case toUnit.innerHTML == 'Square yard':
            output.value = input.value * 1195990.046301;
                break;
            case toUnit.innerHTML == 'Square foot':
            output.value = input.value * 10763910.41671;
                break;
            case toUnit.innerHTML == 'Square inch':
            output.value = input.value * 1550003100.0062;
                break;
            case toUnit.innerHTML == 'Hectare':
            output.value = input.value * 100;
                break;
            case toUnit.innerHTML == 'Acre':
            output.value = input.value * 247.105381;
                break;
        
            default:
                output.value = input.value;
                break;
        }
    },
    sqMetre() {
        switch (fromUnit.innerHTML == 'Square metre') {
            case toUnit.innerHTML == 'Square kilometre':
            output.value = input.value * 0.000001;
                break;
            case toUnit.innerHTML == 'Square mile':
            output.value = input.value * 0.000000386102;
                break;
            case toUnit.innerHTML == 'Square yard':
            output.value = input.value * 1.19599;
                break;
            case toUnit.innerHTML == 'Square foot':
            output.value = input.value * 10.76391;
                break;
            case toUnit.innerHTML == 'Square inch':
            output.value = input.value * 1550.0031;
                break;
            case toUnit.innerHTML == 'Hectare':
            output.value = input.value * 0.0001;
                break;
            case toUnit.innerHTML == 'Acre':
            output.value = input.value * 0.000247105;
                break;
        
            default:
                output.value = input.value;
                break;
        }
    },
    sqMile() {
        switch (fromUnit.innerHTML == 'Square mile') {
            case toUnit.innerHTML == 'Square kilometre':
            output.value = input.value * 2.589988;
                break;
            case toUnit.innerHTML == 'Square metre':
            output.value = input.value * 2589988.110336;
                break;
            case toUnit.innerHTML == 'Square yard':
            output.value = input.value * 3097600;
                break;
            case toUnit.innerHTML == 'Square foot':
            output.value = input.value * 27878400;
                break;
            case toUnit.innerHTML == 'Square inch':
            output.value = input.value * 4014489600;
                break;
            case toUnit.innerHTML == 'Hectare':
            output.value = input.value * 258.998811;
                break;
            case toUnit.innerHTML == 'Acre':
            output.value = input.value * 640;
                break;
        
            default:
                output.value = input.value;
                break;
        }
    },
    sqYard() {
        switch (fromUnit.innerHTML == 'Square yard') {
            case toUnit.innerHTML == 'Square kilometre':
            output.value = input.value * 0.000000836127;
                break;
            case toUnit.innerHTML == 'Square metre':
            output.value = input.value * 0.836127;
                break;
            case toUnit.innerHTML == 'Square mile':
            output.value = input.value * 0.000000322831;
                break;
            case toUnit.innerHTML == 'Square foot':
            output.value = input.value * 9;
                break;
            case toUnit.innerHTML == 'Square inch':
            output.value = input.value * 1296;
                break;
            case toUnit.innerHTML == 'Hectare':
            output.value = input.value * 0.0000836127;
                break;
            case toUnit.innerHTML == 'Acre':
            output.value = input.value * 0.000206612;
                break;
        
            default:
                output.value = input.value;
                break;
        }
    },
    sqFoot() {
        switch (fromUnit.innerHTML == 'Square foot') {
            case toUnit.innerHTML == 'Square kilometre':
            output.value = input.value * 0.000000092903;
                break;
            case toUnit.innerHTML == 'Square metre':
            output.value = input.value * 0.092903;
                break;
            case toUnit.innerHTML == 'Square mile':
            output.value = input.value * 0.0000000358701;
                break;
            case toUnit.innerHTML == 'Square yard':
            output.value = input.value * 0.111111;
                break;
            case toUnit.innerHTML == 'Square inch':
            output.value = input.value * 144;
                break;
            case toUnit.innerHTML == 'Hectare':
            output.value = input.value * 0.0000092903;
                break;
            case toUnit.innerHTML == 'Acre':
            output.value = input.value * 0.0000229568;
                break;
        
            default:
                output.value = input.value;
                break;
        }
    },
    sqInch() {
        switch (fromUnit.innerHTML == 'Square inch') {
            case toUnit.innerHTML == 'Square kilometre':
            output.value = input.value * 0.00000000064516;
                break;
            case toUnit.innerHTML == 'Square metre':
            output.value = input.value * 0.00064516;
                break;
            case toUnit.innerHTML == 'Square mile':
            output.value = input.value * 0.000000000249098;
                break;
            case toUnit.innerHTML == 'Square yard':
            output.value = input.value * 0.000771605;
                break;
            case toUnit.innerHTML == 'Square foot':
            output.value = input.value * 0.00694444;
                break;
            case toUnit.innerHTML == 'Hectare':
            output.value = input.value * 0.000000064516;
                break;
            case toUnit.innerHTML == 'Acre':
            output.value = input.value * 0.000000159423;
                break;
        
            default:
                output.value = input.value;
                break;
        }
    },
    hectare() {
        switch (fromUnit.innerHTML == 'Hectare') {
            case toUnit.innerHTML == 'Square kilometre':
            output.value = input.value * 0.01;
                break;
            case toUnit.innerHTML == 'Square metre':
            output.value = input.value * 10000;
                break;
            case toUnit.innerHTML == 'Square mile':
            output.value = input.value * 0.00386102;
                break;
            case toUnit.innerHTML == 'Square yard':
            output.value = input.value * 11959.900463;
                break;
            case toUnit.innerHTML == 'Square foot':
            output.value = input.value * 107639.104167;
                break;
            case toUnit.innerHTML == 'Square inch':
            output.value = input.value * 15500031.000062;
                break;
            case toUnit.innerHTML == 'Acre':
            output.value = input.value * 2.471054;
                break;
        
            default:
                output.value = input.value;
                break;
        }
    },
    acre() {
        switch (fromUnit.innerHTML == 'Acre') {
            case toUnit.innerHTML == 'Square kilometre':
            output.value = input.value * 0.00404686;
                break;
            case toUnit.innerHTML == 'Square metre':
            output.value = input.value * 4046.856422;
                break;
            case toUnit.innerHTML == 'Square mile':
            output.value = input.value * 0.0015625;
                break;
            case toUnit.innerHTML == 'Square yard':
            output.value = input.value * 4840;
                break;
            case toUnit.innerHTML == 'Square foot':
            output.value = input.value * 43560;
                break;
            case toUnit.innerHTML == 'Square inch':
            output.value = input.value * 6272640;
                break;
            case toUnit.innerHTML == 'Hectare':
            output.value = input.value * 0.404686;
                break;
        
            default:
                output.value = input.value;
                break;
        }
    }
};

const convert = function() {
    if (fromUnit.innerHTML == 'Square kilometre') {
        area.sqKilometre();
    }
    if (fromUnit.innerHTML == 'Square metre') {
        area.sqMetre();
    }
    if (fromUnit.innerHTML == 'Square mile') {
        area.sqMile();
    }
    if (fromUnit.innerHTML == 'Square yard') {
        area.sqYard();
    }
    if (fromUnit.innerHTML == 'Square foot') {
        area.sqFoot();
    }
    if (fromUnit.innerHTML == 'Square inch') {
        area.sqInch();
    }
    if (fromUnit.innerHTML == 'Hectare') {
        area.hectare();
    }
    if (fromUnit.innerHTML == 'Acre') {
        area.acre();
    }
};

// Update output number when clicked on another unit
for (let i = 0; i < document.getElementsByClassName('unit').length; i++) {
    const el = document.getElementsByClassName('unit')[i];
    el.addEventListener('click', convert, false);
}

input.addEventListener('keyup', convert, false);