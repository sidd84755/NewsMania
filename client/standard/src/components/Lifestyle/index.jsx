import { useSelector } from "react-redux";
import FetchData from "./fetchData";
const Lifestyle = () => {
  const user = useSelector((state) => state?.auth?.user);
  return (
    <div className="mt-2">
      <span className="text-muted">Welcome {user?.firstName}</span>
      <div>
        <FetchData/>
      </div>
    </div>
  );
};

export default Lifestyle;
