import "./about.css";

const About = () => {
    const exercise = () => {
    console.log("TEst Test Test");

    const ages = [13, 45, 74, 12, 78, 23, 56, 33, 72, 62, 46, 18, 3, 93, 10];

    let total = 0;
    for (let i = 0; i < ages.length; i++) {
        let num = ages[i];
        total += num;
    }

    console.log("The sum is", total);
    };



    return (
    <div className="about-page">
        <h1>DD214 Clothing</h1>
        <h5>Created by: Kevin Hansen</h5>

        <button onClick={exercise}>Do the magic!</button>

        <div className="aboutus-section">
        <div className="container">
            <div className="row">
                <div className="col-md-3 col-sm-6 col-xs-12">
                    <div className="aboutus">
                        <h2 className="aboutus-title">About Us</h2>
                        <p className="aboutus-text">Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in.</p>
                        <p className="aboutus-text">This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem</p>
                        <a className="aboutus-more" href="#">read more</a>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12">
                    <div className="aboutus-banner">
                        <img src="images/logo4.jpg" alt=""/>
                    </div>
                </div>
                <div className="col-md-5 col-sm-6 col-xs-12">
                    <div className="feature">
                        <div className="feature-box">
                            <div className="clearfix">
                                <div className="iconset">
                                    <span className="glyphicon glyphicon-cog icon"></span>
                                </div>
                                <div className="feature-content">
                                    <h4>Work with heart</h4>
                                    <p>Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in.</p>
                                </div>
                            </div>
                        </div>
                        <div className="feature-box">
                            <div className="clearfix">
                                <div className="iconset">
                                    <span className="glyphicon glyphicon-cog icon"></span>
                                </div>
                                <div className="feature-content">
                                    <h4>Reliable services</h4>
                                    <p>Donec vitae sapien ut libero venenatis faucibu. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt</p>
                                </div>
                            </div>
                        </div>
                        <div className="feature-box">
                            <div className="clearfix">
                                <div className="iconset">
                                    <span className="glyphicon glyphicon-cog icon"></span>
                                </div>
                                <div className="feature-content">
                                    <h4>Great support</h4>
                                    <p>Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    </div>


    );
};

export default About;
