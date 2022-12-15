<template>
    <div class="products text-center">
        <div class="container">
            <h1>Projects Portfolio</h1>
            <p>Search projects by title or filter by category</p>
            <div class="d-flex justify-content-between my-4 search">
                <div class="d-flex">
                    <span class="shadow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search text-ternary-dark dark:text-ternary-light"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                    </span>
                    <input class="border" type="text" placeholder="Search Projects">
                </div>
                <div>
                    <select class="border">
                        <option>All Projects</option>
                        <option>Web Development</option>
                        <option>Mobile App</option>
                        <option>All Projects</option>
                        <option>All Projects</option>
                    </select>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="card shadow rounded mt-2 border-0 p-0">
                        <img src="../../photos/Products/1.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Google Health Platform</h5>
                            <p class="card-text">Web Application</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.products{
    margin-top: 50px;
    margin-bottom: 50px;
}
.search{
    border-bottom:2px solid #e5e7eb;
    padding-bottom: 20px;
}
h1{
    font-size: 52px;
    font-weight: bolder;
    color: #1E3851;
    margin-bottom: 40px;
}
p{
    color: #102D44;
    font-size: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
    font-family: Arial, Helvetica, sans-serif;
}
span{
    background-color: #F7F8FC;
    border-radius: 6px;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}
svg{
    color: #213B53;
    cursor: pointer;
}
input , select{
    margin-left: 20px;
    border-radius: 10px;
    padding: 10px 20px;
}
.card{
    border-radius: 10px;
    overflow: hidden;
}
.card-title{
    color:#1E3851;
    font-weight: bold;
}
.card-text{
    color:#1E3851;
}
@media screen and (min-width: 768px) {
    .card{
        width: 45%;
    }
    .row{
        gap: 72px;
    }
}
@media screen and (min-width: 991px){
    .card{
        width: 30%;
    }
    .row{
        gap: 48px;
    }
}
</style>