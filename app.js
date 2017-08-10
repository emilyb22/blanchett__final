angular
	.module('contactsApp', ['firebase'])
    .constant('firebaseConfig', {
     apiKey: "AIzaSyBl1hDAyp38K3WNeZljOl5Z4fMGayyLSi8",
    authDomain: "final-f22f0.firebaseapp.com",
    databaseURL: "https://final-f22f0.firebaseio.com",
    projectId: "final-f22f0",
    storageBucket: "final-f22f0.appspot.com",
    messagingSenderId: "149695883160"  
})
.run(firebaseConfig => firebase.initializeApp(firebaseConfig))
.controller('contactsCtrl', function($scope, $firebaseObject, $firebaseArray){
	const dbRef = firebase.database().ref().child('contacts')
    
    $scope.contactList = $firebaseArray(dbRef)    
    this.getBlankContact = () => ({
        fname:'',
        lname: '',
        phone: '',
        subject: '',
        priority: '',
        isCompleted: false
    })
    
    $scope.newContact = this.getBlankContact()
    
    $scope.addContact = () => {
        $scope.contactList.$add($scope.newContact)
        $scope.newContact = this.getBlankContact()
    }
    
    $scope.saveContact = contact => $scope.contactList.$save(contact)
    
    $scope.removeContact = contact => {
        if(confirm("Are you sure you want to delete this contact?")){
    $scope.contactList.$remove(contact)
        }
    }
    
    
})


