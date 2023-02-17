/*
과일 가게로 성공한 슬로스는, 사업을 확장해 카페를 운영하려 합니다. 
커피가 맛있는 카페가 되기 위해 슬로스는 각 커피 메뉴가 베스트 메뉴인 카페 브랜드를 찾아 레시피를 배워올 계획입니다.
슬로스가 판매하려는 메뉴들 중 category가 "espresso"인 메뉴를 찾고, 해당 메뉴가 best menu인 카페 브랜드를 찾아 <출력 보기>와 같은 형태로 반환하는 함수 solution을 완성해주세요. 
(단, id는 1부터 새롭게 생성해주세요.)

<출력 보기>
[
  {
    id: 1,
    brand: "스타벅스",
    bestMenu: "아메리카노",
    price: 3800,
    rate: 4.4,
    category: "espresso",
  },
  {
    id: 2,
    brand: "할리스",
    bestMenu: "카페라때",
    price: 4800,
    rate: 4.1,
    category: "espresso",
  },
  {
    id: 3,
    brand: "스타벅스",
    bestMenu: "카라멜 마키아토",
    price: 6200,
    rate: 4.7,
    category: "espresso",
  }
];
*/

const menus = [
  {
    id: 1,
    name: "아메리카노",
    price: 3800,
    size: "tall",
    category: "espresso",
  },
  {
    id: 2,
    name: "카페라때",
    price: 4800,
    size: "small",
    category: "espresso",
  },
  {
    id: 3,
    name: "녹차라때",
    price: 5800,
    size: "tall",
    category: "tea",
  },
  {
    id: 4,
    name: "카라멜 마키아토",
    price: 6200,
    size: "grande",
    category: "espresso",
  },
  {
    id: 5,
    name: "밀크티",
    price: 7000,
    size: "grande",
    category: "tea",
  },
];

const brand = [
  {
    id: 1,
    brand: "스타벅스",
    rate: 4.4,
    bestMenu: "아메리카노",
  },
  {
    id: 2,
    brand: "폴바셋",
    rate: 4.21,
    bestMenu: "녹차라때",
  },
  {
    id: 3,
    brand: "엔젤인어스",
    rate: 3.87,
    bestMenu: "밀크티",
  },
  {
    id: 4,
    brand: "스타벅스",
    rate: 4.7,
    bestMenu: "카라멜 마키아토",
  },
  {
    id: 5,
    brand: "할리스",
    rate: 4.1,
    bestMenu: "카페라때",
  },
];

const solution = (menus, brand) => {
  return menus
    .filter((menu) => menu.category === "espresso")
    .map((data, index) => {
      const newData = brand.filter((item) => item.bestMenu === data.name);
      newData[0].id = index + 1;
      newData[0].category = data.category;
      newData[0].price = data.price;
      return newData;
    });
};

const answer = solution(menus, brand);

console.log(answer);
