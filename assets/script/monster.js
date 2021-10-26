
cc.Class({
    extends: cc.Component,

    properties: {
        pickRadius:0,
    },
    // onLoad () {},
    start () {
    },
    getRoleDistance() {
        // 获取角色位置
        let rolePos = this.game.role.getPosition()
        // 计算角色与怪物之间得距离
        // let dist = this.node.position.sub(rolePos).mag()
        return this.node.position.sub(rolePos).mag()
    },
    update (dt) {
        if(this.getRoleDistance() < 80) {
            console.log('开始打架！')
            let ddd = this.game.equipDrop()
            console.log(ddd)
            this.node.destroy()
            this.game.newMonster()
        }
    },
});
