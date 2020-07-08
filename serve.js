/**
 * おみくじサーバ
 *
 */

const fs = require("fs");
const express = require("express");
const app  = express();
const port = 3000;

// 運勢一覧
const UNSEI = [
  "大吉", "吉", "中吉", "小吉", "末吉", "凶", "大凶"
];

// ログファイル
const UNSEI_LOG = 'log.txt';

//-------------------------------------
// ルーティングの設定
//-------------------------------------
/**
 * おみくじ
 */
app.get("/omikuji", (req, res) =>{
  const i = Math.floor( Math.random() * 100) % UNSEI.length;
  const fortune = UNSEI[i];

  // ファイルに記録
  fs.appendFile(UNSEI_LOG, `${fortune}\n`, (err)=>{
    if( err ){
      console.log(`[error] ${err}`);
    }
  });

  // ブラウザに返却
  res.json({fortune: fortune});
});

/**
 * 集計
 */
app.get("/analytics", (req, res) =>{
  const result = {};

  // 集計用配列を初期化
  for(let i=0; i<UNSEI.length; i++){
    result[UNSEI[i]] = 0;
  }

  // 集計
  fs.readFile(UNSEI_LOG, (err, data)=>{
    const buff = data.toString().split("\n");
    for(let i=0; i<buff.length; i++){
      const fortune = buff[i];

      // 何も入っていなければ次へ
      if( fortune === "" ){
        continue;
      }

      // 集計用配列に加算
      result[fortune]++;
    }

    res.json(result);
  });
});

//-------------------------------------
// HTTPサーバを起動する
//-------------------------------------
app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
