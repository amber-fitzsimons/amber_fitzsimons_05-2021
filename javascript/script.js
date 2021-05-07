
let mergeNoDuplicates = (target, source, prop) => {
    source.forEach(sourceElement => {
    let targetElement = target.find(targetElement => {
        return sourceElement[prop] === targetElement[prop];
    })
    targetElement ? Object.assign(targetElement, sourceElement) : target.push(sourceElement);
    })
};

let target = [
    {name: "Matt Johnson"}, 
    {name: "Bart Paden"}, 
    {name: "Ryan Doss"}, 
    {name: "Jared Malcolm"},
];

let source = [
    {name: "Matt Johnson"}, 
    {name: "Bart Paden"}, 
    {name: "Jordan Heigle"}, 
    {name: "Tyler Viles"},
];

mergeNoDuplicates(target, source, 'name');

console.log(target);

function listOfNames() {
    console.log(target);
};


