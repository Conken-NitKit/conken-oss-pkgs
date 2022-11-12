## ディレクトリ構成
ディレクトリの基本的な構成は以下の通りです。

```
src
├── subdomains  # それぞれ独立して成立するサービス
│   └── user
│       ├── Entities
│       │   └── User.ts
│       ├── Events
│       │   └── UserCreated.ts
│       ├── Infrastructures
│       │   └── typeorm
│       │       └── User.ts
│       ├── Mappers
│       │   └── UserMap.ts
│       ├── Repositories
│       │   ├── UserRepository.ts
│       │   └── implements
│       │       └── TypeOrmUserRepository.ts
│       ├── Subscriptions
│       │   └── AfterUserCreated.ts
│       ├── UseCases
│       │   └── CreateUser
│       │       ├── CreateUserUseCase.ts
│       │       ├── CreateUserDTO.ts
│       │       ├── CreateUserErrors.ts
│       │       └── CreateUserController.ts
│       └── ValueObjects
│           └── UserName.ts
│
└── shared  # 共通のコアロジックや、ベースクラスなどを配置
    ├── core
    │   └── xxx.ts
    └── domain
        └── ValueObject # 値オブジェクトを定義
            └── Id.ts
```
