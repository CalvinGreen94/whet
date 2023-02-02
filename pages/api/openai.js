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
