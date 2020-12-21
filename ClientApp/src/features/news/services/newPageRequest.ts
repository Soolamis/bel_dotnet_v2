import ky from 'ky';
import { Page } from './types';
import { REQUEST_RETRY_COUNT } from '../../../share/constants';

async function newPageRequest(data: Page): Promise<number> {
    return parseInt(await ky.post(
        '/api/news',
        {
            json: {
                content: data.content,
                title: data.title,
                previewImage: data.previewImage,
            },
            retry: REQUEST_RETRY_COUNT,
        },
    ).text(), 10);
}

export default newPageRequest;
