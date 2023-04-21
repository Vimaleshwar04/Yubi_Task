import React from "react";
import Input from "./Input";

function Dashboard(
  {
    // mobileList=[]
  }
) {
  // const [mobileList, setmobileList] = useState([])
  // useEffect(() => {
  //   axios.get("GetApi")
  //     .then((e) => {
  //       setmobileList(e.data);
  //     })
  //     .catch((error) => console.log(error));
  // }, []);
  let mobileList = JSON.parse(sessionStorage.getItem("mobileList"));
  return (
    <div
      style={{
        backgroundImage: "linear-gradient(#edf6fb, white)",
        height: "100vh",
      }}
    >
      <div className="Container">
        <div className="home_page">
          <h1 className="Header">Mobile Number List</h1>
          {mobileList.map((e, i) => {
            return <Input key={i} value={e} name="" disabled={true} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
