const axios = require('axios');
require('dotenv').config();

(async () => {
    try {
        const response = await axios.post(process.env.WEBHOOK_URL, {
            token: process.env.WEBHOOK_SECRET
        });
        console.log('✅ Webhook 호출 성공:', response.data);
    } catch (error) {
        console.error('❌ Webhook 호출 실패:', error.message);
        if (error.response) {
            console.error('❌ Webhook 응답 데이터:', error.response.data);
        }
    }
})();

