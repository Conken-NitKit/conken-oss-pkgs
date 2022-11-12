## 概要

各アプリケーションのサービスとしての機能をライブラリとして利用できるようにします。
フロントエンド、バックエンド問わず利用できるように、特定のフレームワーク依存する処理は除外しています。

## ディレクトリ構成

ディレクトリの基本的な構成は以下の通りです。

```
src
├── core  # 共通のコアロジックや、ベースクラスなど
|   ├── Result.ts
|   └── ValueObject.ts
|
├── shared  # 複数のサービスで使われうるドメイン
|   └─ ValueObject # 値オブジェクトを定義
|      └── Id.ts
|
└── subdomains  # それぞれ独立して成立するサービスのドメイン
    └── user
        ├── Entities
        │   └── User.ts
        ├── Events
        │   └── UserCreated.ts
        ├── Infrastructures
        │   └── typeorm
        │       └── User.ts
        ├── Mappers
        │   └── UserMap.ts
        ├── Repositories
        │   ├── UserRepository.ts
        │   └── implements
        │       └── TypeOrmUserRepository.ts
        ├── Subscriptions
        │   └── AfterUserCreated.ts
        ├── UseCases
        │   └── CreateUser
        │       ├── CreateUserUseCase.ts
        │       ├── CreateUserDTO.ts
        │       ├── CreateUserErrors.ts
        │       └── CreateUserController.ts
        └── ValueObjects
            └── UserName.ts
```
