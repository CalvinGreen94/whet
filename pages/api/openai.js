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
