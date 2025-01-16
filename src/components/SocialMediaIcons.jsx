
const SocialMediaIcons = () => {
    return (
        <div className="flex justify-center md:justify-start my-10 gap-7">
            <a className="hover:opacity-50 transition duration-500"
                href="https://www.linkedin.com/in/tenzing-sherpa-6593532b7/"
                target="_blank"
                rel="noreferrer"
            >
                <img src={require('../assets/linkedin.png')} alt='linkedin-link' />
            </a>
            <a className="hover:opacity-50 transition duration-500 -mt-2"
                href="https://github.com/sherpaten"
                target="_blank"
                rel="noreferrer"
            >
                <img src={require('../assets/github-brands-solid.svg').default} alt='github-link' />
            </a>
            <a className="hover:opacity-50 transition duration-500 -mt-0.5"
                href="https://leetcode.com/u/sherpaten/"
                target="_blank"
                rel="noreferrer"
            >
                <img src={require('../assets/leetcode-icon.png')} alt='leetcode-link' />
            </a>
            <a className="hover:opacity-50 transition duration-500"
                href="https://www.instagram.com/sherpatenzin55"
                target="_blank"
                rel="noreferrer"
            >
                <img src={require('../assets/instagram.png')} alt='instagram-link' />
            </a>
        </div>
    )
}

export default SocialMediaIcons;