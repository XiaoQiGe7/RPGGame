// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        role:{
            default:null,
            type:cc.Node,
        }
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },
    getRoleDistance(){
        let rolePos = this.role.getPosition()
        // let dist = this.node.position.sub(rolePos).mag()
        return this.node.position.sub(rolePos).mag()
    },
    update (dt) {
        if(this.getRoleDistance() < 80) {
            console.log('开始传送!')
            cc.director.loadScene("welcome")
        }
    },
});
