import { Facebook, Instagram, LinkedIn, MailOutline, Phone, Pinterest, Room, Twitter } from "@mui/icons-material";
import logo from "../../assets/logo.png";
import "./footer.css";


const Footer = () => {
  return (
    <div className="footer container-fluid">
        <div className="row align-items-center justify-content-center">
        <div className="left col-4 d-flex flex-column p-3">
        <img src={logo} className='w-50' alt="" />

            <p className="desc py-2"> There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.</p>
            <div className="socialIcons text-white d-flex">
                <div className="socialIcon" style={{background:"#3B5999"}}>
                <Facebook/>
                </div>
                <div className="socialIcon" style={{background:"#E4405F"}}>
                <Instagram/>
                </div>
                
                <div className="socialIcon" style={{background:"#3B5999"}}>
                <LinkedIn/>
                </div>
                <div className="socialIcon" style={{background:"#55ACEE"}}>
                <Twitter/>
                </div>
                <div className="socialIcon" style={{background:"#E60023"}}>
                <Pinterest/>
                </div>
            </div>
        </div>
        <div className="center col-4 p-2">
          <h3 className="title mb-3">
            Useful Links
          </h3>
          <ul className="list d-flex " >
            <li className="listItem">
            Home
            </li>
            <li className="listItem">
            Cart
            </li>
            <li className="listItem">
            Man Fashion
            </li>
            <li className="listItem">
            Woman Fashion
            </li>
            <li className="listItem">
            Accessories
            </li>
            <li className="listItem">
            My Account
            </li>
            <li className="listItem">
            Order Tracking
            </li>
            <li className="listItem">
            Wishlist
            </li>
            <li className="listItem">
            Terms
            </li>
          </ul>
        </div>
        <div className="right col-4 p-2">
          <h3 className="title">
            Contact
          </h3>
          <div className="contentItem">
         <Room className="me-2"/> 622 Dixie Path , South Tobinchester 983366
          </div>
          <div className="contentItem">
          <Phone className="me-2"/> +1 234 56 78
          </div>
          <div className="contentItem">
         <MailOutline className="me-2"/> contact@tanvir.dev
          </div>
          <img className="w-50" src="https://i.ibb.co/Qfvn4z6/payment.png" alt="" />

          </div>
        </div>

    </div>
  )
}

export default Footer
