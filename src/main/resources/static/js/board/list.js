(function(){
    'use strict'

    const boardListElem = document.querySelector('#board_list');
    const dataElem = document.querySelector('#data');

    const searchParams = new URL(window.location.href).searchParams;
    const icategory = searchParams.get('icategory');

    const getList = () => {
        myFetch.get(`/ajax/board/${icategory}`, list => {
           console.log(list);
        });
    }
    getList();

})()

