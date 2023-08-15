import "./featuredInfo.css";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { db } from "../../firebase/client";
import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FeaturedInfo = ({ type }) => {
  const [cost, setCost] = useState(null);
  const [kilos, setKilos] = useState(null);
  let data;

  switch (type) {
    case "tea":
      data = {
        title: "Total kilos",
        isKg: true,
        query: "tea",
        link: "See all Tea",
        to: "/transactions",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "farm":
      data = {
        title: "Fertiliser application(s)",
        isMoney: true,
        query: "fertiliser",
        link: "View all applications",
        to: "/transactions",
        icon: (
          <ShoppingCartOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;

    case "weeding":
      data = {
        title: "Weeding",
        isMoney: true,
        query: "weeding",
        link: "See details",
        to: "/transactions",
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    case "cost":
      data = {
        title: "cost",
        isMoney: true,
        query: "tea",
        link: "See details",
        to: "/transactions",
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }
  useEffect(() => {
    const fetchData = async () => {
      //realtime tea collection docs
      const allDocs = onSnapshot(collection(db, data.query), (snapShot) => {
        let list = [];
        snapShot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });

        //calculating total amount
        const amounts = list.map((doc) => {
          return parseInt(doc.amount);
        });

        const values = Object.values(amounts);
        const sum = values.reduce((accumulator, value) => {
          return accumulator + value;
        }, 0);
        //calculating total kilos
        const totalKilos = list.map((doc) => {
          return parseInt(doc.kilos);
        });
        const kgs = Object.values(totalKilos);
        const sumKgs = kgs.reduce((accumulator, value) => {
          return accumulator + value;
        }, 0);

        setCost(sum);
        setKilos(sumKgs);
        return () => {
          allDocs();
        };
      });
    };
    fetchData();
  }, [data.query]);

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isKg && <>{kilos}kgs</>}
          {data.isMoney && (
            <>
              ksh.
              {cost}
            </>
          )}
        </span>
        <Link to={data.to}>
          <span className="link">{data.link}</span>
        </Link>
      </div>
      <div className="right">
        {/* <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff} %
        </div> */}
        {data.icon}
      </div>
    </div>
  );
};
export default FeaturedInfo;
