import React from "react";
import CodeBy from "./CodeBy";
import profile_2 from "../images/yasmin-profile.png";
import "./styles/Sobre.css";

export default function Sobre() {
  return (
    <div className="Sobre">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6">
            <h1>Yasmin Rolim</h1>
            <div className="texto">
              <p>
                Lorem ipsum dolor sit amet. Non dignissimos esse in molestiae
                minima et dicta debitis id incidunt laborum sit officia deleniti
                vel labore voluptates qui cumque pariatur. Et enim voluptas in
                galisum dolore aut quis aut rerum rerum? Ut omnis expedita eos
                doloremque minus corrupti optio id enim itaque? Ut deleniti
                cumque ut consequuntur fuga ea similique incidunt est earum
                perferendis ad nihil ipsum in similique nulla qui ullam tempore.
                Est galisum velit a quia modi qui voluptatem quia.
              </p>
              <p>
                Et beatae officia sunt iusto et sequi distinctio nam natus enim
                qui repellendus sint nam iste voluptatibus. Eum corrupti fugit
                id recusandae nemo qui perferendis excepturi ea velit temporibus
                ea obcaecati doloremque aut sequi iure et nesciunt sunt.{" "}
              </p>
              <p>
                Et alias voluptatibus sed eveniet voluptatem hic sunt animi et
                ipsum maxime aut voluptas molestiae non necessitatibus
                accusantium sed optio provident. Et veniam nisi sed accusantium
                iusto aut laudantium possimus et numquam corrupti. Hic
                voluptatem nesciunt est quasi recusandae et blanditiis dolores
                nam quia tempore ea voluptates commodi aut voluptas asperiores.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <img src={profile_2} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
      <CodeBy />
    </div>
  );
}
