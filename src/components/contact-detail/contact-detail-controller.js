class ContactDetailController {
    constructor($stateParams,ContactService,$state) {
            console.log($stateParams.id);
            this.service=ContactService;
            this.state=$state;
            this.id=$stateParams.id;



            if(this.id==-1){
            this.contact={"first_name": "", "last_name": "", "email": ""};
            this.isItNew=true;
            }else{
                this.isItNew=false;
        ContactService.getContactById(this.id).then((response)=>{

                this.contact = response.data;



                });
        }

    }

    submit(){
    if(this.isItNew){
     this.service.save(this.contact).then((response)=>{
      this.state.go('^.contactList');
     });
    }else{
        console.log("submit");
       this.service.update(this.id,this.contact)
     }


    }
}

export default [
    '$stateParams',
    'ContactService',
    '$state',
    ContactDetailController
];
