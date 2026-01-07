<template>
  <div>
    <h1 style="margin-bottom: 20px; color: var(--smanda-blue);">💬 Forum Diskusi</h1>
    
    <div class="card">
      <div style="display: flex; gap: 10px; margin-bottom: 20px;">
        <input type="text" placeholder="Cari diskusi..." class="form-control" style="flex: 1;">
        <button class="btn btn-primary">Buat Diskusi Baru</button>
      </div>
      
      <div style="border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
        <!-- Diskusi 1 -->
        <div style="padding: 15px; border-bottom: 1px solid #e2e8f0;">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <h3 style="margin: 0;">Pertanyaan tentang Kalkulus</h3>
            <span style="background-color: var(--smanda-blue); color: white; padding: 3px 10px; border-radius: 20px; font-size: 12px;">
              Matematika
            </span>
          </div>
          <p style="color: var(--dark-gray); margin: 10px 0;">Bagaimana cara menyelesaikan soal limit tak hingga?</p>
          <div style="display: flex; justify-content: space-between; color: var(--dark-gray); font-size: 14px;">
            <span>👤 Andi Pratama • 2 jam lalu</span>
            <span>💬 5 komentar</span>
          </div>
        </div>
        
        <!-- Diskusi 2 -->
        <div style="padding: 15px; border-bottom: 1px solid #e2e8f0;">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <h3 style="margin: 0;">Diskusi tentang Perang Dunia II</h3>
            <span style="background-color: var(--smanda-red); color: white; padding: 3px 10px; border-radius: 20px; font-size: 12px;">
              Sejarah
            </span>
          </div>
          <p style="color: var(--dark-gray); margin: 10px 0;">Apa dampak Perang Dunia II bagi Indonesia?</p>
          <div style="display: flex; justify-content: space-between; color: var(--dark-gray); font-size: 14px;">
            <span>👤 Siti Nurhaliza • 5 jam lalu</span>
            <span>💬 12 komentar</span>
          </div>
        </div>
        
        <!-- Diskusi 3 -->
        <div style="padding: 15px;">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <h3 style="margin: 0;">Materi Fisika Kuantum</h3>
            <span style="background-color: var(--smanda-green); color: white; padding: 3px 10px; border-radius: 20px; font-size: 12px;">
              IPA
            </span>
          </div>
          <p style="color: var(--dark-gray); margin: 10px 0;">Ada yang bisa jelaskan konsep dualisme gelombang-partikel?</p>
          <div style="display: flex; justify-content: space-between; color: var(--dark-gray); font-size: 14px;">
            <span>👤 Budi Santoso • 1 hari lalu</span>
            <span>💬 8 komentar</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Script logic nanti
</script>