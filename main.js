// 3. Please iterate through the farm object below. If there is a nested object, then iterate through that as well. You should console log each property name and property value in all objects, example "crop is Winter Wheat", using a template literal.

const farm = {
    type: 'crop',
    name: 'Sweet Gardens',
    hectares: 300,
    employees: 3,
    owner: 2,
    barnCats: 14,
    location: {
        province: 'Ontario',
        city: 'Cambridge',
        postalCode: 'N1R5S2'
    },
    cropRotation: {
        field1: {
            crop: 'Winter Wheat',
            harvest: 'June',
            lastRotation: '2017'
        },
        field2: {
            crop: 'Corn',
            harvest: 'September',
            lastRotation: '2016',
        },
        field3: {
            crop: null,
            harvest: null,
            lastRotation: '2018'
        }
    }
}

//// original solution using for loop

// console.log(farm);

// for (var key in farm) {
//     //console.log(key);
//     if (farm.hasOwnProperty(key)) {
//         console.log(key + " is " + farm[key]);
//     }
// }

function iterate(obj, stack) {
    for (var property in obj) {
        if (obj.hasOwnProperty(property)) {
            if (typeof obj[property] == "object") {
                iterate(obj[property], stack + '.' + property);
            } else {
                console.log(property + " is " + obj[property]);
            }
        }
    }
}
iterate(farm, '')

// type is crop
// name is Sweet Gardens
// hectares is 300
// employees is 3
// owner is 2
// barnCats is 14
// province is Ontario
// city is Cambridge
// postalCode is N1R5S2
// crop is Winter Wheat
// harvest is June
// lastRotation is 2017
// crop is Corn
// harvest is September
// lastRotation is 2016
// lastRotation is 2018
