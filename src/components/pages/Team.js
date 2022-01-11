import "./Team.css";
import { Link } from "react-router-dom";

const Team = () => {
  return (
    <section id="gtco-team" class="bg-white section-padding">
      <div class="container">
        <div class="section-content">
          <div class="heading-section text-center">
            <span class="subheading">Specialties</span>
            <h2>Our Team</h2>
          </div>
          <div class="row">
            <div class="col-md-4">
              <div class="team-card mb-5">
                <img
                  class="img-fluid"
                  src="https://cdn3.photostockeditor.com/t/1708/person-black-and-white-male-food-cooking-image.jpg"
                  alt=""
                />
                <div class="team-desc">
                  <h4 class="mb-0">Aaron Patel</h4>
                  <p class="mb-1">CEO</p>
                  <ul class="list-inline mb-0 team-social-links">
                    <li class="list-inline-item">
                      <Link to="#">
                        <i class="fab fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li class="list-inline-item">
                      <Link to="#">
                        <i class="fab fa-twitter"></i>
                      </Link>
                    </li>
                    <li class="list-inline-item">
                      <Link to="#">
                        <i class="fab fa-instagram"></i>
                      </Link>
                    </li>
                    <li class="list-inline-item">
                      <Link to="#">
                        <i class="fab fa-google-plus-g"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="team-card mb-5">
                <img
                  class="img-fluid"
                  src="https://cdn1.photostockeditor.com/t/2911/human-man-assisting-cooking-woman-person-person-image.jpg"
                  alt=""
                />
                <div class="team-desc">
                  <h4 class="mb-0">Daniel Tebas</h4>
                  <p class="mb-1">Chef</p>
                  <ul class="list-inline mb-0 team-social-links">
                    <li class="list-inline-item">
                      <Link to="#">
                        <i class="fab fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li class="list-inline-item">
                      <Link to="#">
                        <i class="fab fa-twitter"></i>
                      </Link>
                    </li>
                    <li class="list-inline-item">
                      <Link to="#">
                        <i class="fab fa-instagram"></i>
                      </Link>
                    </li>
                    <li class="list-inline-item">
                      <Link to="#">
                        <i class="fab fa-google-plus-g"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="team-card mb-5">
                <img
                  class="img-fluid"
                  src="https://cdn2.photostockeditor.com/t/2312/people-chef-making-pasta-inside-kitchen-bowl-bowl-image.jpg"
                  alt=""
                />
                <div class="team-desc">
                  <h4 class="mb-0">Jon Snow</h4>
                  <p class="mb-1">Chef</p>
                  <ul class="list-inline mb-0 team-social-links">
                    <li class="list-inline-item">
                      <Link to="#">
                        <i class="fab fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li class="list-inline-item">
                      <Link to="#">
                        <i class="fab fa-twitter"></i>
                      </Link>
                    </li>
                    <li class="list-inline-item">
                      <Link to="#">
                        <i class="fab fa-instagram"></i>
                      </Link>
                    </li>
                    <li class="list-inline-item">
                      <Link to="#">
                        <i class="fab fa-google-plus-g"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
