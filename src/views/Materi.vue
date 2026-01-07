<template>
  <div>
    <div class="d-flex justify-between align-center mb-20">
      <div>
        <h1>Materi Pembelajaran</h1>
        <p class="text-muted">Kelas XII - Semester 1</p>
      </div>
      <input type="text" class="form-control" style="width: 300px;" placeholder="Cari materi...">
    </div>
    
    <div class="d-flex flex-wrap gap-20">
      <div class="card" style="width: calc(33.333% - 14px); min-width: 250px;">
        <h3>Matematika</h3>
        <p class="text-muted mb-10">Kalkulus Dasar - Bab 3</p>
        <div class="d-flex justify-between align-center">
          <span class="badge badge-primary">PDF</span>
          <button class="btn btn-primary btn-sm">Buka</button>
        </div>
      </div>
      
      <div class="card" style="width: calc(33.333% - 14px); min-width: 250px;">
        <h3>IPA</h3>
        <p class="text-muted mb-10">Fisika Modern - Bab 2</p>
        <div class="d-flex justify-between align-center">
          <span class="badge badge-primary">Video</span>
          <button class="btn btn-primary btn-sm">Buka</button>
        </div>
      </div>
      
      <div class="card" style="width: calc(33.333% - 14px); min-width: 250px;">
        <h3>Bahasa Indonesia</h3>
        <p class="text-muted mb-10">Struktur Teks - Bab 1</p>
        <div class="d-flex justify-between align-center">
          <span class="badge badge-primary">PDF</span>
          <button class="btn btn-primary btn-sm">Buka</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Script logic
</script>