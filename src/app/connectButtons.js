import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Button = ({ href, icon, label }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center px-4 py-2 border border-white hover:border-secondary rounded-lg bg-secondary hover:bg-primary font-semibold shadow-lg transition-colors duration-300 text-white hover:text-black"
    >
        <span className="mr-2">{icon}</span>
        {label}
    </a>
);

export default function ConnectButtons(){
    return (
        <div className="flex justify-center md:justify-start gap-4 mt-16">
            <Button
                href="https://github.com/ninogal"
                icon={<FaGithub className="text-xl"/>}
                label="GitHub"
            />
            <Button
                href="https://linkedin.com/in/antonino-galati"
                icon={<FaLinkedin className="text-xl"/>}
                label="LinkedIn"
            />
        </div>
    )
}