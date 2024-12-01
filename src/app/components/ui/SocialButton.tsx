import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { IconType } from 'react-icons';

interface SocialButtonProps {
    icon: IconType;
    text: string;
    color: string;
    onClick: () => void;
}

export const SocialButton = ({ icon: Icon, text, color, onClick }: SocialButtonProps) => {
    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClick}
            className={`w-full flex items-center justify-center p-3 rounded-lg 
        transition-all duration-300 ${color} 
        hover:opacity-90 group`}
        >
            <Icon className="mr-3 w-6 h-6" />
            {text}
            <ChevronRight className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
        </motion.button>
    );
};