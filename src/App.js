import React, { useEffect, useState } from "react";
import QuoteText from "./components/Quote";
import Button from "./components/Button";
import Author from "./components/Author";
import Link from "./components/Link";
import "./App.css";

const quotes = require("./quote.json");

const App = () => {
  const [random, setRandom] = useState(Math.ceil(Math.random() * 4));

  return (
    <div className='quote'>
      <QuoteText text={quotes[random].text} />
      <Author author={quotes[random].author} />
      <Link text={quotes[random].text} author={quotes[random].author} />
      <Button handleClick={() => setRandom(Math.ceil(Math.random() * 4))} />
    </div>
  );
};
export default App;
