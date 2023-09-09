const fs = require("fs");
const { NlpManager } = require("node-nlp");

const load_data = fs.readFileSync("./model.nlp", "utf8");
const manager = new NlpManager();
manager.import(load_data);

const getBotResponse = async (user_message) => {
  const bot_response = await manager.process(user_message);
  return bot_response;
};
module.exports = { getBotResponse };
