import Layout from '../components/Layout';
import Link from 'next/link';
import ContactForm from '../components/form/ContactForm';
import Adsense from '../components/Adsense';

const Contact = () => {
  return (
    <Layout>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <h2>Contact form</h2>
            <hr />
            <ContactForm />
            <Adsense />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
