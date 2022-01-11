import { Link } from "react-router-dom";
import "./WelcomeSection.css";

const WelcomeSection = () => {
  return (
    <section id="gtco-welcome" class="bg-white section-padding">
      <div class="container">
        <div class="section-content">
          <div class="row">
            <div
              class="col-sm-5 img-bg d-flex shadow align-items-center justify-content-center justify-content-md-end img-2"
              // style="background-image: url(img/hero-2.jpg);"
              style={{
                backgroundImage:
                  "url(" +
                  "https://cdn2.photostockeditor.com/c/2612/food-waffle-with-cream-on-white-ceramic-plate-breakfast-breakfast-image.jpg" +
                  ")",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"
              }}
            ></div>
            <div class="col-sm-7 py-5 pl-md-0 pl-4">
              <div class="heading-section pl-lg-5 ml-md-5">
                <span class="subheading">About</span>
                <h2>Welcome to Resto</h2>
              </div>
              <div class="pl-lg-5 ml-md-5">
                <p>
                  On her way she met Link copy. The copy warned the Little Blind
                  Text, that where it came from it would have been rewritten
                  Link thousand times and everything that was left from its
                  origin would be the word "and" and the Little Blind Text
                  should turn around and return to its own, safe country. Link
                  small river named Duden flows by their place and supplies it
                  with the necessary regelialia. It is Link paradisematic
                  country, in which roasted parts of sentences fly into your
                  mouth.
                </p>
                <h3 class="mt-5">Special Recipe</h3>
                <div class="row">
                  <div class="col-4">
                    <Link to="#" class="thumb-menu">
                      <img
                        class="img-fluid img-cover"
                        src="https://cdn3.photostockeditor.com/t/2212/food-bottle-of-milk-beside-bowl-breakfast-breakfast-image.jpg"
                      />
                      <h6>Australian Organic Beef</h6>
                    </Link>
                  </div>
                  <div class="col-4">
                    <Link to="#" class="thumb-menu">
                      <img
                        class="img-fluid img-cover"
                        src="https://cdn3.photostockeditor.com/t/2511/bread-breakfast-delicious-eating-healthy-image.jpg"
                      />
                      <h6>Australian Organic Beef</h6>
                    </Link>
                  </div>
                  <div class="col-4">
                    <Link to="#" class="thumb-menu">
                      <img
                        class="img-fluid img-cover"
                        src="https://cdn3.photostockeditor.com/t/1211/dish-meal-food-produce-breakfast-image.jpg"
                      />
                      <h6>Australian Organic Beef</h6>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
