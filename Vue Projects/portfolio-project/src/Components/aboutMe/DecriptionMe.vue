<template>
    <div class="container py-4 my-4 d-flex ">
        <div class="row p-0-sm">
            <div class="col-sm-12 col-md-3">
                <img src="../../photos/me.jpeg">
            </div>
            <div class="col-sm-12 col-md-9">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?</p>
            </div>
        </div>
    </div>
</template>
<style scoped>
.row{
    padding-right: 40px;
}
img{
  max-width: 100%;
  height: auto;
  border-radius: 10px;

}
p{
  font-size: 18px;
  opacity: 0.8;
  line-height: 1.6;
  margin-bottom: 16px;
  margin-left: 20px;
}
@media screen and (max-width: 767px){
    .row{
        padding: 0;
    }
    img{
        margin-bottom: 24px;
    }
}
</style>