const myObject ={
    js:'javascript',
    css:'cascading style sheet',
    html:'HyperText Markup Language',
    cpp:'c++',
    rb:'ruby',
    py:'python',
    java:'java',
    php:'php',
    cs:'c#',
    swift:'swift',
}

for (const key in myObject) {
    
        // console.log(`${key} shortcut is for ${myObject[key]}`);
    }
const programming =["js","rb","py","java","php","swift"]

for (const key in programming) {
    
    console.log(key);
    console.log(programming[key])
        
}


