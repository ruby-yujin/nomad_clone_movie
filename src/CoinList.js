import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";

function CoinList() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [usdMoney, setUsdMoney] = useState(0);
  const [btcPrice, setBtcPrice] = useState(0);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  //https://api.coinpaprika.com/v1/tickers

  const onHowMuchUsd = (e) => {
    setUsdMoney(e.target.value);
  };

  const onHowMuchBtc = (e) => {
    setBtcPrice(e.target.value);
  };

  return (
    <div>
      <h1>The Coin List {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading....</strong>
      ) : (
        <select>
          {coins.map((coin, id) => (
            <option key={id}>
              {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
      <h2>USD to BTC convert</h2>
      <FlexBox>
        <Item>
          ${" "}
          <input
            placeholder="your USD"
            value={usdMoney}
            onChange={onHowMuchUsd}
          />
        </Item>
        <Item>
          ฿{" "}
          <input
            placeholder="your BTC"
            value={btcPrice}
            onChange={onHowMuchBtc}
          />
        </Item>
      </FlexBox>

      <p>
        convert USD : {btcPrice / 0.000052} <br />
        convert BTC : {usdMoney * 0.000052}
      </p>
    </div>
  );
}

const FlexBox = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  gap: 10px;
`;

const Item = styled.div`
  background: #ddd;
  padding: 1rem;
`;

export default CoinList;
