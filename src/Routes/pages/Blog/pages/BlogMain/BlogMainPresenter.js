import React, { useState } from "react";
import "./BlogMian.css";
import kakaoImg from "Assets/img/main/kakao_img.gif";
import { TypeManager } from "Utils";

const STATUS_LIST = [
  {
    id: "1",
    type: "all",
    value: "전체",
    color: "#fff",
    backgorundColor: "#6e95fd",
  },
  ...TypeManager.getMainFilterList(),
];

const BlogMainPresenter = () => {
  /* Router */
  /* State */
  const [techList, setTechList] = useState("all");
  /* Hooks */
  /* Functions */
  /**
   * 버튼 상태변경
   * @param {*} e
   */
  const handleTechList = (e) => {
    setTechList(e.target.value);
  };
  /* Render */
  /**
   * 메인 필터 버튼 렌더
   */
  const buttonRedner = STATUS_LIST.map((item) => {
    const { id, type, value, color, backgorundColor } = item;
    return (
      <button
        key={id}
        style={{
          backgroundColor: techList === type && backgorundColor,
          color: techList === type ? color : "#9a9a9a",
        }}
        onClick={handleTechList}
        value={type}
      >
        {value}
      </button>
    );
  });
  return (
    <article className="main-content">
      <div className="tit_main">
        <img src={kakaoImg} alt="kakao" style={{ width: 200 }} />
        <h3>하루하루 발전하는 삶을 살자</h3>
      </div>
      <section className="section_main">
        <div className="artiicle_filter">{buttonRedner}</div>
      </section>
    </article>
  );
};

export default BlogMainPresenter;
