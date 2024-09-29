import axios from 'axios';
import { ResponseType } from '../state-type/response.type';
import { NYTArticleProps } from '../state-type/news.state';
// Use environment variables instead of getConfig
const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const url = process.env.NEXT_PUBLIC_NYT_ARTICLE_URL;

const getAllArticle = async (): Promise<Array<NYTArticleProps> | null> => {
    if (!apiKey || !url) {
        console.error("API key or URL is not defined");
        return null;
    }
    try {
        const response = await axios.get<ResponseType<NYTArticleProps>>(`${url}?api-key=${apiKey}`);
        return response.data.response.docs;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            alert("Karena ada batasan limit dari penyedia api , silahkan coba beberapa saat lagi");
        } else {
            alert("Karena ada batasan limit dari penyedia api , silahkan coba beberapa saat lagi");
        }
        return null;
    }
}

export const ArticleAction = {
    getAllArticle,
}