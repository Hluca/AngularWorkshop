class ContactListController {
    constructor(ContactService) {



        ContactService.fetchContacts().then((response)=>{
        this.contacts = response.data;
        console.log("controller");
                console.log(this.contacts);


        });

    }
}

export default [
    'ContactService',
    ContactListController
];
