
import CopyRight from "../Footer/CopyRight";
import Footer from "../Footer/Footer";

const Sites = ({ children }) => {
  return (
    <div className="">
  
      {children}
      <Footer />
      <CopyRight />
    </div>
  );
};

export default Sites;
