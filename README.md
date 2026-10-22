# Konversi Email ke Huruf Kecil dengan Fetch API

Program JavaScript ini mengambil data pengguna dari [JSONPlaceholder](https://jsonplaceholder.typicode.com/users), kemudian mengubah seluruh alamat email menjadi huruf kecil. Program membandingkan empat pendekatan, yaitu:

1. **Then-Catch dengan Built-in Method** — Menggunakan `fetch()` dan `.then()` untuk mengambil data, serta `map()` dan `toLowerCase()` untuk mengolah alamat email.
2. **Then-Catch tanpa Built-in Method** — Mengambil data menggunakan `fetch()` dan `.then()`, kemudian mengubah huruf besar menjadi huruf kecil secara manual menggunakan perulangan `for`.
3. **Async-Await dengan Built-in Method** — Menggunakan `async/await` untuk mengambil data secara asynchronous, serta `map()` dan `toLowerCase()` untuk mengolah alamat email.
4. **Async-Await tanpa Built-in Method** — Menggunakan `async/await` untuk mengambil data dan perulangan `for` untuk mengubah alamat email menjadi huruf kecil tanpa menggunakan metode bawaan untuk proses konversi.

