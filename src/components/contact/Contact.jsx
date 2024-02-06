import './Contact.css';
import rasm from "./1.png"


function Contact() {
  return (
    <div className="Contact">
     <div className="location">
    <div className="location_box">
   <a href="https://www.google.com/maps/place/%D0%A3%D0%B9%D1%87%D0%B8,+%D0%9D%D0%B0%D0%BC%D0%B0%D0%BD%D0%B3%D0%B0%D0%BD%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+%D0%A3%D0%B7%D0%B1%D0%B5%D0%BA%D0%B8%D1%81%D1%82%D0%B0%D0%BD/@41.0233543,71.7789286,13z/data=!3m1!4b1!4m6!3m5!1s0x38bb51558170ce59:0x2a0e0d4cd9fb41c2!8m2!3d41.0289533!4d71.845274!16s%2Fm%2F012mz90m?entry=ttu">
    <img src={rasm} alt="" />
   </a>
    </div>
     </div>
     <div className="text">
      <h3>
        Manzil : Namangan viloyati , <br /> Uychi tumani
      </h3>
      <h3>
        Telefonlar : <br />
        +998 93 195 00 11 <br />
        +998 99 774 00 11
      </h3>
     </div>
    </div>
  );
}

export default Contact;
