/**
 * 五子棋对战 - 样式表
 * Gomoku Game - Stylesheet
 */

/* ===== 基础重置 ===== */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* ===== 页面主体 ===== */
body {
    font-family: 'Microsoft YaHei', 'Segoe UI', sans-serif;
    background: linear-gradient(135deg, #f5f0e8 0%, #e8dcc8 100%);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    user-select: none;
}

h1 {
    color: #4a3728;
    margin-bottom: 20px;
    font-size: 36px;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
}

/* ===== 游戏信息栏 ===== */
.game-info {
    display: flex;
    gap: 30px;
    margin-bottom: 20px;
    align-items: center;
}

.player-info {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 20px;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    transition: all 0.3s ease;
}

.player-info.active {
    background: #fff9e6;
    box-shadow: 0 0 15px rgba(255, 193, 7, 0.5);
    transform: scale(1.05);
}

.player-stone {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    box-shadow: 2px 2px 5px rgba(0,0,0,0.3);
}

.player-stone.black {
    background: radial-gradient(circle at 30% 30%, #666, #000);
}

.player-stone.white {
    background: radial-gradient(circle at 30% 30%, #fff, #ccc);
    border: 1px solid #999;
}

.player-name {
    font-size: 18px;
    font-weight: bold;
    color: #4a3728;
}

/* ===== 棋盘容器 ===== */
.board-container {
    position: relative;
    padding: 20px;
    background: linear-gradient(145deg, #deb887, #c9a66b);
    border-radius: 10px;
    box-shadow: 
        0 10px 30px rgba(0,0,0,0.3),
        inset 0 2px 5px rgba(255,255,255,0.3);
}

/* ===== 棋盘 ===== */
.board {
    position: relative;
    width: 570px;
    height: 570px;
    background: #eecfa1;
    border: 2px solid #8b6914;
}

/* ===== 网格线 ===== */
.grid-lines {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.grid-line-h,
.grid-line-v {
    position: absolute;
    background: #4a3728;
}

.grid-line-h {
    width: 100%;
    height: 2px;
}

.grid-line-v {
    width: 2px;
    height: 100%;
}

/* ===== 星位点 ===== */
.star-point {
    position: absolute;
    width: 10px;
    height: 10px;
    background: #4a3728;
    border-radius: 50%;
    transform: translate(-50%, -50%);
}

/* ===== 落子点 ===== */
.intersection {
    position: absolute;
    width: 36px;
    height: 36px;
    transform: translate(-50%, -50%);
    cursor: pointer;
    z-index: 10;
    border-radius: 50%;
    transition: background 0.2s ease;
}

.intersection:hover {
    background: rgba(255, 193, 7, 0.3);
}

/* ===== 棋子 ===== */
.stone {
    position: absolute;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0);
    animation: placeStone 0.3s ease-out forwards;
    box-shadow: 2px 2px 5px rgba(0,0,0,0.4);
    z-index: 5;
}

@keyframes placeStone {
    0% { transform: translate(-50%, -50%) scale(0); }
    50% { transform: translate(-50%, -50%) scale(1.1); }
    100% { transform: translate(-50%, -50%) scale(1); }
}

.stone.black {
    background: radial-gradient(circle at 30% 30%, #666, #000);
}

.stone.white {
    background: radial-gradient(circle at 30% 30%, #fff, #ccc);
    border: 1px solid #999;
}

/* 最后落子标记 */
.stone.last-move::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 8px;
    height: 8px;
    background: #ff0000;
    border-radius: 50%;
}

/* ===== 获胜连线 ===== */
.win-line {
    position: absolute;
    height: 4px;
    background: linear-gradient(90deg, #ff0000, #ff6600);
    transform-origin: left center;
    z-index: 20;
    border-radius: 2px;
    box-shadow: 0 0 10px rgba(255, 0, 0, 0.6);
    animation: winPulse 1s ease-in-out infinite;
}

@keyframes winPulse {
    0%, 100% { opacity: 0.8; }
    50% { opacity: 1; }
}

/* ===== 控制按钮 ===== */
.controls {
    margin-top: 20px;
    display: flex;
    gap: 15px;
}

.btn {
    padding: 12px 30px;
    font-size: 16px;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: bold;
    outline: none;
}

.btn:active {
    transform: scale(0.95);
}

.btn-primary {
    background: linear-gradient(135deg, #8b4513, #a0522d);
    color: #fff;
    box-shadow: 0 4px 15px rgba(139, 69, 19, 0.4);
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(139, 69, 19, 0.5);
}

.btn-secondary {
    background: linear-gradient(135deg, #666, #888);
    color: #fff;
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
}

.btn-secondary:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0,0,0,0.3);
}

/* ===== 获胜弹窗 ===== */
.modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
}

.modal.show {
    opacity: 1;
    visibility: visible;
}

.modal-content {
    background: linear-gradient(145deg, #fff, #f5f0e8);
    padding: 40px 60px;
    border-radius: 20px;
    text-align: center;
    box-shadow: 0 20px 60px rgba(0,0,0,0.3);
    transform: scale(0.8);
    transition: all 0.3s ease;
}

.modal.show .modal-content {
    transform: scale(1);
}

.modal h2 {
    font-size: 36px;
    color: #4a3728;
    margin-bottom: 20px;
}

.modal .winner {
    font-size: 48px;
    margin-bottom: 30px;
    font-weight: bold;
}

.modal .winner.black {
    color: #333;
}

.modal .winner.white {
    color: #666;
}

/* ===== 响应式设计 ===== */
@media (max-width: 650px) {
    h1 {
        font-size: 28px;
    }
    
    .board {
        width: 380px;
        height: 380px;
    }
    
    .intersection {
        width: 24px;
        height: 24px;
    }
    
    .stone {
        width: 22px;
        height: 22px;
    }
    
    .player-info {
        padding: 8px 15px;
    }
    
    .player-name {
        font-size: 14px;
    }
    
    .btn {
        padding: 10px 20px;
        font-size: 14px;
    }
}

@media (max-width: 450px) {
    .board {
        width: 320px;
        height: 320px;
    }
    
    .intersection {
        width: 20px;
        height: 20px;
    }
    
    .stone {
        width: 18px;
        height: 18px;
    }
}
