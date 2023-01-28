// function addNewField() {
//     // alert('Savdhaan');

//     let newNode = document.createElement('textarea')
//     newNode.classList.add('form-control')
//     newNode.classList.add('weField')

//     let weOb = document.getElementById('we');
//     let weAddButtonOb = document.getElementById('weAddButton');

//     weOb.insertBefore(newNode, weAddButtonOb);
// }

// -----------------Alternateive way----------
// var countre = 1;
// function addNewField() {
//     countre += 1

//     html='<div class="form-group" id="we'+countre+'">\
//             <textarea class="form-textarea form-control weField" name="'+countre+'" id="" cols="30" rows="10" placeholder="Work Experience"></textarea>\
//         </div>'

//     var form = document.getElementById('we')
//     form.innerHTML += html

// }