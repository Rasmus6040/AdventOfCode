/*
Stacks separeted by ' '
*/


/* First challenge*/

let today1 = document.getElementById("a").innerText;
let todayArr1 = today1.split("\n");

let sum1 = 0;
let root = dir("/", null, 0);
let currentdir = root;
for(let i = 0; i< todayArr1.length; i++){
    line = todayArr1[i].split(" ");
    if (line[0] == "$" && line[1] == "cd" && line[2] == ".."){
        currentdir = currentdir.getParent();
    }
    else if (line[0] == "$" && line[1] == "cd"){
        currentdir = currentdir.find(line[2]);
    }else if(line[0] == "$" && line[1] == "ls"){

    }else if(line[0] == "dir"){
        currentdir.add(line[1], 0);
    }else if(line.length == 2){
        currentdir.add(line[1], parseInt(line[0]));
    }
}
console.log(root.findClose(1000000));

function dir(aname, aparent, asize){
    let name = aname;
    let subdirs = [];
    let parent = aparent;
    let size = parseInt(asize);
    const dir1 = {
        getSubdirs(){
            return subdirs;
        },
        getParent(){
            return parent;
        },

        add (name1, size1){
            subdirs.push(dir(name1, this, 0));
            size += size1;
            if(parent != null) parent.updateSize(size1);
        },
        updateSize(size1){
            size += size1;
            if(parent != null) parent.updateSize(size1);
        },
        find(name1){
            if(name == name1) return this;
            if(subdirs.length == 0) return null;
            a = null;
            subdirs.forEach(element => {
                let b = element.find(name1);
                if(b != null) a = b;
            });
            return a;
        },
        under100000(){
            totalsize = 0;
            subdirs.forEach(s => {
                if(s.getSubdirs().length != 0){
                    totalsize +=  s.under100000()
                }
            });
            if(size <= 100000){
                return size+totalsize;
            }else{
                return totalsize;
            }
        },
        /* 572957 */
        findClose(diff){
            smallestDiff = diff;
            if(size > 572957 && diff > size-572957){
                smallestDiff = size-572957;
            }
            subdirs.forEach(s => {
                if(s.findClose(smallestDiff) < smallestDiff){
                    smallestDiff = s.findClose(smallestDiff);
                }
            });
            return smallestDiff;

        }
        
    }
    return dir1;
}



/* second challenge */


let today = document.getElementById("a").innerText;
//let todayArr1 = today1.split("\n");

let sum = 0;


for(let i = 0; i< today.length-14; i++){
    let a = today.substring(i, i+14);
    let asort = a.split("").sort();
    let uniqueChars = [...new Set(asort)];
    if(uniqueChars.length == 14){
        console.log(i+14)
        break;
    }

}