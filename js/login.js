// console.log('button clicking file added')

// document.getElementById('id').addEventListener('click', function(){})

// Step-1: Set the event handler
document.getElementById('button-login')
    .addEventListener('click', function(event){

        // Step-2: Prevent browser reloading 
        event.preventDefault();
        // console.log('login button clicked');

        // Step-3: Get the phone and pin number from user
        const phoneNumber = document.getElementById('phone-number').value;
        const pinNumber = document.getElementById('pin-number').value;
        console.log(phoneNumber, pinNumber);

        // Step-4: Validate phone and pin number
        // This is temporary approch
        if(phoneNumber==='01626538680' && pinNumber=== '2345') {
            console.log('You are logged in');
            // Step-5: Allow user to use the website
            window.location.href = '/home.html';
        }
        else {
            alert('Wrong Information');
        }
    })