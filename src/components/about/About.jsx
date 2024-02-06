import './About.css';
import rasm from "./1.jpg";

function About() {
  return (
    <div className="About">
     <div className="navbar_about">
      Biz haqimizda !!!
     </div>
     <div className="banner_about">
      <div className="main-picture">
       <div className="img">
       <img src={rasm} alt="" />
       </div>
      </div>
      <div className="main-text">
      <h1>Umar travel Agency</h1>

      <p>
      Salaam travel turizm  asosiy yo'nalishi Umra va Haj safarlari tashkil etish bo'yicha ishlaydi. Bu boradagi tajribasi asosida shu kungacha 5000 dan ziyod umrachilarning chiroyli holatda Umra safarlariga borib kelishlariga xizmat qildi.
      </p>
      </div>
     </div>
    </div>
  );
}

export default About;
