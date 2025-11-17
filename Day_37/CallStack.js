// Call stack Execution
console.log('Session Start');
function sectionA(){
    console.log(`Section A`);
    sectionB();
    console.log(`Section A End`);
}
function sectionB(){
    console.log(`Secion B`);
    sectionC();
    console.log(`Section B End`);
}
function sectionC(){
    console.log(`Section C`);  
    sectionD();
    console.log(`Section C End`);
}
function sectionD(){
    console.log(`Section D`);
}
sectionA();
console.log('Session End');