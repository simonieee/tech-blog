const mainFilter = [
  {
    id: "1",
    type: "html",
    value: "html/css",
    color: "#fff",
    backgorundColor: "#6e95fd",
  },
  {
    id: "2",
    type: "javascript",
    value: "javascript",
    color: "#fff",
    backgorundColor: "#6e95fd",
  },
  {
    id: "3",
    type: "react",
    value: "react",
    color: "#fff",
    backgorundColor: "#6e95fd",
  },
  {
    id: "4",
    type: "aws",
    value: "AWS",
    color: "#fff",
    backgorundColor: "#6e95fd",
  },
  {
    id: "5",
    type: "blockchain",
    value: "블록체인",
    color: "#fff",
    backgorundColor: "#6e95fd",
  },
];

const TypeManager = {
  /**
   * 메인필터 단일 조회
   * @returns
   */
  getMainFilterList: () => {
    return mainFilter;
  },
  getMainFilter: (type) => {
    const [result] = mainFilter.filter((item) => {
      const { type: comp } = item;
      return type === comp;
    });
    return result;
  },
};
export default TypeManager;
