import Link from "next/link";
import PageBanner from "../../src/components/PageBanner";
import Layout from "../../src/layouts/Layout";
import { blogPosts } from "../../Data/blogpost";
import { useState } from "react";
const Blog = ({posts}) => {
    return (
        <Layout>
          <PageBanner pageName={"Blog"} />
          <section className="blog-standard-section pt-170 pb-80">
            <div className="container">
              <div className="row">
                <div className="col-xl-8 col-lg-7">
                
                <div className="blog-standard-wrapper">
                {posts.map((post) => (
  <div key={post.id} className="blog-post-item-three mb-60 wow fadeInUp">
      <div className="post-thumbnail">
        <img src={post.featuredImage} alt="Post Image" />
      </div>
      <div className="entry-content white-bg">
        <a href="#" className="cat-btn">
          {post.category}
        </a>
        <h3 className="title">
          <Link href={`/blog/${post.slug}`}>
            <a>{post.title}</a>
          </Link>
        </h3>
        <div className="post-meta">
          <ul>
            <li>
              <span>
                <i className="far fa-calendar-alt" />
                <a href="#">{post.date}</a>
              </span>
            </li>
            <li>
              <span>
                <i className="far fa-comments" />
                <a href="#">Comment ({post.comments.length})</a>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  ))}
</div>

                  <div className="pagination mb-50 wow fadeInUp">
                    <ul>
                      <li>
                        <a href="#">01</a>
                      </li>
                      <li>
                        <a href="#">02</a>
                      </li>
                      <li>
                        <a href="#">03</a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="far fa-angle-right" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-5">
                  <div className="sidebar-widget-area">
                    <div className="widget search-widget mb-40 wow fadeInUp">
                      <form onSubmit={(e) => e.preventDefault()}>
                        <div className="form_group">
                          <input
                            type="email"
                            className="form_control"
                            placeholder="Search here"
                            name="email"
                            required=""
                          />
                          <button className="search-btn">
                            <i className="far fa-search" />
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="widget author-widget mb-40 wow fadeInUp">
                      <div className="author-content">
                        <img
                          src="assets/images/widget/uuser-1.jpg"
                          alt="User Image"
                        />
                        <h4>Jp Smith</h4>
                        <p>
                        P&apos;ss blog is an extension of his passion for sheep farming and sustainable agriculture. He shares his wealth of knowledge and expertise with his readers, providing insights and tips on everything from sheep breeding and care to the latest developments in sustainable farming practices.
                        </p>
                        <ul className="social-link">
                          <li>
                            <a href="#">
                              <i className="fab fa-facebook-f" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-linkedin-in" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-youtube" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="widget category-widget mb-40 wow fadeInUp">
                      <h4 className="widget-title">Category</h4>
                      <ul className="category-nav">
                        <li>
                          <a href="#">
                            Organic Vegetables
                            <span>
                              <i className="far fa-arrow-right" />
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Fresh Jack Fruits
                            <span>
                              <i className="far fa-arrow-right" />
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Chicken Meat &amp; Eggs
                            <span>
                              <i className="far fa-arrow-right" />
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Organic Wheats
                            <span>
                              <i className="far fa-arrow-right" />
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Cow Meat &amp; Milk
                            <span>
                              <i className="far fa-arrow-right" />
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div
                      className="widget contact-info-widget bg_cover mb-40 wow fadeInUp"
                      style={{
                        backgroundImage: "url(assets/images/widget/contact-1.jpg)",
                      }}
                    >
                      <div className="contact-info-box text-center">
                        <div className="icon">
                          <i className="far fa-phone" />
                        </div>
                        <div className="info">
                          <h4>
                            <a href="tel:+01234567899">+0123 (456) 7899</a>
                          </h4>
                          <h5>
                            <a href="mailto:info@fernhall.com">info@fernhall.com</a>
                          </h5>
                          <a
                            href="#"
                            className="main-btn bordered-btn bordered-black"
                          >
                            Contact us
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="widget recent-post-widget mb-40 wow fadeInUp">
                      <h4 className="widget-title">Recent News</h4>
                      <ul className="recent-post-list">
                      {posts.map((post) => (
                        <li  key={post.id} className="post-thumbnail-content">
                          <img
                            src={post.featuredImage}
                            alt="post image"
                          />
                          <div className="post-title-date">
                            <h6>
                              <Link href="#">
                                <a>{post.title}</a>
                              </Link>
                            </h6>
                            <span className="posted-on">
                              By <a href="#">{post.author}</a>
                            </span>
                          </div>
                        </li> 
                         ))}
                     </ul>
                    
                    </div>
                    <div className="widget tag-cloud-widget mb-40 wow fadeInUp">
                      <h4 className="widget-title">Popular Tags</h4>
                      <a href="#">Milk &amp; Meat</a>
                      <a href="#">Fruits</a>
                      <a href="#">Vegetable</a>
                      <a href="#">Coffee</a>
                      <a href="#">Pizza Pasta</a>
                      <a href="#">Organic</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Layout>
      );
    };
export default Blog;

export async function getServerSideProps() {
    const posts =  blogPosts;
    return {
      props: {
        posts,
      },
    };
  }