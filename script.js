function firstNonRepeatedChar(s) {
  // Write your code here	
	let m = new Map();
	let n=s.length;
	
	for(let i=0;i<n;i++) {
		let k=0;
		if(m.get(s[i])) {
			k=m.get(s[i]);
		}
		m.set(s[i],k+1);
	}
	
	let ans = null;
	for(let i=0;i<n;i++) {
		if(m.get(s[i])==1) {
			ans = s[i];
			break; 
		}
	}
	return ans; 
	
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
