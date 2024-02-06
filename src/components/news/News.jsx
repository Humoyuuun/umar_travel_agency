import './News.css';



function News() {
  return (
    <div className="News">
     <div className="navbar_news">
      NEWS
     </div>
     <div className="news_banner">
      <div class="card news_1">
      <img src="https://static.vecteezy.com/system/resources/previews/021/155/897/original/muslim-family-praying-png.png" alt="" />
      <p>
      Oilaviy sayohatlarga chegirmalar bor !!!
      </p>
</div>

      <div className="card news_2">
        <img src="https://cdni.iconscout.com/illustration/premium/thumb/islamic-woman-customer-care-employee-9243823-7517994.png" alt="" />
     <p>Biz bilan 24/7 murojat etish mumkin !!!</p>
      </div>
      <div className="card news_3">
        <img src="https://avatanplus.com/files/resources/original/58876746d2df5159d0eb6cd0.png" alt="" />
        <p>Namangandan to'g'ri Umra safariga boring !!!</p>
      </div>
     </div>
    </div>
  );
}

export default News;
