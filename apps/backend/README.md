# Spring Boot 登入驗證系統

這是一個使用 Spring Boot 3.2 和 JWT 實作的登入驗證系統。

## 功能特色

- 使用者註冊
- 使用者登入
- JWT Token 驗證
- 密碼加密 (BCrypt)
- H2 記憶體資料庫

## 技術棧

- Java 17
- Spring Boot 3.2
- Spring Security
- JWT (JSON Web Token)
- JPA/Hibernate
- H2 Database
- Lombok

## 啟動方式

```bash
cd apps/backend
mvn spring-boot:run
```

伺服器將在 `http://localhost:8080` 啟動

## API 端點

### 註冊
```
POST /api/auth/register
Content-Type: application/json

{
  "username": "user123",
  "password": "password123",
  "email": "user@example.com"
}
```

### 登入
```
POST /api/auth/login
Content-Type: application/json

{
  "username": "user123",
  "password": "password123"
}
```

### 測試
```
GET /api/auth/test
```

## H2 資料庫控制台

開發時可以訪問 H2 控制台查看資料庫：
- URL: `http://localhost:8080/h2-console`
- JDBC URL: `jdbc:h2:mem:authdb`
- Username: `sa`
- Password: (留空)

## 回應格式

成功回應：
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "username": "user123",
  "message": "登入成功"
}
```

錯誤回應：
```json
{
  "token": null,
  "username": null,
  "message": "錯誤訊息"
}
```
