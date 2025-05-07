import { OrbitingCircles } from '@/components/magicui/orbiting-circles'
import { Sparkles, HeartHandshake, History, Zap, CalendarHeart, AudioWaveform, Text, Flag, Globe } from 'lucide-react'
import React from 'react'
import Image from 'next/image'

const languages = [
    { name: 'Hi there' },
    { name: 'नमस्ते वहाँ' },
    { name: 'Hola allí' },
    { name: 'Salut là-bas' },
    { name: 'Olá aí' },
    { name: 'Hallo da' },
    { name: 'Ciao lì' },
    { name: 'Hej där' },
    { name: 'Hei der' },
    { name: 'Hei siellä' },
    { name: 'Hallo daar' },
    { name: 'Γεια σου εκεί' },
    { name: 'Здраво тамо' },
    { name: 'Здрасти там' },
    { name: 'سلام آنجا' },
    { name: 'こんにちは、そこの人' },
    { name: '你好，那边的' },
    { name: '안녕하세요 거기' },
    { name: 'หวัดดีจ้า' },
    { name: 'Chào bạn' },
    { name: 'Merhaba orada' },
    { name: 'Ahoj tam' },
    { name: 'Halló þarna' },
    { name: 'שלום שם' },
    { name: 'Hujambo hapo' },
    { name: 'Halo di sana' },
    { name: 'Kamusta ka diyan' },
    { name: 'Sannu can' },
    { name: 'Sawubona lapho' },
    { name: 'မင်္ဂလာပါ' },
    { name: 'Salam orada' },
    { name: 'Բարեւ այնտեղ' },
    { name: 'Салам ал жердесиңби' },
    { name: 'გამარჯობა იქ' },
    { name: 'ሰላም እዚህ' },
    { name: 'नमस्कार तिथे' },
    { name: 'வணக்கம் அங்கே' },
    { name: 'హాయ్ అక్కడ' },
    { name: 'ಹಲೋ ಅಲ್ಲಿ' },
    { name: 'ഹായ് അവിടെ' }
];


const Feature7 = () => {
    return (
        <div className="relative flex h-[25rem] flex-col items-center justify-center overflow-hidden">
            <div className="absolute z-10 top-0 w-full h-[3rem] bg-gradient-to-b from-white dark:from-dark-primary to-transparent"></div>
            <div className="absolute z-10 bottom-0 w-full h-[3rem] bg-gradient-to-t from-white dark:from-dark-primary to-transparent"></div>

            <OrbitingCircles iconSize={40} speed={0.7} radius={300}>
                {languages.slice(0, 30).map((language) => (
                    <div className="bg-white dark:bg-muted py-1 px-3 rounded-full border whitespace-nowrap">
                        {language.name}
                    </div>
                ))}
            </OrbitingCircles>
            <OrbitingCircles iconSize={40} radius={150} reverse speed={0.5}>
                {languages.slice(30, 40).map((language) => (
                    <div className="bg-white dark:bg-muted py-1 px-3 rounded-full border whitespace-nowrap">
                        {language.name}
                    </div>
                ))}
            </OrbitingCircles>

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-20 aspect-square p-2 border rounded-xl">
                    <Image src="/logo.png" className='w-full' alt="logo" width={100} height={100} />
                </div>
            </div>


        </div>
    )
}

export default Feature7