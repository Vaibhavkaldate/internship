// import React from "react";
// import "./../styles/contact.css";

// const Contact = () => {
//   return (
//     <div className="contact-container">
//       <div className="contact-box">
        
//         <div className="contact-left">
//           <div className="contact-text">
//             <img
//               src="https://media.istockphoto.com/id/1255985762/vector/contact-us-green-3d-button-with-hand-pointer-clicking-white-background-vector.jpg?s=612x612&w=0&k=20&c=std05Pypbc5RWXPXQvInhVy3caZDma5s-dPFNmOqhj4="
//               alt="Contact"
//               className="contact-img"
//             />
//             <h2>Get in Touch!</h2>
//             <p>Send us a message.</p>
//           </div>
//         </div>

       
//         <div className="contact-right">
//           <h2 className="contact-title">Send Notification</h2>
//           <p className="contact-subtitle">Enter your details below.</p>

//           <form className="contact-form">
//             <input
//               type="email"
//               className="form-input"
//               placeholder="Enter email"
//             />
//             <textarea
//               className="form-textarea"
//               placeholder="Message here"
//             ></textarea>
//             <button type="submit" className="form-button">
//               Send
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;




import React from "react";
import "./../styles/contact.css";
import contactImage from "./../components/contact.jpg"; // Import the image properly

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-box">
        
        <div className="contact-left">
          <div className="contact-text">
            <img
              src={contactImage} // Use the imported image here
              alt="Contact"
              className="contact-img"
            />
            <h2>Get in Touch!</h2>
            <p>Send us a message.</p>
          </div>
        </div>

        <div className="contact-right">
          <h2 className="contact-title">Send Notification</h2>
          <p className="contact-subtitle">Enter your details below.</p>

          <form className="contact-form">
            <input
              type="email"
              className="form-input"
              placeholder="Enter email"
            />
            <textarea
              className="form-textarea"
              placeholder="Message here"
            ></textarea>
            <button type="submit" className="form-button">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
