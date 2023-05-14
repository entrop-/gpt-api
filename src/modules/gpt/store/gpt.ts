import { defineStore } from 'pinia';
import type { UserPrompt }  from '@/modules/gpt/api/types';
import { getMessage } from '@/modules/gpt/api/get-message';

export type GptStore = {
  userPrompt: string;
  userPromptLoading: boolean;
  userPromptError: boolean;
  botResponse: string;
}

type Actions = {
  fetchUserPrompt: (payload: UserPrompt) => Promise<void>;
}

type Getters = {
  getUserPrompt: (state: GptStore) => string;
}

export const useStore = defineStore<'gpt', GptStore, Getters, Actions>(
'gpt',
  {
    state: () => ({
      userPrompt: '',
      userPromptLoading: false,
      userPromptError: false,
      userPromptErrorMessage: '',
      botResponse: '',
    }),
    getters: {
      getUserPrompt: (state: GptStore) => state.userPrompt,
    },
    actions: {
      async fetchUserPrompt(payload: UserPrompt) {
        this.userPromptLoading = true;
        this.userPromptError = false;
        try {
          const response = await getMessage(payload);
          const data = await response.json();
          this.userPrompt = payload;
          this.botResponse = data.response;
        } catch (error: unknown) {
          this.userPromptError = true;
        } finally {
          this.userPromptLoading = false;
        }
      }
    }
  }
);
