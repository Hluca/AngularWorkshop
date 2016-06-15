class ContactService{
    constructor($http,ContURL) {
        this._http=$http;
        this.url=ContURL;
    }


    getContactById(id){
       return this._http.get(this.url+'/'+id);
    }

    fetchContacts() {
         return this._http.get(this.url);

    }

    update(id,data){
           return this._http.put(this.url+'/'+id,data);
    }

    save(data){
          return this._http.put(this.url,data);
    }
}

export default[
    '$http',
    'ContURL',
    ContactService
];
