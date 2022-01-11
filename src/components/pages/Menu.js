// import { Link } from "react-router-dom";
// import "./MenuSection.css";
import useFetch from "react-fetch-hook";
import FilterAllProducts from "../Filter";

const Menu = () => {
  const { isLoading, error, data } = useFetch(
    "https://5sl2f.sse.codesandbox.io/products"
  );
  if (isLoading) return "Loading...";
  if (error) return "Error getting data!";

  return (
    <section id="gtco-menu" class="section-padding">
      <div class="container">
        <div class="section-content">
          <div class="row mb-5">
            <div class="col-md-12">
              <h2>Edit</h2>
              <h2>Print</h2>
              <h2>Create</h2>

              <div class="heading-section text-center">
                <span class="subheading">Specialties</span>
                <h2>Our Menu</h2>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 menu-wrap">
              <div class="heading-menu">
                <h3 class="text-center mb-5">Breakfast</h3>
              </div>
              <div>
                {data && (
                  <FilterAllProducts products={data} title="Breakfast" />
                )}
              </div>
              {/* <div class="menus d-flex align-items-center">
                <div class="menu-img rounded-circle">
                  <img class="img-fluid" src="img/breakfast-1.jpg" alt="" />
                </div>
                <div class="text-wrap">
                  <div class="row align-items-start">
                    <div class="col-8">
                      <h4>Egg Sandwich</h4>
                    </div>
                    <div class="col-4">
                      <h4 class="text-muted menu-price">$30</h4>
                    </div>
                  </div>
                  <p>Meat Ball, Mie</p>
                </div>
              </div> */}
            </div>

            <div class="col-lg-4 menu-wrap">
              <div class="heading-menu">
                <h3 class="text-center mb-5">Preorder</h3>
              </div>
              <div class="menus d-flex align-items-center">
                <div class="menu-img rounded-circle">
                  <img class="img-fluid" src="img/breakfast-1.jpg" alt="" />
                </div>
                <div class="text-wrap">
                  <div class="row align-items-start">
                    <div class="col-8">
                      <h4>Ham and cheese sandwich</h4>
                    </div>
                    <div class="col-4">
                      <h4 class="text-muted menu-price">$6.90</h4>
                    </div>
                  </div>
                  <p>with tomato slices</p>
                </div>
              </div>
              <div class="menus d-flex align-items-center">
                <div class="menu-img rounded-circle">
                  <img class="img-fluid" src="img/breakfast-1.jpg" alt="" />
                </div>
                <div class="text-wrap">
                  <div class="row align-items-start">
                    <div class="col-8">
                      <h4>Egg Sandwich</h4>
                    </div>
                    <div class="col-4">
                      <h4 class="text-muted menu-price">$30</h4>
                    </div>
                  </div>
                  <p>Meat Ball, Mie</p>
                </div>
              </div>
              <div class="menus d-flex align-items-center">
                <div class="menu-img rounded-circle">
                  <img class="img-fluid" src="img/breakfast-1.jpg" alt="" />
                </div>
                <div class="text-wrap">
                  <div class="row align-items-start">
                    <div class="col-8">
                      <h4>Egg Sandwich</h4>
                    </div>
                    <div class="col-4">
                      <h4 class="text-muted menu-price">$30</h4>
                    </div>
                  </div>
                  <p>Meat Ball, Mie</p>
                </div>
              </div>
            </div>

            <div class="col-lg-4 menu-wrap">
              <div class="heading-menu">
                <h3 class="text-center mb-5">Breakfast</h3>
              </div>
              <div class="menus d-flex align-items-center">
                <div class="menu-img rounded-circle">
                  <img class="img-fluid" src="img/breakfast-1.jpg" alt="" />
                </div>
                <div class="text-wrap">
                  <div class="row align-items-start">
                    <div class="col-8">
                      <h4>Egg Sandwich</h4>
                    </div>
                    <div class="col-4">
                      <h4 class="text-muted menu-price">$30</h4>
                    </div>
                  </div>
                  <p>Meat Ball, Mie</p>
                </div>
              </div>
              <div class="menus d-flex align-items-center">
                <div class="menu-img rounded-circle">
                  <img class="img-fluid" src="img/breakfast-1.jpg" alt="" />
                </div>
                <div class="text-wrap">
                  <div class="row align-items-start">
                    <div class="col-8">
                      <h4>Egg Sandwich</h4>
                    </div>
                    <div class="col-4">
                      <h4 class="text-muted menu-price">$30</h4>
                    </div>
                  </div>
                  <p>Meat Ball, Mie</p>
                </div>
              </div>
              <div class="menus d-flex align-items-center">
                <div class="menu-img rounded-circle">
                  <img class="img-fluid" src="img/breakfast-1.jpg" alt="" />
                </div>
                <div class="text-wrap">
                  <div class="row align-items-start">
                    <div class="col-8">
                      <h4>Egg Sandwich</h4>
                    </div>
                    <div class="col-4">
                      <h4 class="text-muted menu-price">$30</h4>
                    </div>
                  </div>
                  <p>Meat Ball, Mie</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
