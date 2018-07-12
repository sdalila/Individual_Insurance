export class Insurance{
    id: number;
    type: string;
    employeeid: string;
    status: string;
    policynum: string;
    comment: string;
    updated: string;
    created: string;
    //edit: HTMLButtonElement;
    //remove: HTMLButtonElement;

    //, edit: HTMLButtonElement
    //, remove: HTMLButtonElement

    constructor(id: number, type: string, employeeid: string, status: string, policynum: string, comment: string, updated: string, created: string){
        this.id=id;
        this.type=type;
        this.employeeid=employeeid;
        this.status=status;
        this.policynum=policynum;
        this.comment=comment;
        this.updated=updated;
        this.created=created;
        //this.edit=edit;
       // this.remove=remove;

    }
}