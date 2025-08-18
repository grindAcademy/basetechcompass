import Layout from "@/components/layout/Layout";
import Link from "next/link";
import BlogPostImage from "@/public/images/blog/post-11-img.jpg";
import BlogPostImage1 from "@/public/images/blog/post-1-img.jpg";
import BlogPostImage2 from "@/public/images/blog/post-2-img.jpg";
import BlogPostImage3 from "@/public/images/blog/post-3-img.jpg";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={3}
        headerCls="navbar-dark inner-page-header"
      >
        <div>
          <section
            id="blog-page"
            className="pb-60 inner-page-hero blog-page-section"
          >
            <div className="container">
              {/* WIDE BLOG POST */}
              <div className="blog-post wide-post wow fadeInUp">
                <div className="row d-flex align-items-center">
                  {/* BLOG POST IMAGE */}
                  <div className="col-md-6">
                    <div className="blog-post-img">
                      <Image
                        src={BlogPostImage}
                        alt="Logo"
                        className="img-fluid r-16"
                      />
                    </div>
                  </div>
                  {/* BLOG POST TEXT */}
                  <div className="col-md-6">
                    <div className="blog-post-txt">
                      {/* Post Tag */}
                      <span className="post-tag color--blue-400">
                        Social Media Marketing
                      </span>
                      {/* Post Link */}
                      <h3 className="s-38 w-700">
                        <Link href="/blog-post">
                          Congue magna tempor and ipsum Martex sapien turpis
                          laoreet augue
                        </Link>
                      </h3>
                      {/* Text */}
                      <p>
                        Aliqum mullam blandit vitae and tempor sapien and donec
                        lipsum gravida porta undo velna dolor libero a risus
                        aliquet tempus posuere a tempor velna tempus posuere
                        dolor
                      </p>
                      {/* Post Meta */}
                      <div className="blog-post-meta mt-30">
                        <ul className="post-meta-list ico-10">
                          <li>
                            <p className="w-500">By Martex Team</p>
                          </li>
                          <li className="meta-list-divider">
                            <p>
                              <span className="flaticon-minus" />
                            </p>
                          </li>
                          <li>
                            <p>Apr 28, 2023</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>{" "}
                  {/* END BLOG POST TEXT */}
                </div>{" "}
                {/* End row */}
              </div>{" "}
              {/* END WIDE BLOG POST */}
              {/* POSTS WRAPPER */}
              <div className="posts-wrapper">
                <div className="row">
                  {/* BLOG POST #1 */}
                  <div className="col-md-6 col-lg-4">
                    <div className="blog-post mb-40 wow fadeInUp clearfix">
                      {/* BLOG POST IMAGE */}
                      <div className="blog-post-img mb-35">
                        <Image
                          src={BlogPostImage1}
                          alt="Logo"
                          className="img-fluid r-16"
                        />
                      </div>
                      {/* BLOG POST TEXT */}
                      <div className="blog-post-txt">
                        {/* Post Tag */}
                        <span className="post-tag color--red-400">
                          Product News
                        </span>
                        {/* Post Link */}
                        <h6 className="s-20 w-700">
                          <Link href="/blog-post">
                            Aliqum mullam porta blandit: lacus and sapien
                            gravida
                          </Link>
                        </h6>
                        {/* Text */}
                        <p>
                          Egestas luctus vitae augue and ipsum ultrice quisque
                          in cursus lacus feugiat congue diam ultrice laoreet
                          sagittis
                        </p>
                        {/* Post Meta */}
                        <div className="blog-post-meta mt-20">
                          <ul className="post-meta-list ico-10">
                            <li>
                              <p className="p-sm w-500">By Martex Team</p>
                            </li>
                            <li className="meta-list-divider">
                              <p>
                                <span className="flaticon-minus" />
                              </p>
                            </li>
                            <li>
                              <p className="p-sm">Apr 23, 2023</p>
                            </li>
                          </ul>
                        </div>
                      </div>{" "}
                      {/* END BLOG POST TEXT */}
                    </div>
                  </div>{" "}
                  {/* END BLOG POST #1 */}
                  {/* BLOG POST #2 */}
                  <div className="col-md-6 col-lg-4">
                    <div className="blog-post mb-40 wow fadeInUp clearfix">
                      {/* BLOG POST IMAGE */}
                      <div className="blog-post-img mb-35">
                        <Image
                          src={BlogPostImage2}
                          alt="Logo"
                          className="img-fluid r-16"
                        />
                      </div>
                      {/* BLOG POST TEXT */}
                      <div className="blog-post-txt">
                        {/* Post Tag */}
                        <span className="post-tag color--green-400">
                          Community
                        </span>
                        {/* Post Link */}
                        <h6 className="s-20 w-700">
                          <Link href="/blog-post">
                            Porttitor cursus fusce neque CEO egestas cursus
                            magna sapien and suscipit ipsum
                          </Link>
                        </h6>
                        {/* Text */}
                        <p>
                          Aliqum mullam ipsum vitae and blandit vitae tempor
                          sapien and donec lipsum
                        </p>
                        {/* Post Meta */}
                        <div className="blog-post-meta mt-20">
                          <ul className="post-meta-list ico-10">
                            <li>
                              <p className="p-sm w-500">By Miranda Green</p>
                            </li>
                            <li className="meta-list-divider">
                              <p>
                                <span className="flaticon-minus" />
                              </p>
                            </li>
                            <li>
                              <p className="p-sm">Apr 09, 2023</p>
                            </li>
                          </ul>
                        </div>
                      </div>{" "}
                      {/* END BLOG POST TEXT */}
                    </div>
                  </div>{" "}
                  {/* END BLOG POST #2 */}
                  {/* BLOG POST #3 */}
                  <div className="col-md-12 col-lg-4">
                    <div className="blog-post mb-40 wow fadeInUp clearfix">
                      {/* BLOG POST IMAGE */}
                      <div className="blog-post-img mb-35">
                        <Image
                          src={BlogPostImage3}
                          alt="Logo"
                          className="img-fluid r-16"
                        />
                      </div>
                      {/* BLOG POST TEXT */}
                      <div className="blog-post-txt">
                        {/* Post Tag */}
                        <span className="post-tag color--violet-400">
                          Freelancer Tips
                        </span>
                        {/* Post Link */}
                        <h6 className="s-20 w-700">
                          <Link href="/blog-post">
                            Cubilia laoreet ipsum augue eget egestas Martex
                            magna
                          </Link>
                        </h6>
                        {/* Text */}
                        <p>
                          Luctus vitae egestas augue and ipsum ultrice quisque
                          in cursus lacus feugiat egets congue ultrice sagittis
                          laoreet
                        </p>
                        {/* Post Meta */}
                        <div className="blog-post-meta mt-20">
                          <ul className="post-meta-list ico-10">
                            <li>
                              <p className="p-sm w-500">By Helen J.</p>
                            </li>
                            <li className="meta-list-divider">
                              <p>
                                <span className="flaticon-minus" />
                              </p>
                            </li>
                            <li>
                              <p className="p-sm">Apr 01, 2023</p>
                            </li>
                          </ul>
                        </div>
                      </div>{" "}
                      {/* END BLOG POST TEXT */}
                    </div>
                  </div>{" "}
                  {/* END BLOG POST #3 */}
                </div>
              </div>{" "}
            </div>{" "}
            {/* End container */}
          </section>{" "}
          {/* END BLOG POSTS LISTING */}
          {/* DIVIDER LINE */}
          <hr className="divider" />
          {/* NEWSLETTER-1
			============================================= */}
          <section id="newsletter-1" className="newsletter-section">
            <div className="newsletter-overlay">
              <div className="container">
                <div className="row d-flex align-items-center row-cols-1 row-cols-lg-2">
                  {/* NEWSLETTER TEXT */}
                  <div className="col">
                    <div className="newsletter-txt">
                      <h4 className="s-34 w-700">
                        Stay up to date with our news, ideas and updates
                      </h4>
                    </div>
                  </div>
                  {/* NEWSLETTER FORM */}
                  <div className="col">
                    <form className="newsletter-form">
                      <div className="input-group">
                        <input
                          type="email"
                          autoComplete="off"
                          className="form-control"
                          placeholder="Your email address"
                          required
                          id="s-email"
                        />
                        <span className="input-group-btn">
                          <button
                            type="submit"
                            className="btn btn--theme hover--theme"
                          >
                            Subscribe Now
                          </button>
                        </span>
                      </div>
                      {/* Newsletter Form Notification */}
                      <label htmlFor="s-email" className="form-notification" />
                    </form>
                  </div>{" "}
                  {/* END NEWSLETTER FORM */}
                </div>{" "}
                {/* End row */}
              </div>{" "}
              {/* End container */}
            </div>{" "}
            {/* End newsletter-overlay */}
          </section>{" "}
          {/* END NEWSLETTER-1 */}
          {/* DIVIDER LINE */}
          <hr className="divider" />
        </div>
      </Layout>
    </>
  );
}
