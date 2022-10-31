import Layout from '../components/Layout';
import Link from 'next/link';

const Index = () => {
  return (
    <Layout>
      <article className="overflow-hidden">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 className="display-4 font-weight-bold">
                DIY | PROGRAMMING | WEB DEVELOPMENT | BLOGS | TUTORIALS
              </h1>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center pt-4 pb-5">
              <p className="lead">
                Production-ready and Industry best practice Do It Yourself DIY
                tutorials
              </p>
            </div>
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
                  <h2 className="text-shadow text-center h1">
                    Web Development
                  </h2>
                </div>
                <div className="back text-center">
                  <Link href="/categories/react">
                    <a>
                      <h3 className="h1">Video Editing</h3>
                    </a>
                  </Link>
                  <p className="lead">
                    The world's most popular Video Editing blog tutorials
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
                  <h2 className="text-shadow text-center h1">Agriculture</h2>
                </div>
                <div className="back text-center">
                  <Link href="/categories/node">
                    <a>
                      <h3 className="h1">Digital Marketing</h3>
                    </a>
                  </Link>
                  <p className="lead">
                    The worlds most popular Digital Marketing and Ecommerce
                    tutorials
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
                  <h2 className="text-shadow text-center h1">
                    Home and Garden
                  </h2>
                </div>
                <div className="back text-center">
                  <Link href="/categories/nextjs">
                    <a>
                      <h3 className="h1">Decorations</h3>
                    </a>
                  </Link>
                  <p className="lead">
                    Industry best practice Do It Yourself DIY tutorials on Home
                    Decorations and Gardening
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default Index;
