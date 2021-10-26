// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        // 移动方向
        x: 0,
        y: 0,
        // 每次移动得距离
        s:80,
        // 移动持续时间
        moveDuration: 0.3,
        // 是否正在移动
        isMove:false,
        bg:null
    },
    onkeydown(event) {
        if(this.isMove) return //如果正在移动则退出
        clearInterval(this.bg)
        // 按下wdsa时背景移动
        switch (event.keyCode) {
            case 87:
                this.y += this.s
                break;
            case 68:
                this.x += this.s
                break;
            case 83:
                this.y -= this.s
                break;
            case 65:
                this.x -= this.s
                break;
            }
            this.isMove = true
            this.bg = setInterval(() => {
                this.isMove = false
            }, this.moveDuration)
            cc.tween(this.node).to(this.moveDuration, {position: cc.v2(this.x,this.y)}, {easing: 'sineOut'}).start();
    },
    onLoad() {
        // 场景加载后开始监听键盘事件
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onkeydown, this);
    },
    onDestroy() {
        // 场景销毁后取消键盘事件监听
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onkeydown, this)
    },
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {

    },

    // update (dt) {},
});

