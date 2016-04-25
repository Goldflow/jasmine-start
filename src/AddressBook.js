//implementation of the module pattern (export pattern)
var AddressBook = (function() {
    
    function AddressBook()
    {    
        var _list = [];//this exists in the closure
        //if you write your var the variable only remains known in the inner scope
        //var initialComplete = false;
        //writing this is more or less same as public modifier
        this.initialComplete = false;
        this.addContact = addContact; 
        this.getContact = getContact; 
        this.deleteContact = deleteContact; 
        this.getInitialContacts = getInitialContacts; 
       
                
        function addContact(contact)
        {
            _list.push(contact);
        };        
                
        function getContact(index)
        {
            return _list[index];            
        };
        
        function deleteContact(index)
        {
            //removes 1 element from an array at index
            _list.splice(index,1);            
        };
        
         function getInitialContacts(cb)
        {
           
           var self = this;
           
           //code to simulate asynchronous getting of data
           setTimeout(function() {
               //error you can not use this here again
               //because this here won't be the same as this defined in scope above
               self.initialComplete = true;
               if(cb){
                   return cb();
               }
           },3);      
        };
    }
    
    //export van constructor function.
    return AddressBook;
    
})();

/*function addEight (){
    var i = 8;
    return function innner(j){
        //do something with i;
        return i+j;
    }
}

function addEight();

var innner = addEight();
var k = inner(8);



//(1+2)()*5;


//hierboven zo doen om weg te blijven uit global scope
//als je hier bv i bijhoudt in global scope
//kan dit problemen geven als je nog eens i gebruikt in zelfde script
// NAMING COLLISIONS ARE EVIL

*/