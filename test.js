function findMaxWordFrequencyAndWord(words) {
  const wordCount = {};
  let maxFrequency = 0;
  let maxFrequencyWord = null;

  // Counting  the freq of each word in the array
  for (const word of words) {
    if (wordCount[word]) {
      wordCount[word]++;
    } else {
      wordCount[word] = 1;
    }

    // Update maxFreqand maxFreqword 
    if (wordCount[word] > maxFrequency) {
      maxFrequency = wordCount[word];
      maxFrequencyWord = word;
    }
  }

  return { maxFrequency, maxFrequencyWord };
}


async function  getdata(){
  const response = await fetch("https://one00x-data-analysis.onrender.com/assignment?url=mayankpratapsingh022@gmail.com",{

  method : "GET"

  
  })

      
  if(response.ok){
    
    const id = response.headers.get("x-assignment-id");
    console.log(id);
   const data =  await response.json();
   const answer = findMaxWordFrequencyAndWord(data);
    console.log(answer);
    await postdata(answer,id);
  }



   
}


getdata();

async function postdata(answer,id){


  const result = {
    assignment_id: id,
    answer: answer,
  };

const response = await fetch("https://one00x-data-analysis.onrender.com/assignment?url=mayankpratapsingh022@gmail.com",{

method : "POST",
headers : {
  "Content-Type":"application/json"
},
body: JSON.stringify(result)

})  

console.log(response);

if(response.ok){
  const outcome = await response.json();
  console.log(outcome); 
}


}