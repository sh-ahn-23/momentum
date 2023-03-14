const quotes = [
  {
    quote: "♫ 여우야 ♫",
    author: "투개월"
  },
  {
    quote: "♫ 그녀가 웃잖아 ♫",
    author: "김형중"
  },
  {
    quote: "♫ 프리지아 ♫",
    author: "볼빨간사춘기"
  },
  {
    quote: "♫ Madeleine Love ♫",
    author: "CHEEZE"
  },
  {
    quote: "♫ I Like U, But I Love Me ♫",
    author: "Maxine"
  },
  {
    quote: "♫ 부끄럼 ♫",
    author: "멜로망스(MeloMance)"
  },
  {
    quote: "♫ 나만, 봄 ♫",
    author: "볼빨간 사춘기"
  },
  {
    quote: "♫ 꽃송이가 ♫",
    author: "버스커 버스커(Busker Busker)"
  },
  {
    quote: "♫ 봄이 좋냐?? ♫",
    author: "10CM"
  },
  {
    quote: "♫ 벚꽃 엔딩 ♫",
    author: "버스커 버스커(Busker Busker)"
  }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;