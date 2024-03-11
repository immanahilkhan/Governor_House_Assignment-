"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.guest = void 0;
var guest = ['ali', 'aziz', 'danish', 'khalid', 'iqbal'];
exports.guest = guest;
for (var i = 0; i < guest.length; i++) {
    console.log('I am inviting you in my home for dinner tomorrow ' + guest[i]);
}
;
var not_present = "danish";
var new_guest = "amna";
guest[2] = new_guest;
// for(let i=0; i<guest.length; i++) {
//     console.log('I am inviting you in my home for dinner tomorrow ' + guest[i])
// };
// console.log(`Mr ${not_present} will not come tomorrow for dinner `); 
guest.unshift('namra', 'maryam', 'hassan');
// for(let i=0; i<guest.length; i++) {
//     console.log('I am inviting you in my home for dinner tomorrow ' + guest[i])
console.log('\n unfortunately i am not arrange big tabel for tomorrow dinner .');
while (guest.length > 2) {
    var remove_guest = guest.pop();
    console.log("sorry  ".concat(remove_guest, " you are not invited in tomorrow dinner ,"));
}
for (var i = 0; i < guest.length; i++) {
    console.log(guest[i] + " you are still invited for tomorrow dinner \n thank you ");
}
