import "./home.css";
import {Link} from "react-router-dom"

const Home = () => {
    return(
        <div className="home-page">
            <div className="top-banner">
                <h1>Veteran Owned</h1>
                <h4>"Never Leave A Fallen Comrade"</h4>
            </div>
            <Link to="/catalog" className="btn btn-info">Check our amazing catalog!</Link>
            <img src="/images/R.jpg"></img>


            
	
	<section id="banner">
	<div className="container-fluid" id="banner-container">
		<div className="row" id="banner-row">
		<div className="col-md-6" id="banner-col">
			<h3>
			BEST PROFESSIONAL Veteran Clothing Line!
			</h3>
			
            <p>
			Show Your pride and wear our American made clothing line
			</p>

			<div className="d-grid gap-2 d-md-flex justify-content-center">
			</div>
		</div>
		<div className="col-md-6" id="banner-col2">
			<img
			className="img-responsive rounded mx-auto d-block"
			src="images/shirt1.jpg"
			alt=""
			/>
		</div>
		</div>
	</div>
	</section>

	
	<section id="service">
	
	<div className="container-fluid" id="service-container">
		<div className="row" id="banner-row">
		<div className="col-md-4" id="service-col1">
			<img
			src="images/shirt7.jpg"
			className="img-fluid rounded mx-auto d-block"
			alt="..."
			/>
			<h3>Fresh Designs</h3>
			
            <p>
			We bring the most up to date, best looking clothing.
			</p>

		</div>
		<div className="col-md-4" id="service-col2">
			<img
			src="images/shirt12.jpg"
			className="img-fluid rounded mx-auto d-block"
			alt="..."
			/>
			<h3>Bulk Purchase</h3>
			
<p>
			1.Toll Free Number
			2. IVR
			3. Virtual Number
			4. Political or any
			Voice Broadcasting
			</p>

		</div>
		<div className="col-md-4" id="service-col3">
			<img
			src="images/shirt8.jpg"
			className="img-fluid rounded mx-auto d-block"
			alt="..."
			/>
			<h3>Payment Gateways</h3>
			
            <p>
			We take all forms of payment, including Crypto!
			</p>

		</div>
		</div>
	</div>
	</section>
	<hr />

	
	<section id="about">
	
	<div className="container-fluid" id="about-container">
		<div className="row" id="banner-row">
		<div className="col-md-6" id="about-col">
			<h3>Why Us</h3>
			<ul>
			<li>
				Veteran owned and operated.
			</li>
			<li>We take pride in what our veterans need</li>
			<li>
				Let us take care of your Business needs.
				Customer Productivity is our Priority.
			</li>
			<li>Our expertise in Business includes</li>
			</ul>
		</div>
		<div className="col-md-6" id="banner-col2">
			<img
			className="img-responsive rounded mx-auto d-block"
			src="images/logo1.jpg"
			alt=""
			/>
		</div>
		</div>
	</div>
	</section>
	<hr />
	

	<section id="product">
	
	<div className="container-fluid" id="product-container">
		<div className="row" id="banner-row">
		<div className="col-md-6" id="about-col">
			<img
			className="img-responsive rounded mx-auto d-block"
			src="images/shirt11.jpg"
			alt=""
			/>
		</div>
		<div className="col-md-6" id="product-col2">
			<h3>Product List</h3>

			<ul>
			<li>COMBAT VETERAN SHIRTS</li>
			<li>LONG SLEEVE AND SHORT SLEEVE</li>
			<li>CUSTOM DESIGNS</li>
			<li>BULK BUYS</li>
			</ul>
		</div>
		</div>
	</div>
	</section>
	<hr />
	
	<section id="social">
	<h1 className="text-center">Get In Touch</h1>
	<div className="d-grid gap-2 d-md-flex justify-content-center">
		<div className="row align-items-center" id="social-row">
		<div className="col-md-4 social-col">
			<a href=""
			><img
				className="img-responsive rounded mx-auto d-block"
				src="images/slide1.jpg"
				alt=""
			/></a>
		</div>
		<div className="col-md-4 social-col">
			<a href=""
			><img
				className="img-responsive rounded mx-auto d-block"
				src="images/shirt9.jpg"
				alt=""
			/></a>
		</div>
		<div className="col-md-4 social-col">
			<a href=""
			><img
				className="img-responsive rounded mx-auto d-block"
				src="images/shirt10.jpg"
				alt=""
			/></a>
		</div>
		</div>
	</div>
	</section>


	<section id="footer">
	<section id="banner">
		<div className="container-fluid" id="banner-container">
		<div className="row" id="banner-row">
			<div className="col-md-4" id="footer-col1">
			<h3>DD214 CLOTHING</h3>
				
<p>
				At DD214 we believe that customers should
				always get easy-to-use, best in the kind
				and fast services.DD214 has achieved
				standards which helps customer to
				achieve satisfaction and realize
				value for their hard earned money.
			</p>

			</div>
			<div className="col-md-4" id="footer-col2">
			<h3>Contact Us</h3>
				
<p>Call Us- 1800-121-6532</p>

				
<p>Email Us- DD214clothing@usa.com</p>

			</div>

			<div className="col-md-4" id="footer-col2">
			<h3>Subscribe To Newsletter</h3>
			<form>
				<div className="mb-3">
				<input
					type="email"
					placeholder="Enter Your Email"
					className="form-control"
					id="exampleInputEmail1"
					aria-describedby="emailHelp"
				/>
				<div id="emailHelp"
					className="form-text">
					We'll never share your email with anyone else.
				</div>
				</div>
				<button type="submit"
						className="btn btn-primary">
						Submit
				</button>
			</form>
			</div>
		</div>
		</div>
	</section>
	</section>



        </div>


        

        
        
    )
};

export default Home;