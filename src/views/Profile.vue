<template>
  <div>
    <h1 style="margin-bottom: 20px; color: var(--smanda-blue);">👤 Profil Siswa</h1>
    
    <div class="row">
      <div class="col-4">
        <div class="card" style="text-align: center;">
          <div style="width: 120px; height: 120px; background-color: var(--smanda-blue); border-radius: 50%; margin: 0 auto 20px; display: flex; align-items: center; justify-content: center; color: white; font-size: 48px;">
            AN
          </div>
          <h2>Andi Nugroho</h2>
          <p>Kelas: XII IPA 1</p>
          <p>NIS: 202312345</p>
          <button class="btn btn-primary" style="margin-top: 15px;">Edit Profil</button>
        </div>
      </div>
      
      <div class="col-8">
        <div class="card">
          <h2>Statistik Pembelajaran</h2>
          
          <div class="row" style="margin-top: 20px;">
            <div class="col-6">
              <h3>Kehadiran</h3>
              <div style="background-color: #f1f5f9; height: 20px; border-radius: 10px; margin: 10px 0;">
                <div style="background-color: var(--smanda-green); width: 92%; height: 100%; border-radius: 10px;"></div>
              </div>
              <p>92% (23/25 pertemuan)</p>
            </div>
            
            <div class="col-6">
              <h3>Tugas Terselesaikan</h3>
              <div style="background-color: #f1f5f9; height: 20px; border-radius: 10px; margin: 10px 0;">
                <div style="background-color: var(--smanda-blue); width: 85%; height: 100%; border-radius: 10px;"></div>
              </div>
              <p>85% (17/20 tugas)</p>
            </div>
          </div>
          
          <div style="margin-top: 30px;">
            <h3>Nilai Mata Pelajaran</h3>
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
                  <td>Matematika</td>
                  <td>88</td>
                  <td><span style="color: green;">✓ Lulus</span></td>
                </tr>
                <tr>
                  <td>IPA</td>
                  <td>85</td>
                  <td><span style="color: green;">✓ Lulus</span></td>
                </tr>
                <tr>
                  <td>Bahasa Indonesia</td>
                  <td>90</td>
                  <td><span style="color: green;">✓ Lulus</span></td>
                </tr>
                <tr>
                  <td>Bahasa Inggris</td>
                  <td>82</td>
                  <td><span style="color: green;">✓ Lulus</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Script logic nanti
</script>