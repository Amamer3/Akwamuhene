document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const contactData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value,
      message: document.getElementById('message').value
  };

  fetch('/send-contact-email', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(contactData)
  })
  .then(response => response.json())
  .then(data => {
      if (data.success) {
          alert('Email sent successfully!');
      } else {
          alert('Error sending email.');
      }
  })
  .catch(error => {
      console.error('Error:', error);
      alert('Error sending email.');
  });
});





// TW Elements is free under AGPL, with commercial license required for specific uses. See more details: https://tw-elements.com/license/ and contact us for queries at tailwind@mdbootstrap.com 
// Initialization for ES Users
import {
    Ripple,
    Input,
    initTE,
  } from "tw-elements";
  
  initTE({ Ripple, Input });


  // TW Elements is free under AGPL, with commercial license required for specific uses. See more details: https://tw-elements.com/license/ and contact us for queries at tailwind@mdbootstrap.com 
// Initialization for ES Users
import {
    Carousel,
    initTE,
  } from "tw-elements";
  
  initTE({ Carousel });

// Initialization for ES Users
import {
  Ripple,
  initTWE,
} from "tw-elements";

initTWE({ Ripple });

  
// carosel




