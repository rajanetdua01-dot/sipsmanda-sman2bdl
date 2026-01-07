<template>
  <div>
    <h1 class="mb-10">Tugas & Assignment</h1>
    
    <div class="card mb-20">
      <div class="card-header p-0 mb-15">
        <h3 class="mb-0">Tugas Aktif</h3>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th>Mata Pelajaran</th>
            <th>Judul</th>
            <th>Deadline</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Matematika</td>
            <td>Soal Kalkulus</td>
            <td>10 Jan 2026</td>
            <td><button class="btn btn-primary btn-sm">Kerjakan</button></td>
          </tr>
          <tr>
            <td>IPA</td>
            <td>Laporan Praktikum</td>
            <td>12 Jan 2026</td>
            <td><button class="btn btn-primary btn-sm">Kerjakan</button></td>
          </tr>
          <tr>
            <td>Sejarah</td>
            <td>Makalah Perang Dunia</td>
            <td>15 Jan 2026</td>
            <td><button class="btn btn-primary btn-sm">Kerjakan</button></td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <div class="card">
      <div class="card-header p-0 mb-15">
        <h3 class="mb-0">Tugas Selesai</h3>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th>Mata Pelajaran</th>
            <th>Judul</th>
            <th>Status</th>
            <th>Nilai</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Bahasa Indonesia</td>
            <td>Analisis Puisi</td>
            <td><span class="text-success">✓ Selesai</span></td>
            <td>85</td>
          </tr>
          <tr>
            <td>English</td>
            <td>Essay Writing</td>
            <td><span class="text-success">✓ Selesai</span></td>
            <td>90</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
// Script logic
</script>