import F01 from "@/public/images/f_01.png";
import F01Dark from "@/public/images/f_01_dark.png";
import F02 from "@/public/images/f_02.png";
import F02Dark from "@/public/images/f_02_dark.png";
import F05 from "@/public/images/f_05.png";
import F05Dark from "@/public/images/f_05_dark.png";
import Image from "next/image";

export default function Features2_5() {
    return (
      <>
        <section id="features-2" className="py-100 features-section division">
          <div className="container">
            {/* SECTION TITLE */}
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-9">
                <div className="section-title mb-80">
                  {/* Title */}
                  <h2 className="s-50 w-700">Everything in One Place</h2>
                  {/* Text */}
                  <p className="s-21 color--grey">
                    Ligula risus auctor tempus magna feugiat lacinia.
                  </p>
                </div>
              </div>
            </div>
            {/* FEATURES-2 WRAPPER */}
            <div className="fbox-wrapper text-center">
              <div className="row row-cols-1 row-cols-md-3">
                {/* FEATURE BOX #1 */}
                <div className="col">
                  <div className="fbox-2 fb-1 wow fadeInUp">
                    {/* Image */}
                    <div className="fbox-img gr--whitesmoke h-175">
                      <Image
                        src={F01}
                        alt="brand-logo"
                        className="img-fluid light-theme-img"
                      />
                      <Image
                        src={F01Dark}
                        alt="brand-logo"
                        className="img-fluid dark-theme-img"
                      />
                    </div>
                    {/* Text */}
                    <div className="fbox-txt">
                      <h6 className="s-22 w-700">Intuitive Dashboard</h6>
                      <p>
                        Luctus egestas augue undo ultrice aliquam in lacus
                        congue dapibus
                      </p>
                    </div>
                  </div>
                </div>{" "}
                {/* END FEATURE BOX #1 */}
                {/* FEATURE BOX #2 */}
                <div className="col">
                  <div className="fbox-2 fb-2 wow fadeInUp">
                    {/* Image */}
                    <div className="fbox-img gr--whitesmoke h-175">
                      <Image
                        src={F05}
                        alt="brand-logo"
                        className="img-fluid light-theme-img"
                      />
                      <Image
                        src={F05Dark}
                        alt="brand-logo"
                        className="img-fluid dark-theme-img"
                      />
                    </div>
                    {/* Text */}
                    <div className="fbox-txt">
                      <h6 className="s-22 w-700">Effortless Integration</h6>
                      <p>
                        Tempor laoreet augue undo ultrice aliquam in lacusq
                        luctus feugiat
                      </p>
                    </div>
                  </div>
                </div>{" "}
                {/* END FEATURE BOX #2 */}
                {/* FEATURE BOX #3 */}
                <div className="col">
                  <div className="fbox-2 fb-3 wow fadeInUp">
                    {/* Image */}
                    <div className="fbox-img gr--whitesmoke h-175">
                      <Image
                        src={F02}
                        alt="brand-logo"
                        className="img-fluid light-theme-img"
                      />
                      <Image
                        src={F02Dark}
                        alt="brand-logo"
                        className="img-fluid dark-theme-img"
                      />
                    </div>
                    {/* Text */}
                    <div className="fbox-txt">
                      <h6 className="s-22 w-700">Real-time Analytics</h6>
                      <p>
                        Egestas luctus augue undo ultrice aliquam in lacus
                        feugiat cursus
                      </p>
                    </div>
                  </div>
                </div>{" "}
                {/* END FEATURE BOX #3 */}
              </div>{" "}
              {/* End row */}
            </div>{" "}
            {/* END FEATURES-2 WRAPPER */}
          </div>{" "}
          {/* End container */}
        </section>
      </>
    );
}
