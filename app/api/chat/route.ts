import { streamText } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';

const zhipu = createOpenAI({
  baseURL: 'https://open.bigmodel.cn/api/paas/v4/',
  apiKey: process.env.ZHIPU_API_KEY,
});

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = await streamText({
    model: zhipu.chat('glm-4-flash'),
    messages,
  });

  return result.toDataStreamResponse();
}