import { getSingleDocByFieldName, getSingleDocByFieldNameOrg } from "@/firebase/databaseOperations";
import { useState, useEffect } from "react";

function useFetchByFieldNameOrg(cln, info) {
  const [data, setData] = useState(null);
  const [didSucceed, setDidSucceed] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const rs = await getSingleDocByFieldNameOrg(cln, fieldName, fieldValue);
      if (rs.didSucceed) {
        setData(rs.document);
        setDidSucceed(true);
      }

      setIsLoading(false);
    };
    fetchData();
    return () => {
      const controller = new AbortController();
      controller.abort();
    };
  }, [cln, info]);

  return { isLoading, didSucceed, data };
}

export default useFetchByFieldNameOrg;
