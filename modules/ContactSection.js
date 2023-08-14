const contact = document.querySelector('.contact-section');

const createContactSection = () => {
  const contactInfo = document.createElement('div');
  contactInfo.innerHTML = `
          <h2>Contact Information</h2>
          <p>Do you have any questions or you want to connect?
        
          <ul>
              <li>E-mail:siddhartha.silvia@gmail.com</a></li>
              <li>Phone number: +916290797367</li>
              <li>Address :Westbengal, India</li>
          </ul>
      `;
  contact.appendChild(contactInfo);
};

export default createContactSection;