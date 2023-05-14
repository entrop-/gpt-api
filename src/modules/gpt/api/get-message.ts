import type { UserPrompt } from '@/modules/gpt/api/types';

export async function getMessage(payload: UserPrompt) {
  try {
    const API_KEY = import.meta.env.GPT_API_KEY;
    const API_URL = import.meta.env.GPT_API_URL;
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

    const response = await fetch(API_URL, options)
    return await response.json()
  } catch (error) {
    console.error(error)
  }
}
