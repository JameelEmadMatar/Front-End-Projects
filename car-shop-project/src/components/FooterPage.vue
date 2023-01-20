<template>
    <div class="footer">
        <div class="container">
            <div class="footer-main">
                <div class="info">
                    <div>Car Shop © All Rights Reserved. With Made With Love By <span>Abood Bahour</span></div>
                </div>
                <div class="social">
                    <ul class="d-flex m-0 list-unstyled gap-3">
                        <li>
                        <a class="d-block text-light" href="https://www.facebook.com/">
                            <font-awesome-icon icon="fa-brands fa-facebook fa-lg" class="facebook rounded-circle p-2" />
                        </a>
                        </li>
                        <li>
                        <a class="d-block text-light" href="#">
                            <font-awesome-icon icon="fa-brands fa-instagram fa-lg" class="instagram rounded-circle p-2" />
                        </a>
                        </li>
                        <li>
                        <a class="d-block text-light" href="#">
                            <font-awesome-icon icon="fa-brands fa-linkedin fa-lg" class="linkedin rounded-circle p-2" />
                        </a>
                        </li>
                        <li>
                        <a class="d-block text-light" href="#">
                            <font-awesome-icon icon="fa-brands fa-youtube fa-lg" class="youtube rounded-circle p-2" />
                        </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.footer{
    background-color: #141414;
    padding: 30px 0;
}
.footer-main{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.info , .social{
    padding: 0 10px;
}
.info div{
    color: #666666;
}
span{
    color: #D22E2E;
    cursor: pointer;
}
span:hover{
    opacity: 0.8;
}
.footer .facebook{
    background-color: #1877F2;
}
.footer .instagram{
    background-color: #F79A02;
}
.footer .linkedin{
    background-color:#0077B5;
}
.footer .youtube{
    background-color:#FF0000;
}
li:hover{
    opacity: 0.8;
}
@media screen and (max-width:767px) {
    .footer-main{
        display: block;
        text-align: center;
    }
    .info{
        margin-bottom: 20px;
    }
    ul {
        justify-content: center;
    }
}
</style>