![GitHub repo size](https://img.shields.io/github/repo-size/OZSECER/BlogBattle?color=blue)
![GitHub last commit](https://img.shields.io/github/last-commit/OZSECER/BlogBattle?color=brightgreen)
![License](https://img.shields.io/badge/license-MIT-orange)
![React](https://img.shields.io/badge/Frontend-React.js-blue)
![Node.js](https://img.shields.io/badge/Backend-Node.js-green)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-brightgreen)

# 📖 BlogBattle

BlogBattle, kullanıcıların blog yazılarını paylaşabildiği ve diğer yazılara beğeni (like) atabildiği full-stack bir web uygulamasıdır.  
Kullanıcılar **giriş yapmadan** blog yazılarını okuyabilir; blog paylaşmak isteyenler kayıt/giriş ekranına yönlendirilir.  
Her kullanıcı, aynı blog yazısına yalnızca **bir kez** beğeni atabilir.

---

## 🚀 Özellikler

- Kullanıcı kaydı ve giriş (JWT tabanlı kimlik doğrulama)
- Blog yazısı ekleme, düzenleme, silme
- Tüm blog yazılarını giriş yapmadan okuma
- Blog paylaşmak istediğinde kayıt/giriş ekranına yönlendirme
- Her kullanıcı tarafından bir yazıya yalnızca 1 kez like atabilme
- Like sayılarının dinamik olarak güncellenmesi

---

## 🛠️ Kullanılan Teknolojiler

**Client (Frontend)**

- React.js
- Redux Toolkit (state yönetimi)
- Tailwind CSS (stil)
- Axios (HTTP istekleri)
- React Router DOM (sayfa yönlendirme)

**Server (Backend)**

- Node.js & Express.js
- MongoDB & Mongoose
- JSON Web Token (JWT)
- bcrypt.js (şifreleme)

**Diğer**

- Git & GitHub (versiyon kontrol)
- Postman (API testi)

---

## 📦 Kurulum

### 1️⃣ Depoyu Klonlayın

```bash
git clone https://github.com/kullaniciadi/BlogBattle.git
cd BlogBattle

 Server Kurulumu
cd server
npm install

Server’ı başlatın:
npm run dev

Client Kurulumu
Yeni bir terminal penceresi açın:

cd client
npm install
npm start

 Kullanım
http://localhost:3000 adresine gidin.

Blog yazılarını üye olmadan okuyabilirsiniz.

Blog paylaşmak için kayıt olun veya giriş yapın.

Beğenmek istediğiniz yazının like butonuna tıklayın (her yazı için sadece bir kere).

Yeni blog ekleyip diğer kullanıcılarla paylaşın.

 Notlar
Like sistemi kullanıcı bazlıdır; bir kullanıcı aynı yazıya ikinci kez like atamaz.

Tüm veriler MongoDB veritabanında saklanır.

Kimlik doğrulama JWT token üzerinden yapılır.

```
