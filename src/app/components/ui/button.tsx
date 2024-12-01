// import { ButtonHTMLAttributes, forwardRef } from 'react';
// // import { cn } from '@/lib/utils';
// interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
//     variant?: 'primary' | 'secondary' | 'danger';
//     size?: 'sm' | 'md' | 'lg';
//     isLoading?: boolean;
// }

// export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
//     ({ className, variant = 'primary', size = 'md', isLoading, children, ...props }, ref) => {
//         const baseStyles = 'rounded-lg font-semibold transition-all duration-200 flex items-center justify-center';

//         const variants = {
//             primary: 'bg-gradient-to-r from-blue-600 to-emerald-600 text-white hover:opacity-90',
//             secondary: 'bg-white/10 text-white hover:bg-white/20',
//             danger: 'bg-red-500 text-white hover:bg-red-600'
//         };

//         const sizes = {
//             sm: 'px-3 py-1.5 text-sm',
//             md: 'px-4 py-2',
//             lg: 'px-6 py-3 text-lg'
//         };

//         function cn(baseStyles: string, arg1: string, arg2: string, arg3: string | boolean | undefined, className: string | undefined): string | undefined {
//             throw new Error('Function not implemented.');
//         }

//         return (
//             <button
//                 ref={ref}
//                 className={cn(
//                     baseStyles,
//                     variants[variant],
//                     sizes[size],
//                     isLoading && 'opacity-50 cursor-not-allowed',
//                     className
//                 )}
//                 disabled={isLoading}
//                 {...props}
//             >
//                 {isLoading ? (
//                     <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
//                 ) : null}
//                 {children}
//             </button>
//         );
//     }
// );