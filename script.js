function indexOfIgnoreCase(s1, s2) {
  // Convert both strings to lowercase
  const str = s1.toLowerCase();
  const sub = s2.toLowerCase();

  // Use indexOf to get the first occurrence
  return str.indexOf(sub);
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
