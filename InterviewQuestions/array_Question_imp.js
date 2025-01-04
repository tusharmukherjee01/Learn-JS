
//Print all array property that is original property of array not any additional prpperty

Object.prototype.tushar = "Tushar"

let myAyyay = [1,2,3,4,5]

myAyyay.forEach((v) => console.log(v)) 

//for this you have to do like this
//
for(let v in myAyyay){
    if(myAyyay.hasOwnProperty(v)){  // ata true debe only when property is existing => when you add new property useing prototype it will not get "hasOwnProperty" => so,that's how you can do this..
        console.log(v)
    }
}



