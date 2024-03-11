let guest :string []=  ['ali','aziz','danish','khalid','iqbal']
for(let i=0; i<guest.length; i++) {
    console.log('I am inviting you in my home for dinner tomorrow ' + guest[i])
 };
export{guest} 
let not_present : string = "danish";
 let new_guest : string=  "amna" ;
 guest [2] = new_guest ;
 for(let i=0; i<guest.length; i++) {
     console.log('I am inviting you in my home for dinner tomorrow ' + guest[i])
 };
 console.log(`Mr ${not_present} will not come tomorrow for dinner `); 
 guest .unshift('namra','maryam','hassan');
for(let i=0; i<guest.length; i++) {
    console.log('I am inviting you in my home for dinner tomorrow ' + guest[i])



    console.log('\n unfortunately i am not arrange big tabel for tomorrow dinner .')}
while (guest.length>2 ) {
    let remove_guest = guest.pop();
    console.log(`sorry  ${remove_guest} you are not invited in tomorrow dinner ,` );
}

for(let i=0; i<guest.length; i++) {
      console.log( guest[i] + ` you are still invited for tomorrow dinner \n thank you `)
}

