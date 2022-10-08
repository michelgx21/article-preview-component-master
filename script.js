const shareOp=document.querySelector('.share_op');

document.querySelector('.but_Share').addEventListener('click',
function () {
    this.classList.toggle('active');
    shareOp.classList.toggle('active');
})