import React from 'react'
import Foot from './components/Foot'
import '../public/styles44.css';
const App = () => {
  return (
    <div className='big-boi'>
       <div className='body'>
    <div className='body-inner'>
      <header id="header">
        <img
          id="header-img"
          width="90px"
          src="https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?cs=srgb&dl=pexels-mikebirdy-112460.jpg&fm=jpg"
          alt="Logo"
        />
        <nav id="nav-bar">
          <h1 className="heading">LuxAuto</h1>
          <a className="nav-link" href="#home">Home</a>
          <a className="nav-link" href="#features">Features</a>
          <a className="nav-link" href="#contact">Contact</a>
        </nav>
      </header>
      
      <div className="videos">
        <video
          id="video-vid1"
          src="https://videos.pexels.com/video-files/3066463/3066463-uhd_4096_2160_24fps.mp4"
          autoPlay
          loop
        />
        <video
          id="video-vid2"
          className="vid2"
          src="https://videos.pexels.com/video-files/5309381/5309381-hd_1920_1080_25fps.mp4"
          autoPlay
          loop
        />
        <video
          id="video-vid3"
          className="vid3"
          src="https://videos.pexels.com/video-files/3066427/3066427-uhd_4096_2160_24fps.mp4"
          autoPlay
          loop
        />
      </div>

      <div className="bio">
        <p>Welcome to LuxAuto, where sophistication meets performance in our curated selection of luxury vehicles. At LuxAuto, we redefine the car buying experience, offering a seamless online platform that caters to discerning buyers seeking nothing but the best. Our website boasts an exquisite array of premium automobiles, from sleek sports cars to opulent sedans, each meticulously crafted to embody elegance and excellence. With intuitive search filters and detailed vehicle profiles, finding your dream car has never been easier.</p>
        <hr />
        <br />
        <p>Indulge in the ultimate luxury car shopping experience at LuxAuto. Our website not only showcases an unparalleled collection of elite automobiles but also provides comprehensive resources to aid in your decision-making process. From in-depth vehicle specifications to virtual test drives, we empower you to make informed choices tailored to your preferences. Whether you crave the thrill of a high-performance machine or the refinement of a luxury cruiser, LuxAuto is your premier destination for automotive luxury.</p>
        <hr />
        <br />
        <p>At LuxAuto, luxury extends beyond the cars themselves to every aspect of our service. Our dedicated team of automotive experts is committed to delivering personalized assistance, ensuring that your journey to owning a luxury vehicle is seamless and satisfying. With transparent pricing, flexible financing options, and white-glove delivery services, LuxAuto sets the standard for luxury car buying online. Experience the epitome of automotive indulgence with LuxAuto — where your dream car awaits.</p>
        <hr />
        <br />
      </div>

      <div id="content">
        <h1 id="home">Welcome to Our Product!</h1>
      
        
      </div>

      <div id="features">
        
        <p>Explore the incredible features of our product.</p>
      </div>

      <div id="products">
        <div className="product-card">
          <img
            src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/models_gw/2023/03_29_revuelto/gate_models_s_02_m.jpg"
            alt="Product 1"
          />
          <h3>Product 1</h3>
          <p>Description of Product 1</p>
          <button style={{ textAlign: 'center' }}>Buy Now</button>
          <button style={{ textAlign: 'center' }}>Rent Now</button>
        </div>
        <div className="product-card">
          <img
            src="https://hips.hearstapps.com/hmg-prod/images/2024-nissan-z-nismo-116-64c8117a866f8.jpg"
            alt="Product 2"
          />
          <h3>Product 2</h3>
          <p>Description of Product 2</p>
          <button style={{ textAlign: 'center' }}>Buy Now</button>
          <button style={{ textAlign: 'center' }}>Rent Now</button>
        </div>
        <div className="product-card">
          <img
            src="https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/body-image/public/8-lotus-emira-top-10_0.jpg?itok=Gji179uE"
            alt="Product 3"
          />
          <h3>Product 3</h3>
          <p>Description of Product 3</p>
          <button style={{ textAlign: 'center' }}>Buy Now</button>
          <button style={{ textAlign: 'center' }}>Rent Now</button>
        </div>
        <div className="product-card">
          <img
            src="https://www.topgear.com/sites/default/files/2021/12/18.%20Koenigsegg%20Jesko.jpeg"
            alt="Product 4"
          />
          <h3>Product 4</h3>
          <p>Description of Product 4</p>
          <button style={{ textAlign: 'center' }}>Buy Now</button>
          <button style={{ textAlign: 'center' }}>Rent Now</button>
        </div>
        <div className="product-card">
          <img
            src="https://pyxis.nymag.com/v1/imgs/df3/2f4/964355023c8621887c37e1fcc3c1dc3aa9-koeniggsegg-one1.2x.h473.w710.jpg"
            alt="Product 5"
          />
          <h3>Product 5</h3>
          <p>Description of Product 5</p>
          <button style={{ textAlign: 'center' }}>Buy Now</button>
          <button style={{ textAlign: 'center' }}>Rent Now</button>
        </div>
        <div className="product-card">
          <img
            src="https://cdn.pixabay.com/photo/2023/02/07/17/49/supercar-7774683_640.jpg"
            alt="Product 6"
          />
          <h3>Product 6</h3>
          <p>Description of Product 6</p>
          <button style={{ textAlign: 'center' }}>Buy Now</button>
          <button style={{ textAlign: 'center' }}>Rent Now</button>
        </div>
        <div className="product-card">
          <img
            src="https://i.insider.com/54efa0d369bedd6452d8fa88?width=700"
            alt="Product 7"
          />
          <h3>Product 7</h3>
          <p>Description of Product 7</p>
          <button style={{ textAlign: 'center' }}>Buy Now</button>
          <button style={{ textAlign: 'center' }}>Rent Now</button>
        </div>
        <div className="product-card">
          <img
            src="https://media.architecturaldigest.com/photos/5d5c449e19a33100085cd622/4:3/w_2000,h_1500,c_limit/02_CD_3I4%20FRONT.jpg"
            alt="Product 8"
          />
          <h3>Product 8</h3>
          <p>Description of Product 8</p>
          <button style={{ textAlign: 'center' }}>Buy Now</button>
          <button style={{ textAlign: 'center' }}>Rent Now</button>
        </div>
        <div className="product-card">
          <img
            src="https://static1.hotcarsimages.com/wordpress/wp-content/uploads/2023/04/new-project-10.jpg"
            alt="Product 9"
          />
          <h3>Product 9</h3>
          <p>Description of Product 9</p>
          <button style={{ textAlign: 'center' }}>Buy Now</button>
          <button style={{ textAlign: 'center' }}>Rent Now</button>
        </div>
      </div>

      <form id="form" action="https://www.freecodecamp.com/email-submit">
        <input
          placeholder="Write your Email Here"
          type="email"
          name="email"
          id="email"
        />
        <input id="submit" type="submit" value="Submit" />
      </form>

      <div id="contact">
      
        <p className='para'>Have any questions? Reach out to us!</p>
      </div>
    <Foot/>
    </div>
    </div>
    </div>
  )
}

export default App
