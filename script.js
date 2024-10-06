document.addEventListener('DOMContentLoaded', function(){
    const checkElement = setInterval(() => {
        const commonDialog = document.querySelector('.quick-input-widget');
        if (commonDialog) {
            // Ngecek apakah elemen Command Pellate terbuka untuk pertama kalinya
            if(commonDialog.style.display !== 'none'){
                applyBur();
            }
            observeCommandDialog(commonDialog);
            clearInterval(checkElement);
        }
    }, 500) //Ngecek tiap 0.5 detik

    function observeCommandDialog(commonDialog){
        const observer = new MutationObserver(() => {
            if(commonDialog.style.display !== 'none'){
                applyBur();
            }else {
                removeBlur();
            }
        });

        observer.observe(commonDialog, {attributes: true});
    }

    function applyBur(){
        const targetDiv = document.querySelector(".monaco-workbench .part.editor>.content");
        let blurElement = document.getElementById('bg-blur');

        if(!blurElement){
            blurElement = document.createElement('div');
            blurElement.setAttribute('id', 'bg-blur');
            blurElement.addEventListener('click', removeBlur);
            targetDiv.appendChild(blurElement);
        }
    }

    function removeBlur(){
        const blurElement = document.getElementById('bg-blur');
        if(blurElement){
            blurElement.remove();
        }
    }
})