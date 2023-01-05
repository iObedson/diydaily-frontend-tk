import Layout from '../components/Layout';
import Link from 'next/link';
import Adsense from '../components/Adsense';

const Index = () => {
  return (
    <Layout>
      <article className="overflow-hidden">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h3 className="display-6 font-weight-bold">
                DAILY DIY CHALLENGE - VIDEOS - BLOGS - COMMUNITY GUIDES
              </h3>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center pt-4 pb-5">
              <h4 className="display-5 font-weight-600 ">
                Welcome to DIY Daily Blogs!
              </h4>
              <h4 className="display-6 font-weight-600">
                {' '}
                #1 Production-ready and Industry Best Practice Do It Yourself
                Tutorial Guides
              </h4>
              <p className="lead">
                We offer step-by-step guides for DIY projects in various fields
                such as agriculture, programming, batteries, renewable energy,
                lighting, and home decorations. We have resources available to
                help DIY enthusiasts, including a daily challenge with prizes,
                video guides, forums, and a supportive community. Beginners and
                experienced individuals can find something on our website and
                social media channels. Sign up and participate in our daily
                challenge for a chance to win prizes.
              </p>
            </div>
            <Adsense />
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4">
              <div className="flip flip-horizontal">
                <div
                  className="front"
                  style={{
                    backgroundImage:
                      'url(' +
                      'https://images.pexels.com/photos/540518/pexels-photo-540518.jpeg' +
                      ')',
                  }}
                >
                  <h2 className="text-shadow text-center h1">Agriculture</h2>
                </div>
                <div className="back text-center">
                  <Link href="/categories/google-cloud">
                    <a>
                      <h5 className="h4">Agriculture And Gardening</h5>
                    </a>
                  </Link>
                  <p className="lead">
                    Learn how to build your own greenhouse, create a composting
                    system, or grow your own vegetables.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="flip flip-horizontal">
                <div
                  className="front"
                  style={{
                    backgroundImage:
                      'url(' +
                      'https://images.pexels.com/photos/540518/pexels-photo-540518.jpeg' +
                      ')',
                  }}
                >
                  <h2 className="text-shadow text-center h4">Technology</h2>
                </div>
                <div className="back text-center">
                  <Link href="categories/cloudinary">
                    <a>
                      <h5 className="h4">Tech Projects: </h5>
                    </a>
                  </Link>
                  <p className="lead">
                    Learn how to use diodes, capacitors, resistors etc to build
                    your own simple electronic projects, such as a DIY home
                    security system, lighting and home decorations.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="flip flip-horizontal">
                <div
                  className="front"
                  style={{
                    backgroundImage:
                      'url(' +
                      'https://images.pexels.com/photos/540518/pexels-photo-540518.jpeg' +
                      ')',
                  }}
                >
                  <h2 className="text-shadow text-center h4">Computer</h2>
                </div>
                <div className="back text-center">
                  <Link href="categories/amazon-web-services">
                    <a>
                      <h5 className="h4">Web Development And Programming </h5>
                    </a>
                  </Link>
                  <p className="lead">
                    Programming simple projects using a computer or
                    microcontroller Building and styling web pages using HTML,
                    CSS, and JavaScript libraries, like react, nextjs, nodejs
                    etc,
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Adsense />
      </article>
    </Layout>
  );
};

export default Index;
