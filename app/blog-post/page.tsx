import Layout from "@/components/layout/Layout";
import Link from "next/link";
import BlogPostImage12 from "@/public/images/blog/post-12-img.jpg";
import BlogPostImage13 from "@/public/images/blog/post-13-img.jpg";
import BlogPostImage8 from "@/public/images/blog/post-8-img.jpg";
import BlogPostImage2 from "@/public/images/blog/post-2-img.jpg";
import BlogPostImage5 from "@/public/images/blog/post-5-img.jpg";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={3}
        headerCls="navbar-dark inner-page-header"
        headTitle=""
        breadcrumbTitle=""
      >
        <div>
          <section
            id="single-post"
            className="pb-90 inner-page-hero blog-page-section"
          >
            <div className="container">
              <div className="row justify-content-center">
                {/* SINGLE POST CONTENT */}
                <div className="col-xl-10">
                  <div className="post-content">
                    {/*  SINGLE POST TITLE */}
                    <div className="single-post-title text-center">
                      {/* Post Tag */}
                      <span className="post-tag color--green-400">
                        Community
                      </span>
                      {/* Title */}
                      <h2 className="s-46 w-700">
                        Maecenas congue augue sagittis egestas integer velna
                        purus
                      </h2>
                      {/* Post Meta */}
                      <div className="blog-post-meta mt-35">
                        <ul className="post-meta-list ico-10">
                          <li>
                            <p className="p-md w-500">By Melissa McClone</p>
                          </li>
                          <li className="meta-list-divider">
                            <p>
                              <span className="flaticon-minus" />
                            </p>
                          </li>
                          <li>
                            <p className="p-md">April 29, 2023</p>
                          </li>
                        </ul>
                      </div>
                    </div>{" "}
                    {/* END SINGLE POST TITLE */}
                    {/* SINGLE POST IMAGE */}
                    <div className="blog-post-img py-50">
                      <Image
                        src={BlogPostImage12}
                        alt="Logo"
                        className="img-fluid r-16"
                      />
                    </div>
                    {/* SINGLE POST TEXT */}
                    <div className="single-post-txt">
                      {/* Text */}
                      <p>
                        Sagittis congue augue egestas integer velna purus purus
                        magna nec suscipit and egestas magna aliquam ipsum vitae
                        purus justo lacus ligula ipsum primis cubilia donec undo
                        augue luctus vitae egestas a molestie donec libero
                        sapien dapibus congue tempor undo quisque fusce cursus
                        neque blandit fusce lacinia placerat and nulla justo
                        molestie blandit justo diam aliquet tortor molestie
                        sagittis lacinia undo and mullam molestie diam luctus
                        donec bibendum aliquet massa elementum. Libero quisque
                        lacus and ligula massa lorem fusce cursus fusce nulla
                        vitae massa placerat and mollis, sapien gravida aliquet
                        ipsum ultrices aliquet lorem diam purus undo vitae
                        aliquam auris dapibus libero fusce blandit.
                      </p>
                      {/* Text */}
                      <p>
                        Congue augue sagittis egestas integer velna purus purus
                        magna nec suscipit and egestas magna aliquam ipsum vitae
                        purus justo lacus ligula ipsum primis cubilia donec undo
                        augue luctus vitae egestas a molestie donec libero
                        sapien dapibus congue tempor undo quisque fusce cursus
                        neque blandit fusce lorem nulla an aliquam lacinia justo
                        molestie blandit justo diam an aliquet tortor sagittis
                        lacinia molestie diam egestas
                      </p>
                      {/* Title */}
                      <h4 className="s-28 w-700">
                        1. Lorem egestas a dolor fusce posuere
                      </h4>
                      {/* Text */}
                      <p>
                        Congue sagittis augue egestas integer velna purus purus
                        magna nec suscipit and egestas magna aliquam ipsum vitae
                        purus justo lacus ligula ipsum primis cubilia donec undo
                        augue luctus vitae egestas a molestie donec libero
                        sapien dapibus congue tempor undo quisque fusce cursus
                        neque blandit fusce aliquam
                      </p>
                      {/* List */}
                      <ul className="simple-list long-list">
                        <li className="list-item">
                          <p>
                            Sagittis congue augue egestas volutpat egestas magna
                            suscipit egestas magna ipsum and vitae efficitur
                            purus and ipsum primis in cubilia laoreet augue
                            egestas luctus donec.
                          </p>
                        </li>
                        <li className="list-item">
                          <p>
                            Aliqum mullam blandit tempor sapien gravida donec
                            ipsum porta justo. Laoreet turpis urna augue,
                            viverra a augue eget, dictum tempor diam pulvinar
                            dictum tempor
                          </p>
                        </li>
                        <li className="list-item">
                          <p>
                            Blandit velna vitae auctor and congue magna tempor
                            sapien eget gravida laoreet turpis
                          </p>
                        </li>
                        <li className="list-item">
                          <p>
                            Quaerat sodales sapien undo{" "}
                            <Link href="#" className="color--theme">
                              create an API Key
                            </Link>
                            blandit velna vitae auctor and congue magna tempor
                            sapien eget gravida laoreet turpis urna augue,
                            viverra a augue eget tempor diam
                          </p>
                        </li>
                      </ul>
                      {/* Text */}
                      <p>
                        Congue augue sagittis egestas integer velna purus purus
                        magna nec suscipit and egestas magna aliquam ipsum vitae
                        purus justo lacus ligula ipsum primis cubilia donec undo
                        augue luctus vitae egestas a molestie donec libero
                        sapien dapibus congue tempor undo quisque fusce cursus
                        neque blandit fusce lorem nulla an aliquam lacinia justo
                        molestie blandit justo diam an aliquet tortor sagittis
                        lacinia molestie diam egestas
                      </p>
                      {/* Title */}
                      <h5 className="s-24 w-700">
                        Lorem egestas a dolor @luctus donec/porta curabitur diam
                      </h5>
                      {/* Text */}
                      <p>
                        Sagittis congue augue egestas integer velna purus purus
                        magna nec suscipit and egestas magna aliquam ipsum vitae
                        purus justo lacus ligula ipsum primis cubilia donec undo
                        augue luctus vitae egestas a molestie donec libero
                        sapien dapibus congue tempor undo quisque fusce cursus
                        neque blandit fusce lacinia placerat and nulla justo
                        molestie blandit justo diam aliquet tortor molestie
                        sagittis lacinia undo and mullam molestie diam luctus
                        donec bibendum aliquet massa elementum. Libero quisque
                        lacus and ligula massa lorem.
                      </p>
                      {/* Text Code */}
                      <div className="txt-code r-06">
                        <p>
                          Tempor sapien and gravida donec ipsum <kbd>cd</kbd>{" "}
                          consectetur vel imperdiet dui varius. Purus efficitur
                          ipsum primis in cubilia laoreet augue egestas{" "}
                          <kbd>
                            <kbd>ctrl</kbd> + <kbd>,</kbd>
                          </kbd>
                        </p>
                      </div>
                      {/* Text */}
                      <p>
                        Sagittis augue congue egestas integer velna purus purus
                        magna nec suscipit and egestas magna aliquam ipsum vitae
                        purus justo lacus ligula ipsum primis cubilia donec undo
                        augue luctus vitae egestas a molestie donec libero
                        sapien dapibus congue tempor undo quisque fusce cursus
                        neque aliquam fusce blandit
                      </p>
                      {/* INNER IMAGE */}
                      <div className="post-inner-img">
                        <div className="video-preview">
                          {/* Play Icon */}
                          {/* Preview Image */}
                          <Image
                            src={BlogPostImage13}
                            alt="Logo"
                            className="img-fluid r-16"
                          />
                        </div>
                      </div>
                      {/* Blockquote */}
                      <figure>
                        <blockquote className="blockquote w-300">
                          <p>
                            Nulla tincidunt volutpat lectus purus diam ipsum
                            primis felis a congue tempor gravida habitant morbi
                            and tristique senectus netus malesuada famesa an
                            augue luctus suscipit sapien neque undo purus neque
                            dolor primis sodales dapibus egestas volute.
                          </p>
                        </blockquote>
                        <figcaption className="blockquote-footer">
                          Daniel Wells,{" "}
                          <cite title="Source Title">
                            Engineering Manager, Company Name
                          </cite>
                        </figcaption>
                      </figure>
                      {/* Text */}
                      <p>
                        Integer congue sagittis augue egestas velna purus purus
                        magna nec suscipit and egestas magna aliquam ipsum vitae
                        purus justo lacus ligula ipsum primis cubilia donec undo
                        augue luctus vitae egestas a molestie donec libero
                        sapien dapibus congue tempor undo quisque fusce cursus
                        neque diam augue fusce sapien
                      </p>
                      {/* Text */}
                      <p>
                        Integer congue sagittis augue egestas velna purus purus
                        magna nec suscipit and egestas magna aliquam ipsum vitae
                        purus justo lacus ligula ipsum primis cubilia donec undo
                        augue luctus vitae egestas a molestie donec libero
                        sapien dapibus congue tempor undo quisque fusce cursus
                        neque diam augue fusce sapien nulla a primis lacinia
                        ipsum a molestie blandit and justo an aliquet eget
                        molestie sagittis at quaerat sodales
                      </p>
                      {/* Title */}
                      <h4 className="s-28 w-700">
                        2. Volutpat egestas and magna suscipit
                      </h4>
                      {/* Text */}
                      <p>
                        Sagittis congue augue egestas integer velna purus purus
                        magna nec suscipit and egestas magna aliquam ipsum vitae
                        purus justo lacus ligula ipsum primis cubilia donec undo
                        augue luctus vitae egestas a molestie donec libero
                        sapien dapibus congue tempor undo quisque fusce cursus
                        neque blandit fusce lacinia placerat and nulla justo
                        molestie blandit justo diam aliquet tortor molestie
                        sagittis lacinia undo and mullam molestie diam luctus
                        donec bibendum aliquet massa elementum. Libero quisque
                        lacus and ligula massa lorem.
                      </p>
                      {/* Text Code */}
                      <div className="txt-code r-06">
                        <p>
                          <code className="code-language-js">
                            <span>
                              <span className="code-variable">module</span>.
                              <span className="code-property">exports</span> ={" "}
                              {"{"}
                            </span>
                            <br />
                            <span className="pl-30">
                              <span className="code-variable">content</span>: [
                              <span className="code-string"></span>
                              ],
                            </span>
                            <br />
                            <span className="pl-30"></span>
                            <br />
                            <span>{"}"}</span>
                          </code>
                        </p>
                      </div>
                      {/* Text */}
                      <p>
                        Sagittis augue congue egestas integer velna purus purus
                        magna nec suscipit and egestas magna aliquam ipsum vitae
                        purus justo lacus ligula ipsum primis cubilia donec undo
                        augue luctus vitae egestas a molestie donec libero
                        sapien dapibus congue tempor undo quisque fusce cursus
                        neque aliquam fusce blandit
                      </p>
                      {/* Title */}
                    </div>{" "}
                    {/* END SINGLE POST TEXT */}
                  </div>
                </div>{" "}
                {/* END  SINGLE POST CONTENT */}
              </div>{" "}
              {/* End row */}
            </div>{" "}
            {/* End container */}
          </section>{" "}
          {/* END SINGLE POST */}
          {/* BLOG-1
			============================================= */}
          <section
            id="blog-1"
            className="bg--white-300 py-100 blog-section division"
          >
            <div className="container">
              {/* SECTION TITLE */}
              <div className="row justify-content-center">
                <div className="col-md-10 col-lg-9">
                  <div className="section-title mb-70">
                    {/* Title */}
                    <h2 className="s-50 w-700">Keep Reading...</h2>
                    {/* Text */}
                    <p className="s-21 color--grey">
                      Ligula risus auctor tempus magna feugiat lacinia.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                {/* BLOG POST #1 */}
                <div className="col-md-6 col-lg-4">
                  <div id="bp-1-1" className="blog-post wow fadeInUp">
                    {/* BLOG POST IMAGE */}
                    <div className="blog-post-img mb-35">
                      <Image
                        src={BlogPostImage8}
                        alt="Logo"
                        className="img-fluid r-16"
                      />
                    </div>
                    {/* BLOG POST TEXT */}
                    <div className="blog-post-txt">
                      {/* Post Tag */}
                      <span className="post-tag color--pink-400">
                        Product News
                      </span>
                      {/* Post Link */}
                      <h6 className="s-20 w-700">
                        <Link href="/blog-post">
                          Aliqum mullam porta blandit: tempor sapien and gravida
                        </Link>
                      </h6>
                      {/* Text */}
                      <p>
                        Egestas luctus vitae augue and ipsum ultrice quisque in
                        cursus lacus feugiat congue diam ultrice laoreet
                        sagittis
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
                            <p className="p-sm">Apr 28, 2023</p>
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
                  <div id="bp-1-2" className="blog-post wow fadeInUp">
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
                          Porttitor cursus fusce egestas CEO cursus at magna
                          sapien suscipit and egestas ipsum
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
                            <p className="p-sm w-500">By Martex Team</p>
                          </li>
                          <li className="meta-list-divider">
                            <p>
                              <span className="flaticon-minus" />
                            </p>
                          </li>
                          <li>
                            <p className="p-sm">Apr 14, 2023</p>
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
                  <div id="bp-1-3" className="blog-post wow fadeInUp">
                    {/* BLOG POST IMAGE */}
                    <div className="blog-post-img mb-35">
                      <Image
                        src={BlogPostImage5}
                        alt="Logo"
                        className="img-fluid r-16"
                      />
                    </div>
                    {/* BLOG POST TEXT */}
                    <div className="blog-post-txt">
                      {/* Post Tag */}
                      <span className="post-tag color--purple-400">
                        Freelancer Tips
                      </span>
                      {/* Post Link */}
                      <h6 className="s-20 w-700">
                        <Link href="/blog-post">
                          Cubilia laoreet augue egestas and Martex magna impedit
                        </Link>
                      </h6>
                      {/* Text */}
                      <p>
                        Luctus vitae egestas augue and ipsum ultrice quisque in
                        cursus lacus feugiat egets congue ultrice sagittis
                        laoreet
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
                            <p className="p-sm">Mar 27, 2023</p>
                          </li>
                        </ul>
                      </div>
                    </div>{" "}
                    {/* END BLOG POST TEXT */}
                  </div>
                </div>{" "}
                {/* END BLOG POST #3 */}
              </div>{" "}
              {/* End row */}
            </div>{" "}
            {/* End container */}
          </section>
        </div>
      </Layout>
    </>
  );
}
