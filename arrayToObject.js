let arr =[
    'c:/index/drive/page.html',
    'c:/index/drive/index.html',
    'c:/index/drive/page.html',
    'c:/index/drive/index.html',
]
/*
Output:- 
{
    page.html:[
        'c:/index/drive/page.html',
        'c:/index/drive/page.html'
    ],
    index.html:[
        'c:/index/drive/index.html',
        'c:/index/drive/index.html'
    ]
}
*/
let obj={}
arr.forEach(path => {
    let filepath = path.split('/').pop();

    if(!obj[filepath]){
        obj[filepath] = []
    }
    obj[filepath] = path
})
console.log(obj);