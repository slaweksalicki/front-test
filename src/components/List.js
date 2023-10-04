import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadMoreData, startLoading, stopLoading } from "../reducers/app";
import { fetchPhotos } from "../api";

const List = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.app.list);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const handleScroll = () => {
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight - 100 && !loadingMore) {
      setLoadingMore(true);

      fetchPhotos({ perPage: 30, page: currentPage + 1 })
        .then((result) => {
          dispatch(loadMoreData({ images: result.images }));
          setCurrentPage(currentPage + 1);
          setLoadingMore(false);
        })
        .catch((error) => {
          console.error(error);
          setLoadingMore(false);
        });
    }
  };

  useEffect(() => {
    if (!loading && !data.length) {
      setLoading(true);
      dispatch(startLoading());

      fetchPhotos({ perPage: 30, page: 1 })
        .then((result) => {
          setLoading(false);
          dispatch(stopLoading());
          dispatch(loadMoreData({ images: result.images }));
          setCurrentPage(1);
        })
        .catch((error) => {
          console.error(error);
          setLoading(false);
          dispatch(stopLoading());
        });
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [dispatch, loading, loadingMore, data, currentPage]);

  return (
    <div style={{ minHeight: "90vh", width: "100%" }}>
      {loading && <p className="p-6 text-center">Loading...</p>}
      <div className="grid grid-cols-3 gap-6 p-6 text-center">
        {data.map((item) => (
          <div key={item.id}>
            <img
              className="h-32 inline"
              src={item.urls.small}
              alt={item.alt_description}
            />
            <p>{item.user.name}</p>
          </div>
        ))}
      </div>
      {loadingMore && <p className="p-6 text-center">Loading...</p>}
    </div>
  );
};

export default List;
