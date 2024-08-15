import Navbar from './Navbar';
import Footer from './Footer';
import Logo from '../assets/img/logo.png';
import Categories from './Categories';
import '../assets/css/Shipping.css'
import {NavLinks} from './NavLinks'
export default function Refund() {

  return (
    <div>
      <Navbar
        phone="+8801896121201"
        email="service@interiobd.com"
        logo={Logo}
        searchPlaceholder="Search for products..."
        navLinks={NavLinks}
        showCartIcon={true}
      />
      <br/>
      
       <Categories />
       <br></br>
      <div className="container container2 py-4" style={{ backgroundColor: 'rgb(242, 238, 232)' }}>
       
        <h2 className="my-4">REFUND & RETURN POLICY</h2>
        <br></br>
        <br></br>

        <p className="text-justify">
        We guarantee your satisfaction with all the platforms of Interio. If you receive a damaged or defective item, wrong product, we will promptly send you a replacement or issue you a full refund after you have returned the damaged or defective product.  You will not be charged any additional shipping fees for replacement of such damaged or defective shipments.  Please see our Cancellation & Return Policy for more information.        </p>
        
        <p className="text-justify">
        We maintain a ‘closed box delivery’ policy. Which is crucial to ensure the authenticity of the products, privacy of the customers and product adulteration or modification prevention. If you receive a damaged, defective or wrong product, please return it to Interio and we’ll arrange for a replacement provided that meets the following conditions: </p>       
        <p className="text-justify">
        If any defect is found (damaged/ defective/ wrong product) after opening the box, inform the “Customer Relationship Management Department” (through WhatsApp, Email or hotline +8801896121201) as soon as possible along with a picture/ video proof (video proof is preferable).
            </p>
            <p className="text-justify">
            The “Customer Relationship Management Department” upon consultation with the management will change/ replace the product or adjust the payment. The complaint will be valid for 3 days from the day the product has been received.
Used/ Swatched or liquid/ semi-liquid product will not be considered for exchange or refund.
                </p>
                <p className="text-justify">
                Products once purchased will not be exchanged or returned if buyer changes his/her purchase decision/ mind, and/ or does not like the smell, texture, color, design or/ and the product.
                </p>
                <p className="text-justify">
                The Return Policy will not be valid after the seal is broken.
                </p>
                <p className="text-justify">
                If you mistakenly order a wrong product, we may exchange it upon payment of returning and resending costs. However, arrangement of this special exchange depends on the product type and risk involved in the exchange process and also on Management discretion.                </p>
                <p className="text-justify">
                Original Invoice, Interio Box, Intact/ Undamaged Product Packaging Box (where applicable) must be returned along with the product.                </p>
                <p className="text-justify">
                How to send your product back to us? How much will it cost you?                </p>
      
                <p className="text-justify">
                Our Customer Service will arrange for pick-up of the product from your address, free of delivery charge (*Conditions applied). If you live outside Dhaka, please send your product by Sundarban Courier Service. If your return claim is validated, we will reimburse your courier charge.

                    </p>
                    <p className="text-justify">
                    If we find your claim is not valid regarding the product, then you have to accept the same Product and have to bear the return and resending expenses.

</p>
<p className="text-justify">
For further support: Hotline +8801896121201; E-mail: service@interiobd.com

</p>
      </div>
      <br></br>
      <br></br>

      <Footer />
    </div>
  );
}
