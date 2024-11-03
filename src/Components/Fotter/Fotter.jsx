import React from 'react'
import "./FotterStyles.css";
import { Link } from 'react-router-dom';

const Fotter = () => {
  return (
    <section className="fotter">
      <div className="social_links">
        <ul>
          <li data-aos="fade-right">
            <Link to={"https://www.facebook.com/profile.php?id=61554110842664"}>
              <i className="fa-brands fa-facebook-f"></i>
            </Link>
          </li>
           <li data-aos="fade-right">
            <Link to={"https://github.com/kh1aled"}>
              <i className="fa-brands fa-github"></i>
            </Link>
          </li>
           <li data-aos="fade-right">
            <Link to={"http://wa.me/+01159107545"}>
              <i className="fa-brands fa-whatsapp"></i>
            </Link>
          </li>
           <li data-aos="fade-right">
            <Link to={""}>
              <i className="fa-brands fa-linkedin"></i>
            </Link>
          </li>

        </ul>
      </div>
      <div className="row details ">
        <div className="col-12 col-md-4 col-lg-3  col-xl-3 column">
          <div className="location">
            <h1 className="title"><i class="fa-solid fa-map-location-dot"></i> Location</h1>
            <div className='description'>Bani Mazar,Elminya,Egypt</div>
          </div>
        </div>
        <div className="col-12 col-md-4 col-lg-3  col-xl-3 column">
          <div className="support">
            <h1 className="title"><i class="fa-regular fa-clock"></i> available time</h1>
            <div className='description'>monday - sutrday</div>
            <div className='description'>8pm - 9am</div>
          </div>
       
        </div>
        <div className="col-12 col-md-4 col-lg-3  col-xl-3 column">
        <div className="support">
            <h1 className="title"><i class="fa-regular fa-envelope"></i> email</h1>
            <div className='description'>khaledhamdy825@gmail.com</div>
          </div>
        </div>
        <div className="col-12 col-md-4 col-lg-3  col-xl-3 column">
        <div className="support">
            <h1 className="title"><i class="fa-solid fa-phone-flip"></i> phone</h1>
            <div className='description'>01159107545</div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>all rights reserved &copy; copyright khaled hamdy</p>
      </div>
    </section>
  )
}

export default Fotter