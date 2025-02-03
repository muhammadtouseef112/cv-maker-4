
function createCV(){
    const firstname = document.getElementById("input-1").value;
    const fathername = document.getElementById("fathername").value
    const education = document.getElementById("education").value;
    const working = document.getElementById("input-3").value;
    const contact = document.getElementById("input-4").value;
    const skills = document.getElementById("skill").value;

    // console.log(firstname)
    // console.log(education)
    // console.log(working)
    // console.log(contact)
    // console.log(skills)
  if(!contact || !skills || !education || !working || !firstname || !fathername){
    alert("please fill the feild")
  }else{
    const cvContent = `
     <h1 >Your Resume</h1>
       <div id="first"> <h1> ${firstname}</h1></div>
       </br>
       <h3>Father Name:</br>${fathername}</h3>
       <h2>Resume</h2>
       </br>
       <p id="para">Willing to work with an organization where the chance of improvement </br> 
       Exist and to look for the opportunity to utilize my education and skills to </br>
       a progressive and Dynamic with a competitive environment.</p>
       </br>
        <h3>Education </h3>
         <li>${education}</li>
         </br>
        <h3>Working Experience </h3>
        <li>${working}</li>
        </br>
       <h3>Skills </h3>
       <p>Skill is crucial in achieving success in various fields and tasks. </p>
        <li>${skills}</li>
        </br>
        <h3>Contact </h3>
        <li> ${contact}</li>
      `;
  
      document.getElementById("cv-content").innerHTML = cvContent;
      document.getElementById("generatedcv").style.display = 'block';
  }
    // const aftergenerate = 
    // document.createElement("h3")
    // aftergenerate.innerText ="name" +" "+ firstname 
    // document.body.appendChild(aftergenerate)
}