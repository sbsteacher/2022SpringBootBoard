(function() {
    'use strict';

    const searchParams = new URL(window.location.href).searchParams;
    const iboard = searchParams.get('iboard');

    const boardDetailElem = document.querySelector('#board_detail');

    const commentFormContainerElem = document.querySelector('#comment_form_container');



    const getData = () => {
        fetch(`/board/detail_item?iboard=${iboard}`)
            .then(res => res.text())
            .then(data => {
                console.log(data);
                boardDetailElem.innerHTML = data;
            });
    }
    getData();

    if(commentFormContainerElem) {
        const commentSubmitBtnElem = commentFormContainerElem.querySelector('button[name="comment_submit"]');
        const commentCtntInputElem = commentFormContainerElem.querySelector('input[name="ctnt"]');

        commentSubmitBtnElem.addEventListener('click', e => {
            console.log(commentCtntInputElem.value);

            const param = {
                iboard,
                'ctnt': commentCtntInputElem.value
            }

            myFetch.post('/ajax/comment', data => {
                console.log(data.result);
                switch(data.result) {
                    case 0:
                        alert('댓글 전송에 실패하였습니다.');
                        break;
                    case 1:
                        commentCtntInputElem.value = null;
                        break;
                }
            }, param);
        });


    }


})();