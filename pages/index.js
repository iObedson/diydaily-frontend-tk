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
                DIY - VIDEOS - BLOGS - COMMUNITY GUIDES
              </h1>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center pt-4 pb-5">
              <p className="lead">Welcome to DIY Daily Blogs!</p>
              <p className="lead">
                {' '}
                #1 Production-ready and Industry Best Practice Do It Yourself
                Tutorial Guides
              </p>
              <p className="lead">
                Are you interested in learning new skills and tackling projects
                on your own? Look no further! Our website is dedicated to
                providing high-quality, step-by-step guides for DIY projects in
                the fields of agriculture, programming, batteries, renewable
                energy, lighting and home decorations. Whether you're a seasoned
                DIY enthusiast or a beginner looking to get started, we have
                something for everyone. We also have a variety of resources
                available to help you succeed, including video guides, forums,
                and a community of supportive individuals. So if you're ready to
                take a step towards your first DIY project, start exploring our
                website today.
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
                  <h2 className="text-shadow text-center h1">DIY Agro Tech</h2>
                </div>
                <div className="back text-center">
                  <Link href="/categories/google-cloud">
                    <a>
                      <h3 className="h1">Agriculture And Gardening</h3>
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
                  <h2 className="text-shadow text-center h1">DIY Technical </h2>
                </div>
                <div className="back text-center">
                  <Link href="categories/cloudinary">
                    <a>
                      <h3 className="h1">Tech Projects: </h3>
                    </a>
                  </Link>
                  <p className="lead">
                    Build your own electronic projects, such as a DIY home
                    security system or a smart . . .
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
                    DIY Programming
                  </h2>
                </div>
                <div className="back text-center">
                  <Link href="categories/amazon-web-services">
                    <a>
                      <h3 className="h1">Decorations</h3>
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
      </article>
    </Layout>
  );
};

export default Index;
