import React, { useEffect, useState } from "react";
import "./BlogMian.css";
import kakaoImg from "Assets/img/main/kakao_img.gif";
import { TypeManager } from "Utils";

const STATUS_LIST = [
  {
    id: "0",
    type: "all",
    value: "전체",
    color: "#fff",
    backgorundColor: "#6e95fd",
  },
  ...TypeManager.getMainFilterList(),
];

const BlogMainPresenter = ({ contentBox }) => {
  /* Router */
  /* State */
  const [techList, setTechList] = useState("all");
  const [FilterList, setFilterList] = useState([]);
  /* Hooks */
  useEffect(() => {
    if (techList === "all") {
      setFilterList(contentBox);
    } else {
      const temp = contentBox.filter((item) => {
        const { tag: comp } = item;
        return comp === techList;
      });
      setFilterList(temp);
    }
    return () => {};
  }, [contentBox, techList]);

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
        <div className="contentBox_container">
          {FilterList.map((item) => {
            const { id, title, summary, tag, date } = item;
            return (
              <div className="contentBox" key={id}>
                <div className="contentBox_tag">
                  {TypeManager.getMainFilter(tag).value}
                </div>
                <strong className="contentBox_tit">{title}</strong>
                <div className="contentBox_summary">{summary}</div>
                <div className="contentBox_date">{date}</div>
              </div>
            );
          })}
        </div>
      </section>
    </article>
  );
};

BlogMainPresenter.defaultProps = {
  contentBox: [
    {
      id: 1,
      title: "블록체인 이해하기",
      summary: "블록체인이란 어쩌구 쩌쩌구.......",
      tag: "blockchain",
      date: "2022-03-20",
    },
    {
      id: 2,
      title: "블록체인 이해하기",
      summary: "블록체인이란 어쩌구 쩌쩌구.......",
      tag: "html",
      date: "2022-03-20",
    },
    {
      id: 3,
      title: "블록체인 이해하기",
      summary: "블록체인이란 어쩌구 쩌쩌구.......",
      tag: "javascript",
      date: "2022-03-20",
    },
    {
      id: 4,
      title: "블록체인 이해하기",
      summary: "블록체인이란 어쩌구 쩌쩌구.......",
      tag: "react",
      date: "2022-03-20",
    },
    {
      id: 5,
      title: "블록체인 이해하기",
      summary: "블록체인이란 어쩌구 쩌쩌구.......",
      tag: "react",
      date: "2022-03-20",
    },
    {
      id: 6,
      title: "블록체인 이해하기",
      summary: "블록체인이란 어쩌구 쩌쩌구.......",
      tag: "react",
      date: "2022-03-20",
    },
    {
      id: 7,
      title: "블록체인 이해하기",
      summary: "블록체인이란 어쩌구 쩌쩌구.......",
      tag: "react",
      date: "2022-03-20",
    },
    {
      id: 8,
      title: "블록체인 이해하기",
      summary: "블록체인이란 어쩌구 쩌쩌구.......",
      tag: "react",
      date: "2022-03-20",
    },
    {
      id: 9,
      title: "블록체인 이해하기",
      summary: "블록체인이란 어쩌구 쩌쩌구.......",
      tag: "react",
      date: "2022-03-20",
    },
    {
      id: 10,
      title: "블록체인 이해하기",
      summary: "블록체인이란 어쩌구 쩌쩌구.......",
      tag: "react",
      date: "2022-03-20",
    },
    {
      id: 11,
      title: "블록체인 이해하기",
      summary: "블록체인이란 어쩌구 쩌쩌구.......",
      tag: "react",
      date: "2022-03-20",
    },
    {
      id: 12,
      title: "블록체인 이해하기",
      summary: "블록체인이란 어쩌구 쩌쩌구.......",
      tag: "react",
      date: "2022-03-20",
    },
    {
      id: 13,
      title: "블록체인 이해하기",
      summary: "블록체인이란 어쩌구 쩌쩌구.......",
      tag: "react",
      date: "2022-03-20",
    },
  ],
};

export default BlogMainPresenter;
