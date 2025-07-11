import { _decorator, Component, Material, Node, Sprite, v4 } from 'cc';
const { ccclass, property, executeInEditMode } = _decorator;

@ccclass('overlap_alpha')
@executeInEditMode
export class overlap_alpha extends Component {
    @property(Sprite)
    img:Sprite


    private mat:Material
    protected onLoad(): void {
        this.mat = this.getComponent(Sprite).customMaterial
        this.mat.setProperty("otherTexture", this.img.spriteFrame.texture)
    }

    update(deltaTime: number) {
        this.mat.setProperty("otherWorldPosition", v4(this.img.node.worldPosition.x,this.img.node.worldPosition.y,266,269))
    }
}

