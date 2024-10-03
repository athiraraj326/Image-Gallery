import './App.css'

function App() {


  return (
    <>
      {/* navbar */}
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid px-4">
          <a className="navbar-brand text-white fs-1 ms-4" href="#">Photo<span className='text-danger'>f</span>lash</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse p-4" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-3 mb-lg-0 pe-5">
              <li className="nav-item">
                <a className="nav-link me-5" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link me-5" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link me-5" href="#gallery">Gallery</a>
              </li>
              <li className="nav-item">
                <a className="nav-link me-5" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* home */}
      <section id='home'>
        <div className='position-relative'>
          <img style={{ width: '100%', height: '600px' }} src="images/banner1.jpg" alt="" />
          <div className='position-absolute top-0 w-100 text-center d-flex flex-column
              justify-content-center align-items-center' style={{ height: "600px", background: 'rgba(0, 0, 0, 0.6)' }}>
            <h1 className='text-light'>Capturing the moments that captivate your heart.</h1>
            <button className='btn btn-danger fs-5 mt-3'>Explore More</button>
          </div>
        </div>
      </section>
      {/* gallary */}
      <section id='gallery'>
        <div className='container'>
          <div className='row my-5 px-5 text-light' style={{ cursor: "pointer" }}>
            <h3 className='col-md-3 col-sm-12 mb-4 text-danger text-center'>All</h3>
            <h3 className='col-md-3 col-sm-12 mb-4 headings text-center'>&#x2022; Nature</h3>
            <h3 className='col-md-3 col-sm-12 mb-4 headings text-center'>&#x2022; Fashion</h3>
            <h3 className='col-md-3 col-sm-12 mb-4 headings text-center'>&#x2022; Studios</h3>
          </div>
          <div className="row row-gap-5 mx-5">
            <div className="col-md-4 col-sm-6 gallery">
              <img width={'300px'} height={'300px'} src="images/img1.avif" alt="" />
            </div>
            <div className="col-md-4 col-sm-6 gallery">
              <img width={'300px'} height={'300px'} src="images/img2.jpg" alt="" />
            </div>
            <div className="col-md-4 col-sm-6 gallery">
              <img width={'300px'} height={'300px'} src="images/img3.jpg" alt="" />
            </div>
            <div className="col-md-4 col-sm-6 gallery">
              <img width={'300px'} height={'300px'} src="images/img4.jpg" alt="" />
            </div>
            <div className="col-md-4 col-sm-6 gallery">
              <img width={'300px'} height={'300px'} src="images/img5.avif" alt="" />
            </div>
            <div className="col-md-4 col-sm-6 gallery">
              <img width={'300px'} height={'300px'} src="images/img6.avif" alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* about */}
      <section id='about'>
        <div className="container text-light mt-5 pt-5">
          <h2 className='text-center my-5 headings' style={{ cursor: 'pointer' }}>About</h2>
          <div className="row">
            <div className="about-image col-md-6 col-sm-12">
              <img className='rounded img-fluid' src="images/about.jpg" alt="" />
            </div>
            <div className="col-md-6 col-sm-12 p-5">
              <h5>Who we are</h5>
              <h3>Simply dummy text of the printing industry.</h3>
              <p className='mt-4'>Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quae, fugiat consequatur voluptatem nihil ad.</p>
              <button className='btn btn-danger fs-5 fw-bold px-3 mt-5'>Read More</button>
            </div>
          </div>
        </div>
      </section>
      {/* feed */}
      <div className="d-flex justify-content-center flex-wrap insta-feed my-5 pt-5">
        <div className='position-relative'>
          <img src="images/p1.jpg" alt="" />
          <div className='insta-content'>
            <i className="fa-brands fa-instagram text-light fs-2"></i>
          </div>
        </div>
        <div className='position-relative'>
          <img src="images/p2.jpg" alt="" />
          <div className='insta-content'>
            <i className="fa-brands fa-instagram text-light fs-2"></i>
          </div>
        </div>
        <div className='position-relative'>
          <img src="images/p3.jpg" alt="" />
          <div className='insta-content'>
            <i className="fa-brands fa-instagram text-light fs-2"></i>
          </div>
        </div>
        <div className='position-relative'>
          <img src="images/p4.jpg" alt="" />
          <div className='insta-content'>
            <i className="fa-brands fa-instagram text-light fs-2"></i>
          </div>
        </div>
        <div className='position-relative'>
          <img src="images/p5.jpg" alt="" />
          <div className='insta-content'>
            <i className="fa-brands fa-instagram text-light fs-2"></i>
          </div>
        </div>
        <div className='position-relative'>
          <img src="images/p1.jpg" alt="" />
          <div className='insta-content'>
            <i className="fa-brands fa-instagram text-light fs-2"></i>
          </div>
        </div>
        <div className='position-relative'>
          <img src="images/p2.jpg" alt="" />
          <div className='insta-content'>
            <i className="fa-brands fa-instagram text-light fs-2"></i>
          </div>
        </div>
        <div className='position-relative'>
          <img src="images/p3.jpg" alt="" />
          <div className='insta-content'>
            <i className="fa-brands fa-instagram text-light fs-2"></i>
          </div>
        </div>

      </div>
      {/* footer */}
      <section id='contact'>
        <div className='container text-light my-5 w-100 pt-5'>
          <div className='d-flex flex-wrap justify-content-between align-items-center border rounded px-5 py-4 my-5'>
            <div className='my-2'>
              <h2>Subscribe our newsletter</h2>
              <p>We’re a team of non-cynics who truly care for our work.</p>
            </div>
            <div className='d-flex w-50 my-2'>
              <input type="text" className='form-control rounded-0 fs-5 p-3' placeholder='Enter your email here' />
              <button className='btn btn-danger rounded-0 fs-5 subBtn'>Subscribe</button>
            </div>
          </div>
          <div className="d-flex flex-wrap justify-content-between border-bottom pb-5">
            <div className="d-flex flex-column justify-content-between mt-3 mb-5">
              <h3>Contact Information</h3>
              <p className='mt-4' style={{ fontSize: '18px' }}>Lorem ipsum dolor sit amet, consectetur elit. Nihil sit dicta, <br /> commodi maxime provident quidem non, amet</p>
              <div className="footerIcons d-flex  mt-3">
                <a href="" style={{ textDecoration: 'none', color: 'white' }} target='_blank'><i className="fa-brands fa-twitter text-danger"></i></a>
                <a href="" style={{ textDecoration: 'none', color: 'white' }} target='_blank'><i className="fa-brands fa-instagram text-danger"></i></a>
                <a href="" style={{ textDecoration: 'none', color: 'white' }} target='_blank'><i className="fa-brands fa-facebook text-danger"></i></a>
                <a href="" style={{ textDecoration: 'none', color: 'white' }} target='_blank'><i className="fa-brands fa-whatsapp text-danger"></i></a>
              </div>
            </div>
            <div className="d-flex flex-column mt-3 mb-5">
              <h3>Archives</h3>
              <div style={{ fontSize: '18px' }} className='d-flex flex-column mt-4'>
                <a href="" style={{ textDecoration: 'none', color: 'white' }}>December 2020</a>
              </div>
            </div>
            <div className="d-flex flex-column mt-3 mb-5">
              <h3>Categories</h3>
              <div style={{ fontSize: '18px' }} className='d-flex flex-column mt-4'>
                <a href="" style={{ textDecoration: 'none', color: 'white' }}>Photography</a>
                <a href="" style={{ textDecoration: 'none', color: 'white' }}>Photostudio</a>
              </div>
            </div>
            <div className="d-flex flex-column mt-3">
              <h3>Meta</h3>
              <div style={{ fontSize: '18px' }} className='d-flex flex-column mt-4'>
                <a href="" style={{ textDecoration: 'none', color: 'white' }}>Log in</a>
                <a href="" style={{ textDecoration: 'none', color: 'white' }}>Entries feed</a>
                <a href="" style={{ textDecoration: 'none', color: 'white' }}>Comments feed</a>
                <a href="" style={{ textDecoration: 'none', color: 'white' }}>WordPress.org</a>
              </div>
            </div>
          </div>
          <p className='text-center mt-5'>Copyright &copy; 2024, All Rights Reserved by Photoflash</p>
        </div>
      </section>
    </>
  )
}

export default App
