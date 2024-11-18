function longestCommonPrefix(str){
   if(str.length === 0) return ''

   let prefix = str[0];
   for(let i=0;i<str.length;i++){
    while(str[i].indexOf(prefix) !== 0){
        prefix = prefix.substring(0,str.length-1)
    }
   }
   return prefix
}

console.log(longestCommonPrefix(["flower","flow","flight"]))