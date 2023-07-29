const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config();
const configuration = new Configuration({
  // apiKey: "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",
  apiKey: process.env.OPENAI_API_KEY
});
const openai = new OpenAIApi(configuration);
console.log(":",process.env.OPENAI_API_KEY);
var generatePrompt = function (input) {
  // return `${input}`;
  return "Que moneda existe en perú?";
};

const test = async function (req, res) {
  //retornaa todo los usuarios
  
  let bb = req.body.animal;
  //console.log("bb",generatePrompt(bb));
  try {
    // setTimeout(async () => {
    const completion = await openai.createCompletion({
      model: "gpt-3.5-turbo",
      prompt: generatePrompt(bb),
      temperature: 0,
      max_tokens: 7,

    });
    // console.log("completion :", completion);
    res.status(200).json({ result: completion.data.choices[0].text });
  // });
  } catch (error) {
    res.status(400).json({
      message: "error :" + error,
    });
  }

};

const chatgpt = async function (req, res) {
  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: generatePrompt(req.body.animal),
      temperature: 0,
      max_tokens: 7,
    });
    res.status(200).json({ result: completion.data.choices[0].text });
  } catch (error) {
    res.status(400).json({
      message: "error :" + error,
    });
  }
};

module.exports = {
  test,
  chatgpt
};
