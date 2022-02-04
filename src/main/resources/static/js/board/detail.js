(function() {
    'use strict';

    const searchParams = new URL(window.location.href).searchParams;
    const iboard = searchParams.get('iboard');

    const boardDetailElem = document.querySelector('#board_detail');

    const commentFormContainerElem = document.querySelector('#comment_form_container');
    const commentSubmitBtnElem = commentFormContainerElem.querySelector('button[name="comment_submit"]');

    const getData = () => {
        fetch(`/board/detail_item?iboard=${iboard}`)
            .then(res => res.text())
            .then(data => {
                console.log(data);
                boardDetailElem.innerHTML = data;
            });
    }
    getData();

    commentSubmitBtnElem.addEventListener('click', e => {

    });

})();