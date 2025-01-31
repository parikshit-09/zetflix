import OpenAI from "openai";
import { OpenAiKey } from "./constant";

const openai = new OpenAI({
  apiKey: OpenAiKey,
});

const completion = openai.chat.completions.create({
  model: "gpt-4o-mini",
  store: true,
  messages: [{ role: "user", content: "write a haiku about ai" }],
});

completion.then((result) => console.log(result.choices[0].message));
