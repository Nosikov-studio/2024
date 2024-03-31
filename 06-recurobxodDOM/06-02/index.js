const obx= [
    'hello.txt', {
    "Django":['Lew.jpg', 'Tarantino.jpg', 'Fox.jpg', 
            {"Mass":['actor1','actor2','actor3']}],
    "Interstellar":['Actors.txt','Matthew.jpg','Sctipts.txt', {"Saunds":[0]}],
    "Pulp":['Travolta.jpg','Travolta.txt', 'Uma.jpg'] }
]

function obxodFile(root, level=1){
    console.log('Level=', level, "Content:", root)
    for (const k in root) {
        if (root[k] instanceof Object) {
            
            obxodFile(root[k], level+1)
        }
    }
}
obxodFile(obx)
