**Selamat Datang di "TIKET KERETA"! 🚆**

Jelajahi karya terbaru dan keterampilan kami dalam dunia pengembangan aplikasi mobile. Dari aplikasi web hingga proyek mobile, temukan ragam proyek yang mencerminkan dedikasi kami dalam teknologi.

### 🚧 Status Proyek

- **Status:** Dalam Pengembangan
- **Tanggal Rilis Diharapkan:** Januari 2025

### 🚀 Fitur Utama

- **User Interface:** Layar Login

  - **Backend:** Menggunakan Firebase Authentication untuk autentikasi pengguna.
  - **API**:
    - `POST /login` untuk login pengguna menggunakan email dan password.
    - Firebase Authentication untuk menghasilkan token akses dan mengautentikasi pengguna.

- **User Interface:** Layar Daftar

  - **Backend:** Firebase Authentication untuk pendaftaran pengguna baru.
  - **API**:
    - `POST /register` untuk mendaftarkan pengguna baru dengan email dan password.

- **User Interface:** Layar Beranda

  - **Backend:** Menyediakan data produk atau kategori dari Firestore.
  - **API**:
    - `GET /products` untuk mengambil data produk dari Firestore.

- **User Interface:** Layar Jelajahi

  - **Backend:** Menyediakan fitur pencarian dan filter untuk produk, kategori, atau tiket.
  - **API**:
    - `GET /search` untuk pencarian produk atau kategori.
    - `GET /categories/{categoryId}` untuk mengambil produk berdasarkan kategori.

- **User Interface:** Layar Tiket

  - **Backend:** Menyimpan dan mengelola data tiket yang dibeli oleh pengguna di Firestore.
  - **API**:
    - `POST /tickets` untuk membuat tiket baru.
    - `GET /tickets` untuk mengambil tiket pengguna.
    - `PUT /tickets/{ticketId}` untuk memperbarui status tiket.

- **User Interface:** Layar Profil

  - **Backend:** Menyimpan dan memperbarui informasi pengguna di Firestore.
  - **API**:
    - `GET /profile` untuk mengambil data profil pengguna.
    - `PUT /profile` untuk memperbarui profil pengguna.

- **User Interface:** Layar Keranjang

  - **Backend:** Menyimpan data keranjang belanja pengguna di Firestore.
  - **API**:
    - `GET /cart` untuk mengambil data keranjang pengguna.
    - `POST /cart` untuk menambahkan item ke keranjang.
    - `PUT /cart` untuk memperbarui item keranjang.

- **User Interface:** Layar Pilih Kursi
  - **Backend:** Menyediakan data kursi yang tersedia dan mengelola pemesanan kursi.
  - **API**:
    - `GET /seats` untuk mengambil daftar kursi yang tersedia.
    - `POST /seats` untuk memesan kursi.

## 🛠️ Teknologi yang Digunakan

- **Bahasa Pemrograman:** JavaScript
- **Alat Pengembangan:** Visual Studio Code, Git, Expo
- **Pengembangan Mobile:** React Native, Tailwind CSS
- **Backend:** Firebase (Authentication, Firestore)
- **Database:** Firestore untuk menyimpan data pengguna, tiket, produk, dan lainnya.

## 📷 Preview Halaman

Berikut adalah beberapa tampilan halaman TIKET KERETA:

![Gambar](https://github.com/user-attachments/assets/d8859334-b872-4734-901c-ec8cf6f2c08c)

## 📬 Kontak

Ingin berkolaborasi atau mendiskusikan proyek? Jangan ragu untuk menghubungi kami melalui email di [fifanaufal10@gmail.com](mailto:fifanaufal10@gmail.com) atau terhubung dengan kami di [WhatsApp](https://wa.me/+6282318334287).

### 🙏 Kontribusi

Kontribusi dan umpan balik dari komunitas sangat dihargai. Jika Anda ingin berkontribusi, silakan buat _pull request_ atau buka _issue_.

### 👨‍💻 Cara Menjalankan Proyek

1. Clone repositori ini ke direktori web server Anda.

   ```
   git clone https://github.com/fifovalle/TIKET-KERETA.git
   ```

2. Jalankan aplikasi menggunakan Expo.

   ```
   cd TIKET-KERETA
   npm install
   npx expo start
   ```

Terima kasih atas antusiasme Anda menantikan kehadiran user interface ini! 🙌

<div align="center">
  &copy; 2024 [Naufal FIFA]
</div>
