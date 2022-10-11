import React from "react";
import PropTypes from "prop-types";
import AlbumList from "./components/AlbumList";

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
  const albumList = [
    {
      id: 1,
      name: "Mô hình 2 đỉnh ",
      thumbnaiUrl:
        "https://dautu.io/wp-content/uploads/2021/10/Mo-hinh-hai-dinh-la-gi-minh-hoa-mo-hinh-hai-dinh.jpg",
    },
    {
      id: 2,
      name: " Mô hình vai đầu vai ",
      thumbnaiUrl:
        "https://dautuhanghoa.vn/wp-content/uploads/2020/08/mo-hinh-vai-dau-vai.jpg",
    },
    {
      id: 3,
      name: " Mô hình cốc tay cầm ",
      thumbnaiUrl:
        "https://kienthucforex.com/wp-content/uploads/2019/07/2-cai-coc-va-tay-cam-.png",
    },
    {
      id: 4,
      name: "Mô hình 3 đỉnh ",
      thumbnaiUrl:
        "https://traderforex.net/wp-content/uploads/2022/01/mo-hinh-3-dinh-2.jpg",
    },
    {
      id: 5,
      name: " Mô hình cờ đui nheo ",
      thumbnaiUrl:
        "https://kienthucforex.com/wp-content/uploads/2019/02/10.-Mo-hinh-co-duoi-nheo-dac-diem.png",
    },
  ];
  return (
    <div>
      <h3>
        <AlbumList albumList={albumList} />
      </h3>
    </div>
  );
}

export default AlbumFeature;
