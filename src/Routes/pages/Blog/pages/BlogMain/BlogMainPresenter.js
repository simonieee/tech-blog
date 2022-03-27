import React from "react";
import "./BlogMian.css";
import kakaoImg from "Assets/img/main/kakao_img.gif";

const BlogMainPresenter = () => {
  return (
    <article className="main-content">
      <div className="tit_main">
        <img src={kakaoImg} alt="kakao" style={{ width: 200 }} />
        <h3>하루하루 발전하는 삶을 살자</h3>
      </div>
    </article>
  );
};

export default BlogMainPresenter;
