const persons = [
    {firstname : "Malcom", lastname: "Reynolds"},
    {firstname : "Kaylee", lastname: "Frye"},
    {firstname : "Jayne", lastname: "Cobb"}
  ];
  
 // Tässä on virhe kun yrittää käyttää 'getFullName' funktiota ennen kuin se on määritelty.
 
 // persons.map(getFullName);
 // const getFullName= item =>  [item.firstname,item.lastname].join(" ");
  

  // Korjattu*:
  
  const getFullName= item =>  [item.firstname,item.lastname].join(" ");

  const fullNames = persons.map(getFullName);

  console.log(fullNames);
  