// The demonstration WhatsApp conversation shown on the home page, in both languages.
export type Msg = { from: 'client' | 'mirsal'; text?: string; time?: string; buttons?: string[] };

export const chats: Record<'en' | 'ar', Msg[]> = {
  en: [
    { from: 'client', text: 'Good evening. Is the villa in Al Narjis still available?', time: '23:42' },
    { from: 'mirsal', text: 'Good evening, Mr Khalid. Yes, it is. I have sent the photographs and floor plan.\nMay I ask whether you are buying or renting?', time: '23:42' },
    { from: 'mirsal', buttons: ['Buying', 'Renting'] },
    { from: 'client', text: 'Buying', time: '23:43' },
    { from: 'mirsal', text: 'Thank you. Sara would be delighted to show you the villa privately on Thursday at 16:30. Shall I reserve it?', time: '23:44' },
    { from: 'mirsal', buttons: ['Reserve Thursday', 'Another time'] },
  ],
  ar: [
    { from: 'client', text: 'مساء الخير، الفيلا في النرجس لسا متوفرة؟', time: '23:42' },
    { from: 'mirsal', text: 'مساء النور أستاذ خالد، نعم متوفرة. أرسلت لك الصور والمخطط.\nهل تبحث عن شراء أو إيجار؟', time: '23:42' },
    { from: 'mirsal', buttons: ['شراء', 'إيجار'] },
    { from: 'client', text: 'شراء', time: '23:43' },
    { from: 'mirsal', text: 'شكرًا لك. يسعد سارة أن تريك الفيلا بخصوصية يوم الخميس الساعة ٤:٣٠ العصر. أحجز لك الموعد؟', time: '23:44' },
    { from: 'mirsal', buttons: ['احجز الخميس', 'وقت آخر'] },
  ],
};
