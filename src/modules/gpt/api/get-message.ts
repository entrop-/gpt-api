import { UserPrompt } from '@/modules/gpt/api/types';

export async function getMessage(payload: UserPrompt) {
  try {
    const API_KEY = process.env.OPENAI_API_KEY;
    const options = {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: payload }],
      })
    }

    const response = await fetch('https://api.openai.com/v1/chat/completions', options)
    const data = await response.json()
    console.log(data)
  } catch (error) {
    console.error(error)
  }
}
