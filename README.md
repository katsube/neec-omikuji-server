# おみくじサーバ
おみくじを引けるexpressのサンプルコードです。

## セットアップ
GitHubからclone後、必要なモジュールを`npm install`で取得します。

```shellsession
$ git clone https://github.com/katsube/neec-omikuji-server
$ cd neec-omikuji-server
$ npm install
```

## 動かす
### サーバを起動する
`serve.js`をNode.jsで実行します。
```shellsession
$ node serve.js
listening at http://localhost:3000
```

### おみくじを引く
Webブラウザなどで`http://localhost:3000/omikuji`へアクセスします。

以下のようなJSON形式のデータが返却されれば成功です。
```json
{
  "fortune": "大吉"
}
```

### 統計情報を表示する
Webブラウザなどで`http://localhost:3000/analytics`へアクセスします。

以下のようなJSON形式のデータが返却されれば成功です。
```json
{
  "大吉": 10,
  "吉": 8,
  "凶": 3
}
```

### 終了方法
Ctrl+cで強制終了します。

## ライセンス
MIT License  
© Copyright 2020 M.Katsube. All rights reserved.
