// var form = document.querySelectorAll('.myForm')[0];
// var submitBtns = document.querySelectorAll('.submit-button');

// for (var i = 0; i < submitBtns.length; i++) {
//     submitBtns[i].addEventListener('click', function (e) {
//         e.preventDefault();

//         // Get form data
//         var fullName = form.querySelector('#name').value;
//         var email = form.querySelector('#email').value;
//         var phone = form.querySelector('#phone').value;
//         var company = form.querySelector('#company').value;
//         var package = form.querySelector('#package').value;
//         var title = form.querySelector('#title').value;
//         var message = form.querySelector('#message').value;

//         // // Create a database reference
//         // var db = firebase.firestore();
//         // var formSubmissionsRef = db.collection('form-submissions');


//         e.preventDefault();
//         db.collection('contact-form').doc().set({
//             name: fullName,
//             email: email,
//             phone: phone,
//             company: company,
//             package: package,
//             title: title,
//             message: message
//         }).then(() => {
//             form.reset();

//         });

//         // Reset form
//         form.reset();

//         // Show success message
//         alert('Form submitted successfully!');
//     });
// }

// // const form = document.querySelector('.contact-form');
// // const fullName = document.querySelector('#name');
// // const email = document.querySelector('#email');
// // const phone = document.querySelector('#phone');
// // const company = document.querySelector('#company');
// // const package = document.querySelector('#package');
// // const title = document.querySelector('#title');
// // const message = document.querySelector('#message');
// // const submit = document.querySelector('.submit-form')

// // submit.addAddEventListener('click', (e) => {
// //     e.preventDefault();
// //     db.collection('contact-form').doc().set({
// //         name: fullName.value,
// //         email: email.value,
// //         phone: phone.value,
// //         company: company.value,
// //         package: package.value,
// //         title: title.value,
// //         message: message.value
// //     }).then(() => {
// //         form.reset();

// //     })

// // })
// var form = document.querySelectorAll('.myForm')[0];
// var submitBtns = document.querySelectorAll('.submit-button');

// for (var i = 0; i < submitBtns.length; i++) {
//     submitBtns[i].addEventListener('click', function (e) {
//         e.preventDefault();

//         // Get form data
//         const name = document.querySelector('#name').value;
//         const email = document.querySelector('#email').value;
//         const phone = document.querySelector('#phone').value;
//         const company = document.querySelector('#company').value;
//         const packageType = document.querySelector('#package').value;
//         const title = document.querySelector('#title').value;
//         const message = document.querySelector('#message').value;

//         const db = admin.firestore();

//         // Save form data to Firestore
//         db.collection('requests').doc().set({
//             name: name,
//             email: email,
//             phone: phone,
//             company: company,
//             package: packageType,
//             title: title,
//             message: message,
//             timestamp: admin.firestore.FieldValue.serverTimestamp() // Add timestamp
//         })
//             .then(() => {
//                 console.log('Form data saved to Firestore');
//                 // Clear form
//                 form.reset();
//             })
//             .catch((error) => {
//                 console.error('Error saving form data to Firestore: ', error);
//             });
//     });
// }