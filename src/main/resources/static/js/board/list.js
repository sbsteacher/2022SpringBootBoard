(function(){
    'use strict'
    let currentPage = 1; //현재 페이지
    let maxPage = 1;
    const recordCount = 3; //레코드 수
    const pagingCount = 5; //페이징의 페이징 수

    const searchParams = new URL(window.location.href).searchParams;
    const icategory = searchParams.get('icategory');

    const dataElem = document.querySelector('#data');
    const boardListElem = document.querySelector('#board_list');
    const pageContainerElem = document.querySelector('#page_container');

    //글 리스트 정보 가져오기
    const getList = () => {
        myFetch.get(`/ajax/board/${icategory}`, list => {
           console.log(list);
           makeRecodeList(list);
        }, { currentPage, recordCount });
    }

    //마지막 페이지 값
    const getMaxPageVal = () => {
        myFetch.get('/ajax/board/maxpage', data => {
            console.log(data.result);
            maxPage = data.result;
            makePaging();
        }, { icategory, recordCount });
    }
    getMaxPageVal();

    const makePaging = () => {
        const ulElem = pageContainerElem.querySelector('nav > ul');
        ulElem.innerHTML = null;

        const calcPage = parseInt((currentPage - 1) / pagingCount);
        const startPage = (calcPage * pagingCount) + 1;
        const lastPage = (calcPage + 1) * pagingCount;

        if(startPage > 1) {
            const liElem = document.createElement('li');
            ulElem.appendChild(liElem);

            liElem.className = 'page-item page-link pointer';
            liElem.innerHTML = '&lt;';
            liElem.addEventListener('click', e => {
                currentPage = startPage - 1;
                getList();
                makePaging();
            })
        }

        for(let i=startPage; i<=(lastPage > maxPage ? maxPage : lastPage); i++) {
            const liElem = document.createElement('li');
            ulElem.appendChild(liElem);

            liElem.className = 'page-item page-link pointer';
            liElem.innerText = i;
            liElem.addEventListener('click', e => {
                if(currentPage != i) {
                    currentPage = i;
                    getList();
                }
            });
        }

        if(maxPage > lastPage) {
            const liElem = document.createElement('li');
            ulElem.appendChild(liElem);

            liElem.className = 'page-item page-link pointer';
            liElem.innerHTML = '&gt;';
            liElem.addEventListener('click', e => {
                currentPage = lastPage + 1;
                getList();
                makePaging();
            });
        }
    }

    //레코드 만들기
    const makeRecodeList = list => {
        const tbodyElem = boardListElem.querySelector('table tbody');
        tbodyElem.innerHTML = null;

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