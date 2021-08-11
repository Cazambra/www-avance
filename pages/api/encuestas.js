
export default function handler(req, res) {
  let encuestas = [];
  console.log("handler")
  fetch("https://7aupgd2bgk.execute-api.us-east-2.amazonaws.com/dev/encuesta")
  .then(result => result.json())
  .then(result => JSON.parse(result.body))
  .then( result =>  res.status(200).send(result.Items))
  .catch( (err) => console.log("Error 400"))
} 


// const cargarEncuestas = () => {

  

//   fetch("https://7aupgd2bgk.execute-api.us-east-2.amazonaws.com/dev/encuesta")
//   .then(res => res.json())
//   .then(res => JSON.parse(res.body))
//   .then( result => setEncuestas(result.Items))
//   .then(res => setLoaded(true))
//   .then(console.log(encuestas))

//   }