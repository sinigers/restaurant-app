import "./Testimony.css";

const Testimony = () => {
  return (
    <section
      id="gtco-testimonial"
      class="overlay bg-fixed section-padding"
      // style="background-image: url(img/testi-bg.jpg);"
      style={{
        backgroundImage:
          "url(" +
          "https://cdn3.photostockeditor.com/c/0511/computer-woman-in-brown-long-sleeve-shirt-sitting-by-the-table-using-macbook-people-people-image.jpg" +
          ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div class="container">
        <div class="section-content">
          <div class="heading-section text-center">
            <span class="subheading">Testimony</span>
            <h2>Happy Customer</h2>
          </div>
          <div class="row">
            <div class="testi-content testi-carousel owl-carousel">
              <div class="testi-item">
                <i class="testi-icon fa fa-3x fa-quote-left"></i>
                <p class="testi-text">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </p>
                <p class="testi-author">John Doe</p>
                <p class="testi-desc">
                  CEO of <span>GetTemplates</span>
                </p>
              </div>
              <div class="testi-item">
                <i class="testi-icon fa fa-3x fa-quote-left"></i>
                <p class="testi-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Adipisci non doloribus ut, alias doloremque perspiciatis.
                </p>
                <p class="testi-author">Mary Jane</p>
                <p class="testi-desc">
                  CTO of <span>Unidentity Inc</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Testimony;
