
cc.Class({
    extends: cc.Component,

    properties: {
        // 引入怪物资源
        monsterPrefab: {
            default: null,
            type: cc.Prefab
        },
        // 获取角色位置
        role: {
            default: null,
            type: cc.Node
        },
        HP: 8, //血
        ATK: 2, //攻击
        DEF: 3, //防御
    },
    // 随机两个数之间的数
    Math:(min,max) => Math.floor(Math.random() * (max - min + 1)) + min,
    // 掉落品质
    DropQuality(num = 6){
        let quality = ''
        let x = this.Math(0,num)
        // S为传说，A为史诗，B为精良，C为优秀，D为普通
        let S = num * 0.02, A = num * 0.08, B = num * 0.25, C = num * 0.50, D = num
        if (x <= S) { quality = '传说'; }
        else if (x > S && x <= A) { quality = '史诗' }
        else if (x > A && x <= B) { quality = '精良' }
        else if (x > B && x <= C) { quality = '优秀' }
        else if (x > C && x <= D) { quality = '普通' }
        return quality
    },
    // 成长系数
    growUp(attribute, lv){
        let max = Math.floor(attribute * lv ** 1.25)
        let min = Math.floor(attribute * lv ** 1.25 * 0.9)
        attribute = this.Math(min, max)
        return attribute
    },
    // 掉落装备
    equipDrop(lv = 1,num = 5){
        let newEquip = {}
        newEquip.quality = this.DropQuality()
        switch (this.Math(0,num)) {
            case 0:
                newEquip.type = '上衣';
                newEquip.DEF = this.growUp(this.DEF * 2, lv)
                break;
            case 1:
                newEquip.type = '裤子';
                newEquip.DEF = this.growUp(this.DEF, lv)
                break;
            case 2:
                newEquip.type = '鞋子';
                newEquip.DEF = this.growUp(this.DEF / 2, lv)
                break;
            case 3:
                newEquip.type = '护符';
                newEquip.HP = this.growUp(this.HP, lv)
                break;
            case 4:
                newEquip.type = '项链';
                newEquip.HP = this.growUp(this.HP, lv)
                break;
            case 5:
                newEquip.type = '武器';
                newEquip.ATK = this.growUp(this.ATK, lv)
                break;
        }
        return newEquip
    },
    newMonster() {
        // 使用模板生成一个新怪物节点
        let Monster = cc.instantiate(this.monsterPrefab)
        // 将怪物节点添加Canvas
        this.node.addChild(Monster);
        // 节点位置
        Monster.setPosition(cc.v2(this.Math(-800,800), this.Math(-800,800)))
        Monster.getComponent('monster').game = this
    },

    onLoad() {
        this.newMonster()
        this.newMonster()
        this.newMonster()
        this.newMonster()
    },
    start() {

    },

    // update (dt) {},
});
