(function(){
    'use strict'

    const boardListElem = document.querySelector('#board_list');
    const dataElem = document.querySelector('#data');

    const searchParams = new URL(window.location.href).searchParams;
    const icategory = searchParams.get('icategory');

    const getList = () => {
        myFetch.get(`/ajax/board/${icategory}`, list => {
           console.log(list);
           makeRecodeList(list);
        });
    }

    const makeRecodeList = list => {
        const tbodyElem = boardListElem.querySelector('table tbody');
        console.log(tbodyElem);

        list.forEach(item => {
            const trElem = document.createElement('tr');
            tbodyElem.appendChild(trElem);

            // 리터럴 템플릿
            trElem.innerHTML = `
                <td>${item.iboard}</td>
                <td>${item.title}</td>
                <td>${item.username}</td>
                <td>${item.hits}</td>
                <td>${item.rdt}</td>
            `;
        });
    }
    getList();

})();