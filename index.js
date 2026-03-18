window.onload = function() {
    const triggerArea = document.getElementById('triggerArea');
    const floatingModal = document.getElementById('floatingModal');
    const successModal = document.getElementById('successModal');
    const soulInput = document.getElementById('soulInput');

    // 1. 點擊開啟輸入視窗
    triggerArea.onclick = () => {
        floatingModal.style.display = 'flex';
    };

    // 2. 點擊「交易」按鈕
    document.getElementById('submitBtn').onclick = (e) => {
        e.stopPropagation();
        if (soulInput.value.trim() !== "") {
            floatingModal.style.display = 'none'; // 隱藏輸入
            successModal.style.display = 'flex';  // 顯示成功
            soulInput.value = "";                 // 清空文字
        } else {
            alert("請輸入內容");
        }
    };

    // 3. 點擊「退回」按鈕
    document.getElementById('cancelBtn').onclick = (e) => {
        e.stopPropagation();
        floatingModal.style.display = 'none';
    };

    // 4. 點擊成功視窗的「離開」
    document.getElementById('closeSuccessBtn').onclick = () => {
        successModal.style.display = 'none';
    };

    // 5. 點擊黑影處關閉 (視窗外面)
    window.onclick = (e) => {
        if (e.target === floatingModal) floatingModal.style.display = 'none';
        if (e.target === successModal) successModal.style.display = 'none';
    };
};