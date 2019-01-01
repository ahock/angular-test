export class EduObjective {
    private id: string;
    private name: string;
    private lang: string;
    private type: string;
    private taxonomy: number;
    private skillgoal: string;
    private modul: string;
    private field: string;
    
    private updated: boolean;
    
    // my edo objective
    private my: boolean;
    private selfassess: string;
    private notes: string;
/*
{
    "_id": {
        "$oid": "5bc45bded2ff9f365d65f1ad"
    },
    "name": "Ich kenne die Aimy-speziefischen Begriffe und ihre Bedeutung.",
    "lang": [
        "DE"
    ],
    "type": [
        "Kennen"
    ],
    "taxonomie": "1",
    "skillgoal": "Das Konzept von Aimy so verstehen, dass man es für sich selbst gewinnbringend anwenden kann und die Vorteile anderen erklärt werden können.",
    "modul": "Aimy für Lern- und Fachcoaches",
    "field": "Aimy ICMP",
    "__v": 0
}
*/
    
    
    
    constructor(edo: any) {
//        console.log("EduObjective Constructor", edo);
        this.id = edo._id;
        this.name = edo.name;
        this.lang = edo.lang[0];
        this.type = edo.type[0];
        this.taxonomy = edo.taxonomie;
        this.skillgoal = edo.skillgoal;
        this.modul = edo.modul;
        this.field = edo.field;        
        this.my = false;
        this.notes = "...";
        this.updated = false;
    }
    public getName(): string {
        return this.name;
    }   
    public getField(): string {
        return this.field;
    }   
    public getModule(): string {
        return this.modul;
    }   
    public getTaxonomy(): number {
        return this.taxonomy;
    }
    public getType(): string {
        return this.type;
    }
    public getUsage(): number {
        return 1234;
    }
    public getSkillgoal(): string {
        return this.skillgoal;
    }
    public getId(): string {
        return this.id;
    }
    public isMy(): boolean {
        return this.my;
    }
    public setMy(myedo: any) {
//        console.log("serMy", myedo);
        this.my = true;
        this.selfassess = myedo.selfassess;
    }
    public getSelfassess(): string {
        
        return this.selfassess;
    }
    public getNotes(): string {
        return this.notes;
    }
    public setSelfassess(assess: string) {
        this.selfassess = assess;
        this.updated = true;
    }
    public isUpdated(): boolean {
        return this.updated;
    }    
}