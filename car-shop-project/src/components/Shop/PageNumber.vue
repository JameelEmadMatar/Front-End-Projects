<template>
    <div class="numbers">
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>></p>
    </div>
</template>
<style scoped>
.numbers{
    display: flex;
    margin: 40px 0;
}
.numbers p {
    background-color: #f6f6f6;
    color: #666666;
    padding: 10px 20px;
    margin-right: 2%;
}
.numbers p:first-child{
    color:#fff;
    background-color: #D22E2E;
}
.numbers p:not(:first-child){
    cursor: pointer;
}
.numbers p:not(:first-child):hover{
    background-color: #D22E2E;
    color: #fff;
}
</style>