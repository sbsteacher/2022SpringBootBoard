(function(){
    'use strict'
    let currentPage = 1; //현재 페이지
    const recordCount = 10; //레코드 수

    const boardListElem = document.querySelector('#board_list');
    const dataElem = document.querySelector('#data');

    const searchParams = new URL(window.location.href).searchParams;
    const icategory = searchParams.get('icategory');

    //글 리스트 정보 가져오기
    const getList = () => {
        myFetch.get(`/ajax/board/${icategory}`, list => {
           console.log(list);
           makeRecodeList(list);
        });
    }

    //마지막 페이지 값
    const getMaxPageVal = () => {

    }

    //레코드 만들기
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