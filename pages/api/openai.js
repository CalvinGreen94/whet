import { OpenAIApi, Configuration } from "openai";

const configuration = new Configuration({
  apiKey: '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',
});

const openai = new OpenAIApi(configuration);

export default async (req, res) => {
  if (req.body.prompt !== undefined) {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `${req.body.prompt}`,
    });

    res.status(200).json({ text: `${completion.data.choices[0].text}` });
  } else {
    res.status(400).json({ text: "No prompt provided." });
  }
};