<template>
    <div class="my-form">
        <div class="container">
            <div class="row">
                <form class="contact-form col-md-8">
                    <input type="text" placeholder="Name : ">
                    <input type="email" placeholder="Email : ">
                    <textarea placeholder="Message"></textarea>
                    <button>Send Message</button>
                </form>
                <div class="description col-md-4">
                    <p class="one">Lorem ipsum dolor sit amet, adipiscing condimentum tristique vel, eleifend sed turpis. Amet, consectetur adipising elit Integer.</p>
                    <div class="details">
                        <div>
                            <p>Phone:</p>
                            <div class="phone">
                                <font-awesome-icon icon="fa-solid fa-phone"/>
                                <span>+972597180307</span>
                            </div>
                            <div class="phone">
                                <font-awesome-icon icon="fa-solid fa-fax"/>
                                <span>+972597180307</span>
                            </div>
                        </div>
                        <div>
                            <p>Email:</p>
                            <div class="email">
                                <font-awesome-icon icon="fa-solid fa-envelope"/>
                                <span>abood99@gmail.com</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p>Address:</p>
                            <div class="address">
                                <font-awesome-icon icon="fa-solid fa-location-dot"/>
                                <span>2 AlBahr St, Tanta , AlGharbia, Egypt.</span>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.my-form{
    padding: 80px 0;
}
.contact-form{
    padding: 0;
}
.contact-form input{
    width: 45.5%;
    margin:0 2%;
    padding: 10px;
    border: 1px solid #e5e5e5;
    color: #b2b2b2;
    outline: none;
}
.contact-form textarea {
    width: 95%;
    margin: 20px 2%;
    height: 200px;
    resize: none;
    border: 1px solid #e5e5e5;
    color: #b2b2b2;
    outline: none;
    padding: 10px;
}
.contact-form button{
    padding: 10px;
    width: 95%;
    margin: 0 2%;
    outline: none;
    border-radius: 6px;
    color: #fff;
    border: none;
    background-color: #D22E2E;
    font-weight: bold;
}
.description .one{
    color: #a6a6a6;
    font-size: 13px;
    font-weight: 400;
    line-height: 22px;
    margin: 0;
}
.details{
    margin: 30px 0;
    display: flex;
    justify-content: space-between;
}
svg{
    margin-right: 10px;
    color: #D22E2E;
}
.phone{
    margin-top: 15px;
}
span{
    color: #666666;
}
@media screen and (max-width:767px) {
    .contact-form{
        margin-bottom : 50px;
    }
}
</style>