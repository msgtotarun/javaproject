function countB(a) {
  var c = 0;
  for (i in a) {
    if (a.charAt(i) === "B") {
      ++c;
    }
  }
  console.log(c);
}

function count(a, b) {
  var c = 0;
  for (i in a) {
    if (a.charAt(i) === b) {
      ++c;
    }
  }
  console.log(c);
}
countB("BBaa");
count("BBaaac", "a");
