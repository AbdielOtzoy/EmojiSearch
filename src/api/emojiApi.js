import axios from "axios";

export const emojiApi = axios.create({
    baseURL: 'https://emoji-api.com/',

})