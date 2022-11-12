## ディレクトリ構成

```
packages/services
 |
 ├─ src/
 |   ├─ common/                    # サービスに依存しない共通の機能
 |   └─ individuals/{対象サービス名} # どんなサービスにも使えるわけではないがある程度汎用的な機能 (ランキング, TODOリスト, etc)
```
