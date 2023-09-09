const fs = require("fs");
const { NlpManager } = require("node-nlp");

const load_data = fs.readFileSync("./model.nlp", "utf8");
const manager = new NlpManager();
manager.import(load_data);

const getBotResponse = async (user_message) => {
  const bot_response = await manager.process(user_message);
  const main_response = {
    message: bot_response?.answer,
    score: bot_response?.score,
    intent: bot_response?.intent,
    language: bot_response?.language,
    utterance: bot_response?.utterance,
  };
  return main_response;
};
module.exports = { getBotResponse };
