<template>
    <div class="details py-4">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 one">
                <h1>HI, IAM JAMEEL</h1>
                <p>A Front-End Developer & Design Enthusiast</p>
                <div class="cv mt-5">
                    <a download="Jameel-Resume.pdf" href="./files/cv.pdf" aria-label="Download Resume"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-down-circle ml-0 sm:ml-1 mr-2 sm:mr-3 w-5 sm:w-6 duration-100"><circle cx="12" cy="12" r="10"></circle><polyline points="8 12 12 16 16 12"></polyline><line x1="12" y1="8" x2="12" y2="16"></line></svg><span>Download CV</span></a>
                </div>
                </div>
                <div class="col-lg-8">
                <img src='../photos/person.png'>
                </div>
            </div>
        </div>
  </div>
</template>
<style scoped>
.one{
  display: flex;
  flex-direction: column;
  justify-content: center;
}
img{
  width: 100%;
}
h1{
  font-size: 2rem;
  line-height: 2.25rem;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  color:#1E3851;
}
p{
  font-size: 1.25rem;;
  color: #9CA3AF;
  font-weight: bold;
  opacity: 0.7;
  line-height: 1.75rem;
}
.cv {
  background: #EEF2FF;
  border-radius: 10px;
  width: 185px;
  padding: 10px 20px;
  border: 1px solid #e5e7eb;
  cursor: pointer;
  transition: 0.3s;
}
.cv:hover{
  background-color: #6366F1;
}
.cv:hover a {
  color: #fff;
  opacity: 1;
}
.cv a {
  text-decoration: none;
  color: black;
  font-weight: 500;
  opacity: 0.6;
  transition: 0.3s;
}
.cv svg{
  margin: 0 10px;
}
@media screen and (max-width: 991px){
  .one{
    text-align: center;
  }
  .cv{
        margin: auto;
  }
}
</style>