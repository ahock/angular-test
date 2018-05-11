export class Group {

    constructor(public name: String) {
        
    }
    
    public getUserToken() {
        return "dfghj";
    }
    
    public getName() {
        return this.name;
    }
    public import( importtext: String) {
        var imptext = [];
        var userelement = [];
        //console.log("Import", importtext);
        imptext = importtext.split(/\r?\n|\r/);
//        console.log("Import", imptext);
        for(var i=0; i<imptext.length; i++) {
            userelement = imptext[i].split(/, |,/)
            console.log(userelement);
        }
    }
}