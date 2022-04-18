const str = 'Hello World';
console.log(str)
if (str.toUpperCase() == str) {
  // 👇️ this runs
  console.log('Why are you yelling!?');
} 
else if (str.toLowerCase() == str) {
  console.log('Why are you whispering?');
}
else {
    console.log('A nice indoor voice, I like it. ✅')
}