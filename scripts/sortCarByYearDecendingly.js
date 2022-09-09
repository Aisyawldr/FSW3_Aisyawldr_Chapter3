function sortCarByYearDescendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  //Menampilkan hasil output sebelum di sorting berdasarkan Descending
  console.log("Sebelum di sorting berdasarkan Descending :");  
  console.table(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  /*
  Side Effects adalah efek samping setiap perubahan keadaan yang terjadi di luar function yang dipanggil. 
  Tujuan terbesar dari setiap functional programming language adalah meminimalkan efek samping, dengan memisahkannya dari kode perangkat lunak lainnya.
  */
  const result = [...cars];

  // Tulis code-mu disini
  result.sort(function(x, y){
    if (x.year !== y.year) return y.year - x.year;
  });

  //Penjelasan code
  /*
  Membuat variabel x dan y untuk mengimplementasikan operator aritmatika untuk mengimplementasikan sorting
  Setelah itu, pada kondisi If diimplementasikan variabel x.year (year untuk mengsorting cars berdasarkan tahunnya) dengan operator !== (Strict not equal) y.year. 
  Setelah itu di return dengan rumus "y.year - x.year", Untuk mengsorting cars berdasarkan tahunnya secara Ascending maka nilai Y dikurang dengan X
  */

  
  //Menampilkan hasil output setelah di sorting berdasarkan Descending
  console.log("Sesudah di sorting berdasarkan Descending :");  
  console.table(result);
  
  // Rubah code ini dengan array hasil sorting secara descending
  return result;
}