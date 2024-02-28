const { WebClient, LogLevel } = require("@slack/web-api");
require("dotenv").config();
const SLACK_TOKEN = process.env.SLACK_TOKEN;

const client = new WebClient(SLACK_TOKEN, {
  logLevel: LogLevel.DEBUG,
});

const checkSlack = async (req, res) => {
  try {
    const result = await client.chat.postMessage({
      channel: req.body.userId,
      text: `Your *${req.body.meetingTitle}* lasted ${req.body.time}`,
      mrkdwn: true,
    });

    res.status(200).json({ result });
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  checkSlack,
};
