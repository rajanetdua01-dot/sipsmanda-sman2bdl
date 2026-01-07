<template>
  <div>
    <h1 style="margin-bottom: 20px; color: var(--smanda-blue);">🎯 Quiz & Ujian Online</h1>
    
    <div class="row">
      <div class="col-6">
        <div class="card">
          <h2>Quiz Tersedia</h2>
          <div style="margin: 20px 0;">
            <div style="padding: 15px; border: 2px solid var(--smanda-blue); border-radius: 10px; margin-bottom: 15px;">
              <h3>Matematika - Bab 3</h3>
              <p>⏰ Waktu: 30 menit</p>
              <p>📊 Jumlah soal: 20</p>
              <button class="btn btn-primary">Mulai Quiz</button>
            </div>
            
            <div style="padding: 15px; border: 2px solid var(--smanda-green); border-radius: 10px; margin-bottom: 15px;">
              <h3>IPA - Fisika Dasar</h3>
              <p>⏰ Waktu: 45 menit</p>
              <p>📊 Jumlah soal: 25</p>
              <button class="btn btn-success">Mulai Quiz</button>
            </div>
          </div>
        </div>
      </div>
      
      <div class="col-6">
        <div class="card">
          <h2>Riwayat Quiz</h2>
          <table class="table">
            <thead>
              <tr>
                <th>Mata Pelajaran</th>
                <th>Nilai</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Sejarah Indonesia</td>
                <td>85</td>
                <td><span style="color: green;">✓ Selesai</span></td>
              </tr>
              <tr>
                <td>Bahasa Inggris</td>
                <td>78</td>
                <td><span style="color: green;">✓ Selesai</span></td>
              </tr>
              <tr>
                <td>Kimia Dasar</td>
                <td>92</td>
                <td><span style="color: green;">✓ Selesai</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Script logic nanti
</script>