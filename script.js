let siswa = [];
let noUrut = 1;

const formSiswa = document.getElementById('form-siswa');
const dataSiswaElement = document.getElementById('data-siswa');

formSiswa.addEventListener('submit', function(event) {
    event.preventDefault();

    const nama = document.getElementById('nama').value;
    const nilaiInputs = document.querySelectorAll('.nilai');
    let totalNilai = 0;

    // Menghitung total nilai dari 7 input
    nilaiInputs.forEach(input => {
        totalNilai += parseInt(input.value);
    });

    const rataRata = (totalNilai / nilaiInputs.length).toFixed(2);

    const siswaBaru = {
        no: noUrut++,
        nama: nama,
        nilai: Array.from(nilaiInputs).map(input => parseInt(input.value)), // Menyimpan semua nilai
        rataRata: rataRata
    };

    siswa.push(siswaBaru);
    tampilkanDataSiswa();
    formSiswa.reset(); // Reset form setelah menambah data
});

function tampilkanDataSiswa() {
    dataSiswaElement.innerHTML = ''; // Kosongkan tabel sebelum menampilkan data
    siswa.forEach(s => {
        const row = `
            <tr>
                <td>${s.no}</td>
                <td>${s.nama}</td>
                <td>${s.nilai[0]}</td>
                <td>${s.nilai[1]}</td>
                <td>${s.nilai[2]}</td>
                <td>${s.nilai[3]}</td>
                <td>${s.nilai[4]}</td>
                <td>${s.nilai[5]}</td>
                <td>${s.nilai[6]}</td>
                <td class="${s.rataRata < 84 ? 'red' : ''}">${s.rataRata}</td>
            </tr>
        `;
        dataSiswaElement.innerHTML += row; // Tambahkan baris baru ke tabel
    });
}