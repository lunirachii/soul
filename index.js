window.onload = function() {
    const welcomeModal = document.getElementById('welcomeModal');
    const triggerArea = document.getElementById('triggerArea');
    const floatingModal = document.getElementById('floatingModal');
    const successModal = document.getElementById('successModal');
    const soulInput = document.getElementById('soulInput');

    // 1. 進入網頁後，點擊歡迎視窗任何處關閉它
    welcomeModal.onclick = function() {
        welcomeModal.style.display = 'none';
    };

    // 2. 原本的開啟輸入視窗邏輯
    triggerArea.onclick = () => {
        floatingModal.style.display = 'flex';
    };

    // 3. 按下交易按鈕 (不論有無文字都跳成功)
    document.getElementById('submitBtn').onclick = (e) => {
        e.stopPropagation();
        floatingModal.style.display = 'none';
        successModal.style.display = 'flex';
        soulInput.value = "";
    };

    // 4. 點擊成功視窗任何處回到主頁
    successModal.onclick = function() {
        successModal.style.display = 'none';
    };

    // 5. 取消按鈕與黑影關閉邏輯保持不變...
    document.getElementById('cancelBtn').onclick = (e) => {
        e.stopPropagation();
        floatingModal.style.display = 'none';
    };
    window.onclick = (e) => {
        if (e.target === floatingModal) floatingModal.style.display = 'none';
    };
};