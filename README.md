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
![1](https://github.com/user-attachments/assets/f6cad4e9-e96a-4145-9bc6-c41ce7c0c129)
![2](https://github.com/user-attachments/assets/7890ad30-c990-4b1e-9f4a-97bec7734366)
![3](https://github.com/user-attachments/assets/cfcb683d-7a53-4a9d-86bf-4dccce499ed4)
![4](https://github.com/user-attachments/assets/dfb5e8f7-523d-4f35-9b16-db14a90cd38e)
![5](https://github.com/user-attachments/assets/aa55cceb-9275-45c9-9da9-f243b5e8fecd)
![6](https://github.com/user-attachments/assets/4904be6a-a6b8-4532-b556-20cdd5a924ea)
![7](https://github.com/user-attachments/assets/6ee906c3-13f4-49a0-99b0-299f0eeb7d5f)
![8](https://github.com/user-attachments/assets/4b5ffac2-36dc-4148-83c4-0a191c8c723a)

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
