import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase/client";
import { useEffect, useState } from "react";
import WidgetLg from "../../components/widgetLg/WidgetLg";
function Transaction() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // LISTEN (REALTIME)
    const unsub = onSnapshot(
      collection(db, "tea"),
      (snapShot) => {
        let list = [];
        snapShot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });

        setData(
          list.sort((a, b) => new Date(b.datePicked) - new Date(a.datePicked))
        );
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {
      unsub();
    };
  }, []);
  return (
    <>
      <Sidebar />
      <WidgetLg data={data} />
    </>
  );
}

export default Transaction;
