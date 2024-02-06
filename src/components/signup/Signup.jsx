import './Signup.css';
import rasm from "./1.jpg";


function Signup() {
  return (
    <div className="Signup">
     <div className="sign_box">
      <div className="img_sign">
        <p>Sign up</p>
        <img src={rasm} alt="" />
      </div>
      <div className="text_sign">
      <h1 className='welcome'>
      <section>
	<div class="content">
		<h2>Umar_Travel</h2>
		<h2>Umar_Travel</h2>
	</div>
</section>
      </h1>
        <div className="user_name_p">
          <p>Familiya va ismingizni kiriting</p>
        </div>
        <input type="text" name="" id="" placeholder='Masalan, Hoshimboyev Humoyun' />
        <div className="user_name_p"><p>Telefon raqaminggizni kiriting</p></div>
        <input type="number" name="" id="" placeholder='Masalan, +998 99 974 00 11'/>
        <div className="user_name_p"><p>Safar vaqtini tanlang</p></div>

        <input type="week" name="" id="" />

        <button>Jo'natish</button>
      </div>
        
     </div>
    </div>
  );
}

export default Signup;
