export interface Mesh{

    geometry:any;
    isMesh:boolean;
    material:any;
    morphTargetInfluences:number[]|undefined;
    morphTargetDictionary:any;
    position:{
        x:number;
        y:number;
    };
    rotation:{
        x:number;
        y:number;
    }
}