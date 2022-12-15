<template>
    <div class="container text-center pt-5 mt-3">
        <h2 class="fw-bold">Follow me</h2>
        <div class="social mt-4">
            <a href="https://www.facebook.com/profile.php?id=100005638905044" target="_blank"><font-awesome-icon icon ="fa-brands fa-facebook" /></a>
            <a href="https://www.linkedin.com/in/jameel-matar-39a6361a5/" target="_blank"><font-awesome-icon icon ="fa-brands fa-twitter" /></a>
            <a href="https://www.instagram.com/jameel_e_matar" target="_blank"><font-awesome-icon icon ="fa-brands fa-instagram" /></a>
            <a href="https://www.linkedin.com/in/jameel-matar-39a6361a5/" target="_blank"><font-awesome-icon icon ="fa-brands fa-linkedin" /></a>
        </div>
        <div class="mt-5 mb-2">
            <p>© 2022. <span>Vue.js & Bootstrap CSS Portfolio</span> . Developed by <span>JAMEEL</span></p>
        </div>
    </div>
</template>
<style scoped>
.container{
  border-top:2px solid #e5e7eb;
}
.social{
  display: flex;
  justify-content: center;
}
h2{
  font-size:36px
}
a{
  width: 64px;
  height: 64px;
}
svg{
  width: 32px;
  height: 32px;
  padding: 10px;
  color: #ddd;
  background-color: #F7F8FC;
  border-radius: 10px;
  margin-left: 10px;
  transition: 0.3s;
}
p{
  font-size:20px
}
span{
  font-weight: bold;
}
.social a:hover svg{
  color: #7E81F2;
}
</style>