import Image from 'next/image'
import featurecss from './featurecss.module.css'
export default function ServicesBox() {
    const data = [
        {
            id: 1,
            style: {
                backgroundImage: 'linear-gradient(90deg, #4a0e8f 0%, #b430a7 51%, #4a0e8f 100%)',
                backgroundSize: '200% auto'
            },
            imagesrc: '/web-development.png',
            name: 'Website Development',
            desc: 'Website + Hosting + email @ Just AUD 499 Get Your Firm On The Web With a Beautiful Website And Feel The Power in Online, Attract new Customers Who Need You.',
        },

        {
            id: 2,
            style: {
                backgroundImage: 'linear-gradient(90deg, #4453ac 0%, #03a9db 51%, #4453ac 100%)',
                backgroundSize: '200% auto',
            },
            imagesrc: '/graphic-designing.png',
            name: 'Graphic Designing',
            desc: 'Elevate your brand with our graphic design expertise! We create impactful visuals tailored to your business, delivering compelling designs that leave a lasting impression.',
        },
        {
            id: 3,
            style: {
                backgroundImage: 'linear-gradient(90deg, #0349a6 0%, #15c27b 51%, #0349a6 100%)',
                backgroundSize: '200% auto',
            },
            imagesrc: '/digital-marketing.png',
            name: 'Digital Marketing',
            desc: 'Boost your business with our digital marketing prowess! From strategic campaigns to social media mastery, we drive results to enhance your online presence and engagement.',
        },
        {
            id: 4,
            style:{
                backgroundImage: 'linear-gradient(90deg, #e41256 0%, #ffa337 51%, #e41256 100%)',
                backgroundSize:'200% auto',
            },
            imagesrc: '/seo-content-writing.png',
            name: 'SEO & Content Writing',
            desc: 'Ignite your online presence with our SEO and content writing services! Elevate your websites visibility and captivate your audience with compelling, search-optimized content. ',
        },
        {
            id: 5,
            style:{
                backgroundImage: 'linear-gradient(90deg, #03a631 0%, #d6c10f 51%, #03a631 100%)',
                backgroundSize:'200% auto',
            },
            imagesrc: '/app-development.png',
            name: 'App Development',
            desc: 'Transform your ideas into reality with our app development expertise! We craft user-friendly, innovative apps tailored to your needs. Elevate your business in the digital realm with us.',
        },
        {
            id: 6,
            style: {
                backgroundImage: 'linear-gradient(90deg, #4a0e8f 0%, #b430a7 51%, #4a0e8f 100%)',
                backgroundSize: '200% auto'
            },
            imagesrc: '/tripod.svg',
            name: 'Product Photography',
            desc: 'Capture excellence with our product photography services! We bring your products to life through stunning visuals, highlighting their unique features.',
        },
        {
            id: 7,
            style: {
                backgroundImage: 'linear-gradient(90deg, #4453ac 0%, #03a9db 51%, #4453ac 100%)',
                backgroundSize: '200% auto',
            },
            imagesrc: '/developer-support.png',
            name: 'Developer Support',
            desc: 'Empower your projects with our developer support services! We offer expert assistance, troubleshooting, and guidance, ensuring smooth development processes.',
        },
        {
            id: 8,
            style: {
                backgroundImage: 'linear-gradient(90deg, #0349a6 0%, #15c27b 51%, #0349a6 100%)',
                backgroundSize: '200% auto',
            },
            imagesrc: '/tv-advertisement.png',
            name: 'AD Shooting & photography',
            desc: 'Unleash the power of visuals with our ad shooting and videography editing services! We create captivating content that tells your story, leaving a lasting impact.',
        },

    ]

    function createCard(element) {

        return (<div key={element.id} className={featurecss.servicesCard}>
            <div style={element.style} className={featurecss.servicesCardFront}>
                <Image loading='lazy' height={100} width={100} src={element.imagesrc} alt={element.name} />
                <p>{element.name}</p>
            </div>

            <div className={featurecss.servicesCardBack}><p>{element.desc}</p></div>
        </div>)
    }
    return <div id='serviceBox' className={featurecss.servicesBox}>
        {data.map(createCard)}

    </div>
}
