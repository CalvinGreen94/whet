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
