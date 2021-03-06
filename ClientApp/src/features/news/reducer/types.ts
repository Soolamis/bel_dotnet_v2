import { TranslationContainer } from '../../../share/translationContainer';

export interface RootState {
    news: NewsState;
}

export interface NewsState {
    content: TranslationContainer<string>;
    title: TranslationContainer<string>;
    language: string;
    previewImage: string;
    isPreview: boolean;
    isContentLoadSuccess: boolean;
    isContentLoading: boolean;
}
